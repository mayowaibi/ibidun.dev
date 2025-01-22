import React, { useEffect, useState } from "react";

const TimeTooltip = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		setInterval(() => {
			setTime(new Date());
		}, 1000);
	}, []);

	return (
		<div className="pointer-events-none flex flex-col items-center absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2 px-2 py-1 text-sm md:text-base text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
			<p>{time.toLocaleTimeString()}</p>
			<p>{time.toLocaleDateString()}</p>
		</div>
	);
};

export default TimeTooltip;
