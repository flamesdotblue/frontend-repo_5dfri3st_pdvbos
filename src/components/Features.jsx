import { Database, Layers, Shield, Rocket } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Unified connectors',
    desc: 'Ingest from databases, SaaS tools, files and data lakes into a single knowledge graph.',
  },
  {
    icon: Layers,
    title: 'Intelligent retrieval',
    desc: 'Hybrid search, metadata filtering, and semantic chunking that adapts to your data.',
  },
  {
    icon: Shield,
    title: 'Enterprise security',
    desc: 'Fine-grained access controls, audit trails, and tenant isolation built-in.',
  },
  {
    icon: Rocket,
    title: 'Production speed',
    desc: 'Streaming responses, low-latency cache, and horizontal scaling out-of-the-box.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Everything you need to power RAG at scale
        </h2>
        <p className="mt-3 text-white/70">
          Consolidate context across teams and tools. Ship reliable AI experiences without building infra from scratch.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/80 to-blue-500/80 text-white shadow">
              <Icon size={20} />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
