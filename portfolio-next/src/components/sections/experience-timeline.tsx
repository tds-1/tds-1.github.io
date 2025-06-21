"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/data/portfolio"
import { Calendar } from "lucide-react"
import { ChatwootLogo, QoalaLogo, InnovaccerLogo, SkillenzaLogo } from "@/components/ui/company-logos"

const getCompanyLogo = (company: string) => {
  switch (company.toLowerCase()) {
    case "chatwoot":
      return <ChatwootLogo />
    case "qoala insurtech":
      return <QoalaLogo />
    case "innovaccer":
      return <InnovaccerLogo />
    case "skillenza":
      return <SkillenzaLogo />
    default:
      return <QoalaLogo />
  }
}

export function ExperienceTimeline() {
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
            Professional
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ml-2">
              Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From intern to senior engineer - a timeline of growth, impact, and technical excellence
          </p>
        </motion.div>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Experience Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start gap-4 mb-4 lg:mb-0">
                    {getCompanyLogo(exp.company)}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg sm:text-xl font-semibold mb-3">
                        {exp.company}
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (achIndex * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge variant="secondary" className="hover:bg-primary/20 transition-colors">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card/30 border rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">4.5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-card/30 border rounded-xl p-6">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <div className="text-muted-foreground">AI/ML Projects</div>
            </div>
            <div className="bg-card/30 border rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Companies</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}