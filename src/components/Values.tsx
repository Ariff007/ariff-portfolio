"use client";

import { VALUES } from "@/lib/data";
import { FaUserFriends, FaBrain, FaChartLine, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Values() {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "user": return <FaUserFriends className="text-4xl text-blue-400 mb-4" />;
            case "brain": return <FaBrain className="text-4xl text-purple-400 mb-4" />;
            case "chart": return <FaChartLine className="text-4xl text-green-400 mb-4" />;
            case "speech": return <FaComments className="text-4xl text-yellow-400 mb-4" />;
            default: return null;
        }
    };

    return (
        <section id="values" className="relative z-10 max-w-7xl mx-auto px-4 py-20 mt-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Values I Bring</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Combining technical expertise with a product-first mindset to deliver exceptional results.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {VALUES.map((value, index) => (
                    /* Outer wrapper: holds glow + card, group trigger here */
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative group"
                    >
                        {/* Gradient glow shadow — sits behind the card, outside its stacking context */}
                        <div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl"
                            style={{
                                background: "linear-gradient(135deg, #86efac, #93c5fd)",
                                transform: "translateY(1px) scale(0.9)",
                                zIndex: 0,
                            }}
                        />

                        {/* Card — sits on top of the glow */}
                        <div
                            className="relative p-6 rounded-2xl bg-card border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] overflow-hidden"
                            style={{ zIndex: 1 }}
                        >
                            {/* Gradient border ring on hover */}
                            <div
                                className="absolute inset-[-1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                    background: "linear-gradient(135deg, #86efac, #93c5fd)",
                                    zIndex: 0,
                                }}
                            />
                            <div className="absolute inset-[1px] rounded-[14px] bg-card pointer-events-none" style={{ zIndex: 1 }} />

                            {/* Icon — no transition */}
                            <div className="relative" style={{ zIndex: 2 }}>
                                {getIcon(value.icon)}
                            </div>
                            <h3 className="relative text-xl font-bold mb-2" style={{ zIndex: 2 }}>{value.title}</h3>
                            <p className="relative text-gray-400 text-sm leading-relaxed" style={{ zIndex: 2 }}>{value.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
