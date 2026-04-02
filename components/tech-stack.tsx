"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Layout, Database, Wrench, Binary } from "lucide-react"

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const technologies = {
    languages: {
      icon: <Code2 className="h-6 w-6" />,
      title: "Programming Languages",
      description: "Core languages for systems and application development",
      skills: [
        { name: "Java", level: 80 },
        { name: "Embedded C", level: 75 },
        { name: "Python", level: 50 },
        { name: "C++", level: 50 },
      ],
    },
    concepts: {
      icon: <Binary className="h-6 w-6" />,
      title: "CS Concepts",
      description: "Fundamental engineering principles",
      skills: [
        { name: "Data Structures", level: 75 },
        { name: "Algorithms", level: 70 },
        { name: "OOPS", level: 75 },
        { name: "React", level: 70 },
        { name: "Next.js", level: 75 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 70 },
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 60 },
        { name: "MySQL", level: 65 },
        { name: "Git", level: 90 },
        { name: "Visual Studio", level: 85 },
      ],
    },
    frontend: {
      icon: <Layout className="h-6 w-6" />,
      title: "ML Concepts",
      description: "Modern web development technologies",
      skills: [
        { name: "", level: 60 },
      ],
    },
    tools1: {
      icon: <Wrench className="h-6 w-6" />,
      title: "Digital Electronics Tools",
      description: "Tools for Chip Programming & development",
      skills: [
        { name: "MATLAB", level: 50 },
        { name: "XILINX VIVADO", level: 50 },
        { name: "ARDUINO IDE", level: 50 },
        { name: "KICAD", level: 50 },
        { name: "MULTISIM", level: 50 },
      ],
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technologies).map(([key, category]) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={scaleUp}
            >
              <Card
                className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCategory === key ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedCategory === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-2"
                          >
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-1.5">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{
                                  duration: 0.5,
                                  delay: index * 0.1,
                                }}
                                className="bg-primary h-1.5 rounded-full"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {selectedCategory !== key && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill.name}
                        </Badge>
                      ))}
                      {category.skills.length > 3 && (
                        <Badge variant="secondary">
                          +{category.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="max-w-2xl mx-auto">
            I bring a multidisciplinary background spanning computer science, electronics, and machine learning, with hands-on experience in low-level systems programming, modern web development, and intelligent algorithm design.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
