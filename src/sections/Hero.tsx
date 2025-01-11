"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import memojiImage from "@/assets/images/man-behind-computer-emoji.png";
import grainImage from "@/assets/images/grain.jpg";
import GmailIcon from "@/assets/icons/gmail.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import elevatorMusic from "@/assets/music/elevator-music.mp3";

export const HeroSection = () => {
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
			<div
				className="absolute inset-0 -z-30 opacity-10"
				style={{
					backgroundImage: `url(${grainImage.src})`,
				}}></div>

			{/* MUSIC AND LOCATION */}
			<div className="m-3 flex flex-row justify-between items-center">
				<div className="border border-white/15 px-4 py-1.5 inline-flex items-center gap-4 rounded-xl">
					<audio ref={audioRef} src={elevatorMusic} loop />
					<div className="text-md md:text-lg font-medium">
						<button onClick={togglePlay}>
							{isPlaying ? "⏸" : "▶"} elevator-music.mp3
						</button>
					</div>
				</div>
				<div className="border border-white/15 px-4 py-1.5 inline-flex items-center gap-4 rounded-xl">
					<div className="text-md md:text-lg font-medium">
						📍 Toronto, Canada
					</div>
				</div>
			</div>

			{/* HERO SECTION */}
			<div className="py-36 md:py-48 lg:py-48 relative z-0">
				<div className="container">
					{/* CHARACTER EMOJI AND STATUS */}
					<div className="flex flex-col items-center">
						<Image
							src={memojiImage}
							className="size-[100px]"
							alt="Dark-skin man peeking from behind laptop"
						/>
						<div className="bg-black border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-xl">
							<div className="bg-red-500 size-2.5 rounded-full relative">
								<div className="bg-red-500 absolute inset-0 rounded-full animate-ping-large"></div>
							</div>
							<div className="text-md">Busy with my last semester</div>
						</div>
					</div>

					{/* NAME AND DESCRIPTION */}
					<div className="max-w-lg mx-auto">
						<div className="group">
							<h1 className="font-serif text-5xl md:text-6xl text-center mt-8 tracking-tighter relative overflow-hidden">
								<span className="block transition-transform duration-200 transform group-hover:-translate-y-full">
									ISAAC IBIDUN
								</span>
								<span className="absolute inset-0 md:flex items-center justify-center transition-transform duration-200 transform translate-y-full group-hover:translate-y-0">
									MAYOWA IBIDUN
								</span>
							</h1>
						</div>
						<p className="mt-7 text-center text-white/85 md:text-xl">
							Computer science undergraduate and tech enthusiast with a{" "}
							<span className="text-yellow-200 hover:text-yellow-400 hover:cursor-pointer">
								passion
							</span>{" "}
							for innovative development and creating meaningful solutions.
						</p>
					</div>

					{/* BUTTONS FOR SOCIALS */}
					<div className="flex flex-row justify-center gap-8 mt-8">
						<a href="mailto:ibidun.isaac@gmail.com">
							<button className="border border-white/15 px-4 h-16 rounded-xl hover:bg-white/10">
								<GmailIcon className="w-10 h-10" />
							</button>
						</a>
						<a
							href="https://www.linkedin.com/in/isaac-ibidun/"
							target="_blank"
							rel="noopener noreferrer">
							<button className="border border-white/15 px-4 h-16 rounded-xl hover:bg-white/10">
								<LinkedinIcon className="w-10 h-10" />
							</button>
						</a>
						<a
							href="https://github.com/mayowaibi"
							target="_blank"
							rel="noopener noreferrer">
							<button className="border border-white/15 px-4 h-16 rounded-xl hover:bg-white/10">
								<GitHubIcon className="w-10 h-10" />
							</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
