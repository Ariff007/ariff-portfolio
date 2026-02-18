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
        <section id="values" className="max-w-7xl mx-auto px-4 py-20">
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
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 rounded-2xl bg-card border border-white/5 hover:border-white/10 hover:bg-white/5 transition-colors group"
                    >
                        <div className="group-hover:scale-110 transition-transform duration-300">
                            {getIcon(value.icon)}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
