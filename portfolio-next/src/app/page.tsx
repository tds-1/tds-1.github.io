import { Navigation } from "@/components/ui/navigation"
import { Hero } from "@/components/sections/hero"
import { SkillsRadar } from "@/components/sections/skills-radar"
import { ExperienceTimeline } from "@/components/sections/experience-timeline"
import { ProjectsShowcase } from "@/components/sections/projects-showcase"
import { InteractivePlayground } from "@/components/sections/interactive-playground"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <section id="hero">
          <Hero />
        </section>
        <section id="skills">
          <SkillsRadar />
        </section>
        <section id="experience">
          <ExperienceTimeline />
        </section>
        <section id="projects">
          <ProjectsShowcase />
        </section>
        <section id="playground">
          <InteractivePlayground />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}
