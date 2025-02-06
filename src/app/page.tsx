"use client";
import { useEffect, useRef, useState } from "react";
import GmailIcon from "@/assets/icons/gmail.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import elevatorMusic from "@/assets/music/elevator-music.mp3";
import WeatherTooltip from "@/components/WeatherTooltip";
import TimeTooltip from "@/components/TimeTooltip";
import dynamic from "next/dynamic";
const ThreejsScene = dynamic(() => import("../components/ThreejsScene"), {
	ssr: false,
});

export default function Home() {
	// Hover effect for hero section
	const heroContainer = useRef<HTMLDivElement>(null);
	const applyOverlayMask = (e: PointerEvent) => {
		const documentTarget = e.currentTarget as Element;
		if (!heroContainer.current) return;
		const x = e.pageX - heroContainer.current.offsetLeft;
		const y = e.pageY - heroContainer.current.offsetTop;

		documentTarget.setAttribute(
			"style",
			`--x: ${x}px; --y: ${y}px; --opacity: 0.1`
		);
	};

	useEffect(() => {
		document.body.addEventListener("pointermove", (e) => {
			applyOverlayMask(e);
		});
	}, []);

	// Audio controller
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);

	const togglePlay = () => {
		if (!audioRef.current) return;
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};
	return (
		<>
			{/* HOVER UNDERLAY */}
			<div
				className="absolute inset-0 -z-30 opacity-10 bg-cyan-200"
				style={{
					opacity: "var(--opacity, 0)",
					mask: `radial-gradient(30rem 30rem at var(--x) var(--y), #000 1%, transparent 50%)`,
					WebkitMask: `radial-gradient(30rem 30rem at var(--x) var(--y), #000 1%, transparent 50%)`,
				}}></div>

			{/* HERO SECTION */}
			<div className="relative z-0" ref={heroContainer}>
				{/* MUSIC AND LOCATION */}
				<div className="m-3 flex flex-row justify-between items-center">
					<div className="border border-white/15 px-4 py-1.5 inline-flex items-center gap-4 rounded-xl">
						<audio ref={audioRef} src={elevatorMusic} loop />
						<button
							onClick={togglePlay}
							className="text-sm md:text-lg font-medium">
							{isPlaying ? "⏸" : "▶"} elevator-music.mp3
						</button>
					</div>
					<div className="relative group">
						<div className="text-sm md:text-lg border border-white/15 px-4 py-1.5 inline-flex items-center rounded-xl cursor-default">
							📍 Toronto, Canada
						</div>
						{/* <WeatherTooltip /> */}
						<TimeTooltip />
					</div>
				</div>

				{/* 3D Head */}
				<ThreejsScene />
				<div className="py-52 md:py-64 lg:py-72">
					<div className="container">
						{/* STATUS */}
						<div className="animate-appear flex flex-col items-center">
							<div className="cursor-default bg-black border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-xl">
								<div className="bg-red-500 size-2.5 rounded-full relative">
									<div className="bg-red-500 absolute inset-0 rounded-full animate-ping-large"></div>
								</div>
								<div className="sm:text-sm md:text-base">Busy with school</div>
							</div>
						</div>

						{/* NAME AND DESCRIPTION */}
						<div className="max-w-lg mx-auto">
							<div className="group animate-appear">
								<h1 className="cursor-default font-serif text-4xl md:text-6xl text-center mt-8 tracking-tighter relative overflow-hidden">
									<span className="block transition-transform duration-200 transform group-hover:-translate-y-full">
										ISAAC IBIDUN
									</span>
									<span className="absolute inset-0 md:flex items-center justify-center transition-transform duration-200 transform translate-y-full group-hover:translate-y-0">
										MAYOWA IBIDUN
									</span>
								</h1>
							</div>
							<p className="cursor-default animate-appear mt-7 text-center text-white/85 md:text-xl">
								Computer science undergraduate and{" "}
								<span className="text-yellow-200 hover:text-yellow-400 hover:cursor-default">
									software developer
								</span>{" "}
								with a passion for solving real-world problems using technology.
							</p>
						</div>

						{/* BUTTONS FOR SOCIALS */}
						<div className="flex flex-row justify-center gap-8 mt-8">
							{/* Gmail */}
							<div className="relative group">
								<a href="mailto:ibidun.isaac@gmail.com" aria-label="Gmail">
									<button
										className="animate-appear border border-white/15 px-3 h-14 md:px-4 md:h-16 rounded-xl hover:bg-white/10"
										aria-label="Gmail Button">
										<GmailIcon className="w-9 h-9 md:w-10 md:h-10" />
									</button>
								</a>
								<div className="pointer-events-none absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2 px-2 py-1 text-sm bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
									Gmail
								</div>
							</div>

							{/* LinkedIn */}
							<div className="relative group">
								<a
									href="https://www.linkedin.com/in/isaac-ibidun/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn">
									<button
										className="animate-appear border border-white/15 px-3 h-14 md:px-4 md:h-16 rounded-xl hover:bg-white/10"
										aria-label="LinkedIn Button">
										<LinkedinIcon className="w-9 h-9 md:w-10 md:h-10" />
									</button>
								</a>
								<div className="pointer-events-none absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2 px-2 py-1 text-sm bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
									LinkedIn
								</div>
							</div>

							{/* GitHub */}
							<div className="relative group">
								<a
									href="https://github.com/mayowaibi"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub">
									<button
										className="animate-appear border border-white/15 px-3 h-14 md:px-4 md:h-16 rounded-xl hover:bg-white/10"
										aria-label="GitHub Button">
										<GitHubIcon className="w-9 h-9 md:w-10 md:h-10" />
									</button>
								</a>
								<div className="pointer-events-none absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2 px-2 py-1 text-sm bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
									GitHub
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
