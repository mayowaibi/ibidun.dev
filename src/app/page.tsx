"use client";
import { Fragment, useEffect, useRef, useState } from "react";
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

const navGroups = [
  [
    { label: "projects", href: "#projects" },
    { label: "tools", href: "#tools" },
  ],
  [
    { label: "interests", href: "#interests" },
    { label: "contact", href: "#contact" },
  ],
];

const pageSections = [
  {
    id: "projects",
    title: "Projects",
    description:
      "Selected builds where thoughtful software, polished interfaces, and practical problem solving meet.",
  },
  {
    id: "tools",
    title: "Tools",
    description:
      "A working bench of frameworks, systems, and experiments I reach for when turning ideas into reliable products.",
  },
  {
    id: "interests",
    title: "Interests",
    description:
      "The creative edges that keep the work alive: music, design, interaction, research, and small details with outsized impact.",
  },
  {
    id: "contact",
    title: "Contact",
    description:
      "For collaborations, questions, or a good idea that needs a builder, email is the cleanest place to start.",
  },
];

const projectGroups = [
  {
    label: "Web",
    icon: "◎",
    projects: [
      {
        name: "Nocturne",
        description:
          "A music-led portfolio concept with ambient playback and soft interaction states.",
        visual: "audio",
      },
      {
        name: "Driftboard",
        description:
          "A collaborative whiteboard prototype with persistent spatial notes and rooms.",
        visual: "board",
      },
    ],
  },
  {
    label: "Extensions",
    icon: "⌘",
    projects: [
      {
        name: "TabTide",
        description:
          "A calm browser extension for grouping tabs and quieting daily workspace clutter.",
        visual: "tabs",
      },
      {
        name: "Snippetly",
        description:
          "A compact snippet library for saving, searching, and sharing small code blocks.",
        visual: "code",
      },
    ],
  },
  {
    label: "School",
    icon: "⌂",
    projects: [
      {
        name: "Schedulr",
        description:
          "A course-planning tool that turns constraints into clear semester options.",
        visual: "grid",
      },
      {
        name: "RaytraceJS",
        description:
          "A browser renderer experiment with simple materials, lighting, and camera controls.",
        visual: "sphere",
      },
    ],
  },
];

export default function Home() {
  const pageContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateFlashlight = (event: PointerEvent) => {
      const page = pageContainer.current;
      if (!page) return;

      page.style.setProperty("--x", `${event.clientX}px`);
      page.style.setProperty("--y", `${event.clientY}px`);
      page.style.setProperty("--opacity", "0.1");
    };

    window.addEventListener("pointermove", updateFlashlight, { passive: true });

    return () => {
      window.removeEventListener("pointermove", updateFlashlight);
    };
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
    <div ref={pageContainer} className="relative min-h-screen">
      {/* HOVER UNDERLAY */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-cyan-100"
        style={{
          opacity: "var(--opacity, 0)",
          mask: `radial-gradient(30rem 30rem at var(--x) var(--y), #000 1%, transparent 50%)`,
          WebkitMask: `radial-gradient(30rem 30rem at var(--x) var(--y), #000 1%, transparent 50%)`,
        }}
      ></div>

      {/* HERO SECTION */}
      <div className="relative min-h-screen flex flex-col justify-center items-center">
        {/* HEADER */}
        <header className="fixed top-0 left-0 right-0 z-[100] m-3 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start gap-3">
          <div
            className="group relative min-w-0 justify-self-start pt-0.5"
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
            <div className="inline-flex items-center rounded-xl border border-white/15 bg-gray-950/70 px-0 py-1.5 text-sm font-medium text-white backdrop-blur-sm md:px-1 md:text-lg">
              <button
                onClick={togglePlay}
                className="flex shrink-0 items-center justify-center rounded-lg px-2.5 py-1.5 text-sm hover:bg-white/10 md:px-3 md:text-lg"
                aria-label={isPlaying ? "Pause music" : "Play music"}
              >
                {isPlaying ? "⏸" : "▶"}
              </button>
              <button
                type="button"
                onClick={() => setIsMusicMenuOpen((isOpen) => !isOpen)}
                className="flex min-w-0 max-w-[8.5rem] items-center gap-2 rounded-lg py-1.5 text-left text-sm text-white/80 transition hover:bg-white/10 hover:text-white md:max-w-none md:px-1 md:text-lg"
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

          <nav
            className="order-3 col-span-3 flex w-full justify-center pt-0.5 md:order-none md:col-span-1 md:w-auto"
            aria-label="Page sections"
          >
            <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-gray-950/70 px-2.5 py-1.5 text-sm font-medium text-white backdrop-blur-sm md:gap-5 md:px-4 md:text-lg">
              {navGroups.map((group, groupIndex) => (
                <Fragment key={groupIndex}>
                  <div className="flex items-center gap-1.5 md:gap-2">
                    {group.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="rounded-lg px-2.5 py-1.5 text-white/80 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 md:px-3"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                  {groupIndex === 0 && (
                    <a
                      href="#"
                      aria-label="Back to top"
                      className="flex h-[2.125rem] items-center justify-center rounded-lg px-2.5 text-white/80 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 md:h-9 md:px-3"
                    >
                      <span
                        className="text-2xl leading-none md:text-3xl"
                        aria-hidden="true"
                      >
                        👨🏾‍💻
                      </span>
                    </a>
                  )}
                </Fragment>
              ))}
            </div>
          </nav>

          <div className="relative group justify-self-end pt-0.5">
            <div className="inline-flex cursor-default items-center rounded-xl border border-white/15 bg-gray-950/70 px-0 py-1.5 text-sm font-medium text-white backdrop-blur-sm md:px-1 md:text-lg">
              <span className="rounded-lg px-2.5 py-1.5 md:px-3">
                📍 Toronto, Canada
              </span>
            </div>
            {/* <WeatherTooltip /> */}
            <TimeTooltip />
          </div>
        </header>

        <div className="w-full max-w-5xl px-3 translate-y-8 sm:translate-y-10 md:translate-y-12">
          <div className="animate-appear relative flex flex-col items-center">
            {/* 3D MODEL */}
            <div className="pointer-events-none absolute bottom-full left-1/2 -z-10 h-[52rem] w-[min(340vw,96rem)] -translate-x-1/2 sm:h-[58rem] md:h-[55rem] md:w-[100rem] lg:h-[70rem] lg:w-[118rem] mb-[-10px]">
              <ThreejsScene />
            </div>
            <div className="cursor-default rounded-xl border border-white/15 bg-gray-950/70 px-5 py-2 inline-flex items-center gap-4 backdrop-blur-sm md:px-6 md:py-2.5">
              <div className="bg-red-500 size-3 rounded-full relative">
                <div className="bg-red-500 absolute inset-0 rounded-full animate-ping-large"></div>
              </div>
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
                Working on projects
              </div>
            </div>
          </div>

          {/* NAME AND DESCRIPTION */}
          <div className="max-w-2xl mx-auto">
            <div className="group animate-appear">
              <h1 className="cursor-default font-serif text-5xl text-center mt-9 tracking-normal relative overflow-hidden sm:text-6xl md:text-7xl">
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
            <p className="cursor-default animate-appear mt-8 text-center text-xl text-white sm:text-2xl md:text-3xl">
              <span className="text-yellow-200 hover:cursor-default">
                Software developer
              </span>{" "}
              driven by creativity and impact.
            </p>
          </div>

          {/* BUTTONS FOR SOCIALS */}
          <div className="flex flex-row justify-center gap-9 mt-9">
            {/* Gmail */}
            <div className="relative group">
              <a href="mailto:contact@ibidun.dev" aria-label="Gmail">
                <button
                  className="animate-appear border border-white/15 bg-gray-950/70 backdrop-blur-sm px-3 h-16 md:px-5 md:h-20 inline-flex items-center rounded-xl hover:bg-white/10"
                  aria-label="Gmail Button"
                >
                  <GmailIcon className="w-10 h-10 md:w-12 md:h-12" />
                </button>
              </a>
              <div className="pointer-events-none absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2 rounded-xl border border-white/15 bg-gray-950/70 px-3 py-1.5 text-lg text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
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
								<div className="pointer-events-none absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2 rounded-xl border border-white/15 bg-gray-950/70 px-2.5 py-1 text-base text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
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
                  className="animate-appear border border-white/15 bg-gray-950/70 backdrop-blur-sm px-3 h-16 md:px-5 md:h-20 inline-flex items-center rounded-xl hover:bg-white/10"
                  aria-label="GitHub Button"
                >
                  <GitHubIcon className="w-10 h-10 md:w-12 md:h-12" />
                </button>
              </a>
              <div className="pointer-events-none absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2 rounded-xl border border-white/15 bg-gray-950/70 px-3 py-1.5 text-lg text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                GitHub
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-24 pt-8 md:px-6 md:pb-32">
        {pageSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-28 border-t border-white/10 pt-10"
          >
            {section.id === "projects" ? (
              <div>
                <div className="grid items-end gap-5 md:grid-cols-[auto_1fr]">
                  <h2 className="font-serif text-5xl tracking-normal text-white md:text-7xl">
                    {section.title}
                  </h2>
                  <div className="mb-3 hidden h-px bg-white/10 md:block" />
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                  {projectGroups.map((group) => (
                    <div key={group.label} className="min-w-0">
                      <div className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-white/55 md:text-sm">
                        <span className="text-lg tracking-normal text-blue-400">
                          {group.icon}
                        </span>
                        {group.label}
                      </div>

                      <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-1">
                        {group.projects.map((project) => (
                          <article
                            key={project.name}
                            className="grid h-[23rem] grid-rows-[auto_1fr] overflow-hidden rounded-xl border border-white/10 bg-gray-950/45 transition hover:border-blue-300/35 hover:bg-gray-950/65"
                          >
                            <ProjectShowcase visual={project.visual} />
                            <div className="border-t border-white/10 p-5">
                              <div className="flex items-start justify-between gap-4">
                                <h3 className="text-xl font-semibold text-white">
                                  {project.name}
                                </h3>
                                <span
                                  className="text-xl leading-none text-white/45"
                                  aria-hidden="true"
                                >
                                  ↗
                                </span>
                              </div>
                              <p className="mt-3 max-w-sm text-base leading-7 text-white/60">
                                {project.description}
                              </p>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-start">
                <h2 className="font-serif text-3xl tracking-normal text-white md:text-5xl">
                  {section.title}
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
                  {section.description}
                </p>
              </div>
            )}
          </section>
        ))}
      </main>
    </div>
  );
}

function ProjectShowcase({ visual }: { visual: string }) {
  if (visual === "audio") {
    return (
      <div className="flex h-48 items-end bg-gradient-to-br from-blue-900 via-blue-800 to-slate-950 p-5">
        <div className="flex w-full items-center gap-3 rounded-xl bg-gray-950/70 p-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-400 text-base text-gray-950">
            ▶
          </div>
          <div className="min-w-0 flex-1 space-y-1.5">
            <div className="h-2 rounded-full bg-white/35" />
            <div className="h-2 w-2/3 rounded-full bg-white/20" />
          </div>
          <span className="text-sm font-medium text-white/70">3:42</span>
        </div>
      </div>
    );
  }

  if (visual === "tabs") {
    return (
      <div className="h-48 bg-slate-900 p-5">
        <div className="flex gap-2 border-b border-blue-300/25">
          {[0, 1, 2, 3].map((item) => (
            <div
              key={item}
              className={`h-8 flex-1 rounded-t-lg ${
                item < 2 ? "bg-blue-400/85" : "bg-white/20"
              }`}
            />
          ))}
        </div>
        <div className="mt-5 space-y-2.5">
          <div className="h-2.5 w-4/5 rounded-full bg-white/25" />
          <div className="h-2.5 w-1/2 rounded-full bg-white/20" />
          <div className="h-2.5 w-2/3 rounded-full bg-white/25" />
        </div>
      </div>
    );
  }

  if (visual === "grid") {
    return (
      <div className="grid h-48 grid-cols-5 gap-2 bg-slate-900 p-5">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className={`rounded-md ${
              [1, 2, 4, 6, 8, 9, 11, 14, 17].includes(index)
                ? "bg-blue-400/80"
                : "bg-white/7"
            }`}
          />
        ))}
      </div>
    );
  }

  if (visual === "board") {
    return (
      <div className="relative h-48 overflow-hidden bg-slate-900 p-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(125,211,252,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="relative h-16 w-28 rounded-xl border-2 border-blue-400/70 bg-blue-400/10" />
        <div className="relative ml-auto mt-1 size-12 rounded-full border-2 border-cyan-300/60 bg-cyan-300/10" />
        <div className="relative mx-auto mt-10 h-10 w-40 rounded-xl border-2 border-white/35 bg-white/5" />
      </div>
    );
  }

  if (visual === "code") {
    return (
      <div className="h-48 bg-gray-950 p-5 font-mono text-sm leading-6 text-white/70">
        <p>
          <span className="text-blue-400">const</span>{" "}
          <span className="text-cyan-300">save</span> = () =&gt; {"{"}
        </p>
        <p className="pl-6">
          return <span className="text-sky-300">"hello"</span>;
        </p>
        <p>{"}"}</p>
        <div className="mt-4 inline-flex rounded-md bg-blue-500/25 px-2.5 py-1 text-xs text-blue-200">
          ⌘ + S saved
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.24),transparent_44%)]" />
      <div className="relative size-24 rounded-full bg-gradient-to-br from-sky-300 via-blue-500 to-blue-900 shadow-[0_0_4rem_rgba(59,130,246,0.35)]" />
      <span className="absolute bottom-4 right-5 font-mono text-xs text-blue-300">
        1024 spp · 4.2s
      </span>
    </div>
  );
}
