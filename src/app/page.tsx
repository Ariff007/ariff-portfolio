import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
    return (
        <>
            <div className="flex flex-col gap-20 w-full overflow-hidden">
                <Hero />
                <Values />
                <Projects />
                <Contact />
            </div>
            <ScrollToTop />
        </>
    );
}
