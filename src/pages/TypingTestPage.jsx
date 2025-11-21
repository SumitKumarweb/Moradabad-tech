import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RefreshCw, Timer, Trophy, Activity, Keyboard as KeyboardIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { markTypingTestCompleted } from '@/lib/progressService';
import { toast } from 'sonner';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const COMMON_WORDS = [
  "the", "be", "to", "of", "and", "a", "in", "that", "have", "I", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
  "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
  "so", "up", "out", "if", "about", "who", "get", "which", "go", "me", "when", "make", "can", "like", "time", "no", "just", "him", "know", "take",
  "people", "into", "year", "your", "good", "some", "could", "them", "see", "other", "than", "then", "now", "look", "only", "come", "its", "over", "think", "also",
  "back", "after", "use", "two", "how", "our", "work", "first", "well", "way", "even", "new", "want", "because", "any", "these", "give", "day", "most", "us"
];

const TypingTestPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
  const [duration, setDuration] = useState(30);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [words, setWords] = useState([]);
  const [input, setInput] = useState('');
  const [currWordIndex, setCurrWordIndex] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [incorrectChars, setIncorrectChars] = useState(0);
  const [wpmHistory, setWpmHistory] = useState([]);
  
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  const generateWords = useCallback(() => {
    const shuffled = [...COMMON_WORDS].sort(() => 0.5 - Math.random());
    setWords(shuffled.slice(0, 100));
  }, []);

  useEffect(() => {
    generateWords();
  }, [generateWords]);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            finishTest();
            return 0;
          }
          return prev - 1;
        });
        
        setWpmHistory(prev => [...prev, {
          time: duration - timeLeft + 1,
          wpm: calculateWpm()
        }]);
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isActive, timeLeft]);

  const calculateWpm = () => {
    const timeElapsed = duration - timeLeft;
    if (timeElapsed === 0) return 0;
    const grossWpm = (correctChars / 5) / (timeElapsed / 60);
    return Math.round(grossWpm);
  };

  const calculateAccuracy = () => {
    const total = correctChars + incorrectChars;
    if (total === 0) return 100;
    return Math.round((correctChars / total) * 100);
  };

  const finishTest = async () => {
    setIsActive(false);
    setIsFinished(true);
    clearInterval(timerRef.current);
    
    const finalWpm = calculateWpm();
    const finalAccuracy = calculateAccuracy();
    
    if (currentUser) {
      try {
        await markTypingTestCompleted(currentUser.uid, {
          wpm: finalWpm,
          accuracy: finalAccuracy,
          duration: duration
        });
        toast.success('Result saved to progress!');
      } catch (error) {
        console.error('Failed to save result:', error);
        toast.error('Failed to save result');
      }
    }
  };

  const handleInput = (e) => {
    const value = e.target.value;
    
    if (!isActive && !isFinished) {
      setIsActive(true);
    }

    if (isFinished) return;

    if (value.endsWith(' ')) {
      const currentWord = words[currWordIndex];
      const typedWord = value.trim();
      
      let correct = 0;
      let incorrect = 0;
      for (let i = 0; i < currentWord.length; i++) {
        if (typedWord[i] === currentWord[i]) correct++;
        else incorrect++;
      }
      incorrect += Math.abs(typedWord.length - currentWord.length);

      setCorrectChars(prev => prev + correct + 1);
      setIncorrectChars(prev => prev + incorrect);
      
      setCurrWordIndex(prev => prev + 1);
      setInput('');
    } else {
      setInput(value);
    }
  };

  const resetTest = () => {
    setIsActive(false);
    setIsFinished(false);
    setTimeLeft(duration);
    setCurrWordIndex(0);
    setCorrectChars(0);
    setIncorrectChars(0);
    setInput('');
    setWpmHistory([]);
    generateWords();
    if (inputRef.current) inputRef.current.focus();
  };

  const handleDurationChange = (newDuration) => {
    setDuration(newDuration);
    setTimeLeft(newDuration);
    resetTest();
  };

  // Virtual Keyboard Logic
  const keysRows = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
    ['Space']
  ];

  const getHighlightClass = (key) => {
    // Determine the next character to type
    const currentWord = words[currWordIndex] || '';
    const nextChar = input.length < currentWord.length 
      ? currentWord[input.length] 
      : ' '; // Expect space if word is done
    
    if (!nextChar) return '';
    
    const lowerKey = key.toLowerCase();
    const lowerChar = nextChar.toLowerCase();

    // Highlight logic
    if (key === 'Space' && nextChar === ' ') return 'bg-primary text-primary-foreground scale-105 shadow-[0_0_15px_rgba(var(--primary),0.5)] border-primary';
    if (lowerKey === lowerChar && key !== 'Shift' && key !== 'Caps' && key !== 'Tab' && key !== 'Enter' && key !== 'Backspace') {
      return 'bg-primary text-primary-foreground scale-105 shadow-[0_0_15px_rgba(var(--primary),0.5)] border-primary';
    }
    
    // Handle Shift for uppercase (though common words are usually lowercase, good to have)
    if (key === 'Shift' && nextChar !== lowerChar && nextChar.match(/[A-Z]/)) return 'bg-yellow-500 text-white';
    
    return 'bg-card/50 hover:bg-accent/50 text-muted-foreground';
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl min-h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" onClick={() => navigate('/typing')} className="hover:bg-primary/10">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <div className="flex items-center gap-2 px-4 py-2 bg-card/50 rounded-full border backdrop-blur-sm">
          <KeyboardIcon className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Pro Typing Test</span>
        </div>
        <div className="w-24"></div>
      </div>

      {!isFinished ? (
        <div className="flex-1 flex flex-col gap-6">
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="p-4 flex flex-col items-center justify-center bg-card/50 backdrop-blur-sm border-primary/10">
              <div className="text-4xl font-mono font-bold text-primary">{timeLeft}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Seconds</div>
            </Card>
            <Card className="p-4 flex flex-col items-center justify-center bg-card/50 backdrop-blur-sm border-primary/10">
              <div className="text-4xl font-mono font-bold">{calculateWpm()}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">WPM</div>
            </Card>
            <Card className="p-4 flex flex-col items-center justify-center bg-card/50 backdrop-blur-sm border-primary/10">
              <div className={`text-4xl font-mono font-bold ${calculateAccuracy() < 95 ? 'text-yellow-500' : 'text-green-500'}`}>
                {calculateAccuracy()}%
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Accuracy</div>
            </Card>
          </div>

          {/* Typing Area */}
          <Card className="flex-1 p-8 md:p-12 shadow-2xl border-primary/20 bg-black/20 backdrop-blur-md relative overflow-hidden flex flex-col justify-center min-h-[300px]">
            {/* Duration Selector */}
            <div className="absolute top-4 right-4 flex gap-2">
              {[15, 30, 60, 300].map(t => (
                <button
                  key={t}
                  onClick={() => handleDurationChange(t)}
                  className={`px-3 py-1 rounded-md text-sm transition-all ${duration === t ? 'bg-primary text-primary-foreground' : 'bg-muted/50 hover:bg-muted text-muted-foreground'}`}
                >
                  {t >= 60 ? `${t / 60}m` : `${t}s`}
                </button>
              ))}
            </div>

            <div className="relative text-3xl md:text-4xl font-mono leading-relaxed break-all tracking-wide" onClick={() => inputRef.current?.focus()}>
              <div className="pointer-events-none select-none">
                {words.slice(currWordIndex, currWordIndex + 15).map((word, i) => {
                  let className = "inline-block mr-4 transition-opacity duration-300 ";
                  if (i === 0) {
                    // Current word being typed
                    return (
                      <span key={i} className="inline-block mr-4 relative">
                        {word.split('').map((char, charIndex) => {
                          let charColor = 'text-muted-foreground';
                          if (charIndex < input.length) {
                            charColor = input[charIndex] === char ? 'text-primary' : 'text-red-500';
                          }
                          return <span key={charIndex} className={charColor}>{char}</span>;
                        })}
                        {/* Cursor */}
                        <span className="absolute -bottom-1 left-0 h-1 bg-primary animate-pulse transition-all duration-75" 
                              style={{ width: '1ch', transform: `translateX(${input.length}ch)` }} />
                      </span>
                    );
                  }
                  return <span key={i} className={className + "text-muted-foreground/30"}>{word}</span>;
                })}
              </div>
              
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInput}
                className="absolute inset-0 w-full h-full opacity-0 cursor-default"
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
            </div>
          </Card>

          {/* Virtual Keyboard */}
          <Card className="p-6 bg-card/30 backdrop-blur-sm border-t border-white/5">
            <div className="flex flex-col gap-2 select-none transform scale-90 md:scale-100 origin-top">
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
                          h-10 flex items-center justify-center rounded-md text-sm font-medium transition-all duration-100 border border-white/5
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
          </Card>
        </div>
      ) : (
        <div className="animate-in fade-in zoom-in duration-300 max-w-4xl mx-auto w-full">
          <Card className="p-8 md:p-12 shadow-2xl border-primary/20 bg-card/50 backdrop-blur-md">
            <div className="text-center mb-12">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6 ring-1 ring-primary/20">
                <Trophy className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">Test Complete!</h2>
              <p className="text-muted-foreground">Here is how you performed</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-background/50 rounded-2xl border border-white/5">
                <div className="text-5xl font-bold text-primary mb-2">{calculateWpm()}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">WPM</div>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-2xl border border-white/5">
                <div className="text-5xl font-bold text-green-500 mb-2">{calculateAccuracy()}%</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Accuracy</div>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-2xl border border-white/5">
                <div className="text-5xl font-bold text-blue-500 mb-2">{correctChars}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Characters</div>
              </div>
            </div>

            <div className="h-[300px] w-full mb-8 bg-background/30 rounded-xl p-4 border border-white/5">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={wpmHistory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.1} />
                  <XAxis dataKey="time" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                    itemStyle={{ color: 'hsl(var(--primary))' }}
                  />
                  <Line type="monotone" dataKey="wpm" stroke="hsl(var(--primary))" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="flex justify-center gap-4">
              <Button size="lg" onClick={resetTest} className="h-12 px-8 text-lg">
                <RefreshCw className="mr-2 h-5 w-5" /> Try Again
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/progress')} className="h-12 px-8 text-lg">
                <Activity className="mr-2 h-5 w-5" /> View Progress
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TypingTestPage;
