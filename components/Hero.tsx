import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary-700/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[0%] left-[20%] w-[30%] h-[30%] bg-pink-600/10 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border-primary-500/30">
          <Sparkles className="w-4 h-4 text-primary-400" />
          <span className="text-sm font-medium text-primary-200">Agency of the Year 2024</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
          Scale Your Brand <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">Without Limits.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Maxim is a digital powerhouse blending data-driven strategies with world-class creative to dominate your market.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact"
            className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-primary-900/50"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#services"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-semibold transition-all hover:scale-105 backdrop-blur-sm"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;