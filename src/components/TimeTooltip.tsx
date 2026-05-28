"use client";
import React, { useEffect, useState } from "react";

const TimeTooltip = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		setInterval(() => {
			setTime(new Date());
		}, 1000);
	}, []);

	return (
		<div className="pointer-events-none absolute bottom-0 left-1/2 flex w-64 -translate-x-1/2 translate-y-full transform flex-col items-center rounded-xl border border-white/15 bg-gray-950/70 py-1 text-sm text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 md:text-base">
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
		</div>
	);
};

export default TimeTooltip;
