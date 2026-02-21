import { SITE_CONFIG } from "@/lib/constants";
import { SOCIALS } from "@/lib/data";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const getIcon = (name: string) => {
        switch (name) {
            case "GitHub": return <FaGithub />;
            case "LinkedIn": return <FaLinkedin />;
            case "Twitter": return <FaXTwitter />;
            case "Instagram": return <FaInstagram />;
            default: return null;
        }
    };

    return (
        <footer className="w-full py-8 mt-20 border-t border-white/10 bg-background/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-400 text-sm">
                        &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    {SOCIALS.map((social) => (
                        <Link
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors text-xl"
                            aria-label={social.name}
                        >
                            {getIcon(social.name)}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
