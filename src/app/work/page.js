"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import Navigation from "../components/Navigation";
import { FaExternalLinkAlt } from "react-icons/fa";

const EXPAND_NETWORK_PROJECTS = [
  {
    id: "api-docs",
    title: "API Documentation",
    url: "https://playground.expand.network/api-collection",
    subtitle: "Interactive Blockchain API Explorer",
    description: "Designed and built a comprehensive documentation platform for 178 blockchain endpoints, featuring real-time API testing, multi-chain support, and WebSocket streaming capabilities.",
    keyFeatures: [
      "Built interactive API testing interface with live response previews",
      "Created dynamic parameter validation and auto-completion",
      "Developed WebSocket proxy for real-time data streaming",
      "Integrated comprehensive error handling and status code documentation",
    ],
    technologies: ["JavaScript", "React.js", "Next.js", "Node.js", "Tailwind CSS", "WebSocket"],
    metrics: {
      endpoints: "178",
      chains: "28",
      protocols: "49",
    },
  },
  {
    id: "developer-tools",
    title: "Developer Experience",
    url: "https://playground.expand.network/api-collection",
    subtitle: "Code Generation & Integration Tools",
    description: "Built developer-focused features including multi-language code generation, request builders, and comprehensive error handling to accelerate blockchain integration.",
    keyFeatures: ["Auto-generated code snippets in 5 languages", "Smart contract parameter type detection", "API key validation with helpful error messages", "Request/response caching for improved performance"],
    technologies: ["JavaScript", "REST APIs", "JSON Schema", "Error Boundaries", "Local Storage"],
    metrics: {
      languages: "5",
      codeGen: "Instant",
      errors: "Smart",
    },
  },
  {
    id: "how-to-guides",
    title: "How to Guides",
    url: "https://playground.expand.network/how-to-guides",
    subtitle: "Interactive Developer Tutorials",
    description: "Created comprehensive step-by-step guides that walk developers through complex blockchain integration workflows, featuring interactive wallets, real-time API testing, and multi-chain demonstrations.",
    keyFeatures: [
      "Built interactive tutorial system with live wallet integration",
      "Implemented multi-chain wallet connection for 14 blockchain networks",
      "Created 6-step DeFi lending workflow with Aave V2/V3 and Morpho protocols",
      "Developed real-time form synchronization across complex multi-step workflows",
      "Built comprehensive error handling with contextual user-friendly messaging",
    ],
    technologies: ["JavaScript", "React.js", "Next.js", "Web3.js", "Wagmi", "Ethers.js", "Tailwind CSS"],
    metrics: {
      guides: "3",
      chains: "14",
      workflows: "15",
    },
  },
  {
    id: "use-cases",
    title: "Use Case Applications",
    url: "https://playground.expand.network/use-cases",
    subtitle: "Interactive Use Case Demos",
    description: "Created interactive demo applications showcasing practical implementations of the API, including portfolio management, transaction tracking, and DeFi analytics tools.",
    keyFeatures: ["Portfolio tracker with real-time balance updates and chart visualization", "Transaction history explorer with advanced filtering", "DeFi pool analytics with OHLCV candlestick charts", "Sample data mode for easy demonstration"],
    technologies: ["JavaScript", "React.js", "Chart.js", "ApexCharts", "Web3.js", "Tailwind CSS"],
    metrics: {
      demos: "3",
      dataPoints: "1000+",
      features: "15+",
    },
  },
];

export default function ExpandNetworkWork() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleImageError = (projectId) => {
    setImageError((prev) => ({ ...prev, [projectId]: true }));
  };

  const openModal = (projectId) => {
    setModalImage(`/expand-${projectId}.png`);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-900">
        <nav className="mx-auto px-8 md:px-12 lg:px-16 py-5 flex justify-between items-center">
          <Link href="/" className="text-xl font-light text-black dark:text-white hover:opacity-70 transition-opacity">
            me-dev<span className="text-gray-400 dark:text-gray-500">.io</span>
          </Link>
          <div className="flex items-center gap-6">
            <Navigation currentPath="/work" />
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16 px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <header className={`mb-12 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin text-black dark:text-white tracking-tight mb-4">
                expand<span className="text-gray-400 dark:text-gray-500">.network</span>
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="text-gray-500 dark:text-gray-400 uppercase tracking-wider">Oct 2024 - May 2025</span>
                <span className="text-gray-400 dark:text-gray-600">•</span>
                <span className="text-gray-500 dark:text-gray-400">Web3 Developer Platform</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  Led the development of an interactive API documentation platform that streamlined how developers integrate with blockchain networks. The project involved creating a comprehensive testing environment, real-time data visualization
                  tools, and developer-friendly documentation for over 178 blockchain endpoints.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <p className="text-2xl font-light text-black dark:text-white">178</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Endpoints</p>
                </div>
                <div>
                  <p className="text-2xl font-light text-black dark:text-white">28</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Chains</p>
                </div>
                <div>
                  <p className="text-2xl font-light text-black dark:text-white">49</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Protocols</p>
                </div>
                <div>
                  <p className="text-2xl font-light text-black dark:text-white">5</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Languages</p>
                </div>
              </div>
            </div>
          </header>

          <div className="space-y-20">
            {EXPAND_NETWORK_PROJECTS.map((project, index) => (
              <section key={project.id} className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${200 + index * 100}ms` }}>
                <div className="flex items-baseline justify-between mb-8">
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-thin text-gray-300 dark:text-gray-700">0{index + 1}</span>
                    <h2 className="text-2xl md:text-3xl font-light text-black dark:text-white">{project.title}</h2>
                  </div>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    <span>Visit</span>
                    <FaExternalLinkAlt size={12} />
                  </a>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-thin text-black dark:text-white mb-4">{project.subtitle}</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-8">{project.description}</p>

                    <div className="mb-8">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-4">Key Contributions</h4>
                      <div className="space-y-3">
                        {project.keyFeatures.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-md text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-900 rounded-lg mb-6 flex items-center justify-center overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
                      {!imageError[project.id] ? (
                        <img
                          src={`/expand-${project.id}-preview.png`}
                          alt={`${project.title} Preview`}
                          className="w-full h-full object-cover"
                          onClick={() => openModal(project.id)}
                          onError={(e) => {
                            e.target.src = `/expand-${project.id}.png`;
                            if (e.target.src.includes("-preview.png")) {
                              handleImageError(project.id);
                            }
                          }}
                        />
                      ) : (
                        <div className="text-center">
                          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                            <span className="text-xl text-gray-400 dark:text-gray-600">{}</span>
                          </div>
                          <p className="text-gray-400 dark:text-gray-600 text-xs">Project Preview</p>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3">
                          <p className="text-xl font-light text-black dark:text-white">{value}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">{key}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {index < EXPAND_NETWORK_PROJECTS.length - 1 && <div className="mt-16 border-t border-gray-200 dark:border-gray-800"></div>}
              </section>
            ))}
          </div>

          <div
            className={`mt-20 pt-16 border-t border-gray-200 dark:border-gray-800 text-center transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: `${200 + EXPAND_NETWORK_PROJECTS.length * 100}ms` }}
          >
            <p className="text-gray-500 dark:text-gray-400 mb-6">Interested in blockchain development?</p>
            <Link href="/contact" className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-full hover:scale-105 transition-transform">
              Let's Build Together
            </Link>
          </div>
        </div>
      </main>

      {isModalOpen && modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative w-full h-full max-w-none">
            <button onClick={closeModal} className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <img src={modalImage} alt="Project Screenshot" className="w-full h-full object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
          </div>
        </div>
      )}
    </div>
  );
}
