import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, RotateCcw, Trophy, Heart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const WORDS = [
  "react", "javascript", "code", "typing", "speed", "game", "bubble", "shoot",
  "function", "variable", "const", "let", "array", "object", "string", "number",
  "boolean", "promise", "async", "await", "component", "hook", "state", "effect",
  "router", "style", "css", "html", "web", "dev", "frontend", "backend", "fullstack",
  "node", "database", "server", "client", "api", "json", "xml", "http", "https",
  "debug", "deploy", "git", "branch", "merge", "commit", "push", "pull", "clone"
];

const TypingGame = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('start'); // start, playing, gameover
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [input, setInput] = useState('');
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  
  // Game refs
  const bubblesRef = useRef([]);
  const particlesRef = useRef([]);
  const projectilesRef = useRef([]);
  const scoreRef = useRef(0);
  const livesRef = useRef(3);
  const animationFrameRef = useRef();
  const lastSpawnTimeRef = useRef(0);
  const spawnRateRef = useRef(2000);
  const comboRef = useRef(0);

  // Particle system
  const createParticles = (x, y, color) => {
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 * i) / 12;
      const speed = Math.random() * 2 + 2;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1.0,
        color,
        size: Math.random() * 3 + 2
      });
    }
  };

  // Projectile system
  const shootProjectile = (targetX, targetY) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const startX = canvas.width / 2;
    const startY = canvas.height - 50;
    
    const angle = Math.atan2(targetY - startY, targetX - startX);
    const speed = 15;
    
    projectilesRef.current.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      targetId: null, // Could be used for homing
      color: '#a855f7' // Purple
    });
  };

  const spawnBubble = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const word = WORDS[Math.floor(Math.random() * WORDS.length)];
    const radius = 35 + word.length * 2;
    const x = Math.random() * (canvas.width - radius * 2) + radius;
    
    // Dynamic difficulty
    const speedMultiplier = 1 + (scoreRef.current / 1000);
    
    bubblesRef.current.push({
      id: Date.now() + Math.random(),
      word,
      x,
      y: -radius,
      radius,
      speed: (1 + Math.random()) * speedMultiplier,
      color: `hsl(${Math.random() * 60 + 240}, 70%, 60%)`, // Blue to Purple range
      pulse: 0
    });
  }, []);

  const updateGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || gameState !== 'playing') return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background grid effect
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    const gridSize = 50;
    const offset = (Date.now() / 50) % gridSize;
    
    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = offset; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Spawn logic
    const now = Date.now();
    if (now - lastSpawnTimeRef.current > spawnRateRef.current) {
      spawnBubble();
      lastSpawnTimeRef.current = now;
      spawnRateRef.current = Math.max(800, 2000 - scoreRef.current / 2);
    }

    // Update Bubbles
    bubblesRef.current.forEach((bubble, index) => {
      bubble.y += bubble.speed;
      bubble.pulse += 0.05;

      // Draw Bubble with Glow
      const pulseSize = Math.sin(bubble.pulse) * 2;
      
      ctx.shadowBlur = 20;
      ctx.shadowColor = bubble.color;
      ctx.beginPath();
      ctx.arc(bubble.x, bubble.y, bubble.radius + pulseSize, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(20, 20, 30, 0.8)';
      ctx.fill();
      ctx.strokeStyle = bubble.color;
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw Text
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 18px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(bubble.word, bubble.x, bubble.y);

      // Check collision with bottom
      if (bubble.y - bubble.radius > canvas.height) {
        bubblesRef.current.splice(index, 1);
        livesRef.current -= 1;
        setLives(livesRef.current);
        comboRef.current = 0;
        setCombo(0);
        
        // Screen shake effect (simulated)
        canvas.style.transform = 'translate(5px, 5px)';
        setTimeout(() => canvas.style.transform = 'none', 50);

        if (livesRef.current <= 0) {
          setGameState('gameover');
        }
      }
    });

    // Update Projectiles
    projectilesRef.current.forEach((proj, index) => {
      proj.x += proj.vx;
      proj.y += proj.vy;
      
      ctx.beginPath();
      ctx.arc(proj.x, proj.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = proj.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = proj.color;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Remove off-screen projectiles
      if (proj.y < 0 || proj.x < 0 || proj.x > canvas.width) {
        projectilesRef.current.splice(index, 1);
      }
    });

    // Update Particles
    particlesRef.current.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.02;
      p.size *= 0.95;

      if (p.life <= 0) {
        particlesRef.current.splice(index, 1);
      } else {
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    });

    if (livesRef.current > 0) {
      animationFrameRef.current = requestAnimationFrame(updateGame);
    }
  }, [gameState, spawnBubble]);

  useEffect(() => {
    if (gameState === 'playing') {
      const canvas = canvasRef.current;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      bubblesRef.current = [];
      particlesRef.current = [];
      projectilesRef.current = [];
      scoreRef.current = 0;
      livesRef.current = 3;
      comboRef.current = 0;
      
      setScore(0);
      setLives(3);
      setCombo(0);
      setInput('');
      lastSpawnTimeRef.current = Date.now();
      
      updateGame();
    }
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gameState, updateGame]);

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);

    // Check for matches
    const matchIndex = bubblesRef.current.findIndex(b => b.word === value);
    if (matchIndex !== -1) {
      const bubble = bubblesRef.current[matchIndex];
      
      // Visual effects
      createParticles(bubble.x, bubble.y, bubble.color);
      shootProjectile(bubble.x, bubble.y);
      
      // Remove bubble
      bubblesRef.current.splice(matchIndex, 1);
      
      // Score logic
      comboRef.current += 1;
      setCombo(comboRef.current);
      if (comboRef.current > maxCombo) setMaxCombo(comboRef.current);

      const points = bubble.word.length * 10 * (1 + Math.floor(comboRef.current / 5) * 0.5);
      scoreRef.current += Math.floor(points);
      setScore(scoreRef.current);
      
      setInput('');
    }
  };

  return (
    <div className="container mx-auto py-6 px-4 h-[calc(100vh-4rem)] flex flex-col bg-slate-950">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 bg-slate-900/50 p-4 rounded-xl border border-slate-800 backdrop-blur-sm">
        <Button variant="ghost" onClick={() => navigate('/typing')} className="text-slate-300 hover:text-white hover:bg-white/10">
          <ArrowLeft className="mr-2 h-4 w-4" /> Exit
        </Button>
        
        <div className="flex gap-8">
          <div className="flex flex-col items-center">
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Score</div>
            <div className="flex items-center gap-2 text-yellow-400">
              <Trophy className="w-5 h-5" />
              <span className="text-3xl font-bold font-mono">{score}</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Combo</div>
            <div className="flex items-center gap-2 text-purple-400">
              <Zap className={`w-5 h-5 ${combo > 5 ? 'animate-pulse' : ''}`} />
              <span className="text-3xl font-bold font-mono">x{combo}</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Lives</div>
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <Heart 
                  key={i} 
                  className={`w-6 h-6 transition-all ${i < lives ? 'text-red-500 fill-red-500' : 'text-slate-700'}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Game Area */}
      <Card className="flex-1 relative overflow-hidden bg-slate-900 border-slate-800 shadow-2xl rounded-xl ring-1 ring-white/10">
        {/* Start Screen */}
        {gameState === 'start' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/80 backdrop-blur-md text-white animate-in fade-in duration-500">
            <div className="relative mb-8 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <h1 className="relative text-7xl font-black bg-black px-8 py-4 rounded-lg tracking-tighter">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  NEON TYPER
                </span>
              </h1>
            </div>
            <p className="mb-12 text-xl text-slate-300 font-light tracking-wide">Destroy the words before they breach the firewall</p>
            <Button 
              size="lg" 
              onClick={() => setGameState('playing')} 
              className="text-xl px-12 py-8 bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all shadow-lg shadow-purple-500/25"
            >
              <Play className="mr-3 h-6 w-6" /> INITIALIZE
            </Button>
          </div>
        )}

        {/* Game Over Screen */}
        {gameState === 'gameover' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/90 backdrop-blur-md text-white animate-in zoom-in duration-300">
            <h2 className="text-6xl font-black mb-2 text-red-500 tracking-tight">SYSTEM FAILURE</h2>
            <div className="text-center mb-12 space-y-2">
              <p className="text-3xl font-mono text-slate-300">Final Score: <span className="text-white">{score}</span></p>
              <p className="text-xl font-mono text-purple-400">Max Combo: x{maxCombo}</p>
            </div>
            <Button 
              size="lg" 
              onClick={() => setGameState('playing')} 
              className="text-xl px-10 py-6 bg-white text-black hover:bg-slate-200 hover:scale-105 transition-all"
            >
              <RotateCcw className="mr-3 h-6 w-6" /> REBOOT SYSTEM
            </Button>
          </div>
        )}

        <canvas 
          ref={canvasRef} 
          className="w-full h-full block cursor-none"
        />

        {/* Input Area */}
        {gameState === 'playing' && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-lg">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <input
                type="text"
                value={input}
                onChange={handleInput}
                className="relative w-full px-8 py-4 text-3xl text-center bg-black border border-slate-800 rounded-full text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 font-mono tracking-wider shadow-2xl"
                placeholder="TYPE TO SHOOT"
                autoFocus
                spellCheck="false"
              />
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default TypingGame;
