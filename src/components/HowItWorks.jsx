const steps = [
  {
    step: '01',
    title: 'Connect & sync',
    desc: 'Secure connectors stream your sources into a unified knowledge layer with incremental updates.',
  },
  {
    step: '02',
    title: 'Enrich & index',
    desc: 'Automatic chunking, embeddings, metadata, and policies are applied for precise retrieval.',
  },
  {
    step: '03',
    title: 'Query & deliver',
    desc: 'Your agents and chat apps call a single API to get the best possible context every time.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">How it works</h2>
        <p className="mt-3 text-white/70">
          Purpose-built for enterprise AI: fast setup, rich controls, and rock-solid performance.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.step}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="text-sm font-mono text-white/60">{s.step}</div>
            <h3 className="mt-2 text-xl font-medium text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-amber-400/10 p-6 text-center text-white/80">
        <p>
          Plug into your LLM stack in minutes. Use with OpenAI, Anthropic, Azure, self-hosted models and more.
        </p>
      </div>
    </section>
  );
}
