import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { typingLevels } from '@/data/typingData';
import { ArrowLeft, BookOpen, Keyboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const TypingLevelPage = () => {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const level = typingLevels.find((l) => l.id === parseInt(levelId));

  if (!level) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Level not found</h2>
        <Button onClick={() => navigate('/typing')}>Back to Typing Home</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-8">
        <Link to="/typing" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Levels
        </Link>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{level.title}</h1>
        <p className="text-muted-foreground text-lg">{level.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {level.chapters.map((chapter, index) => (
          <Card key={chapter.id} className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-primary">
                  {index + 1}
                </div>
                <BookOpen className="w-5 h-5 text-muted-foreground" />
              </div>
              <CardTitle className="text-xl">{chapter.title}</CardTitle>
              <CardDescription>{chapter.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {chapter.keys.map((key, i) => (
                  <span key={i} className="px-2 py-1 rounded bg-muted text-xs font-mono border border-border">
                    {key}
                  </span>
                ))}
              </div>
              <Link to={`/typing/chapter/${chapter.id}`}>
                <Button className="w-full" variant="outline">
                  Start Practice <Keyboard className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TypingLevelPage;
