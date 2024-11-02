import React from 'react';
import { Zap, RefreshCw, Sparkles } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-red-500" />,
      title: 'Instant Generation',
      description: 'Transform URLs and ideas into polished articles within seconds.'
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-red-500" />,
      title: 'Continuous Learning',
      description: 'Our AI model continuously improves to deliver better results.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-red-500" />,
      title: 'Smart Processing',
      description: 'Advanced algorithms ensure high-quality, relevant content generation.'
    }
  ];

  return (
    <section className="w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-neutral-800 border border-red-900/20 rounded-lg hover:bg-neutral-700/50 transition-colors"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-red-400">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};