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
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded-2xl bg-card border border-white/5 overflow-hidden hover:border-white/20 transition-all hover:shadow-2xl group"
                    >
                        {/* Project Image Placeholder */}
                        <div className="relative h-48 w-full bg-gray-800 overflow-hidden">
                            {/* 
                  Using placeholder behavior since actual images might be missing. 
                  In production, ensure images exist in public/projects/ 
                */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-gray-500 group-hover:scale-105 transition-transform duration-500">
                                <span className="text-4xl">💻</span>
                            </div>
                        </div>

                        <div className="p-6">
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
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
