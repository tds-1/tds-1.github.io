"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Calculator, 
  Hash, 
  Palette, 
  Code, 
  Zap, 
  RefreshCw,
  Copy,
  CheckCircle,
  Dice1,
  Timer,
  Brain,
  Network
} from "lucide-react"

interface Tool {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  category: string
}

const tools: Tool[] = [
  {
    id: "password-generator",
    title: "Password Generator",
    description: "Generate secure passwords with custom criteria",
    icon: <Hash className="h-5 w-5" />,
    category: "Security"
  },
  {
    id: "color-palette",
    title: "Color Palette Generator",
    description: "Create beautiful color schemes for your projects",
    icon: <Palette className="h-5 w-5" />,
    category: "Design"
  },
  {
    id: "reaction-time",
    title: "Reaction Time Test",
    description: "Test your reflexes and reaction speed",
    icon: <Timer className="h-5 w-5" />,
    category: "Game"
  },
  {
    id: "memory-game",
    title: "Memory Flip Game",
    description: "Test your memory with colorful card matching",
    icon: <Brain className="h-5 w-5" />,
    category: "Game"
  },
  {
    id: "typing-speed",
    title: "Typing Speed Test",
    description: "Test your typing speed and accuracy",
    icon: <Zap className="h-5 w-5" />,
    category: "Game"
  },
  {
    id: "math-quiz",
    title: "Quick Math Quiz",
    description: "Challenge yourself with rapid math problems",
    icon: <Calculator className="h-5 w-5" />,
    category: "Game"
  },
  {
    id: "binary-converter",
    title: "Binary Converter",
    description: "Convert between binary, decimal, and hex",
    icon: <Code className="h-5 w-5" />,
    category: "Developer"
  },
  {
    id: "json-formatter",
    title: "JSON Formatter",
    description: "Format and validate JSON data",
    icon: <Code className="h-5 w-5" />,
    category: "Developer"
  }
]

function PasswordGenerator() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(16)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [copied, setCopied] = useState(false)

  const generatePassword = () => {
    let charset = ""
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz"
    if (includeNumbers) charset += "0123456789"
    if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?"

    let result = ""
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(result)
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    generatePassword()
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols])

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={password}
          readOnly
          className="flex-1 px-3 py-2 bg-background border rounded-md font-mono text-sm"
        />
        <Button onClick={copyToClipboard} size="sm" variant="outline">
          {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
        <Button onClick={generatePassword} size="sm">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-2">
        <div>
          <label className="text-sm font-medium">Length: {length}</label>
          <input
            type="range"
            min="8"
            max="64"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Uppercase", checked: includeUppercase, onChange: setIncludeUppercase },
            { label: "Lowercase", checked: includeLowercase, onChange: setIncludeLowercase },
            { label: "Numbers", checked: includeNumbers, onChange: setIncludeNumbers },
            { label: "Symbols", checked: includeSymbols, onChange: setIncludeSymbols }
          ].map(({ label, checked, onChange }) => (
            <label key={label} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="rounded"
              />
              {label}
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

function ColorPaletteGenerator() {
  const [colors, setColors] = useState<string[]>([])
  const [copied, setCopied] = useState<string | null>(null)

  const generatePalette = () => {
    const newColors = []
    for (let i = 0; i < 5; i++) {
      const hue = Math.floor(Math.random() * 360)
      const saturation = 70 + Math.floor(Math.random() * 30)
      const lightness = 40 + Math.floor(Math.random() * 40)
      newColors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`)
    }
    setColors(newColors)
  }

  const copyColor = async (color: string) => {
    try {
      await navigator.clipboard.writeText(color)
      setCopied(color)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = color
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(color)
      setTimeout(() => setCopied(null), 2000)
    }
  }

  useEffect(() => {
    generatePalette()
  }, [])

  return (
    <div className="space-y-4">
      <Button onClick={generatePalette} className="w-full">
        <RefreshCw className="h-4 w-4 mr-2" />
        Generate New Palette
      </Button>

      <div className="grid grid-cols-5 gap-2">
        {colors.map((color, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="aspect-square rounded-lg cursor-pointer hover:scale-105 transition-all relative group border-2 border-transparent hover:border-primary/30"
            style={{ backgroundColor: color }}
            onClick={() => copyColor(color)}
          >
            {/* Copy feedback overlay */}
            <AnimatePresence>
              {copied === color && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 rounded-lg backdrop-blur-sm"
                >
                  <CheckCircle className="h-6 w-6 text-green-400 mb-1" />
                  <span className="text-xs text-white font-medium">Copied!</span>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Hover tooltip */}
            <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs p-1 rounded-b-lg truncate">
              {color}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-xs text-muted-foreground text-center">
        Click any color to copy its HSL value
      </div>
    </div>
  )
}

function ReactionTimeTest() {
  const [gameState, setGameState] = useState<'waiting' | 'ready' | 'go' | 'result'>('waiting')
  const [startTime, setStartTime] = useState(0)
  const [reactionTime, setReactionTime] = useState(0)
  const [bestTime, setBestTime] = useState<number | null>(null)

  const startTest = () => {
    setGameState('ready')
    const delay = 2000 + Math.random() * 3000
    setTimeout(() => {
      setGameState('go')
      setStartTime(Date.now())
    }, delay)
  }

  const handleClick = () => {
    if (gameState === 'go') {
      const time = Date.now() - startTime
      setReactionTime(time)
      setGameState('result')
      if (!bestTime || time < bestTime) {
        setBestTime(time)
      }
    } else if (gameState === 'ready') {
      setGameState('waiting')
    }
  }

  const reset = () => {
    setGameState('waiting')
    setReactionTime(0)
  }

  return (
    <div className="space-y-4 text-center">
      <div
        className={`h-32 rounded-lg flex items-center justify-center cursor-pointer transition-colors ${
          gameState === 'waiting' ? 'bg-blue-500/20 hover:bg-blue-500/30' :
          gameState === 'ready' ? 'bg-red-500/20' :
          gameState === 'go' ? 'bg-green-500/20' :
          'bg-gray-500/20'
        }`}
        onClick={gameState === 'waiting' ? startTest : handleClick}
      >
        {gameState === 'waiting' && <span>Click to Start</span>}
        {gameState === 'ready' && <span>Wait for Green...</span>}
        {gameState === 'go' && <span className="text-green-400 font-bold">CLICK NOW!</span>}
        {gameState === 'result' && (
          <div>
            <div className="text-2xl font-bold">{reactionTime}ms</div>
            <div className="text-sm text-muted-foreground">
              {reactionTime < 200 ? 'Excellent!' : 
               reactionTime < 300 ? 'Good!' : 
               reactionTime < 400 ? 'Average' : 'Try again!'}
            </div>
          </div>
        )}
      </div>

      {bestTime && (
        <div className="text-sm">
          Best: <span className="font-bold text-primary">{bestTime}ms</span>
        </div>
      )}

      {gameState === 'result' && (
        <Button onClick={reset} variant="outline">
          Try Again
        </Button>
      )}
    </div>
  )
}

function MemoryGame() {
  const [cards, setCards] = useState<Array<{id: number, color: string, flipped: boolean, matched: boolean}>>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [gameWon, setGameWon] = useState(false)

  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F']

  const initializeGame = () => {
    const gameCards = colors.flatMap((color, index) => [
      { id: index * 2, color, flipped: false, matched: false },
      { id: index * 2 + 1, color, flipped: false, matched: false }
    ]).sort(() => Math.random() - 0.5)
    
    setCards(gameCards)
    setFlippedCards([])
    setMoves(0)
    setGameWon(false)
  }

  useEffect(() => {
    initializeGame()
  }, [])

  const handleCardClick = (cardId: number) => {
    if (flippedCards.length === 2 || cards.find(c => c.id === cardId)?.flipped) return

    const newFlippedCards = [...flippedCards, cardId]
    setFlippedCards(newFlippedCards)

    setCards(prev => prev.map(card => 
      card.id === cardId ? { ...card, flipped: true } : card
    ))

    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1)
      
      const [first, second] = newFlippedCards
      const firstCard = cards.find(c => c.id === first)
      const secondCard = cards.find(c => c.id === second)

      if (firstCard?.color === secondCard?.color) {
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            newFlippedCards.includes(card.id) ? { ...card, matched: true } : card
          ))
          setFlippedCards([])
        }, 1000)
      } else {
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            newFlippedCards.includes(card.id) ? { ...card, flipped: false } : card
          ))
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.matched)) {
      setGameWon(true)
    }
  }, [cards])

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>Moves: {moves}</div>
        <Button onClick={initializeGame} variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          New Game
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {cards.map(card => (
          <motion.div
            key={card.id}
            className={`aspect-square rounded-lg cursor-pointer ${
              card.flipped || card.matched ? '' : 'bg-gray-600'
            }`}
            style={{
              backgroundColor: card.flipped || card.matched ? card.color : undefined
            }}
            onClick={() => handleCardClick(card.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        ))}
      </div>

      {gameWon && (
        <div className="text-center text-green-400 font-bold">
          🎉 Congratulations! You won in {moves} moves!
        </div>
      )}
    </div>
  )
}

function TypingSpeedTest() {
  const [text] = useState("The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.")
  const [userInput, setUserInput] = useState("")
  const [startTime, setStartTime] = useState<number | null>(null)
  const [endTime, setEndTime] = useState<number | null>(null)
  const [wpm, setWpm] = useState(0)
  const [accuracy, setAccuracy] = useState(100)

  const handleInputChange = (value: string) => {
    if (!startTime) {
      setStartTime(Date.now())
    }

    setUserInput(value)

    if (value === text) {
      const end = Date.now()
      setEndTime(end)
      const timeInMinutes = (end - (startTime || Date.now())) / 60000
      const wordsTyped = text.split(' ').length
      setWpm(Math.round(wordsTyped / timeInMinutes))
    }

    // Calculate accuracy
    const correct = value.split('').filter((char, index) => char === text[index]).length
    setAccuracy(Math.round((correct / value.length) * 100) || 100)
  }

  const reset = () => {
    setUserInput("")
    setStartTime(null)
    setEndTime(null)
    setWpm(0)
    setAccuracy(100)
  }

  return (
    <div className="space-y-4">
      <div className="bg-muted p-4 rounded-lg text-sm">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={
              index < userInput.length
                ? userInput[index] === char
                  ? 'bg-green-500/30'
                  : 'bg-red-500/30'
                : index === userInput.length
                ? 'bg-blue-500/30'
                : ''
            }
          >
            {char}
          </span>
        ))}
      </div>

      <textarea
        value={userInput}
        onChange={(e) => handleInputChange(e.target.value)}
        className="w-full p-3 border rounded-lg resize-none h-24"
        placeholder="Start typing the text above..."
        disabled={!!endTime}
      />

      <div className="flex justify-between items-center">
        <div className="space-x-4">
          <span>WPM: <strong>{wpm}</strong></span>
          <span>Accuracy: <strong>{accuracy}%</strong></span>
        </div>
        <Button onClick={reset} variant="outline">
          Reset
        </Button>
      </div>

      {endTime && (
        <div className="text-center text-green-400 font-bold">
          🎉 Completed! {wpm} WPM with {accuracy}% accuracy
        </div>
      )}
    </div>
  )
}

function MathQuiz() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [userAnswer, setUserAnswer] = useState("")
  const [score, setScore] = useState(0)
  const [total, setTotal] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [timeLeft, setTimeLeft] = useState(60)
  const [gameActive, setGameActive] = useState(false)

  const generateQuestion = () => {
    const operators = ['+', '-', '*']
    const operator = operators[Math.floor(Math.random() * operators.length)]
    let num1, num2, result

    switch (operator) {
      case '+':
        num1 = Math.floor(Math.random() * 50) + 1
        num2 = Math.floor(Math.random() * 50) + 1
        result = num1 + num2
        break
      case '-':
        num1 = Math.floor(Math.random() * 50) + 25
        num2 = Math.floor(Math.random() * 25) + 1
        result = num1 - num2
        break
      case '*':
        num1 = Math.floor(Math.random() * 12) + 1
        num2 = Math.floor(Math.random() * 12) + 1
        result = num1 * num2
        break
      default:
        num1 = 1; num2 = 1; result = 2
    }

    setQuestion(`${num1} ${operator} ${num2}`)
    setAnswer(result.toString())
  }

  const startGame = () => {
    setGameActive(true)
    setScore(0)
    setTotal(0)
    setTimeLeft(60)
    setFeedback("")
    generateQuestion()
  }

  const checkAnswer = () => {
    const isCorrect = userAnswer === answer
    setTotal(prev => prev + 1)
    if (isCorrect) {
      setScore(prev => prev + 1)
      setFeedback("Correct! ✅")
    } else {
      setFeedback(`Wrong! The answer was ${answer} ❌`)
    }
    
    setUserAnswer("")
    setTimeout(() => {
      setFeedback("")
      if (gameActive) generateQuestion()
    }, 1000)
  }

  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      setGameActive(false)
    }
  }, [timeLeft, gameActive])

  return (
    <div className="space-y-4 text-center">
      {!gameActive ? (
        <div>
          <p className="mb-4">Solve as many math problems as you can in 60 seconds!</p>
          <Button onClick={startGame}>Start Quiz</Button>
          {total > 0 && (
            <div className="mt-4">
              Final Score: {score}/{total} ({Math.round((score/total) * 100)}%)
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="flex justify-between mb-4">
            <span>Score: {score}/{total}</span>
            <span>Time: {timeLeft}s</span>
          </div>
          
          <div className="text-2xl font-bold mb-4">{question} = ?</div>
          
          <div className="flex gap-2 justify-center">
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
              className="w-24 p-2 border rounded text-center"
              autoFocus
            />
            <Button onClick={checkAnswer} disabled={!userAnswer}>
              Submit
            </Button>
          </div>
          
          {feedback && (
            <div className="mt-4 font-bold">{feedback}</div>
          )}
        </div>
      )}
    </div>
  )
}

export function InteractivePlayground() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>("all")
  const selectedToolRef = useRef<HTMLDivElement>(null)

  const categories = Array.from(new Set(tools.map(t => t.category)))
  const filteredTools = filter === "all" ? tools : tools.filter(t => t.category === filter)

  const handleToolSelect = (toolId: string) => {
    setSelectedTool(toolId)
    // Scroll to the selected tool with smooth animation
    setTimeout(() => {
      selectedToolRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }, 300) // Small delay to ensure the component has rendered
  }

  // Auto-scroll when tool is selected
  useEffect(() => {
    if (selectedTool && selectedToolRef.current) {
      selectedToolRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
  }, [selectedTool])

  const renderTool = () => {
    switch (selectedTool) {
      case "password-generator":
        return <PasswordGenerator />
      case "color-palette":
        return <ColorPaletteGenerator />
      case "reaction-time":
        return <ReactionTimeTest />
      case "memory-game":
        return <MemoryGame />
      case "typing-speed":
        return <TypingSpeedTest />
      case "math-quiz":
        return <MathQuiz />
      default:
        return <div className="text-center text-muted-foreground">Tool not yet implemented. Check back soon!</div>
    }
  }

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
            Interactive
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ml-2">
              Playground
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Fun and useful tools built with React and TypeScript. Try them out!
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            <Badge
              variant={filter === "all" ? "default" : "secondary"}
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setFilter("all")}
            >
              All Tools
            </Badge>
            {categories.map(category => (
              <Badge
                key={category}
                variant={filter === category ? "default" : "secondary"}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setFilter(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </motion.div>

        {!selectedTool ? (
          /* Tools Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="cursor-pointer"
                onClick={() => handleToolSelect(tool.id)}
              >
                <Card className="h-full hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {tool.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{tool.title}</CardTitle>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {tool.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Selected Tool View */
          <motion.div
            ref={selectedToolRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {tools.find(t => t.id === selectedTool)?.icon}
                    </div>
                    <div>
                      <CardTitle>{tools.find(t => t.id === selectedTool)?.title}</CardTitle>
                      <CardDescription>
                        {tools.find(t => t.id === selectedTool)?.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedTool(null)}
                  >
                    Back
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {renderTool()}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  )
}