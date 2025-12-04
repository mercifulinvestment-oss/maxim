import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-primary-500/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;