"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/contexts/theme-context"

interface TerminalCommand {
  command: string
  output: string[]
  delay?: number
}

const autoCommands: TerminalCommand[] = [
  {
    command: "ls -la",
    output: [
      "total 42",
      "drwxr-xr-x  tanmay  staff    portfolio/",
      "-rw-r--r--  tanmay  staff    README.md",
      "-rw-r--r--  tanmay  staff    skills.json",
      "-rw-r--r--  tanmay  staff    projects.db",
      "-rw-r--r--  tanmay  staff    experience.log"
    ],
    delay: 100
  },
  {
    command: "git log --oneline --graph",
    output: [
      "* a7b9c3d feat: AI conversation analyzer with 95% accuracy",
      "* d4e8f2a feat: Elasticsearch wrapper service for recommendations", 
      "* b1c5g9h fix: optimized image processing pipeline performance",
      "* e7f3j6k feat: FastAPI-based microservices architecture",
      "* h9m2n4p feat: AWS Lambda integration for scalable AI processing"
    ]
  },
  {
    command: "docker ps --format 'table {{.Names}}\\t{{.Status}}'",
    output: [
      "NAMES                    STATUS",
      "tanmay-ai-service       Up 2 hours",
      "tanmay-api-gateway      Up 2 hours", 
      "elasticsearch-cluster   Up 3 hours",
      "redis-cache            Up 3 hours"
    ]
  }
]

// Interactive commands that users can type
const interactiveCommands: Record<string, string[]> = {
  "help": [
    "Available commands:",
    "  whoami       - Display user information",
    "  skills       - List technical skills",
    "  projects     - Show featured projects", 
    "  experience   - Display work history",
    "  contact      - Get contact information",
    "  clear        - Clear terminal",
    "  matrix       - Enter the Matrix 🔴",
    "  coffee       - ☕ Because coding needs fuel",
    "  joke         - Get a programming joke",
    "  fortune      - Get a random fortune",
    "",
    "Type any command to explore!"
  ],
  "whoami": [
    "👋 Tanmay Deep Sharma",
    "🚀 Senior Software Engineer @ Chatwoot",
    "🧠 AI/ML & Backend Engineering Specialist",
    "📍 Building scalable systems that matter"
  ],
  "skills": [
    "🐍 Python (95%) - FastAPI, Flask, Django",
    "🤖 AI/ML (90%) - PyTorch, TensorFlow, Transformers", 
    "☁️  AWS (85%) - Lambda, ECS, S3, SQS",
    "🔍 Elasticsearch (88%) - Search & Analytics",
    "🐳 Docker/K8s (75%) - Container Orchestration",
    "📊 PostgreSQL (85%) - Database Design"
  ],
  "projects": [
    "🔍 AI Conversation Analyzer - AWS Lambda function",
    "🎨 Image Processing Pipeline - Google Vision API",
    "🔍 Elasticsearch Recommendation Engine",
    "💰 Splitwise Bank Statement Parser",
    "🤖 SQL Query Generator AI Bot",
    "📚 Adaptive Learning Platform"
  ],
  "experience": [
    "🏢 Chatwoot (2025-Present) - Senior Software Engineer",
    "🦘 Qoala Insurtech (2021-2025) - Software Engineer → Senior",
    "🏥 Innovaccer (2020) - Product Intern",
    "🎯 Skillenza (2019) - Tech Intern"
  ],
  "contact": [
    "📧 tanmaydeepsharma21@gmail.com",
    "🔗 linkedin.com/in/tanmay-deep-sharma",
    "🐙 github.com/tds-1",
    "📱 Available for interesting conversations!"
  ],
  "matrix": [
    "🔴 Taking the red pill...",
    "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
    "🔢 01001000 01100101 01101100 01101100 01101111",
    "🌐 Welcome to the Matrix, Neo...",
    "💊 There is no spoon. Only code.",
    "⚡ Global Matrix theme activated!",
    "💡 Tip: Use Konami code (↑↑↓↓←→←→BA) for extra effects!"
  ],
  "coffee": [
    "☕ Brewing coffee...",
    "📊 Caffeine level: ████████░░ 80%",
    "🧠 Brain function: OPTIMAL",
    "💻 Ready to code for the next 4 hours!",
    "☕ Coffee is a programmer's best friend"
  ],
  "joke": [
    "🤖 Why do programmers prefer dark mode?",
    "💡 Because light attracts bugs! 🐛",
    "",
    "🎭 How many programmers does it take to change a light bulb?",
    "💭 None. That's a hardware problem."
  ],
  "fortune": [
    "🔮 Fortune says:",
    "💫 Your next commit will be bug-free!",
    "🚀 A great opportunity awaits in your code.",
    "🧙‍♂️ May your builds be swift and your tests green."
  ],
  "clear": [""]
}

export function InteractiveTerminal() {
  const { setMatrixMode } = useTheme()
  const [commandHistory, setCommandHistory] = useState<Array<{command: string, output: string[]}>>([])
  const [inputHistory, setInputHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [currentInput, setCurrentInput] = useState("")
  const [showAutoDemo, setShowAutoDemo] = useState(true)
  const [autoDemoIndex, setAutoDemoIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  // Auto-demo sequence
  useEffect(() => {
    if (!showAutoDemo || autoDemoIndex >= autoCommands.length) {
      setShowAutoDemo(false)
      setCurrentInput("") // Clear any remaining input when demo ends
      return
    }

    const command = autoCommands[autoDemoIndex]
    let charIndex = 0
    setIsTyping(true)
    setCurrentInput("")

    const typeCommand = () => {
      if (charIndex < command.command.length) {
        setCurrentInput(command.command.slice(0, charIndex + 1))
        charIndex++
        setTimeout(typeCommand, 50 + Math.random() * 50)
      } else {
        setIsTyping(false)
        setTimeout(() => {
          setCommandHistory(prev => [...prev, { command: command.command, output: command.output }])
          setCurrentInput("") // Clear input after adding to history
          setAutoDemoIndex(prev => prev + 1)
        }, 1000)
      }
    }

    setTimeout(typeCommand, autoDemoIndex === 0 ? 1000 : 2000)
  }, [autoDemoIndex, showAutoDemo])

  const handleCommand = (input: string) => {
    const trimmedInput = input.trim()
    const lowerInput = trimmedInput.toLowerCase()
    
    if (trimmedInput === "") return

    // Add to input history (only non-empty commands)
    setInputHistory(prev => {
      const newHistory = [trimmedInput, ...prev.filter(cmd => cmd !== trimmedInput)]
      return newHistory.slice(0, 50) // Keep last 50 commands
    })
    setHistoryIndex(-1)

    if (lowerInput === "clear") {
      setCommandHistory([])
      return
    }

    // Handle matrix command
    if (lowerInput === "matrix") {
      setMatrixMode(true)
      const output = interactiveCommands[lowerInput] || [
        "🔴 Entering the Matrix...",
        "🌐 Reality is now optional."
      ]
      setCommandHistory(prev => [...prev, { command: trimmedInput, output }])
      return
    }

    const output = interactiveCommands[lowerInput] || [
      `Command '${lowerInput}' not found.`,
      "Type 'help' to see available commands."
    ]

    setCommandHistory(prev => [...prev, { command: trimmedInput, output }])
  }

  const updateSuggestions = (input: string) => {
    if (input.length === 0) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    const availableCommands = Object.keys(interactiveCommands)
    const matches = availableCommands.filter(cmd => 
      cmd.toLowerCase().startsWith(input.toLowerCase())
    )
    
    setSuggestions(matches.slice(0, 5))
    setShowSuggestions(matches.length > 0 && input.length > 0)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setShowSuggestions(false)
      handleCommand(currentInput)
      setCurrentInput("")
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (inputHistory.length > 0) {
        const newIndex = Math.min(historyIndex + 1, inputHistory.length - 1)
        setHistoryIndex(newIndex)
        setCurrentInput(inputHistory[newIndex] || "")
        setShowSuggestions(false)
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCurrentInput(inputHistory[newIndex] || "")
        setShowSuggestions(false)
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setCurrentInput("")
        setShowSuggestions(false)
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      if (suggestions.length > 0) {
        setCurrentInput(suggestions[0])
        setShowSuggestions(false)
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false)
    }
  }

  const handleTerminalClick = () => {
    if (!showAutoDemo && inputRef.current) {
      inputRef.current.focus({ preventScroll: true })
    }
  }

  const scrollToBottom = () => {
    if (terminalRef.current) {
      // Use requestAnimationFrame to ensure smooth scrolling without affecting page
      requestAnimationFrame(() => {
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
      })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [commandHistory, currentInput])

  useEffect(() => {
    // Auto-focus input when demo ends, but prevent scroll
    if (!showAutoDemo && inputRef.current) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus({ preventScroll: true })
        }
      }, 500)
    }
  }, [showAutoDemo])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-black/90 backdrop-blur-sm rounded-lg border border-green-500/20 overflow-hidden"
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/50 border-b border-green-500/20">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center gap-2 text-green-400 text-sm">
          <Terminal size={16} />
          <span>tanmay@portfolio:~</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="p-4 font-mono text-sm h-80 overflow-y-auto cursor-text terminal-container"
        onClick={handleTerminalClick}
      >
        {/* Command History */}
        <AnimatePresence>
          {commandHistory.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              {/* Command */}
              <div className="flex items-center gap-2 text-green-400 mb-2">
                <ChevronRight size={16} />
                <span className="text-green-300">$</span>
                <span>{entry.command}</span>
              </div>
              
              {/* Output */}
              <div className="ml-6 space-y-1">
                {entry.output.map((line, lineIndex) => (
                  <motion.div
                    key={lineIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: lineIndex * 0.1 }}
                    className={cn(
                      "text-gray-300",
                      line.includes("✓") && "text-green-400",
                      line.includes("*") && "text-blue-400",
                      line.includes("🚀") && "text-green-400 font-semibold",
                      line.includes("Available commands:") && "text-yellow-400 font-semibold",
                      line.startsWith("  ") && "text-cyan-400"
                    )}
                  >
                    {line}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Current Input Line */}
        {(showAutoDemo && currentInput) || !showAutoDemo ? (
          <div className="flex items-center gap-2 text-green-400">
            <ChevronRight size={16} />
            <span className="text-green-300">$</span>
            
            {showAutoDemo ? (
              // Auto-demo typing - only show when there's input
              <>
                <span>{currentInput}</span>
                {(isTyping || showCursor) && (
                  <span className="inline-block w-2 h-5 bg-green-400 animate-pulse ml-1"></span>
                )}
              </>
            ) : (
              // Interactive input
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={(e) => {
                    setCurrentInput(e.target.value)
                    updateSuggestions(e.target.value)
                  }}
                  onKeyDown={handleKeyPress}
                  className="bg-transparent border-none outline-none text-green-400 w-full font-mono"
                  placeholder="Type 'help' for commands..."
                  autoComplete="off"
                  spellCheck="false"
                />
                {showCursor && !currentInput && (
                  <span className="absolute left-0 top-0 w-2 h-5 bg-green-400 animate-pulse"></span>
                )}
              </div>
            )}
          </div>
        ) : null}

        {/* Command Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 bg-gray-900/90 border border-green-500/30 rounded-md overflow-hidden"
          >
            {suggestions.map((suggestion, index) => (
              <motion.div
                key={suggestion}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="px-3 py-2 text-green-400 hover:bg-green-500/10 cursor-pointer text-sm font-mono flex items-center gap-2"
                onClick={() => {
                  setCurrentInput(suggestion)
                  setShowSuggestions(false)
                  inputRef.current?.focus()
                }}
              >
                <span className="text-green-500">$</span>
                <span>{suggestion}</span>
              </motion.div>
            ))}
            <div className="px-3 py-1 text-xs text-gray-500 border-t border-green-500/20">
              ↑↓ navigate • Tab to complete • Esc to close
            </div>
          </motion.div>
        )}

        {/* Helper text for new users */}
        {!showAutoDemo && commandHistory.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 text-gray-500 text-xs"
          >
            💡 This terminal is interactive! Type commands like 'help', 'skills', 'projects', etc.
            <br />
            ⌨️ Use ↑↓ arrows for command history, Tab for autocompletion
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}