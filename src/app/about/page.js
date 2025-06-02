"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import Navigation from "../components/Navigation";

const SKILLS = [
  { category: "Frontend", items: ["JavaScript", "React", "Next.js", "HTML/CSS", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"] },
  { category: "Web3", items: ["ethers.js", "wagmi", "Smart Contracts", "DeFi"] },
  { category: "Tools", items: ["Git", "Postman", "Heroku", "Claude AI", "ChatGPT"] },
];

const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "expand.network",
    period: "Oct 2024 - Present",
    description: "Drove end-to-end design and delivery of an interactive blockchain API documentation platform. Built real-time WebSocket integrations and multi-chain wallet support for 14+ networks.",
  },
  {
    role: "Senior Technical Sourcer",
    company: "BNY Mellon",
    period: "2018 - 2023",
    description: "Developed data-driven sourcing strategies in collaboration with engineering leaders, generating $4M+ in cost savings. Built diverse technical teams while gaining deep insights into what makes great software engineers.",
  },
];

const EDUCATION = [
  {
    institution: "General Assembly",
    degree: "Certificate, Full-Stack Software Engineering",
    period: "2024",
    description: "Completed an intensive 12-week program covering JavaScript, React, Node.js, Express, MongoDB, and RESTful APIs through hands-on projects and pair programming.",
  },
  {
    institution: "St. Lawrence University",
    degree: "Bachelor of Arts in Economics",
    period: "2006",
  },
];

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-900">
        <nav className="mx-auto px-8 md:px-12 lg:px-16 py-5 flex justify-between items-center">
          <Link href="/" className="text-xl font-light text-black dark:text-white hover:opacity-70 transition-opacity">
            me-dev<span className="text-gray-400 dark:text-gray-500">.io</span>
          </Link>
          <div className="flex items-center gap-6">
            <Navigation currentPath="/about" />
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16 px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <section className={`mb-16 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin text-black dark:text-white mb-6 tracking-tight">About</h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
              I'm a full-stack developer with a strategic background in technical recruitment, specializing in building innovative web applications and blockchain solutions.
            </p>
          </section>

          <section className={`mb-16 transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h2 className="text-2xl md:text-3xl font-light text-black dark:text-white mb-6">My Story</h2>
            <div className="space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
              <p>
                My career began in finance and evolved into technical recruitment at BNY Mellon. The more time I spent with engineering teams, the more fascinated I became with their work. This led me to complete General Assembly's Full-Stack
                Software Engineering program in 2024.
              </p>
              <p>I recently put these skills into practice at expand.network, architecting a blockchain API documentation system and multi-chain wallet integrations that streamlined how developers interact with Web3 technologies.</p>
              <p>When I'm not coding from my home in the Catskills, you'll find me building gaming PCs, perfecting BBQ techniques, or rescuing stray cats.</p>
            </div>
          </section>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <section className={`transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <h2 className="text-2xl md:text-3xl font-light text-black dark:text-white mb-6">Experience</h2>
              <div className="space-y-8">
                {EXPERIENCE.map((job, index) => (
                  <div key={index} className="relative pl-10 border-l-2 border-gray-200 dark:border-gray-800">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 bg-white dark:bg-black border-2 border-gray-300 dark:border-gray-700 rounded-full" />
                    <div className="mb-2">
                      <h3 className="text-lg font-medium text-black dark:text-white">{job.role}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {job.company} <span className="mx-2 text-gray-400 dark:text-gray-600">·</span> {job.period}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{job.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Timeline */}
            <section className={`transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <h2 className="text-2xl md:text-3xl font-light text-black dark:text-white mb-6">Education</h2>
              <div className="space-y-8">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="relative pl-10 border-l-2 border-gray-200 dark:border-gray-800">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 bg-white dark:bg-black border-2 border-gray-300 dark:border-gray-700 rounded-full" />
                    <div className="mb-2">
                      <h3 className="text-lg font-medium text-black dark:text-white">{edu.degree}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {edu.institution} <span className="mx-2 text-gray-400 dark:text-gray-600">·</span> {edu.period}
                      </p>
                    </div>
                    {edu.description && <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className={`mb-16 transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h2 className="text-2xl md:text-3xl font-light text-black dark:text-white mb-8">Technical Skills</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {SKILLS.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h3 className="text-base font-medium text-black dark:text-white mb-3">{skillGroup.category}</h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <div key={skill} className="text-sm text-gray-600 dark:text-gray-400">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={`text-center pt-8 transition-all duration-1000 delay-[900ms] ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-6">Interested in working together?</p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:scale-105 transition-transform">
              Get in Touch
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
