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
		<div className="pointer-events-none w-64 flex flex-col items-center absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2 py-1 text-sm md:text-base text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
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
