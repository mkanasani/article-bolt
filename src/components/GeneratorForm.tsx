import React, { useState } from 'react';
import { Send, Link, Lightbulb } from 'lucide-react';

export const GeneratorForm = () => {
  const [input, setInput] = useState('');
  const [inputType, setInputType] = useState<'url' | 'idea'>('idea');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://hook.us1.make.com/6gh97owns171phv1glw16729142j6fqn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input,
          type: inputType,
        }),
      });

      if (!response.ok) throw new Error('Failed to generate content');
      
      setGeneratedContent('Content has been submitted successfully!');
      setInput('');
    } catch (error) {
      console.error('Error:', error);
      setGeneratedContent('Failed to generate content. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      <div className="flex justify-center gap-4 mb-4">
        <button
          type="button"
          onClick={() => setInputType('url')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            inputType === 'url'
              ? 'bg-red-600 text-white'
              : 'bg-neutral-800 text-gray-400 hover:bg-neutral-700'
          }`}
        >
          <Link className="w-4 h-4" />
          URL
        </button>
        <button
          type="button"
          onClick={() => setInputType('idea')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            inputType === 'idea'
              ? 'bg-red-600 text-white'
              : 'bg-neutral-800 text-gray-400 hover:bg-neutral-700'
          }`}
        >
          <Lightbulb className="w-4 h-4" />
          Idea
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={inputType === 'url' ? 'Enter a URL to generate content from...' : 'Enter your article idea...'}
            className="w-full h-32 px-4 py-3 bg-neutral-800 border border-red-900/20 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none text-white placeholder-gray-400"
            required
          />
          <button
            type="submit"
            disabled={isLoading || (inputType === 'url' && !isValidUrl(input))}
            className="absolute bottom-4 right-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-md hover:from-red-700 hover:to-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            {isLoading ? 'Generating...' : 'Generate'}
          </button>
        </div>
      </form>

      {generatedContent && (
        <div className="p-6 bg-neutral-800 border border-red-900/20 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-red-400">Generated Content</h3>
          <div className="prose prose-invert max-w-none">
            {generatedContent}
          </div>
        </div>
      )}
    </div>
  );
};