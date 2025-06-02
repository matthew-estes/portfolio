"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import Navigation from "../components/Navigation";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const CONTACT_METHODS = [
  {
    label: "Email",
    value: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`,
    icon: FaEnvelope,
  },
  {
    label: "GitHub",
    value: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
    href: process.env.NEXT_PUBLIC_GITHUB_URL,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: process.env.NEXT_PUBLIC_LINKEDIN_USERNAME,
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    icon: FaLinkedin,
  },
];

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
        console.error('Form submission error:', data.error);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-900">
        <nav className="mx-auto px-8 md:px-12 lg:px-16 py-5 flex justify-between items-center">
          <Link href="/" className="text-xl font-light text-black dark:text-white hover:opacity-70 transition-opacity">
            me-dev<span className="text-gray-400 dark:text-gray-500">.io</span>
          </Link>
          <div className="flex items-center gap-6">
            <Navigation currentPath="/contact" />
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>


      <main className="pt-24 pb-16 px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <section className={`mb-12 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin text-black dark:text-white mb-6 tracking-tight">Let's Connect</h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">Have a project in mind? I'd love to hear about it.</p>
          </section>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            <section className={`transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <h2 className="text-2xl md:text-3xl font-light text-black dark:text-white mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all text-sm text-gray-900 dark:text-gray-100"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all text-sm text-gray-900 dark:text-gray-100"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all resize-none text-sm text-gray-900 dark:text-gray-100"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-full font-medium transition-all text-sm ${
                    isSubmitting ? "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed" : "bg-black dark:bg-white text-white dark:text-black hover:scale-[1.02] hover:shadow-xl"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

              {submitStatus === "success" && (
                  <div className="text-green-600 dark:text-green-400 text-center text-sm font-medium animate-fade-in">
                    Thank you. I'll be in touch.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="text-red-600 dark:text-red-400 text-center text-sm font-medium animate-fade-in">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </section>

            {/* Direct Contact Methods - Compact */}
            <section className={`transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <h2 className="text-2xl md:text-3xl font-light text-black dark:text-white mb-8">Direct Contact</h2>
              <div className="space-y-4">
                {CONTACT_METHODS.map((method, index) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.label !== "Email" ? "_blank" : undefined}
                    rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-5 p-5 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-200"
                  >
                    <span className="text-xl text-gray-400 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white transition-colors">
                      <method.icon />
                    </span>
                    <div className="flex-grow">
                      <p className="text-xs text-gray-500 dark:text-gray-500 mb-1 uppercase tracking-wider font-medium">{method.label}</p>
                      <p className="text-base text-black dark:text-white font-light">{method.value}</p>
                    </div>
                    <span className="text-gray-300 dark:text-gray-700 group-hover:text-gray-400 dark:group-hover:text-gray-500 transition-colors">→</span>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}