import { useState, useEffect, useRef } from 'react'
import { Clock, Play, Pause, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function Timer({ onTimeUpdate, autoStart = true, initialTime = 0 }) {
  const [time, setTime] = useState(initialTime) // Time in seconds
  const [isRunning, setIsRunning] = useState(autoStart)
  const [hasStarted, setHasStarted] = useState(autoStart)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1
          if (onTimeUpdate) {
            onTimeUpdate(newTime)
          }
          return newTime
        })
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning, onTimeUpdate])

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleStart = () => {
    setIsRunning(true)
    setHasStarted(true)
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setTime(0)
    setHasStarted(false)
    if (onTimeUpdate) {
      onTimeUpdate(0)
    }
  }

  return (
    <Card className="p-4 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Time Elapsed</div>
            <div className="text-2xl font-bold font-mono text-foreground">
              {formatTime(time)}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {!hasStarted ? (
            <Button onClick={handleStart} size="sm" className="gap-2">
              <Play className="h-4 w-4" />
              Start
            </Button>
          ) : (
            <>
              {isRunning ? (
                <Button onClick={handlePause} size="sm" variant="outline" className="gap-2">
                  <Pause className="h-4 w-4" />
                  Pause
                </Button>
              ) : (
                <Button onClick={handleStart} size="sm" className="gap-2">
                  <Play className="h-4 w-4" />
                  Resume
                </Button>
              )}
              <Button onClick={handleReset} size="sm" variant="outline" className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>
            </>
          )}
        </div>
      </div>
    </Card>
  )
}

