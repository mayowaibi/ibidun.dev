"use client";

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
  return (
    <span className={twMerge("liquid-glass-shell inline-grid", className)}>
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
