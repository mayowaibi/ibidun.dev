"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import LiquidGlass from "liquid-glass-react";
import { twMerge } from "tailwind-merge";
import { liquidGlassPreset } from "@/config/liquidGlass";

type LiquidGlassFrameProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  padding?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

export default function LiquidGlassFrame({
  children,
  className,
  contentClassName,
  padding = "0",
  style,
  onClick,
}: LiquidGlassFrameProps) {
  const shellRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;

    let animationFrame = 0;

    const updateReach = (event: PointerEvent) => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const rect = shell.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;
        const edgeX = Math.max(0, Math.abs(deltaX) - rect.width / 2);
        const edgeY = Math.max(0, Math.abs(deltaY) - rect.height / 2);
        const edgeDistance = Math.hypot(edgeX, edgeY);
        const activationZone = 360;

        if (edgeDistance > activationZone) {
          shell.style.setProperty("--glass-reach-x", "0px");
          shell.style.setProperty("--glass-reach-y", "0px");
          shell.style.setProperty("--glass-reach-scale", "1");
          return;
        }

        const fade = 1 - edgeDistance / activationZone;
        const reach = liquidGlassPreset.elasticity * 0.11 * fade;
        const x = Math.max(-24, Math.min(24, deltaX * reach));
        const y = Math.max(-24, Math.min(24, deltaY * reach));

        shell.style.setProperty("--glass-reach-x", `${x}px`);
        shell.style.setProperty("--glass-reach-y", `${y}px`);
        shell.style.setProperty("--glass-reach-scale", `${1 + fade * 0.018}`);
      });
    };

    window.addEventListener("pointermove", updateReach);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", updateReach);
    };
  }, []);

  return (
    <span
      ref={shellRef}
      className={twMerge("liquid-glass-shell", className)}
    >
      <LiquidGlass
        {...liquidGlassPreset}
        className="inline-flex"
        padding={padding}
        style={style}
        onClick={onClick}
      >
        <div
          className={twMerge(
            "relative z-10 inline-flex items-center overflow-hidden rounded-[40px] bg-white/5 text-white shadow-[0_16px_48px_rgba(0,0,0,0.28)] ring-1 ring-white/20",
            contentClassName,
          )}
        >
          {children}
        </div>
      </LiquidGlass>
    </span>
  );
}
