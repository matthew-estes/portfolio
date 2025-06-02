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
      "Standardized fragmented blockchain API documentation into a unified JSON-based system covering 178 endpoints",
      "Organized APIs into 17 integration categories (DeFi, NFTs, Oracles, etc.) with advanced filtering by method, chain, and protocol",
      "Built interactive API testing interface with live response previews and real-time parameter validation",
      "Implemented comprehensive search functionality with auto-completion across endpoint names and descriptions",
      "Developed WebSocket streaming for real-time data (gas prices, trades, transactions) across 4 categories",
      "Integrated comprehensive error handling with contextual messages and status code documentation",
    ],
    technologies: ["JavaScript", "React.js", "Next.js", "Node.js", "JSON Schema", "REST APIs", "WebSocket", "Tailwind CSS"],
  },
  {
    id: "developer-tools",
    title: "Developer Experience",
    url: "https://playground.expand.network/api-collection",
    subtitle: "Code Generation & Integration Tools",
    description: "Built developer-focused features including multi-language code generation, request builders, and comprehensive error handling to accelerate blockchain integration.",
    keyFeatures: [
      "Auto-generated code snippets in 5 languages with syntax highlighting and one-click copy",
      "Built live API response preview with sample/production data toggle for risk-free testing",
      "Smart contract parameter type detection with automatic validation",
      "Developed chain-specific parameter routing for 28 blockchain networks",
      "API key validation with contextual error messages and troubleshooting guides",
      "Request/response caching for improved performance",
    ],
    technologies: ["React.js", "Next.js", "REST APIs", "Local Storage", "Tailwind CSS"],
  },
  {
    id: "use-cases",
    title: "Use Case Applications",
    url: "https://playground.expand.network/use-cases",
    subtitle: "Interactive Use Case Demos",
    description: "Created interactive demo applications showcasing practical implementations of the API, including portfolio management, transaction tracking, and DeFi analytics tools.",
    keyFeatures: [
      "Built real-time portfolio tracker with automatic USD conversions and Chart.js visualizations",
      "Developed multi-chain transaction explorer supporting 8 blockchains with pagination",
      "Created DeFi pool analytics with interactive OHLCV candlestick/line chart toggle",
      "Implemented sample data mode allowing users to explore features without API credentials",
      "Designed responsive data tables with sorting, filtering, and export functionality",
      "Built comprehensive error handling with fallback to demo data for seamless UX",
    ],
    technologies: ["JavaScript", "React.js", "Chart.js", "ApexCharts", "web3.js", "Tailwind CSS"],
  },
  {
    id: "how-to-guides",
    title: "How to Guides",
    url: "https://playground.expand.network/how-to-guides",
    subtitle: "Interactive Developer Tutorials",
    description: "Created comprehensive step-by-step guides that walk developers through complex blockchain integration workflows, featuring interactive wallets, real-time API testing, and multi-chain demonstrations.",
    keyFeatures: [
      "Integrated WalletConnect AppKit for seamless wallet connectivity across multiple chains",
      "Implemented real-time form synchronization with persistent state across multi-step workflows",
      "Created dynamic protocol detection that auto-configures endpoints for 14 blockchain networks",
      "Developed 6-step DeFi workflows for lending (Aave/Morpho), swapping, and cross-chain bridging",
      "Built transaction monitoring with on-chain confirmation tracking and explorer integration",
      "Engineered graceful error recovery with detailed troubleshooting and one-click reset",
    ],
    technologies: ["React.js", "Next.js", "WalletConnect", "wagmi", "ethers.js", "web3.js", "Tailwind CSS"],
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
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-black/90 backdrop-blur-lg border-b border-gray-100 dark:border-gray-900">
        <nav className="mx-auto px-8 md:px-12 lg:px-16 py-5 flex justify-between items-center">
          <Link href="/" className="text-xl font-light text-black dark:text-white hover:opacity-70 transition-opacity duration-200">
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
        <div className="max-w-7xl mx-auto">
          <header className={`mb-24 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="mb-12">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-thin text-black dark:text-white tracking-tight mb-8">
                expand<span className="text-gray-400 dark:text-gray-500">.network</span>
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <span className="uppercase tracking-wider font-medium">Oct 2024 - May 2025</span>
                <span className="text-gray-300 dark:text-gray-700">•</span>
                <span>Web3 Developer Platform</span>
                <span className="text-gray-300 dark:text-gray-700">•</span>
                <span className="text-blue-600 dark:text-blue-400">Acquired by Blockdaemon</span>
              </div>
            </div>

            <div className="max-w-4xl mb-12">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                Led the development of the Expand Playground, an interactive API documentation and testing platform that streamlined how developers integrate with blockchain networks. Organized 178 APIs into intuitive categories, created interactive
                testing environments, and developed hands-on tutorials that guide developers through complex Web3 integrations.
              </p>
            </div>

            <div>
              <a
                href="https://playground.expand.network/api-collection"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full transition-all duration-200 group"
              >
                <span>See It Live</span>
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            </div>
          </header>

          <div className="space-y-28">
            {EXPAND_NETWORK_PROJECTS.map((project, index) => (
              <section key={project.id} className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${200 + index * 100}ms` }}>
                <div className="flex items-baseline justify-between mb-12">
                  <div className="flex items-baseline gap-6">
                    <span className="text-5xl font-thin text-gray-300 dark:text-gray-700">0{index + 1}</span>
                    <h2 className="text-3xl md:text-4xl font-light text-black dark:text-white">{project.title}</h2>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light text-gray-800 dark:text-gray-200 mb-6">{project.subtitle}</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-10">{project.description}</p>

                    <div className="mb-10">
                      <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-widest mb-5">Key Contributions</h4>
                      <div className="space-y-3">
                        {project.keyFeatures.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-10">
                      <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-widest mb-5">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-md text-xs border border-gray-200 dark:border-gray-800">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="relative group mb-8">
                      <div className="relative aspect-[4/3] bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] border border-gray-200 dark:border-gray-800">
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
                          <div className="flex items-center justify-center h-full">
                            <div className="text-center">
                              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                                <span className="text-xl text-gray-400 dark:text-gray-600">{}</span>
                              </div>
                              <p className="text-gray-400 dark:text-gray-600 text-xs">Project Preview</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {index < EXPAND_NETWORK_PROJECTS.length - 1 && <div className="mt-20 border-t border-gray-200 dark:border-gray-800"></div>}
              </section>
            ))}
          </div>

          <div
            className={`mt-28 pt-16 border-t border-gray-200 dark:border-gray-800 text-center transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: `${200 + EXPAND_NETWORK_PROJECTS.length * 100}ms` }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">Interested in blockchain development?</p>
            <Link href="/contact" className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-full hover:scale-105 transition-transform duration-200">
              Let's Build Together
            </Link>
          </div>
        </div>
      </main>
      {isModalOpen && modalImage && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50 p-8 transition-opacity duration-300" onClick={closeModal}>
          <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <button onClick={closeModal} className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full p-3 transition-all duration-200 hover:scale-110">
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
