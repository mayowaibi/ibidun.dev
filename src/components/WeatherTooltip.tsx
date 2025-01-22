import React, { useEffect, useState } from "react";

interface Weather {
	current: {
		temp_c: number;
		condition: {
			icon: string;
			text: string;
		};
	};
}

const WeatherTooltip = () => {
	const [weather, setWeather] = useState<Weather | null>(null);

	useEffect(() => {
		const api = {
			url: process.env.NEXT_PUBLIC_WEATHER_API_URL,
			key: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
		};

		fetch(`${api.url}current.json?key=${api.key}&q=Toronto`)
			.then((res) => res.json())
			.then((result) => {
				setWeather(result);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="pointer-events-none absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2 text-base text-white opacity-0 group-hover:opacity-100 transition-opacity">
			{weather ? (
				<div className="flex flex-row items-center gap-2">
					<img
						src={"https:" + weather.current.condition.icon}
						alt="Weather Icon"
					/>
					<div className="flex flex-col">
						<p>
							{Math.round(weather.current.temp_c)}
							{"°C"}
						</p>
						<p>{weather.current.condition.text}</p>
					</div>
				</div>
			) : (
				<p>Loading weather...</p>
			)}
		</div>
	);
};

export default WeatherTooltip;
