export default function CTA() {
  return (
    <section id="cta" className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-600/30 via-blue-600/30 to-amber-400/20 p-8 text-center backdrop-blur">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_60%)]" />
        <h3 className="relative text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Start building with unified context today
        </h3>
        <p className="relative mx-auto mt-3 max-w-2xl text-white/80">
          Get a free sandbox. No credit card required.
        </p>
        <form
          className="relative mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="work email"
            className="h-11 w-full flex-1 rounded-lg border border-white/20 bg-white/90 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <button
            type="submit"
            className="h-11 rounded-lg bg-white px-6 font-medium text-gray-900 shadow hover:opacity-95"
          >
            Get access
          </button>
        </form>
        <div className="relative mt-4 text-xs text-white/70">SOC2-ready • GDPR compliant • SSO</div>
      </div>
    </section>
  );
}
