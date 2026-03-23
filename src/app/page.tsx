import { Mail, ExternalLink, MapPin, Phone, Download } from 'lucide-react';

// Custom SVG icons for brands (not in lucide-react)
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const projects = [
  {
    title: "OpenMM SDK",
    description: "Open-source market making infrastructure supporting 4 CEXs with real-time WebSocket feeds, grid strategies, and multi-exchange order routing.",
    tech: ["TypeScript", "ccxt", "WebSocket", "PostgreSQL"],
    github: "https://github.com/3rd-Eye-Labs/OpenMM",
    demo: "https://docs.openmm.io",
    featured: true,
  },
  {
    title: "OpenMM MCP",
    description: "Model Context Protocol server enabling AI agents to execute trades across exchanges. Seamless integration with Claude, GPT, and other LLMs.",
    tech: ["TypeScript", "MCP SDK", "Zod"],
    github: "https://github.com/QBT-Labs/openmm-mcp",
    featured: true,
  },
  {
    title: "x402 Protocol",
    description: "Crypto micropayment protocol for AI agent services. Pay-per-request billing with stablecoin settlement on Cardano and EVM chains.",
    tech: ["TypeScript", "Ed25519", "Blockchain"],
    github: "https://github.com/QBT-Labs/x402",
    featured: true,
  },
  {
    title: "Indigo MCP",
    description: "MCP server for Indigo Protocol with 59 tools for CDP management, stability pools, and governance on Cardano's largest synthetic assets platform.",
    tech: ["TypeScript", "MCP SDK", "Blockfrost"],
    github: "https://github.com/IndigoProtocol/indigo-mcp",
  },
  {
    title: "Cardano MCP",
    description: "General-purpose MCP server for Cardano blockchain interactions. Wallet management, transactions, and native token operations.",
    tech: ["TypeScript", "MCP SDK", "Cardano"],
    github: "https://github.com/IndigoProtocol/cardano-mcp",
  },
  {
    title: "Indigo AI",
    description: "AI-powered toolkit for Indigo Protocol. Skills, agents, and automation for DeFi operations on Cardano.",
    tech: ["TypeScript", "AI Agents", "DeFi"],
    github: "https://github.com/IndigoProtocol/indigo-ai",
  },
  {
    title: "Cardano AI",
    description: "AI agent infrastructure for Cardano ecosystem. Building blocks for intelligent blockchain automation.",
    tech: ["TypeScript", "AI Agents", "Cardano"],
    github: "https://github.com/IndigoProtocol/cardano-ai",
  },
  {
    title: "dexter",
    description: "Open-source TypeScript SDK for Cardano DEX interactions. Supports Minswap, SundaeSwap, WingRiders, and more.",
    tech: ["TypeScript", "Cardano", "DEX"],
    github: "https://github.com/IndigoProtocol/dexter",
  },
];

const experience = [
  {
    title: "Founder & Technical Architect",
    company: "QBT Labs",
    period: "Sep 2025 – Present",
    location: "Remote (Cyprus)",
    description: "Architecting and building open-source AI trading infrastructure, MCP tooling, and payment protocols. Designing distributed systems for multi-exchange trading.",
  },
  {
    title: "Senior Blockchain Engineer",
    company: "Indigo Labs, Inc",
    period: "Aug 2022 – Present",
    location: "Remote (USA)",
    description: "Lead architect for Cardano's largest synthetic assets protocol ($50M+ TVL). Designed and built scalable indexer infrastructure, API layer, and market making systems.",
  },
  {
    title: "Senior Software Engineer",
    company: "Septeo Proptech",
    period: "Sep 2019 – Aug 2022",
    location: "Nice, France",
    description: "Architected high-availability microservices handling thousands of daily transactions. Led system design and established engineering best practices across teams.",
  },
  {
    title: "Software Engineer",
    company: "Amadeus IT Group",
    period: "Jun 2018 – Aug 2019",
    location: "Nice, France",
    description: "Built mission-critical travel reservation systems processing millions of transactions for global airlines.",
  },
];

const skills = {
  "system design": ["Distributed Systems", "Microservices", "Event-Driven Architecture", "API Design", "High-Availability Systems"],
  languages: ["TypeScript", "Node.js", "Python", "Rust", "C++"],
  frontend: ["React", "Next.js", "TailwindCSS", "shadcn/ui", "Vue.js"],
  backend: ["NestJS", "Express", "GraphQL", "REST APIs", "WebSocket", "Prisma"],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "ElasticSearch"],
  blockchain: ["Cardano", "Ethereum", "Solana", "DeFi", "Smart Contracts"],
  infrastructure: ["AWS", "Docker", "Kubernetes", "Cloudflare", "CI/CD"],
  ai: ["MCP SDK", "LLM Integration", "AI Agents", "AI-Assisted Development"],
  testing: ["Jest", "Playwright", "E2E Testing", "TDD"],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern" />
        
        {/* Noise texture */}
        <div className="noise-overlay" />
        
        {/* Animated glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4a90d9] opacity-[0.07] rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#6366f1] opacity-[0.05] rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4a90d9] opacity-[0.03] rounded-full blur-[150px]" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-[15%] w-20 h-20 border border-[#4a90d9]/20 rounded-lg rotate-12 animate-float" />
        <div className="absolute top-40 right-[20%] w-16 h-16 border border-[#6366f1]/20 rounded-full animate-float-reverse" />
        <div className="absolute bottom-32 left-[25%] w-12 h-12 bg-gradient-to-br from-[#4a90d9]/10 to-transparent rounded-lg rotate-45 animate-float-slow" />
        <div className="absolute bottom-40 right-[15%] w-24 h-24 border border-[#4a90d9]/10 rounded-xl -rotate-12 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-[10%] w-8 h-8 bg-[#4a90d9]/20 rounded-full blur-sm animate-float-reverse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 right-[10%] w-6 h-6 bg-[#6366f1]/20 rounded-full blur-sm animate-float" style={{ animationDelay: '1.5s' }} />
        
        {/* Code decoration - left side */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="font-mono text-[10px] text-[#4a90d9]/30 space-y-1">
            <p>{"{"}</p>
            <p className="pl-4">&quot;role&quot;: &quot;architect&quot;,</p>
            <p className="pl-4">&quot;systems&quot;: [</p>
            <p className="pl-8">&quot;distributed&quot;,</p>
            <p className="pl-8">&quot;blockchain&quot;,</p>
            <p className="pl-8">&quot;ai-trading&quot;</p>
            <p className="pl-4">],</p>
            <p className="pl-4">&quot;experience&quot;: &quot;8+&quot;</p>
            <p>{"}"}</p>
          </div>
        </div>
        
        {/* Code decoration - right side */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="font-mono text-[10px] text-[#4a90d9]/30 space-y-1 text-right">
            <p>const build = async () =&gt; {"{"}</p>
            <p className="pl-4">await design();</p>
            <p className="pl-4">await architect();</p>
            <p className="pl-4">await deploy();</p>
            <p className="pl-4">return success;</p>
            <p>{"}"};</p>
          </div>
        </div>
        
        {/* Main content */}
        <div className="relative z-10 text-center max-w-4xl">
          {/* Decorative line above title */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#4a90d9]/50" />
            <p className="text-[#4a90d9] font-mono text-sm tracking-[0.3em] uppercase">Staff Software Engineer</p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#4a90d9]/50" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text text-glow">
            Aggelos Kappos
          </h1>
          <p className="text-lg text-[#718096] mb-6">
            Founder, <a href="https://qbtlabs.io" target="_blank" rel="noopener noreferrer" className="text-[#4a90d9] hover:text-[#5ba0e9] transition-colors">QBT Labs</a>
          </p>
          
          <p className="text-xl md:text-2xl text-[#718096] mb-8 max-w-2xl mx-auto leading-relaxed">
            Architecting <span className="text-[#a3c9f1]">production-grade distributed systems</span>, 
            blockchain infrastructure, and <span className="text-[#a3c9f1]">AI-powered trading platforms</span>.
          </p>
          
          {/* Stats bar */}
          <div className="flex items-center justify-center gap-8 mb-8 text-sm">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-[#4a90d9]">8+</span>
              <span className="text-[#718096]">Years Exp</span>
            </div>
            <div className="w-[1px] h-8 bg-[#2a2a3a]" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-[#4a90d9]">8</span>
              <span className="text-[#718096]">Open Source</span>
            </div>
            <div className="w-[1px] h-8 bg-[#2a2a3a]" />
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#4a90d9]" />
              <span className="text-[#718096]">Cyprus</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mb-10">
            <a href="https://github.com/adacapo21" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full bg-[#12121a]/80 backdrop-blur-sm border border-[#2a2a3a] hover:border-[#4a90d9] hover:bg-[#1a1a25] hover:scale-110 transition-all duration-300">
              <GithubIcon size={24} />
            </a>
            <a href="https://linkedin.com/in/aggelos-kappos-4b668140" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full bg-[#12121a]/80 backdrop-blur-sm border border-[#2a2a3a] hover:border-[#4a90d9] hover:bg-[#1a1a25] hover:scale-110 transition-all duration-300">
              <LinkedinIcon size={24} />
            </a>
            <a href="mailto:aggeloskappos@gmail.com"
               className="p-3 rounded-full bg-[#12121a]/80 backdrop-blur-sm border border-[#2a2a3a] hover:border-[#4a90d9] hover:bg-[#1a1a25] hover:scale-110 transition-all duration-300">
              <Mail size={24} />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#4a90d9] hover:bg-[#5ba0e9] rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#4a90d9]/25">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-[#2a2a3a] hover:border-[#4a90d9] rounded-lg font-medium transition-all duration-300">
              Get In Touch
            </a>
            <a href="/AggelosKappos-CV.pdf" download className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-[#2a2a3a] hover:border-[#10b981] hover:text-[#10b981] rounded-lg font-medium transition-all duration-300">
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#718096]">
          <span className="text-xs font-mono tracking-wider">SCROLL</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#4a90d9] to-transparent animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[#a3c9f1] leading-relaxed mb-6">
              Staff-level engineer with <strong>8+ years</strong> architecting and building production systems 
              across fintech, blockchain, and enterprise software. Deep expertise in <strong>distributed systems design</strong>, 
              DeFi protocols, and AI-assisted development.
            </p>
            <p className="text-[#718096] leading-relaxed mb-6">
              I specialize in designing high-concurrency, low-latency architectures that scale. From building 
              real-time trading infrastructure handling millions of transactions to architecting blockchain 
              indexers and API layers for DeFi protocols — I own complex technical problems end-to-end.
            </p>
            <p className="text-[#718096] leading-relaxed">
              Currently leading infrastructure at Indigo Protocol while building open-source AI trading tools 
              at QBT Labs. Passionate about cross-chain interoperability, system design, and bridging 
              the gap between AI agents and blockchain infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-[#0c0c12]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Open Source Projects</h2>
          <p className="text-[#718096] mb-12">Tools and infrastructure I&apos;ve architected and built</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div 
                key={i}
                className={`bg-[#12121a]/80 backdrop-blur-sm border border-[#2a2a3a] rounded-xl p-6 hover:border-[#4a90d9] transition-all duration-300 group card-glow hover:-translate-y-1 ${
                  project.featured ? 'ring-1 ring-[#4a90d9]/20' : ''
                }`}
              >
                {project.featured && (
                  <span className="text-xs font-mono text-[#4a90d9] mb-3 block">FEATURED</span>
                )}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#4a90d9] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#718096] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-xs px-2 py-1 bg-[#1a1a25] rounded text-[#a3c9f1] font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="text-sm text-[#718096] hover:text-[#4a90d9] flex items-center gap-1 transition-colors">
                      <GithubIcon size={14} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                       className="text-sm text-[#718096] hover:text-[#4a90d9] flex items-center gap-1 transition-colors">
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          
          <div className="space-y-8">
            {experience.map((job, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-[#2a2a3a] hover:border-[#4a90d9] transition-colors">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#4a90d9]" />
                <div className="mb-1">
                  <span className="text-sm text-[#4a90d9] font-mono">{job.period}</span>
                </div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-[#a3c9f1] mb-2">{job.company} · {job.location}</p>
                <p className="text-[#718096] text-sm">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-[#0c0c12]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-mono text-[#4a90d9] uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-[#12121a] border border-[#2a2a3a] rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-[#718096] mb-8 max-w-lg mx-auto">
            Interested in working together? Let&apos;s connect.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a href="mailto:aggeloskappos@gmail.com"
               className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4a90d9] hover:bg-[#5ba0e9] rounded-lg font-medium transition-colors">
              <Mail size={18} /> aggeloskappos@gmail.com
            </a>
            <a href="tel:+35797555079"
               className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#12121a] border border-[#2a2a3a] hover:border-[#4a90d9] rounded-lg font-medium transition-colors">
              <Phone size={18} /> +357 97 555 079
            </a>
          </div>
          
          <div className="flex justify-center gap-4">
            <a href="https://github.com/adacapo21" target="_blank" rel="noopener noreferrer"
               className="text-[#718096] hover:text-white transition-colors">
              <GithubIcon size={24} />
            </a>
            <a href="https://linkedin.com/in/aggelos-kappos-4b668140" target="_blank" rel="noopener noreferrer"
               className="text-[#718096] hover:text-white transition-colors">
              <LinkedinIcon size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#2a2a3a]">
        <div className="max-w-4xl mx-auto text-center text-sm text-[#718096]">
          <p>© {new Date().getFullYear()} Aggelos Kappos</p>
        </div>
      </footer>
    </main>
  );
}
