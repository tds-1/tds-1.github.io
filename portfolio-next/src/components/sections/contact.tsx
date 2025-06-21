"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { personalInfo, socialLinks } from "@/data/portfolio"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']

export function Contact() {
  const { matrixMode, setMatrixMode } = useTheme()
  const [konamiIndex, setKonamiIndex] = useState(0)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === konamiCode[konamiIndex]) {
        if (konamiIndex === konamiCode.length - 1) {
          setMatrixMode(true)
          setKonamiIndex(0)
        } else {
          setKonamiIndex(konamiIndex + 1)
        }
      } else {
        setKonamiIndex(0)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [konamiIndex])

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    // TODO: Enable email functionality later
    // For now, just simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
    }, 1000)
    
    /* 
    // Email functionality - commented for future use
    try {
      // Using EmailJS for form submission
      const { default: emailjs } = await import('@emailjs/browser')
      
      await emailjs.send(
        'service_portfolio', // You'll need to set this up in EmailJS
        'template_portfolio', // You'll need to set this up in EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Tanmay Deep Sharma'
        },
        'your_public_key' // You'll need to add your EmailJS public key
      )
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
    */
  }

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    email: Mail
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {matrixMode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-green-500/10 pointer-events-none"
        />
      )}
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ml-2">
              Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Always open to exciting conversations, ideas, and collaborations. Whether you have a project in mind or just want to say hello, I'd love to hear from you.
          </p>
          
          {matrixMode && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mt-4"
            >
              <Badge variant="outline" className="bg-green-500/10 border-green-500/30 text-green-400">
                🔓 Matrix Mode Activated! Welcome to the real world.
              </Badge>
            </motion.div>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card/30 border hover:bg-card/50 transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground text-sm">{personalInfo.email}</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card/30 border hover:bg-card/50 transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground text-sm">{personalInfo.phone}</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card/30 border hover:bg-card/50 transition-colors"
                >
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground text-sm">{personalInfo.location}</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {Object.entries(socialLinks).map(([platform, url]) => {
                  const Icon = socialIcons[platform as keyof typeof socialIcons]
                  if (!Icon) return null
                  
                  return (
                    <motion.div
                      key={platform}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
                      >
                        <a href={url} target="_blank" aria-label={platform}>
                          <Icon className="h-5 w-5" />
                        </a>
                      </Button>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Fun Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary/10 border border-primary/20 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <h4 className="font-semibold text-primary">Quick Stats</h4>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium text-primary">500+</div>
                  <div className="text-muted-foreground">Problems Solved</div>
                </div>
                <div>
                  <div className="font-medium text-primary">4.5 Years</div>
                  <div className="text-muted-foreground">Experience</div>
                </div>
                <div>
                  <div className="font-medium text-primary">10+</div>
                  <div className="text-muted-foreground">AI Projects</div>
                </div>
                <div>
                  <div className="font-medium text-primary">15+</div>
                  <div className="text-muted-foreground">Technologies</div>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}