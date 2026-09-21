"use client";

import { useEffect, useRef } from "react";

const BAYER4 = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];

export interface DitherFrameProps {
  src: string;
  alt: string;
  /** Print ink color. */
  ink?: string;
  /** Paper color. */
  paper?: string;
  cell?: number;
  dot?: number;
  className?: string;
}

/**
 * Ordered Bayer dither: redraws a photo as two-tone print dots on canvas,
 * with a pointer-reactive disturbance field. Under `prefers-reduced-motion`
 * it paints one static frame and never loops. Same-origin sources only
 * (canvas pixel reads taint on cross-origin art).
 */
export function DitherFrame({
  src,
  alt,
  ink = "#1e40af",
  paper = "#faf6ef",
  cell = 3,
  dot = 1.7,
  className,
}: DitherFrameProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let running = true;
    let width = 0;
    let height = 0;
    let pointerX = -9999;
    let pointerY = -9999;
    let targetX = -9999;
    let targetY = -9999;
    let hasPointer = false;
    let pixels: Uint8ClampedArray | null = null;

    const shade = document.createElement("canvas");
    const shadeCtx = shade.getContext("2d", { willReadFrequently: true });
    if (!shadeCtx) return;

    const img = new window.Image();

    const paintShade = () => {
      if (!img.complete || !img.naturalWidth || width < 1 || height < 1) {
        pixels = null;
        return;
      }
      // Cover: fill the frame, center-crop the excess.
      const scale = Math.max(width / img.naturalWidth, height / img.naturalHeight);
      const drawW = Math.max(1, Math.round(img.naturalWidth * scale));
      const drawH = Math.max(1, Math.round(img.naturalHeight * scale));
      const dx = Math.floor((width - drawW) / 2);
      const dy = Math.floor((height - drawH) / 2);

      shade.width = width;
      shade.height = height;
      shadeCtx.setTransform(1, 0, 0, 1, 0, 0);
      shadeCtx.fillStyle = "#ffffff";
      shadeCtx.fillRect(0, 0, width, height);
      shadeCtx.imageSmoothingEnabled = true;
      shadeCtx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, dx, dy, drawW, drawH);
      try {
        pixels = shadeCtx.getImageData(0, 0, width, height).data;
      } catch {
        pixels = null;
      }
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      paintShade();
    };

    const paint = () => {
      if (!pixels) return;
      pointerX += (targetX - pointerX) * 0.18;
      pointerY += (targetY - pointerY) * 0.18;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = paper;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = ink;

      const data = pixels;
      const disturbR = Math.min(width, height) * 0.3;
      const disturbR2 = disturbR * disturbR;
      const amp = disturbR * 0.24;
      const half = dot * 0.5;

      for (let y = cell * 0.5; y < height; y += cell) {
        for (let x = cell * 0.5; x < width; x += cell) {
          let sx = x;
          let sy = y;

          if (hasPointer && !reduced) {
            const pdx = x - pointerX;
            const pdy = y - pointerY;
            const d2 = pdx * pdx + pdy * pdy;
            if (d2 < disturbR2 && d2 > 0.001) {
              const t = 1 - d2 / disturbR2;
              const inv = ((amp * t * t) / Math.sqrt(d2)) * 0.4;
              sx = x + pdx * inv;
              sy = y + pdy * inv;
            }
          }

          const ix = Math.max(0, Math.min(width - 1, Math.round(sx)));
          const iy = Math.max(0, Math.min(height - 1, Math.round(sy)));
          const idx = (iy * width + ix) * 4;
          const r = data[idx] ?? 255;
          const g = data[idx + 1] ?? 255;
          const b = data[idx + 2] ?? 255;
          if ((data[idx + 3] ?? 255) < 12) continue;

          const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
          const density = Math.min(1, (1 - lum) * 1.25);
          if (density < 0.04) continue;

          const bx = Math.floor(x / cell) & 3;
          const by = Math.floor(y / cell) & 3;
          const threshold = ((BAYER4[by * 4 + bx] ?? 0) + 0.5) / 16;
          if (density < threshold * 0.9) continue;

          ctx.fillRect(x - half, y - half, dot, dot);
        }
      }
    };

    const render = () => {
      if (!running) return;
      paint();
      if (!reduced) raf = requestAnimationFrame(render);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = event.clientX - rect.left;
      targetY = event.clientY - rect.top;
      hasPointer = true;
    };
    const onLeave = () => {
      hasPointer = false;
      targetX = -9999;
      targetY = -9999;
    };

    img.onload = () => {
      resize();
      render();
    };
    img.src = src;

    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) paint();
    });
    ro.observe(wrap);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [src, ink, paper, cell, dot]);

  return (
    <div ref={wrapRef} role="img" aria-label={alt} className={`relative h-full min-h-[280px] w-full overflow-hidden bg-offwhite sm:min-h-[360px] ${className ?? ""}`}>
      {/* Static fallback: duotone-tinted photo behind the canvas, so the
          frame is never an empty block if canvas paint fails. */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="duotone-fallback absolute inset-0 h-full w-full object-cover"
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
