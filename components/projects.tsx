"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

type Project = {
  id: number
  title: string
  shortDescription: string
  description: string
  image?: string
  tags: string[]
  features: string[]
  demoLink: string
  githubLink: string
  fullDescription: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "MIRA-by-Esaver",
      shortDescription: "AI-powered mental health companion",
      description:
        "Tracks mood, stress, sleep, and habits to provide insights.",
      image: "ESAVER.png",
      tags: ["Tailwind CSS", "AI", "Express.js", "MongoDB"],
      features: [
        "Mood & stress tracking",
        "AI-based insights",
        "Progress dashboard",
      ],
      demoLink: "https://v0-esaver-mental-health-app-p7.vercel.app/",
      githubLink: "#",
      fullDescription:
        "A full-stack mental wellness app that analyzes user behavior and provides personalized insights to improve mental health.",
    },
    {
      id: 2,
      title: "Circuitronix (Startup by Me)",
      shortDescription:
        "Electronics brand for DIY kits and learning resources",
      description:
        "Provides tested projects, components, and learning materials.",
      image: "Circutronics.png",
      tags: ["Java", "NetBeans", "Oracle"],
      features: [
        "DIY electronics kits",
        "Circuit diagrams & code",
        "Student-friendly resources",
      ],
      demoLink: "https://circutronix-in.vercel.app/",
      githubLink: "#",
      fullDescription:
        "Circuitronix is an electronics startup helping students and makers build projects with complete guidance including circuits, code, and cheat sheets.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id
                    ? "ring-2 ring-primary"
                    : ""
                }`}
                onClick={() =>
                  setExpandedProject(
                    expandedProject === project.id ? null : project.id
                  )
                }
              >
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image ?? "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Expand Section */}
                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {/* Buttons */}
                          <div className="flex gap-4 pt-2">
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.demoLink, "_blank")
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </Button>

                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Arrow */}
                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>

              {/* ✅ FIXED: only text inside DialogDescription */}
              <DialogDescription>
                {selectedProject.shortDescription}
              </DialogDescription>

              {/* ✅ Tags moved OUTSIDE */}
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProject.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </DialogHeader>

            <div className="space-y-4">
              <img
                src={selectedProject.image ?? "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              />

              <p className="text-muted-foreground">
                {selectedProject.fullDescription}
              </p>

              <div>
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end gap-4 mt-4">
                {selectedProject.githubLink !== "#" && (
                  <Button variant="outline" asChild>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}

                <Button asChild>
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}