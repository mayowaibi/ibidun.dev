"use client";
import React, { useEffect, useState } from "react";
import LiquidGlassFrame from "@/components/LiquidGlassFrame";

const TimeTooltip = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		setInterval(() => {
			setTime(new Date());
		}, 1000);
	}, []);

	return (
		<div className="pointer-events-none absolute bottom-0 left-1/2 w-64 -translate-x-1/2 translate-y-full opacity-0 transition-opacity group-hover:opacity-100">
			<LiquidGlassFrame
				padding="6px 14px"
				contentClassName="w-64 flex-col justify-center text-sm md:text-base"
			>
				<p suppressHydrationWarning>
					{new Intl.DateTimeFormat("en-US", {
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit",
						hour12: true,
						timeZone: "America/Toronto",
					}).format(time)}
				</p>
				<p suppressHydrationWarning>
					{new Intl.DateTimeFormat("en-GB", {
						year: "numeric",
						month: "2-digit",
						day: "2-digit",
						timeZone: "America/Toronto",
					}).format(time)}
				</p>
			</LiquidGlassFrame>
		</div>
	);
};

export default TimeTooltip;
