"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FaBars, FaTimes } from "react-icons/fa";
import { SITE_CONFIG } from "@/lib/constants";

export function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Values", href: "#values" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            // Get all sections
            const sections = navItems.map(item => {
                const id = item.href.replace('#', '');
                return {
                    id,
                    element: document.getElementById(id)
                };
            }).filter(section => section.element !== null);

            // Find which section is currently in view
            // Use reverse order: the last section whose top is at/above scroll position wins
            const scrollPosition = window.scrollY + 80; // Offset for navbar height

            let currentSection = "home";

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.element && scrollPosition >= section.element.offsetTop) {
                    currentSection = section.id;
                    break;
                }
            }

            setActiveSection(currentSection);

            // Hide navbar when at home section (top of page)
            // Show navbar when scrolled past hero section
            const heroSection = document.getElementById('home');
            if (heroSection) {
                const heroHeight = heroSection.offsetHeight;
                setIsVisible(window.scrollY > heroHeight * 0.1); // Show after scrolling 10% of hero
            }
        };

        // Initial check
        handleScroll();

        // Add scroll listener
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5 bg-background/80 backdrop-blur-md"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/#home" className="font-bold text-xl text-gradient">
                            {SITE_CONFIG.name}
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => {
                                const sectionId = item.href.replace('#', '');
                                const isActive = activeSection === sectionId;

                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                                            isActive
                                                ? "text-white bg-white/10"
                                                : "text-gray-300 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-white/10"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => {
                                const sectionId = item.href.replace('#', '');
                                const isActive = activeSection === sectionId;

                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                                            isActive
                                                ? "text-white bg-white/10"
                                                : "text-gray-300 hover:text-white hover:bg-white/10"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
