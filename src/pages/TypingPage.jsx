import React from 'react';
import { Link } from 'react-router-dom';
import { typingLevels } from '@/data/typingData';
import { Keyboard, Gamepad2, Trophy, ArrowRight, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

const TypingPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-gradient">
          Master Your Typing Skills
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Level up your typing speed and accuracy with our structured lessons and interactive games.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {typingLevels.map((level) => (
          <Card key={level.id} className="group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Keyboard className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">{level.title}</CardTitle>
              <CardDescription>{level.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {level.chapters.length} Chapters
              </p>
            </CardContent>
            <CardFooter>
              <Link to={`/typing/level/${level.id}`} className="w-full">
                <Button className="w-full group-hover:bg-primary/90">
                  Start Level <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-16">
        <div className="rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-300">
                <Gamepad2 className="mr-2 h-4 w-4" />
                <span>New Feature</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Typing Bubble Game</h2>
              <p className="text-muted-foreground text-lg">
                Make practice fun! Shoot down falling bubbles by typing the words inside them. Challenge yourself and beat your high score.
              </p>
              <Link to="/typing/game">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white mt-4">
                  Play Now <Trophy className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-500/20 blur-2xl rounded-full" />
              <Gamepad2 className="w-32 h-32 text-purple-400 relative z-10 animate-bounce" style={{ animationDuration: '3s' }} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                <Timer className="mr-2 h-4 w-4" />
                <span>Benchmark</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Speed Test</h2>
              <p className="text-muted-foreground text-lg">
                Test your typing speed and accuracy with our professional typing test. Track your WPM progress over time.
              </p>
              <Link to="/typing/test">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white mt-4">
                  Start Test <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl rounded-full" />
              <Timer className="w-32 h-32 text-emerald-400 relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingPage;
