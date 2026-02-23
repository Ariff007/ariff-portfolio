"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaDownload,
    FaTimes,
    FaMapMarkerAlt,
    FaBriefcase,
    FaGraduationCap,
    FaUser,
    FaTools,
} from "react-icons/fa";
import { aboutData } from "@/lib/AboutData";

interface AboutModalProps {
    open: boolean;
    onClose: () => void;
    triggerRef?: React.RefObject<HTMLButtonElement | null>;
}

// ─── Skill Badge ─────────────────────────────────────────────────────────────
function SkillBadge({ label }: { label: string }) {
    return (
        <span className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-gray-300 hover:bg-primary/20 hover:border-primary/40 hover:text-white transition-all duration-200 cursor-default select-none">
            {label}
        </span>
    );
}

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
    return (
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/20 text-primary">{icon}</div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <div className="flex-1 h-px bg-white/10 ml-2" />
        </div>
    );
}

// ─── Hero Card (left panel) ───────────────────────────────────────────────────
function HeroCard() {
    return (
        <div className="flex flex-col h-full rounded-2xl overflow-hidden border border-white/10 bg-card shadow-2xl">
            {/* Image — top half */}
            <div className="relative flex-1 min-h-[80px] lg:min-h-0 lg:h-[55%]">
                <Image
                    src="/images/heroImage6.jpg"
                    alt="Ariff Azahari"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent" />
            </div>

            {/* Info — bottom half */}
            <div className="p-6 flex flex-col gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-white">Ariff Azahari</h2>
                    <p className="text-primary font-medium text-sm mt-1">
                        Data Scientist · Cybersecurity Enthusiast
                    </p>
                    <p className="flex items-center gap-1.5 text-gray-400 text-sm mt-2">
                        <FaMapMarkerAlt className="shrink-0 text-xs" />
                        Kuala Lumpur, Malaysia
                    </p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-primary/40 pl-3 italic">
                    "Turning complex data into impactful solutions."
                </p>

                {/* Social links */}
                <div className="flex items-center gap-3">
                    <Link
                        href="https://github.com/Ariff007"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-2.5 rounded-full bg-white/5 hover:bg-[#333] hover:text-white text-gray-400 transition-all duration-200"
                    >
                        <FaGithub size={18} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/ariff-azahari-894985165/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="p-2.5 rounded-full bg-white/5 hover:bg-[#0077b5] hover:text-white text-gray-400 transition-all duration-200"
                    >
                        <FaLinkedin size={18} />
                    </Link>
                </div>

                {/* Download CV */}
                <Link
                    href="/CV-Resume-Ariff Azahari.pdf"
                    download
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary hover:bg-blue-600 text-white font-semibold text-sm transition-colors shadow-lg shadow-primary/25"
                >
                    <FaDownload size={14} />
                    Download CV
                </Link>
            </div>
        </div>
    );
}

// ─── Biography Panel (right panel) ───────────────────────────────────────────
function BiographyPanel() {
    return (
        <div
            className="h-full overflow-y-auto pr-1 space-y-12 scrollbar-thin"
            style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.1) transparent" }}
        >
            {/* 1. About */}
            <section aria-labelledby="about-heading">
                <SectionHeader icon={<FaUser size={14} />} title="About Me" />
                <div id="about-heading" className="space-y-4">
                    {aboutData.bio.map((paragraph, i) => (
                        <p key={i} className="text-gray-400 leading-relaxed text-sm">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </section>

            {/* 2. Education */}
            <section aria-labelledby="education-heading">
                <SectionHeader icon={<FaGraduationCap size={14} />} title="Education" />
                <div id="education-heading" className="space-y-4">
                    {aboutData.education.map((edu, i) => (
                        <div
                            key={i}
                            className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
                        >
                            <div className="flex items-start justify-between gap-4 flex-wrap">
                                <div>
                                    <h4 className="font-semibold text-white text-sm">{edu.institution}</h4>
                                    <p className="text-primary text-sm mt-0.5">{edu.degree}</p>
                                </div>
                                <span className="shrink-0 px-2.5 py-1 rounded-md bg-primary/15 text-primary text-xs font-medium">
                                    {edu.year}
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm mt-3 leading-relaxed">{edu.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Experience */}
            <section aria-labelledby="experience-heading">
                <SectionHeader icon={<FaBriefcase size={14} />} title="Experience" />
                <div id="experience-heading" className="relative space-y-0">
                    {/* vertical timeline line */}
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-900 to-transparent" aria-hidden="true" />

                    {aboutData.experience.map((exp, i) => (
                        <div key={i} className="relative pl-12 pb-10 last:pb-0">
                            {/* dot */}
                            <div className="absolute left-[13px] top-[6px] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

                            <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                                    <div>
                                        <h4 className="font-semibold text-white text-sm">{exp.company}</h4>
                                        <p className="text-primary text-sm mt-0.5">{exp.role}</p>
                                    </div>
                                    <span className="shrink-0 px-2.5 py-1 rounded-md bg-primary/15 text-primary text-xs font-medium">
                                        {exp.duration}
                                    </span>
                                </div>
                                <ul className="space-y-2">
                                    {exp.achievements.map((item, j) => (
                                        <li key={j} className="flex gap-2 text-gray-400 text-sm">
                                            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/60" aria-hidden="true" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Skills */}
            <section aria-labelledby="skills-heading">
                <SectionHeader icon={<FaTools size={14} />} title="Skills" />
                <div id="skills-heading" className="space-y-5">
                    {(Object.entries(aboutData.skills) as [string, readonly string[]][]).map(([category, items]) => (
                        <div key={category}>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">
                                {category}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <SkillBadge key={skill} label={skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* bottom breathing room */}
                <div className="h-8" />
            </section>
        </div>
    );
}

// ─── Main Modal ───────────────────────────────────────────────────────────────
export default function AboutModal({ open, onClose, triggerRef }: AboutModalProps) {
    const panelRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    // Focus management
    useEffect(() => {
        if (open) {
            // Small delay so AnimatePresence finishes mounting
            const t = setTimeout(() => closeButtonRef.current?.focus(), 80);
            return () => clearTimeout(t);
        }
    }, [open]);

    // Restore focus on close
    const handleClose = useCallback(() => {
        onClose();
        requestAnimationFrame(() => triggerRef?.current?.focus());
    }, [onClose, triggerRef]);

    // ESC key + focus trap
    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
                return;
            }

            if (e.key === "Tab") {
                const panel = panelRef.current;
                if (!panel) return;

                const focusable = panel.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
                );
                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey) {
                    if (document.activeElement === first) {
                        e.preventDefault();
                        last?.focus();
                    }
                } else {
                    if (document.activeElement === last) {
                        e.preventDefault();
                        first?.focus();
                    }
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open, handleClose]);

    // Scroll lock
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* ── Backdrop ───────────────────────────────────────── */}
                    <motion.div
                        key="about-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[90] bg-background/80 backdrop-blur-sm"
                        aria-hidden="true"
                        onClick={handleClose}
                    />

                    {/* ── Panel ──────────────────────────────────────────── */}
                    <motion.div
                        key="about-panel"
                        layoutId="about-tile"
                        ref={panelRef}
                        role="dialog"
                        aria-modal="true"
                        aria-label="About Ariff Azahari"
                        initial={{ opacity: 0, scale: 0.96, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 24 }}
                        transition={{ type: "spring", stiffness: 280, damping: 28 }}
                        className="
                            fixed z-[100]
                            inset-4
                            md:inset-6
                            lg:inset-8
                            flex flex-col lg:flex-row
                            rounded-3xl overflow-hidden
                            bg-card border border-white/10
                            shadow-2xl shadow-black/60
                        "
                        // Prevent backdrop click from bubbling through the panel
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* ── Close button ─────────────────────────────── */}
                        <button
                            ref={closeButtonRef}
                            onClick={handleClose}
                            aria-label="Close About panel"
                            className="
                                absolute top-4 right-4 z-10
                                p-2.5 rounded-full
                                bg-white/5 hover:bg-white/15
                                text-gray-400 hover:text-white
                                transition-all duration-200
                                border border-white/10
                            "
                        >
                            <FaTimes size={16} />
                        </button>

                        {/* ── LEFT — Hero Card ─────────────────────────── */}
                        <div className="
                            w-full lg:w-[38%] xl:w-[35%]
                            p-5 flex-shrink-0
                            border-b lg:border-b-0 lg:border-r border-white/10
                        ">
                            <HeroCard />
                        </div>

                        {/* ── RIGHT — Biography ────────────────────────── */}
                        <div className="flex-1 min-h-0 overflow-hidden p-6 lg:p-8">
                            <BiographyPanel />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
