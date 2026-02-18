"use client";

import Image from "next/image";
import Link from "next/link";
import BentoTile from "./BentoGrid";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaInfoCircle, FaBrain, FaNetworkWired, FaDesktop, FaBlog, FaProjectDiagram, FaHtml5, FaPython, FaReact, FaChartBar } from "react-icons/fa";
import { SiTensorflow, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Hero() {
    return (
        <section id="home" className="w-full max-w-7xl mx-auto p-4 pt-4 min-h-screen flex flex-col justify-center">
            {/* 
        Grid Layout:
        Mobile: 1 column (grid-cols-1)
        Tablet: 4 columns (md:grid-cols-4)
        Desktop: 8 columns (lg:grid-cols-8)
        Row height: auto or fixed
      */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 lg:grid-rows-6 max-h-[600px] gap-4">

                {/* 1. My Setup Tile (col-span-2) */}
                <BentoTile className="lg:col-span-2 lg:row-span-2 md:col-span-2 min-h-[100px] relative group">
                    <div className="flex flex-col items-center justify-center h-full text-center">
                        <Image
                            src="/images/my-Setup3.jpg"
                            alt="My Setup"
                            fill
                            className="object-cover"
                        />
                        <h3 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-black/10">My Setup</h3>
                    </div>
                </BentoTile>

                {/* 2. Blog Tile (col-span-2) */}
                <BentoTile href="/blog" className="lg:col-span-2 lg:row-span-1 md:col-span-2 bg-orange-900/20 border-orange-500/30 cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-full text-center hover:scale-105 transition-transform">
                        <FaBlog className="text-5xl text-orange-400 mb-3" />
                        <h3 className="text-xl font-bold text-orange-200">Blog</h3>
                    </div>
                </BentoTile>

                {/* 3. Tech Stack Tile (col-span-2) */}
                <BentoTile className="lg:col-span-1 lg:row-span-2 md:col-span-2 md:row-span-2 flex items-center justify-center bg-white/5">
                    <FaHtml5 className="text-4xl text-orange-500" />
                </BentoTile>

                {/* 4. Tech Stack Tile (col-span-2) */}
                <BentoTile className="lg:col-span-1 md:col-span-1 flex items-center justify-center bg-white/5">
                    <SiTailwindcss className="text-4xl text-cyan-400" />
                </BentoTile>

                {/* 5. Projects Tile (col-span-2) */}
                <BentoTile href="#projects" className="lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-1 min-h-[100px] relative group">
                    <div className="flex items-center justify-center overflow-hidden">
                        <Image
                            src="/images/projects.jpg"
                            alt="Ariff"
                            fill
                            className="object-cover"
                        />
                        <h3 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-black/10">Projects</h3>
                    </div>
                </BentoTile>

                {/* 6. Tech Stack Tile (col-span-2) */}
                <BentoTile className="lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 flex items-center justify-center bg-white/5">
                    <FaPython className="text-4xl text-blue-500" />
                </BentoTile>

                {/* 7. Tech Stack Tile (col-span-2) */}
                <BentoTile className="lg:col-span-1 md:col-span-1 flex items-center justify-center bg-white/5 relative group">
                    <SiTensorflow className="text-4xl text-yellow-500" />
                </BentoTile>

                {/* 8. Tech Stack Tile (col-span-2) */}
                <BentoTile className="lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-1 flex items-center justify-center bg-white/5">
                    <SiNextdotjs className="text-4xl text-white" />
                </BentoTile>

                {/* 9. Profile Image Tile (col-span-2 row-span-2) */}
                <BentoTile className="lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2 min-h-[100px] relative group">
                    {/* Placeholder for Profile Image - using a gradient/icon in case image is missing, but simulating image */}
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">

                        {/* Use Next/Image here. For demo, we use a placeholder or assume file exists. 
                 Using a generic avatar for now. */}
                        <div className="w-full h-full relative">
                            <Image
                                src="/images/heroImage2.jpg"
                                alt="Ariff"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Fallback pattern if image fails (handled by next/image error or just valid path requirement) 
                                For now, user just needs to add the file. 
                            */}
                        </div>
                    </div>
                </BentoTile>

                {/* 10. Large Introduction Tile (col-span-4 row-span-2) */}
                <BentoTile className="lg:col-span-4 lg:row-span-2 md:col-span-4 md:row-span-2 min-h-[192px] flex flex-col justify-center bg-gradient-to-br from-[#000005] to-[#0d1120] border-gradient-hero">
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            <h1 className="text-5xl md:text-5xl font-bold mb-2">
                                Hi, I’m <span className="text-gradient-hero">Ariff</span>
                            </h1>
                            <h2 className="text-md md:text-sm text-gray-400 mb-6 max-w-lg">
                                Data Scientist, Full-stack Developer, Cybersecurity Enthusiast.
                            </h2>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/resume.pdf" className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-colors shadow-lg shadow-primary/25">
                                <FaDownload /> Resume
                            </Link>
                            <Link href="#about" className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors border border-white/5">
                                <FaInfoCircle /> About Me
                            </Link>
                            <div className="flex items-center gap-2 ml-2">
                                <Link href="https://linkedin.com" target="_blank" className="p-2.5 bg-white/5 rounded-full hover:bg-[#0077b5] hover:text-white transition-all text-gray-400">
                                    <FaLinkedin size={20} />
                                </Link>
                                <Link href="https://github.com" target="_blank" className="p-2.5 bg-white/5 rounded-full hover:bg-[#333] hover:text-white transition-all text-gray-400">
                                    <FaGithub size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </BentoTile>

                {/* 11. Tech Stack Tile (col-span-2) */}
                <BentoTile className="lg:col-span-1 md:col-span-1 flex items-center justify-center bg-white/5">
                    <FaReact className="text-4xl text-blue-400" />
                </BentoTile>

                {/* 12. Tech Stack Tile (col-span-2) */}
                <BentoTile className="lg:col-span-1 md:col-span-1 flex items-center justify-center bg-white/5">
                    <span className="font-bold text-xl text-white/20">+</span>
                </BentoTile>

                {/* 13. Tech Stack Tile (col-span-2) */}
                <BentoTile className="lg:col-span-1 md:col-span-1 flex items-center justify-center bg-white/5">
                    <span className="font-bold text-xl text-white/20">+</span>
                </BentoTile>

                {/* 14. Tech Stack Tile Tile (col-span-3) */}
                <BentoTile className="lg:col-span-3 md:col-span-2 flex items-center justify-center bg-white/5">
                    <span className="font-bold text-xl text-white/20">+</span>
                </BentoTile>

                {/* 15. NLP Tile (col-span-2) */}
                <BentoTile className="lg:col-span-1 lg:row-span-2 md:col-span-2 bg-blue-900/20 border-blue-500/30">
                    <div className="flex flex-col items-center justify-center h-full text-center hover:scale-105 transition-transform">
                        <FaNetworkWired className="text-5xl text-blue-400 mb-3" />
                        <h3 className="text-xl font-bold text-blue-200">NLP</h3>
                    </div>
                </BentoTile>

                {/* 16. Machine Learning Tile (col-span-3) */}
                <BentoTile className="lg:col-span-3 lg:row-span-2 md:col-span-1 min-h-[100px] relative group">
                    <div className="flex items-center justify-center overflow-hidden">
                        <Image
                            src="/images/machine-learning1.jpg"
                            alt="Machine Learning"
                            fill
                            className="object-cover"
                        />
                        <h3 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-black/10">Machine Learning</h3>
                    </div>
                </BentoTile>

                {/* 17. Tech Stack Tile (col-span-2) */}
                <BentoTile className="lg:col-span-3 lg:row-span-1 md:col-span-1 flex items-center justify-center bg-white/5">
                    <span className="font-bold text-xl text-white/20">+</span>
                </BentoTile>

                {/* 18. Tech Stack Tile (col-span-2) */}
                <BentoTile className="lg:col-span-1 md:col-span-1 flex items-center justify-center bg-white/5">
                    <span className="font-bold text-xl text-white/20">+</span>
                </BentoTile>

            </div>
        </section>
    );
}
