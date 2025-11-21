import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getLevelInfo } from '@/data/typingData';
import { ArrowLeft, BookOpen, Keyboard, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const TypingLevelPage = () => {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const level = getLevelInfo(levelId);

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
        <h1 className="text-3xl font-bold tracking-tight mb-2">{level.name}</h1>
        <p className="text-muted-foreground text-lg">{level.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {level.texts.map((text, index) => (
          <Card key={text.id} className="hover:border-primary/50 transition-colors flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-primary">
                  {index + 1}
                </div>
                <BookOpen className="w-5 h-5 text-muted-foreground" />
              </div>
              <CardTitle className="text-xl">{text.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {text.text.substring(0, 100)}...
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {[...Array(text.difficulty || 1)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <Link to={`/typing/chapter/${text.id}`}>
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
