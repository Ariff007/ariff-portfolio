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
        title: "GHG Emission Forecasting",
        description: "Malaysia's GHG emission forecasting using historical data and machine learning.",
        image: "images/ghgEmission1.png", // specific placeholder
        tech: ["Python", "Scikit-learn", "XGBoost", "Prophet"],
        github: "https://github.com/Ariff007/ghg-emission-forecasting",
        demo: "https://github.com/Ariff007/ghg-emission-forecasting",
    },
    {
        title: "Reservoir Prediction",
        description: "Reservoir production prediction using historical data and machine learning.",
        image: "images/reservoir1.png",
        tech: ["Python", "XGBoost", "Scipy", "Scikit-learn"],
        github: "https://github.com/Ariff007/reservoir-production-prediction",
        demo: "https://github.com/Ariff007/reservoir-production-prediction",
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
        description: "Building interfaces that are intuitive, accessible, user-friendly and delightful to use. ",
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
    { name: "GitHub", url: "https://github.com/Ariff007", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ariff-azahari-894985165/", icon: "linkedin" },
    { name: "Twitter", url: "https://x.com/Ariff_Azahari", icon: "twitter" },
    { name: "Instagram", url: "https://www.instagram.com/ariff_azahari/", icon: "instagram" },
];
