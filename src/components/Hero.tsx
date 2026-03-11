"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import BentoTile from "./BentoGrid";
import AboutModal from "./AboutModal";
import { useTheme } from "./ThemeContext";
import {
    FaGithub,
    FaLinkedin,
    FaDownload,
    FaInfoCircle,
    FaHtml5,
    FaCss3,
    FaReact,
    FaSun,
    FaMoon,
} from "react-icons/fa";
import {
    SiTensorflow,
    SiNextdotjs,
    SiTailwindcss,
    SiKeras,
    SiScipy,
} from "react-icons/si";

export default function Hero() {
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const aboutButtonRef = useRef<HTMLButtonElement>(null);
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <section id="home" className="w-full max-w-7xl mx-auto p-4 pt-4 md:min-h-screen flex flex-col justify-center">
                {/*
          Grid Layout:
          Mobile:  1 column  (grid-cols-1)
          Tablet:  4 columns (md:grid-cols-4)
          Desktop: 8 columns (lg:grid-cols-8)
        */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 lg:grid-rows-6 lg:max-h-[600px] gap-3">

                    {/* 2. Tech icons — Python + TensorFlow */}
                    {/*<BentoTile className="lg:col-span-2 lg:row-span-1 md:col-span-2 bg-black/80">
                        <div className="flex flex-row items-center justify-center h-full space-x-14">
                            <FaPython className="text-5xl text-blue-500 grayscale group-hover:grayscale-0 transition-all duration-300" />
                            <SiTensorflow className="text-5xl text-yellow-500 grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </div>
                    </BentoTile>*/}

                    {/* 1. Profile Image Tile — layoutId for shared-layout morph */}
                    <BentoTile className="lg:col-span-2 lg:row-span-4 md:col-span-1 md:row-span-2 min-h-[192px] relative group">
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full relative">
                                <Image
                                    src="/images/heroImage6.jpg"
                                    alt="Ariff Azahari"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </BentoTile>

                    {/* 2. Introduction Tile — About Me button here */}
                    <BentoTile className="lg:col-span-3 lg:row-span-3 md:col-span-3 md:row-span-2 min-h-[192px] flex flex-col justify-center bg-gradient-to-br from-[#000005] to-[#0d1120] border-gradient-hero">
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <h1 className="text-5xl md:text-5xl font-bold">
                                        Hi, I'm <span className="text-gradient-hero">Ariff</span>
                                    </h1>
                                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/15 text-green-400 border border-green-500/30 self-center">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                                        </span>
                                        Open to work
                                    </span>
                                </div>
                                <h2 className="text-md md:text-md text-gray-400 mb-6 max-w-lg">
                                    Passionate data scientist &amp; cybersecurity enthusiast.
                                </h2>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/CV-Resume-Ariff Azahari.pdf"
                                    download
                                    className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-colors shadow-lg shadow-primary/25"
                                >
                                    <FaDownload /> Resume
                                </Link>

                                {/* ── About Me — opens modal ── */}
                                <button
                                    ref={aboutButtonRef}
                                    onClick={() => setIsAboutOpen(true)}
                                    aria-haspopup="dialog"
                                    aria-expanded={isAboutOpen}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors border border-white/5 cursor-pointer"
                                >
                                    <FaInfoCircle /> About Me
                                </button>

                                <div className="flex items-center gap-2 ml-2">
                                    <Link
                                        href="https://www.linkedin.com/in/ariff-azahari-894985165/"
                                        target="_blank"
                                        className="p-2.5 bg-white/5 rounded-full hover:bg-[#0077b5] hover:text-white transition-all text-gray-400"
                                        aria-label="LinkedIn"
                                    >
                                        <FaLinkedin size={20} />
                                    </Link>
                                    <Link
                                        href="https://github.com/Ariff007"
                                        target="_blank"
                                        className="p-2.5 bg-white/5 rounded-full hover:bg-[#333] hover:text-white transition-all text-gray-400"
                                        aria-label="GitHub"
                                    >
                                        <FaGithub size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </BentoTile>

                    {/* 3. Tailwind */}
                    <BentoTile className="lg:col-span-1 md:col-span-2 bg-black/80 flex items-center justify-center">
                        <div className="flex flex-row items-center justify-center h-full">
                            <SiTailwindcss className="text-4xl text-cyan-400 grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </div>
                    </BentoTile>

                    {/* 4. Projects Tile */}
                    <BentoTile href="#projects" className="lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-1 min-h-[100px] relative group">
                        <div className="flex items-center justify-center overflow-hidden">
                            <Image src="/images/projects2.png" alt="Projects" fill className="object-cover" />
                            <h3 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-black/10">
                                Projects
                            </h3>
                        </div>
                    </BentoTile>

                    {/* n. Blog Tile */}
                    {/*<BentoTile href="/blog" className="lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 bg-black/80 flex items-center justify-center">
                        <div className="flex justify-center">
                            <h3 className="text-4xl font-bold text-white shadow-lg shadow-black/10">Blog</h3>
                        </div>
                    </BentoTile>*/}

                    {/* 5. Tensorflow */}
                    <BentoTile className="lg:col-span-1 md:col-span-1 bg-black/80">
                        <div className="flex flex-row items-center justify-center h-full">
                            <SiTensorflow className="text-5xl text-yellow-500 grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </div>
                    </BentoTile>

                    {/* n. Optional Placeholder */}
                    {/*<BentoTile className="lg:col-span-1 md:col-span-1 bg-black/80 flex items-center justify-center">
                        <span className="font-bold text-xl text-white/20">+</span>
                    </BentoTile>*/}

                    {/* 6. Placeholder */}
                    <BentoTile className="lg:col-span-2 md:col-span-1 bg-black/80 flex items-center justify-center">
                        <span className="font-bold text-xl text-white/20">+</span>
                    </BentoTile>

                    {/* 7. React + Nextjs */}
                    <BentoTile className="lg:col-span-1 lg:row-span-2 md:col-span-2 bg-black/80 flex items-center justify-center">
                        <div className="flex flex-col items-center justify-between h-full text-center">
                            <FaReact className="text-5xl text-blue-400 grayscale group-hover:grayscale-0 transition-all duration-300" />
                            <SiNextdotjs className="text-5xl text-white grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </div>
                    </BentoTile>

                    {/* 8. HTML + CSS */}
                    <BentoTile className="lg:col-span-1 lg:row-span-2 md:col-span-2 bg-black/80">
                        <div className="flex flex-col items-center justify-between h-full text-center">
                            <FaHtml5 className="text-5xl text-orange-500 grayscale group-hover:grayscale-0 transition-all duration-300" />
                            <FaCss3 className="text-5xl text-blue-500 grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </div>
                    </BentoTile>

                    {/* 9. Placeholder */}
                    <BentoTile className="lg:col-span-2 lg:row-span-2 md:col-span-2 bg-black/80">
                        <span className="font-bold text-xl text-white/20">+</span>
                    </BentoTile>

                    {/* 10. Placeholder */}
                    <BentoTile className="lg:col-span-1 md:col-span-1 bg-black/80 flex items-center justify-center">
                        <span className="font-bold text-xl text-white/20">+</span>
                    </BentoTile>

                    {/* 11. Theme Toggle */}
                    {/*<BentoTile
                        onClick={toggleTheme}
                        className="lg:col-span-1 md:col-span-1 bg-black/80 flex items-center justify-center cursor-pointer select-none"
                    >
                        <div className="flex flex-col items-center justify-center gap-2 h-full w-full">
                            <AnimatePresence mode="wait" initial={false}>
                                {theme === "dark" ? (
                                    <motion.div
                                        key="moon"
                                        initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                        exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <FaMoon className="text-3xl text-blue-300" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="sun"
                                        initial={{ opacity: 0, rotate: 30, scale: 0.7 }}
                                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                        exit={{ opacity: 0, rotate: -30, scale: 0.7 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <FaSun className="text-3xl text-yellow-400" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <span className="text-[10px] font-semibold tracking-widest uppercase text-foreground/40">
                                {theme === "dark" ? "Dark" : "Light"}
                            </span>
                        </div>
                    </BentoTile>*/}

                    {/* n. Optional Placeholder */}
                    <BentoTile className="lg:col-span-1 md:col-span-1 bg-black/80">
                        <span className="font-bold text-xl text-white/20">+</span>
                    </BentoTile>

                    {/* 12. Contact Me */}
                    <BentoTile href="#contact" className="lg:col-span-2 md:col-span-2 bg-black/80 flex items-center justify-center">
                        <div className="flex items-center justify-center">
                            <h3 className="text-4xl font-bold text-white shadow-lg shadow-black/10">Contact Me</h3>
                        </div>
                    </BentoTile>

                    {/* 13. Machine Learning Tile */}
                    <BentoTile className="lg:col-span-3 lg:row-span-2 md:col-span-2 min-h-[100px] relative group">
                        <div className="flex items-center justify-center overflow-hidden">
                            <Image src="/images/machineLearning3.jpg" alt="Machine Learning" fill className="object-cover" />
                            <h3 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-black/10">
                                Machine Learning
                            </h3>
                        </div>
                    </BentoTile>

                    {/* 14. Keras */}
                    <BentoTile className="lg:col-span-1 md:col-span-2 bg-black/80">
                        <div className="flex flex-row items-center justify-center h-full">
                            <SiKeras className="text-5xl text-red-600 grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </div>
                    </BentoTile>

                    {/* 15. SciPy */}
                    <BentoTile className="lg:col-span-1 md:col-span-1 bg-black/80 flex items-center justify-center">
                        <div className="flex flex-row items-center justify-center h-full">
                            <SiScipy className="text-5xl text-blue-900 grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </div>
                    </BentoTile>

                    {/* 16. Placeholder */}
                    <BentoTile className="lg:col-span-3 md:col-span-1 bg-black/80">
                        <span className="font-bold text-xl text-white/20">+</span>
                    </BentoTile>
                </div>
            </section>

            {/* About Me Modal — rendered outside section to escape overflow:hidden stacking contexts */}
            <AboutModal
                open={isAboutOpen}
                onClose={() => setIsAboutOpen(false)}
                triggerRef={aboutButtonRef}
            />
        </>
    );
}
