import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function ChatwootLogo({ className }: LogoProps) {
  return (
    <div className={cn("w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg", className)}>
      CW
    </div>
  )
}

export function QoalaLogo({ className }: LogoProps) {
  return (
    <div className={cn("w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-lg", className)}>
      Q
    </div>
  )
}

export function InnovaccerLogo({ className }: LogoProps) {
  return (
    <div className={cn("w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg", className)}>
      I
    </div>
  )
}

export function SkillenzaLogo({ className }: LogoProps) {
  return (
    <div className={cn("w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg", className)}>
      S
    </div>
  )
}

export function ConcordiumLogo({ className }: LogoProps) {
  return (
    <div className={cn("w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg", className)}>
      C
    </div>
  )
}