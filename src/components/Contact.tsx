"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate server action
        setTimeout(() => {
            setStatus("success");
            // Reset after 3 seconds
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="max-w-3xl mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
                <p className="text-gray-400">
                    Have a project in mind or want to discuss the latest in AI? Send me a message.
                </p>
            </motion.div>

            <motion.form
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="space-y-6 glass p-8 rounded-3xl"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                        placeholder="Tell me about your project..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === "submitting" || status === "success"}
                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${status === "success"
                            ? "bg-green-500 text-white"
                            : "bg-primary hover:bg-blue-600 text-white shadow-lg shadow-primary/25"
                        }`}
                >
                    {status === "submitting" ? (
                        "Sending..."
                    ) : status === "success" ? (
                        "Message Sent!"
                    ) : (
                        <>
                            Send Message <FaPaperPlane />
                        </>
                    )}
                </button>
            </motion.form>
        </section>
    );
}
