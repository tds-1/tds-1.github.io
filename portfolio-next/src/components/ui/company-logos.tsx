import { cn } from "@/lib/utils"
import Image from "next/image"

interface LogoProps {
  className?: string
}

export function ChatwootLogo({ className }: LogoProps) {
  return (
    <div className={cn("w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-2", className)}>
      <Image
        src="/images/companies/chatwoot.svg"
        alt="Chatwoot Logo"
        width={40}
        height={40}
        className="object-contain"
      />
    </div>
  )
}

export function QoalaLogo({ className }: LogoProps) {
  return (
    <div className={cn("w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-2", className)}>
      <Image
        src="/images/companies/qoala.png"
        alt="Qoala Logo"
        width={40}
        height={40}
        className="object-contain"
      />
    </div>
  )
}

export function InnovaccerLogo({ className }: LogoProps) {
  return (
    <div className={cn("w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-2", className)}>
      <Image
        src="/images/companies/innovaccer.png"
        alt="Innovaccer Logo"
        width={40}
        height={40}
        className="object-contain"
      />
    </div>
  )
}

export function SkillenzaLogo({ className }: LogoProps) {
  return (
    <div className={cn("w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-2", className)}>
      <Image
        src="/images/companies/skillenza.png"
        alt="Skillenza Logo"
        width={40}
        height={40}
        className="object-contain"
      />
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