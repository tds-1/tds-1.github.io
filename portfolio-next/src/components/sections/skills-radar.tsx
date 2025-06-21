"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts'
import { Badge } from "@/components/ui/badge"
import { skills } from "@/data/portfolio"

const radarData = [
  { skill: 'Python', value: 95, category: 'Languages' },
  { skill: 'AI/ML', value: 90, category: 'AI/ML' },
  { skill: 'Backend APIs', value: 95, category: 'Backend' },
  { skill: 'AWS Cloud', value: 85, category: 'Cloud/DevOps' },
  { skill: 'Elasticsearch', value: 88, category: 'Data' },
  { skill: 'System Design', value: 85, category: 'Architecture' },
  { skill: 'Docker/K8s', value: 75, category: 'Cloud/DevOps' },
  { skill: 'PostgreSQL', value: 85, category: 'Data' }
]

const categoryColors = {
  'Languages': '#3b82f6',
  'AI/ML': '#10b981', 
  'Backend': '#8b5cf6',
  'Cloud/DevOps': '#f59e0b',
  'Data': '#ef4444',
  'Architecture': '#06b6d4'
}

export function SkillsRadar() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const filteredData = selectedCategory 
    ? radarData.filter(item => item.category === selectedCategory)
    : radarData

  const categories = Array.from(new Set(skills.map(s => s.category)))

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
            Technical 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ml-2">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive visualization of my technical skills across different domains. Click on categories to filter the radar chart.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border">
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={filteredData}>
                  <PolarGrid 
                    className="opacity-20" 
                    stroke="currentColor"
                  />
                  <PolarAngleAxis 
                    dataKey="skill" 
                    className="text-sm font-medium"
                    tick={{ fontSize: 12 }}
                  />
                  <PolarRadiusAxis 
                    angle={-90}
                    domain={[0, 100]}
                    className="text-xs opacity-60"
                    tick={{ fontSize: 10 }}
                  />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.1}
                    strokeWidth={2}
                    dot={{ 
                      r: 4, 
                      fill: "hsl(var(--primary))",
                      stroke: "hsl(var(--background))",
                      strokeWidth: 2
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>

              {/* Hover Info */}
              {hoveredSkill && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-4 right-4 bg-popover border rounded-lg p-3 text-sm"
                >
                  <div className="font-medium">{hoveredSkill}</div>
                  <div className="text-muted-foreground">
                    {radarData.find(s => s.skill === hoveredSkill)?.value}% proficiency
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Skills Categories */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Category Filters */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={selectedCategory === null ? "default" : "secondary"}
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedCategory(null)}
                >
                  All Skills
                </Badge>
                {categories.map(category => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "secondary"}
                    className="cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setSelectedCategory(category)}
                    style={{
                      backgroundColor: selectedCategory === category 
                        ? categoryColors[category as keyof typeof categoryColors]
                        : undefined
                    }}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Detailed Skills List */}
            <div className="space-y-6">
              {skills
                .filter(skillGroup => !selectedCategory || skillGroup.category === selectedCategory)
                .map(skillGroup => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ 
                          backgroundColor: categoryColors[skillGroup.category as keyof typeof categoryColors] 
                        }}
                      />
                      {skillGroup.category}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {skillGroup.items.map(skill => (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.02 }}
                          onHoverStart={() => setHoveredSkill(skill.name)}
                          onHoverEnd={() => setHoveredSkill(null)}
                          className="bg-card/30 border rounded-lg p-3 hover:bg-card/50 transition-colors cursor-pointer"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-sm">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {skill.years}y
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-2 rounded-full bg-gradient-to-r from-primary to-accent"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}