import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),rgba(59,130,246,0.15)_40%,transparent_70%)] blur-2xl" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400 text-white shadow-md">
            <Rocket size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight">UnifyDB.AI</span>
        </div>
        <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#cta" className="hover:text-white">Get started</a>
        </div>
      </nav>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-6 md:grid-cols-2 md:gap-12 lg:pb-24 lg:pt-10">
        <div className="order-2 space-y-6 md:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Enterprise-ready unified RAG infrastructure
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            The intelligent context layer for your AI agents and chatbots
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Unify all your data, orchestrate retrieval, and deliver precision context to every AI interaction. Secure, scalable, and blazing fast.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#cta" className="group inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-gray-900 shadow hover:opacity-95">
              Start free
              <span className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur hover:bg-white/10">
              See how it works
            </a>
          </div>
          <div className="flex items-center gap-6 pt-4 text-xs text-white/60">
            <div>SSO & RBAC</div>
            <div>PII-safe by design</div>
            <div> SOC2-ready </div>
          </div>
        </div>
        <div className="order-1 h-[420px] w-full rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur md:order-2 md:h-[520px]">
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <Spline 
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" 
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
