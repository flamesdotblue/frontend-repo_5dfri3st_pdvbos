import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b12] selection:bg-purple-500/30 selection:text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <footer className="mx-auto max-w-7xl px-6 pb-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} UnifyDB.AI — The unified RAG infrastructure for enterprises.
      </footer>
    </div>
  );
}

export default App;
