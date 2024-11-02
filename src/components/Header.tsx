import React from 'react';
import { BrainCog } from 'lucide-react';

export const Header = () => {
  return (
    <header className="w-full py-6 px-4 bg-gradient-to-r from-black to-neutral-900 border-b border-red-900/20">
      <div className="max-w-6xl mx-auto flex items-center">
        <div className="flex items-center gap-2">
          <BrainCog className="w-8 h-8 text-red-500" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
            ArticleAI
          </h1>
        </div>
      </div>
    </header>
  );
}