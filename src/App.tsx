import React from 'react';
import { Header } from './components/Header';
import { GeneratorForm } from './components/GeneratorForm';
import { Features } from './components/Features';
import { History } from './components/History';

export const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-neutral-900 text-white">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
            Transform Ideas into Articles..
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Leverage the power of AI to generate high-quality articles from URLs or your creative ideas.
            Fast, efficient, and tailored to your needs.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-16">
          <GeneratorForm />
          <History />
          <Features />
        </div>
      </main>
    </div>
  );
};
