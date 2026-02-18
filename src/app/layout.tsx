import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Using Inter as a close alternative to Google Sans/Product Sans for open source
// Or we can try to find a similar variable font. Inter is standard and clean.
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: SITE_CONFIG.title,
        template: `%s | ${SITE_CONFIG.name}`,
    },
    description: SITE_CONFIG.description,
    metadataBase: new URL(SITE_CONFIG.url),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: SITE_CONFIG.url,
        title: SITE_CONFIG.title,
        description: SITE_CONFIG.description,
        siteName: SITE_CONFIG.name,
        images: [
            {
                url: SITE_CONFIG.ogImage,
                width: 1200,
                height: 630,
                alt: SITE_CONFIG.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_CONFIG.title,
        description: SITE_CONFIG.description,
        images: [SITE_CONFIG.ogImage],
        creator: "@ariff",
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} bg-background text-foreground relative min-h-screen selection:bg-primary/30 selection:text-primary`}>
                {/* Background Gradients */}
                <div className="fixed inset-0 z-[-1] pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-30 mix-blend-screen animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30 mix-blend-screen"></div>
                </div>

                <Navbar />
                <main className="flex min-h-screen flex-col items-center justify-between">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
