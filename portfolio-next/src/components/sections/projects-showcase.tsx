"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/portfolio"
import { ExternalLink, Github, ChevronRight, X, Zap, Target, TrendingUp } from "lucide-react"

export function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const filteredProjects = projects

  const selectedProjectData = projects.find(p => p.id === selectedProject)

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ml-2">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions built with cutting-edge technology. Each project showcases problem-solving, innovation, and measurable impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 h-full hover:shadow-2xl transition-all duration-300 cursor-pointer"
                     onClick={() => setSelectedProject(project.id)}>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant={project.status === "completed" ? "default" : "secondary"}>
                      {project.status === "completed" ? "Completed" : "In Development"}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Learn More
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && selectedProjectData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{selectedProjectData.title}</h2>
                      <p className="text-muted-foreground">{selectedProjectData.description}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedProject(null)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Problem-Solution-Outcome */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="h-5 w-5 text-red-400" />
                        <h3 className="font-semibold text-red-400">Problem</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{selectedProjectData.problem}</p>
                    </div>
                    
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="h-5 w-5 text-blue-400" />
                        <h3 className="font-semibold text-blue-400">Solution</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{selectedProjectData.solution}</p>
                    </div>
                    
                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="h-5 w-5 text-green-400" />
                        <h3 className="font-semibold text-green-400">Outcome</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{selectedProjectData.outcome}</p>
                    </div>
                  </div>

                  {/* Long Description */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Technical Details</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProjectData.longDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.technologies.map(tech => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.tags.map(tag => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <Button asChild>
                      <a href="#" target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="#" target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}