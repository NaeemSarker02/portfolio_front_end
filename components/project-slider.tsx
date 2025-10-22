"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
    image: "/ecommerce-dashboard.png",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration, and analytics.",
    image: "/task-management-app.png",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "AI Chat Application",
    description:
      "Intelligent chatbot powered by AI with natural language processing and machine learning capabilities.",
    image: "/ai-chat-application-interface.jpg",
    tags: ["React", "Python", "OpenAI", "WebSocket"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts, data visualization, and custom reports.",
    image: "/analytics-dashboard-charts.png",
    tags: ["Vue.js", "D3.js", "Firebase", "Express"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
]

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setIsAutoPlay(false)
  }

  const currentProject = projects[currentIndex]

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">Latest Projects</h2>
          <p className="text-base sm:text-lg text-muted-foreground">Explore my recent work and side projects</p>
        </div>

        {/* Slider Container */}
        <div className="relative group">
          {/* Main Slide */}
          <div className="relative overflow-hidden rounded-2xl border border-border/50 group-hover:border-primary/50 transition-all duration-300">
            <div className="relative h-64 sm:h-96 lg:h-[500px] overflow-hidden">
              <img
                src={currentProject.image || "/placeholder.svg"}
                alt={currentProject.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold mb-2">{currentProject.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-4 line-clamp-2 sm:line-clamp-none">
                  {currentProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {currentProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-1 bg-primary/80 text-primary-foreground rounded-full text-xs sm:text-sm font-medium hover:bg-primary transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 sm:gap-4 flex-wrap">
                  <Link
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">Live Demo</span>
                    <span className="sm:hidden">Live</span>
                  </Link>
                  <Link
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-white/30 text-white rounded-lg text-sm sm:text-base hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    <span className="hidden sm:inline">Code</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-primary/80 hover:bg-primary text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-110 opacity-0 group-hover:opacity-100"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-primary/80 hover:bg-primary text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-110 opacity-0 group-hover:opacity-100"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlay(false)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/60"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-8">All Projects</h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 bg-primary text-primary-foreground rounded-lg text-xs sm:text-sm font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                    >
                      Live
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 border border-border rounded-lg text-xs sm:text-sm font-medium hover:bg-muted transition-all duration-300 hover:scale-105"
                    >
                      Code
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
