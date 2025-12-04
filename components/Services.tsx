import React, { useState } from 'react';
import { PenTool, Share2, TrendingUp, Zap, Bot, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { generateMarketingTagline } from '../services/geminiService';

const Services: React.FC = () => {
  const [brandName, setBrandName] = useState('');
  const [industry, setIndustry] = useState('');
  const [tagline, setTagline] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !industry) return;
    
    setLoading(true);
    setTagline(null);
    
    try {
      const result = await generateMarketingTagline(brandName, industry);
      setTagline(result);
    } catch (err) {
      setTagline("Could not generate at this time.");
    } finally {
      setLoading(false);
    }
  };

  const services = [
    {
      icon: <PenTool className="w-8 h-8 text-pink-400" />,
      title: "Copywriting",
      description: "Persuasive copy that speaks directly to your audience's pain points and drives immediate action."
    },
    {
      icon: <Share2 className="w-8 h-8 text-blue-400" />,
      title: "Social Strategy",
      description: "Community-first social campaigns that build loyalty and turn followers into brand advocates."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "SEO Optimization",
      description: "Technical and content-driven SEO to ensure you dominate search rankings for high-intent keywords."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Workflow Automation",
      description: "Custom AI and automation pipelines to streamline your marketing operations and save hours daily."
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group">
              <div className="mb-6 bg-slate-800/50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* AI Demo Section */}
        <div className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border-t border-primary-500/30 overflow-hidden relative">
           <div className="absolute top-0 right-0 p-32 bg-primary-600/20 blur-[100px] rounded-full pointer-events-none" />
           
           <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
             <div>
               <div className="inline-flex items-center gap-2 text-primary-400 font-semibold mb-2">
                 <Bot className="w-5 h-5" />
                 <span>Experience Our Automation</span>
               </div>
               <h3 className="text-3xl font-bold mb-4">Instant Strategy Generator</h3>
               <p className="text-slate-400 mb-6">
                 See the power of our internal tools. Generate a high-converting tagline for your brand instantly using our fine-tuned AI models.
               </p>
             </div>

             <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5">
               <form onSubmit={handleGenerate} className="space-y-4">
                 <div>
                   <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">Brand Name</label>
                   <input 
                    type="text"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="e.g. Acme Corp"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-slate-600"
                   />
                 </div>
                 <div>
                   <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">Industry</label>
                   <input 
                    type="text"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    placeholder="e.g. SaaS, Fashion"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-slate-600"
                   />
                 </div>
                 <button 
                  type="submit"
                  disabled={loading || !brandName || !industry}
                  className="w-full bg-primary-600 hover:bg-primary-500 text-white font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                   Generate Magic
                 </button>
               </form>
               
               {tagline && (
                 <div className="mt-4 p-4 bg-primary-900/30 border border-primary-500/20 rounded-lg animate-fade-in">
                   <p className="text-xs text-primary-300 mb-1">AI Suggestion:</p>
                   <p className="text-lg font-medium text-white">"{tagline}"</p>
                 </div>
               )}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Services;