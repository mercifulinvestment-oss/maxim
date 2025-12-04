import React from 'react';
import { Instagram, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Maxim.</h2>
            <p className="text-slate-400 max-w-sm mb-6">
              We are a new breed of agency. We don't just market your product; we engineer your growth using cutting-edge technology and human creativity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Copywriting</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Social Strategy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Automation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-500" />
                hello@maxim-agency.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary-500" />
                123 Innovation Dr, Tech City
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Maxim Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;