import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface BentoTileProps {
    className?: string; // For col-span and row-span
    children?: React.ReactNode;
    backgroundImage?: string;
    onClick?: () => void;
    href?: string;
}

export function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

export default function BentoTile({ className, children, backgroundImage, onClick, href }: BentoTileProps) {
    const Component = href ? motion.a : motion.div;

    return (
        <Component
            href={href}
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
                "relative overflow-hidden rounded-2xl bg-card shadow-xl group",
                "hover:shadow-2xl transition-all duration-100",
                className
            )}
        >
            {/* Background Image/Gradient Layer */}
            <div
                className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
                style={{
                    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay for readability if image exists */}
                {backgroundImage && <div className="absolute inset-0 bg-background/60 group-hover:bg-background/50 transition-colors duration-300" />}
            </div>

            {/* Content Layer */}
            <div className="relative z-10 h-full w-full p-6 flex flex-col">
                {children}
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
        </Component>
    );
}
