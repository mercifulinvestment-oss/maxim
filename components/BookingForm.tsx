import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xwpgqvbn", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        // Fix: Use Object.prototype.hasOwnProperty.call instead of Object.hasOwn for compatibility
        if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
          setError(data.errors.map((err: any) => err.message).join(", "));
        } else {
          setError("Oops! There was a problem submitting your form");
        }
      }
    } catch (err) {
      setError("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 relative bg-slate-900">
        <div className="container mx-auto px-6 text-center">
            <div className="max-w-xl mx-auto glass-card p-12 rounded-3xl border border-green-500/30">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Request Received!</h3>
                <p className="text-slate-400">Our team will review your project and get back to you within 24 hours to schedule your consultation.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-primary-400 hover:text-primary-300 font-medium underline">Send another request</button>
            </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 relative">
       {/* Decorative BG */}
       <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-t from-primary-900/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Ready to Scale?</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Our calendar fills up fast. Secure your spot for a discovery call and let's discuss how Maxim can transform your digital presence.
            </p>
            
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center mt-1">
                        <span className="text-primary-400 font-bold">1</span>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white">Discovery</h4>
                        <p className="text-sm text-slate-400">We analyze your current standing and goals.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center mt-1">
                        <span className="text-primary-400 font-bold">2</span>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white">Strategy</h4>
                        <p className="text-sm text-slate-400">We build a custom roadmap for growth.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center mt-1">
                        <span className="text-primary-400 font-bold">3</span>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white">Execution</h4>
                        <p className="text-sm text-slate-400">We deploy, monitor, and optimize.</p>
                    </div>
                </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl border-t border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold mb-6">Book a Consultation</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-slate-400 mb-1">First Name</label>
                  <input 
                    id="firstName"
                    name="firstName"
                    required 
                    type="text" 
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all" 
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-slate-400 mb-1">Last Name</label>
                  <input 
                    id="lastName"
                    name="lastName"
                    required 
                    type="text" 
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all" 
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1">Email Address</label>
                <input 
                  id="email"
                  name="email"
                  required 
                  type="email" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all" 
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-medium text-slate-400 mb-1">Service Interest</label>
                <select 
                  id="service"
                  name="service"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all appearance-none text-slate-300"
                >
                    <option value="Copywriting">Copywriting</option>
                    <option value="Social Strategy">Social Strategy</option>
                    <option value="SEO Optimization">SEO Optimization</option>
                    <option value="Workflow Automation">Workflow Automation</option>
                    <option value="Full Agency Retainer">Full Agency Retainer</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1">Project Details</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4} 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              {error && (
                <div className="text-red-400 text-sm bg-red-900/20 p-3 rounded-lg border border-red-500/20">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-white text-slate-900 font-bold py-4 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
                ) : (
                  <>Submit Request <Send className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;