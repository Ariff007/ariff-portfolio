"use client";

import { PROJECTS } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="projects" className="max-w-7xl mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A selection of projects that showcase my skills in AI, Web Development, and Security.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    /* Outer wrapper: holds glow + card, group trigger here */
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative group"
                    >
                        {/* Gradient glow shadow — sits behind the card */}
                        <div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl"
                            style={{
                                background: "linear-gradient(135deg, #ff008cff, #fb923c)",
                                transform: "translateY(1px) scale(0.9)",
                                zIndex: 0,
                            }}
                        />

                        {/* Card — sits on top of the glow */}
                        <div
                            className="relative rounded-2xl bg-card border border-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                            style={{ zIndex: 1 }}
                        >
                            {/* Gradient border ring on hover */}
                            <div
                                className="absolute inset-[-1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                    background: "linear-gradient(135deg, #ff008cff, #fd821eff)",
                                    zIndex: 0,
                                }}
                            />
                            <div className="absolute inset-[1px] rounded-[14px] bg-card pointer-events-none" style={{ zIndex: 1 }} />

                            {/* Project Image */}
                            <div className="relative h-48 w-full bg-gray-800 overflow-hidden" style={{ zIndex: 2 }}>
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-gray-500 group-hover:scale-105 transition-transform duration-500">
                                    <span className="text-4xl">💻</span>
                                </div>
                            </div>

                            <div className="relative p-6" style={{ zIndex: 2 }}>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        <FaGithub /> Code
                                    </Link>
                                    <Link
                                        href={project.demo}
                                        target="_blank"
                                        className="flex items-center gap-2 text-sm text-primary hover:text-blue-400 transition-colors"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
