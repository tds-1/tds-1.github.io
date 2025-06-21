"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  animate?: boolean
}

export function Logo({ className, animate = true }: LogoProps) {
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    }
  }

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
    }
  }

  return (
    <motion.div
      variants={animate ? logoVariants : undefined}
      initial={animate ? "hidden" : undefined}
      animate={animate ? "visible" : undefined}
      className={cn("relative", className)}
    >
      <svg
        width="120"
        height="60"
        viewBox="0 0 120 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background hexagon */}
        <motion.path
          d="M30 10 L50 5 L70 10 L75 30 L70 50 L50 55 L30 50 L25 30 Z"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="hsl(var(--primary))"
          fillOpacity="0.1"
          variants={animate ? pathVariants : undefined}
          initial={animate ? "hidden" : undefined}
          animate={animate ? "visible" : undefined}
        />
        
        {/* T */}
        <motion.path
          d="M35 20 L35 40 M30 20 L40 20"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={animate ? pathVariants : undefined}
          initial={animate ? "hidden" : undefined}
          animate={animate ? "visible" : undefined}
        />
        
        {/* D */}
        <motion.path
          d="M45 20 L45 40 M45 20 L52 20 C57 20 60 25 60 30 C60 35 57 40 52 40 L45 40"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={animate ? pathVariants : undefined}
          initial={animate ? "hidden" : undefined}
          animate={animate ? "visible" : undefined}
        />
        
        {/* S */}
        <motion.path
          d="M65 25 C65 22 67 20 70 20 C73 20 75 22 75 25 C75 28 73 30 70 30 C67 30 65 32 65 35 C65 38 67 40 70 40 C73 40 75 38 75 35"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={animate ? pathVariants : undefined}
          initial={animate ? "hidden" : undefined}
          animate={animate ? "visible" : undefined}
        />
        
        {/* Decorative elements - Code brackets */}
        <motion.text
          x="85"
          y="25"
          fontSize="14"
          fill="hsl(var(--accent))"
          fontFamily="JetBrains Mono, monospace"
          fontWeight="500"
          variants={animate ? pathVariants : undefined}
          initial={animate ? "hidden" : undefined}
          animate={animate ? "visible" : undefined}
        >
          {'{ }'}
        </motion.text>
        
        {/* Accent dots */}
        <motion.circle
          cx="90"
          cy="40"
          r="2"
          fill="hsl(var(--accent))"
          variants={animate ? pathVariants : undefined}
          initial={animate ? "hidden" : undefined}
          animate={animate ? "visible" : undefined}
        />
        <motion.circle
          cx="95"
          cy="38"
          r="1.5"
          fill="hsl(var(--accent))"
          variants={animate ? pathVariants : undefined}
          initial={animate ? "hidden" : undefined}
          animate={animate ? "visible" : undefined}
        />
        <motion.circle
          cx="100"
          cy="42"
          r="1"
          fill="hsl(var(--accent))"
          variants={animate ? pathVariants : undefined}
          initial={animate ? "hidden" : undefined}
          animate={animate ? "visible" : undefined}
        />
      </svg>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-30 -z-10 rounded-full"></div>
    </motion.div>
  )
}

export function LogoText({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Tanmay Deep Sharma
      </span>
      <span className="text-xs text-muted-foreground font-mono">
        // Senior Software Engineer
      </span>
    </div>
  )
}