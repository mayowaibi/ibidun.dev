"use client";
import { useEffect, useRef, useState } from "react";
import GmailIcon from "@/assets/icons/gmail.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import jazzMusic from "@/assets/music/jazz-lounge.mp3";
import classicalMusic from "@/assets/music/nocturne-op-9.mp3";
import lofiMusic from "@/assets/music/without-return.mp3";
import TimeTooltip from "@/components/TimeTooltip";
import ThreejsScene from "@/components/ThreejsScene";

const musicTracks = [
  {
    id: "jazz",
    label: "Jazz",
    fileName: "jazz-lounge.mp3",
    src: jazzMusic,
  },
  {
    id: "lofi",
    label: "Lofi",
    fileName: "without-return.mp3",
    src: lofiMusic,
  },
  {
    id: "classical",
    label: "Classical",
    fileName: "nocturne-op-9.mp3",
    src: classicalMusic,
  },
];

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
      `--x: ${x}px; --y: ${y}px; --opacity: 0.1`,
    );
  };

  useEffect(() => {
    document.body.addEventListener("pointermove", (e) => {
      applyOverlayMask(e);
    });
  }, []);

  // Audio controller
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTrackId, setSelectedTrackId] = useState(musicTracks[0].id);
  const [isMusicMenuOpen, setIsMusicMenuOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const isPlayingRef = useRef(isPlaying);
  const selectedTrack =
    musicTracks.find((track) => track.id === selectedTrackId) ?? musicTracks[0];

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.load();

    if (isPlayingRef.current) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [selectedTrackId]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  };

  const selectTrack = (trackId: string) => {
    setSelectedTrackId(trackId);
    setIsMusicMenuOpen(false);
  };

  return (
    <>
      {/* HOVER UNDERLAY */}
      <div
        className="absolute inset-0 -z-30 bg-cyan-100"
        style={{
          opacity: "var(--opacity, 0)",
          mask: `radial-gradient(30rem 30rem at var(--x) var(--y), #000 1%, transparent 50%)`,
          WebkitMask: `radial-gradient(30rem 30rem at var(--x) var(--y), #000 1%, transparent 50%)`,
        }}
      ></div>

      {/* HERO SECTION */}
      <div
        className="relative z-0 h-screen flex flex-col justify-center items-center"
        ref={heroContainer}
      >
        {/* MUSIC AND LOCATION */}
        <div className="absolute top-0 left-0 right-0 m-3 flex flex-row flex-wrap justify-between items-start gap-3 z-10">
          <div
            className="group relative max-w-[calc(100vw-1.5rem)] min-w-0"
            onMouseEnter={() => setIsMusicMenuOpen(true)}
            onMouseLeave={() => setIsMusicMenuOpen(false)}
            onFocus={() => setIsMusicMenuOpen(true)}
            onBlur={(event) => {
              if (
                !(
                  event.relatedTarget instanceof Node &&
                  event.currentTarget.contains(event.relatedTarget)
                )
              ) {
                setIsMusicMenuOpen(false);
              }
            }}
          >
            <audio ref={audioRef} src={selectedTrack.src} loop />
            <div className="border border-white/15 px-2.5 py-1.5 md:px-4 inline-flex items-center gap-2 rounded-xl bg-gray-950/70 backdrop-blur-sm">
              <button
                onClick={togglePlay}
                className="flex size-8 shrink-0 items-center justify-center rounded-lg text-base font-medium hover:bg-white/10 md:size-9 md:text-lg"
                aria-label={isPlaying ? "Pause music" : "Play music"}
              >
                {isPlaying ? "⏸" : "▶"}
              </button>
              <button
                type="button"
                onClick={() => setIsMusicMenuOpen((isOpen) => !isOpen)}
                className="flex min-w-0 max-w-[8.5rem] items-center gap-2 text-left text-sm font-medium md:max-w-none md:text-lg"
                aria-haspopup="listbox"
                aria-expanded={isMusicMenuOpen}
              >
                <span className="truncate">{selectedTrack.fileName}</span>
                <span className="text-xs text-white/70">▾</span>
              </button>
            </div>
            <div
              className={`absolute left-0 top-full z-20 w-full min-w-48 overflow-hidden rounded-xl border border-white/15 bg-gray-950/95 p-1 shadow-xl backdrop-blur-sm transition-opacity ${
                isMusicMenuOpen
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
              role="listbox"
              aria-label="Music selection"
            >
              {musicTracks.map((track) => (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => selectTrack(track.id)}
                  className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm text-white hover:bg-white/10 md:text-base"
                  role="option"
                  aria-selected={track.id === selectedTrack.id}
                >
                  <span className="min-w-0">
                    <span className="block font-medium">{track.label}</span>
                    <span className="block truncate text-xs text-white/60">
                      {track.fileName}
                    </span>
                  </span>
                  {track.id === selectedTrack.id && (
                    <span className="text-xs text-yellow-200">Selected</span>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="text-sm md:text-lg border border-white/15 px-2.5 py-2.5 md:px-4 inline-flex items-center rounded-xl bg-gray-950/70 backdrop-blur-sm cursor-default">
              📍 Toronto, Canada
            </div>
            {/* <WeatherTooltip /> */}
            <TimeTooltip />
          </div>
        </div>

        <div className="w-full max-w-4xl px-3">
          <div className="animate-appear relative flex flex-col items-center">
            {/* 3D MODEL */}
            <div className="pointer-events-none absolute bottom-full left-1/2 -z-10 h-[48rem] w-[min(320vw,90rem)] -translate-x-1/2 sm:h-[54rem] md:h-[50rem] md:w-[92rem] lg:h-[64rem] lg:w-[108rem] mb-[-10px]">
              <ThreejsScene />
            </div>
            <div className="cursor-default bg-black border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-xl">
              <div className="bg-red-500 size-2.5 rounded-full relative">
                <div className="bg-red-500 absolute inset-0 rounded-full animate-ping-large"></div>
              </div>
              <div className="sm:text-sm md:text-base lg:text-lg">
                Working on projects
              </div>
            </div>
          </div>

          {/* NAME AND DESCRIPTION */}
          <div className="max-w-xl mx-auto">
            <div className="group animate-appear">
              <h1 className="cursor-default font-serif md:text-6xl sm:text-4xl text-center mt-8 tracking-tighter relative overflow-hidden">
                <div className="block">
                  {"ISAAC IBIDUN".split("").map((char, i) => (
                    <span
                      key={i}
                      className="inline-block transition-transform duration-200 transform group-hover:-translate-y-full"
                      style={{ transitionDelay: `${i * 12}ms` }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </div>
                <div className="absolute inset-0 md:flex items-center justify-center">
                  {"MAYOWA IBIDUN".split("").map((char, i) => (
                    <span
                      key={i}
                      className="inline-block transition-transform duration-200 transform translate-y-full group-hover:translate-y-0"
                      style={{ transitionDelay: `${i * 12}ms` }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </div>
              </h1>
            </div>
            <p className="cursor-default animate-appear mt-7 text-center text-white sm:text-xl md:text-2xl">
              <span className="text-yellow-200 hover:cursor-default">
                Software developer
              </span>{" "}
              driven by creativity and impact.
            </p>
          </div>

          {/* BUTTONS FOR SOCIALS */}
          <div className="flex flex-row justify-center gap-8 mt-8">
            {/* Gmail */}
            <div className="relative group">
              <a href="mailto:contact@ibidun.dev" aria-label="Gmail">
                <button
                  className="animate-appear border border-white/15 bg-gray-950/70 backdrop-blur-sm px-2.5 h-14 md:px-4 md:h-16 inline-flex items-center rounded-xl hover:bg-white/10"
                  aria-label="Gmail Button"
                >
                  <GmailIcon className="w-9 h-9 md:w-10 md:h-10" />
                </button>
              </a>
              <div className="pointer-events-none absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2 px-2 py-1 text-base bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Email
              </div>
            </div>

            {/* LinkedIn */}
            {/* <div className="relative group">
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
								<div className="pointer-events-none absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2 px-2 py-1 text-base bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
									LinkedIn
								</div>
							</div> */}

            {/* GitHub */}
            <div className="relative group">
              <a
                href="https://github.com/mayowaibi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <button
                  className="animate-appear border border-white/15 bg-gray-950/70 backdrop-blur-sm px-2.5 h-14 md:px-4 md:h-16 inline-flex items-center rounded-xl hover:bg-white/10"
                  aria-label="GitHub Button"
                >
                  <GitHubIcon className="w-9 h-9 md:w-10 md:h-10" />
                </button>
              </a>
              <div className="pointer-events-none absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2 px-2 py-1 text-base bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                GitHub
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
