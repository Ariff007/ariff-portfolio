"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const FIRAFORM_ENDPOINT = process.env.NEXT_PUBLIC_FIRAFORM_ENDPOINT ?? "";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!FIRAFORM_ENDPOINT) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
            return;
        }

        setStatus("submitting");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch(FIRAFORM_ENDPOINT, {
                method: "POST",
                body: formData,
                // Many form services (e.g. Firaform) respond with a 3xx redirect
                // on success. With the default "follow" mode, fetch follows the
                // redirect but the final response may not be `res.ok`.
                // "manual" captures the redirect itself so we can detect success.
                redirect: "manual",
            });

            // res.type === "opaqueredirect"  →  the service redirected (success)
            // res.ok (2xx)                   →  the service replied directly
            const succeeded = res.type === "opaqueredirect" || res.ok;

            if (succeeded) {
                setStatus("success");
                form.reset();
                // Reset back to idle after 4 seconds
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
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
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/10 outline-none transition-all placeholder:text-gray-600"
                            placeholder="Ariff Azahari"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/10 outline-none transition-all placeholder:text-gray-600"
                            placeholder="ariff@example.com"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/10 outline-none transition-all placeholder:text-gray-600"
                        placeholder="Tell me about your project or just say hi..."
                    ></textarea>
                </div>

                {status === "error" && (
                    <p className="text-red-400 text-sm text-center">
                        Something went wrong. Please try again.
                    </p>
                )}

                <button
                    type="submit"
                    disabled={status === "submitting" || status === "success"}
                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${status === "success"
                        ? "bg-green-500 text-white"
                        : status === "error"
                            ? "bg-red-500/80 text-white"
                            : "bg-primary hover:bg-blue-600 text-white shadow-lg shadow-primary/25"
                        }`}
                >
                    {status === "submitting" ? (
                        "Sending..."
                    ) : status === "success" ? (
                        "Message Sent! ✓"
                    ) : status === "error" ? (
                        "Failed — Try Again"
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
