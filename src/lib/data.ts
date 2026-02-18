import { ReactNode } from "react";
import { FaCode, FaBrain, FaServer, FaShieldAlt } from "react-icons/fa";

export interface Project {
    title: string;
    description: string;
    image: string;
    tech: string[];
    github: string;
    demo: string;
}

export interface Value {
    title: string;
    description: string;
    icon: string; // We'll use string identifiers or pass components in a different way if needed, but for data file simpler is better. 
}

export const PROJECTS: Project[] = [
    {
        title: "AI-Powered Analytics",
        description: "Real-time data analytics dashboard using Machine Learning to predict market trends.",
        image: "/projects/analytics.png", // specific placeholder
        tech: ["Python", "TensorFlow", "React", "AWS"],
        github: "https://github.com/ariff/analytics",
        demo: "https://analytics.ariff.dev",
    },
    {
        title: "SecureChat",
        description: "End-to-end encrypted messaging application ensuring user privacy and data security.",
        image: "/projects/securechat.png",
        tech: ["Node.js", "Socket.io", "Cryptography", "MongoDB"],
        github: "https://github.com/ariff/securechat",
        demo: "https://chat.ariff.dev",
    },
    {
        title: "EcoTrack",
        description: "Mobile-first application for tracking carbon footprint and suggesting eco-friendly habits.",
        image: "/projects/ecotrack.png",
        tech: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
        github: "https://github.com/ariff/ecotrack",
        demo: "https://ecotrack.ariff.dev",
    },
];

export const VALUES = [
    {
        title: "User-Centric Approach",
        description: "Building interfaces that are intuitive, accessible, and delightful to use.",
        icon: "user",
    },
    {
        title: "Model Development",
        description: "Creating robust ML models that drive actionable insights and automation.",
        icon: "brain",
    },
    {
        title: "Data-Driven Decisions",
        description: "Leveraging data to guide architectural choices and business strategies.",
        icon: "chart",
    },
    {
        title: "Stakeholder Communication",
        description: "Translating complex technical concepts into clear business value.",
        icon: "speech",
    },
];

export const SOCIALS = [
    { name: "GitHub", url: "https://github.com", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
    { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
];
