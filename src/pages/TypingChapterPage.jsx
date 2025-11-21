import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { typingLevels } from '@/data/typingData';
import { ArrowLeft, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

const TypingChapterPage = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  
  // Find chapter data
  const chapter = typingLevels
    .flatMap(l => l.chapters)
    .find(c => c.id === chapterId);

  const [input, setInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isCompleted, setIsCompleted] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [chapterId]);

  if (!chapter) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Chapter not found</h2>
        <Button onClick={() => navigate('/typing')}>Back to Typing Home</Button>
      </div>
    );
  }

  const targetText = chapter.content;

  const handleInput = (e) => {
    const value = e.target.value;
    
    if (!startTime) {
      setStartTime(Date.now());
    }

    // Calculate stats
    const timeElapsed = (Date.now() - startTime) / 1000 / 60; // in minutes
    const wordsTyped = value.length / 5;
    const currentWpm = timeElapsed > 0 ? Math.round(wordsTyped / timeElapsed) : 0;
    
    // Calculate accuracy
    let errorCount = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== targetText[i]) {
        errorCount++;
      }
    }
    const currentAccuracy = value.length > 0 
      ? Math.round(((value.length - errorCount) / value.length) * 100) 
      : 100;

    setWpm(currentWpm);
    setAccuracy(currentAccuracy);
    setMistakes(errorCount);
    setInput(value);

    // Check completion
    if (value.length === targetText.length) {
      if (currentAccuracy >= 90) {
        setIsCompleted(true);
        toast.success('Chapter Completed!', {
          description: `WPM: ${currentWpm} | Accuracy: ${currentAccuracy}%`
        });
      } else {
        toast.error('Accuracy too low', {
          description: 'Try again to achieve at least 90% accuracy.'
        });
      }
    }
  };

  const resetPractice = () => {
    setInput('');
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setIsCompleted(false);
    setMistakes(0);
    if (inputRef.current) inputRef.current.focus();
  };

  // Virtual Keyboard Keys
  const keysRows = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
    ['Space']
  ];

  const getHighlightClass = (key) => {
    const nextChar = targetText[input.length];
    if (!nextChar) return '';
    
    const lowerKey = key.toLowerCase();
    const lowerChar = nextChar.toLowerCase();

    if (key === 'Space' && nextChar === ' ') return 'bg-primary text-primary-foreground scale-105 shadow-lg shadow-primary/25';
    if (lowerKey === lowerChar) return 'bg-primary text-primary-foreground scale-105 shadow-lg shadow-primary/25';
    
    // Handle Shift for uppercase
    if (key === 'Shift' && nextChar !== lowerChar && nextChar.match(/[A-Z]/)) return 'bg-yellow-500 text-white';
    
    return 'bg-card hover:bg-accent';
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{chapter.title}</h1>
            <p className="text-muted-foreground text-sm">{chapter.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold font-mono">{wpm}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">WPM</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold font-mono ${accuracy < 90 ? 'text-red-500' : 'text-green-500'}`}>
              {accuracy}%
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Accuracy</div>
          </div>
          <Button variant="outline" size="icon" onClick={resetPractice}>
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Card className="p-8 mb-8 relative overflow-hidden min-h-[200px] flex flex-col justify-center">
        {/* Progress Bar */}
        <Progress value={(input.length / targetText.length) * 100} className="absolute top-0 left-0 h-1 rounded-none" />
        
        {/* Text Display */}
        <div className="font-mono text-3xl leading-relaxed break-all relative z-10" onClick={() => inputRef.current?.focus()}>
          {targetText.split('').map((char, index) => {
            let colorClass = 'text-muted-foreground/50';
            let bgClass = '';
            
            if (index < input.length) {
              const isCorrect = input[index] === char;
              colorClass = isCorrect ? 'text-primary' : 'text-red-500';
              bgClass = isCorrect ? '' : 'bg-red-500/10';
            } else if (index === input.length) {
              colorClass = 'text-foreground';
              bgClass = 'bg-primary/20 animate-pulse';
            }

            return (
              <span key={index} className={`relative px-[1px] rounded-sm ${colorClass} ${bgClass}`}>
                {char}
              </span>
            );
          })}
        </div>

        {/* Hidden Input */}
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInput}
          className="absolute opacity-0 top-0 left-0 h-full w-full cursor-default"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          disabled={isCompleted}
        />

        {isCompleted && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-20 animate-in fade-in zoom-in duration-300">
            <div className="text-center p-8 bg-card border rounded-xl shadow-2xl max-w-md w-full">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Chapter Complete!</h2>
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary">{wpm}</div>
                  <div className="text-sm text-muted-foreground">WPM</div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-green-500">{accuracy}%</div>
                  <div className="text-sm text-muted-foreground">Accuracy</div>
                </div>
              </div>
              <div className="flex gap-3 justify-center">
                <Button variant="outline" onClick={resetPractice}>Try Again</Button>
                <Button onClick={() => {
                  // Logic to go to next chapter could be added here
                  navigate('/typing');
                }}>Next Chapter</Button>
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Virtual Keyboard */}
      <div className="bg-card/50 p-6 rounded-xl border backdrop-blur-sm">
        <div className="flex flex-col gap-2 select-none">
          {keysRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-1.5">
              {row.map((key, keyIndex) => {
                let widthClass = 'w-10';
                if (key === 'Backspace') widthClass = 'w-20';
                if (key === 'Tab' || key === '\\') widthClass = 'w-16';
                if (key === 'Caps' || key === 'Enter') widthClass = 'w-20';
                if (key === 'Shift') widthClass = 'w-24';
                if (key === 'Space') widthClass = 'w-64';

                return (
                  <div
                    key={keyIndex}
                    className={`
                      h-10 flex items-center justify-center rounded-md text-sm font-medium transition-all duration-150 border
                      ${widthClass}
                      ${getHighlightClass(key)}
                    `}
                  >
                    {key === 'Space' ? ' ' : key}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypingChapterPage;
