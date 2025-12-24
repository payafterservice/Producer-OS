
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, Database, BarChart3, Sparkles, 
  BrainCircuit, Mail, HardDrive, FileSpreadsheet, MessageCircle, 
  ShieldCheck, PieChart, Users, FileText, Settings, BadgeCheck, Send, CheckCircle2
} from 'lucide-react';
import WaterBackground from '../components/WaterBackground';
import Branding from '../components/Branding';

// --- Components ---

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.19, 1, 0.22, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Button: React.FC<{ children: React.ReactNode; href?: string; onClick?: () => void; className?: string; variant?: 'primary' | 'outline' }> = ({ children, href, onClick, className = "", variant = 'outline' }) => {
  const baseClasses = `group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${className}`;
  const variantClasses = variant === 'primary' 
    ? 'bg-brand text-white shadow-[0_0_20px_rgba(46,65,182,0.4)]' 
    : 'bg-white/10 ante-border text-silver hover:bg-white/20';
  
  const content = (
    <span className={`relative z-10 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] ${variant === 'primary' ? 'font-black' : 'font-bold'}`}>
      {children}
    </span>
  );

  if (href) {
    if (href.startsWith('#')) {
      const handleScroll = (e: React.MouseEvent) => {
        e.preventDefault();
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        if (onClick) onClick();
      };
      return <a href={href} onClick={handleScroll} className={`${baseClasses} ${variantClasses}`}>{content}</a>;
    }
    return <a href={href} className={`${baseClasses} ${variantClasses}`}>{content}</a>;
  }
  return <button onClick={onClick} className={`${baseClasses} ${variantClasses}`}>{content}</button>;
};

// --- Hero ---

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-black">
      <WaterBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none z-1"></div>
      
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-6xl mx-auto space-y-8 flex flex-col items-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md ante-border mb-2">
            <span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse-slow"></span>
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-silver font-bold">Built by Multi-Million Dollar Producers</span>
          </div>
        </FadeIn>
        
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        >
             <Branding size="hero" className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]" />
        </motion.div>

        <div className="space-y-8 max-w-2xl mx-auto flex flex-col items-center">
            <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[15px] md:text-[18px] text-silver/80 leading-relaxed tracking-tight font-light drop-shadow-sm"
            >
            Engineered by <span className="text-silver font-medium">Dennis M. Postema</span>. We architect the intelligent infrastructure for Insurance & Annuity producers to scale revenue without increasing overhead.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex justify-center gap-4">
              <Button href="#contact" variant="primary">
                Deploy Your OS <ArrowRight className="w-3 h-3 text-white" />
              </Button>
              <Button href="#about">Learn More</Button>
            </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[8px] font-mono uppercase tracking-[0.3em] font-bold text-silver">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-silver to-transparent"></div>
      </motion.div>

      <div className="absolute bottom-0 w-full border-t border-white/[0.05] bg-black/60 backdrop-blur-md z-20">
         <div className="w-full mx-auto overflow-hidden py-4 opacity-50 mask-marquee">
            <div className="flex items-center gap-24 md:gap-32 animate-scroll w-max grayscale text-silver">
                {["ANNUITY FLOW", "LIFE OS", "LEAD GEN", "D-MAC DIGITAL", "AUTO POLICY", "RECRUITER AI", "CLAIM BOT", "AGENT DASH"].map((brand, i) => (
                    <span key={i} className="text-[11px] font-mono tracking-[0.4em] font-bold uppercase hover:text-brand transition-colors cursor-default">{brand}</span>
                ))}
                {["ANNUITY FLOW", "LIFE OS", "LEAD GEN", "D-MAC DIGITAL", "AUTO POLICY", "RECRUITER AI", "CLAIM BOT", "AGENT DASH"].map((brand, i) => (
                    <span key={`dup-${i}`} className="text-[11px] font-mono tracking-[0.4em] font-bold uppercase hover:text-brand transition-colors cursor-default">{brand}</span>
                ))}
            </div>
         </div>
      </div>
    </section>
  );
};

// --- Revenue ---

const RevenueSection = () => {
  return (
    <section id="about" className="bg-black py-16 md:py-24 border-b border-white/[0.05]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif italic text-silver mb-4 tracking-tighter leading-tight text-silver-gradient">Engineered for Commission Velocity</h2>
            <p className="text-muted text-[15px] md:text-[16px] leading-relaxed font-light text-balance">
              We build the same bespoke automation stacks used by Dennis to generate millions in the Insurance and Annuity industry.
            </p>
          </FadeIn>
        </div>

        <FadeIn className="relative ante-card overflow-hidden mb-12 max-w-5xl mx-auto group hover:scale-[1.01] transition-all duration-700">
          <div className="flex flex-col md:flex-row min-h-[440px]">
            <div className="p-8 md:p-12 md:w-[55%] flex flex-col justify-center relative z-10 order-2 md:order-1">
              <div className="flex gap-1.5 mb-5 text-silver">
                <BadgeCheck className="w-5 h-5 text-brand" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand font-bold">Verified Origin Story</span>
              </div>
              <blockquote className="text-xl md:text-2xl text-silver font-serif italic leading-relaxed mb-8 tracking-tight">
                "The biggest bottleneck for producers is manual follow-up and policy tracking. 
                <br/><br/>
                I built <span className="text-brand font-sans not-italic font-bold">Producer OS.Ai</span> to solve my own problems."
              </blockquote>
              
              <div className="mb-6">
                <h4 className="text-silver font-bold text-[17px] tracking-tight text-silver-gradient">Dennis M. Postema</h4>
                <p className="text-dim text-[9px] font-mono mt-1.5 uppercase tracking-[0.3em] font-bold">Founder & Multi-Million Dollar Producer</p>
              </div>

              <div className="flex gap-5">
                {[ShieldCheck, PieChart, Users].map((Icon, idx) => (
                  <div key={idx} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all ante-border">
                    <Icon className="w-4 h-4 text-silver" strokeWidth={1.5} />
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-[45%] relative min-h-[350px] md:min-h-[250px] bg-black order-1 md:order-2 overflow-hidden border-l border-white/[0.05]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-transparent z-10 hidden md:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent z-10 md:hidden"></div>
              <img 
                src="https://lh3.googleusercontent.com/d/1gFEinqZRnyBevAPnRHVUvqSx6Yv8IUHH" 
                alt="Dennis M. Postema" 
                className="absolute inset-0 w-full h-full object-cover object-top grayscale opacity-40 mix-blend-luminosity group-hover:scale-[1.03] group-hover:opacity-70 transition-all duration-1000" 
              />
            </div>
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12 text-left">
            {[
              { title: "Underwriting Flow", desc: "Automate the data gathering and initial vetting for policies, saving your agents 15+ hours per week per desk." },
              { title: "Annuity Pipelines", desc: "Keep track of complex multi-touch cycles with intelligence that nurtures prospects based on triggers." },
              { title: "Recruitment Scaling", desc: "Auto-vet and onboard new agents into your downline using the exact script-engine that Dennis perfected." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <h3 className="text-xl md:text-2xl font-serif italic text-silver mb-3 tracking-tight">{item.title}</h3>
                <p className="text-muted text-[14px] leading-relaxed font-light">{item.desc}</p>
              </FadeIn>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { label: "Production Volume", val: "$70M+", sub: "Total volume automated for our partners." },
              { label: "Retention Rate", val: "4x Higher", sub: "Increased client stickiness via nurture." },
              { label: "Agencies Live", val: "250+", sub: "Custom industry stacks deployed." }
            ].map((stat, i) => (
              <FadeIn key={i} delay={0.3 + (i * 0.1)} className="p-8 md:p-10 ante-card group hover:scale-[1.02] transition-transform text-left">
                <h4 className="text-[15px] font-sans font-bold text-dim mb-6 group-hover:text-silver transition-colors duration-500">{stat.label}</h4>
                <div className="space-y-2">
                  <p className="text-3xl md:text-4xl font-serif italic text-brand tracking-tighter">{stat.val}</p>
                  <div className="h-[1px] w-full bg-white/[0.05]"></div>
                  <p className="text-[9px] text-dim uppercase tracking-[0.25em] font-mono leading-relaxed font-bold">{stat.sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Services ---

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-6 md:px-12 text-center mb-12 md:mb-16">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-serif italic text-silver tracking-tighter max-w-3xl mx-auto leading-[0.92] text-silver-gradient">
            Total Agency Orchestration
          </h2>
        </FadeIn>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-5">
          <div className="lg:col-span-5 flex flex-col gap-5">
            <FadeIn className="px-2 mb-2 text-left">
              <h3 className="text-2xl font-serif italic text-silver mb-4">Producer OS Services</h3>
              <div className="space-y-4">
                {[
                  { label: "Operational Fluidity", text: "Remove the chaos of policy follow-ups and claim tracking." },
                  { label: "Predictable Scale", text: "Use our proprietary data loops to find your next whale client." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <Sparkles className="w-4 h-4 text-brand opacity-80 mt-1 shrink-0" />
                    <p className="text-muted text-[14px] font-light leading-relaxed tracking-tight">
                      <span className="text-silver font-bold uppercase text-[10px] tracking-widest">{item.label}:</span> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="p-8 md:p-10 ante-card group text-left">
              <div className="w-12 h-12 ante-border rounded-2xl flex items-center justify-center mb-5 text-silver bg-white/10 group-hover:bg-white/20 transition-all duration-700">
                <Database className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif italic text-silver mb-2">Lead Intelligence</h3>
              <p className="text-muted text-[13px] leading-relaxed font-light">Stop guessing. We score your inbound traffic using models trained on industry data.</p>
            </FadeIn>

            <FadeIn delay={0.2} className="p-8 md:p-10 ante-card group text-left">
              <div className="w-12 h-12 ante-border rounded-2xl flex items-center justify-center mb-5 text-silver bg-white/10 group-hover:bg-white/20 transition-all duration-700">
                <BarChart3 className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif italic text-silver mb-2">Commission Logic</h3>
              <p className="text-muted text-[13px] leading-relaxed font-light">Real-time tracking of complex carrier payouts and agent overrides.</p>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-5">
            <FadeIn delay={0.1} className="flex-1 ante-card p-10 md:p-12 relative overflow-hidden flex flex-col group transition-all duration-1000 text-left h-full">
              <div className="relative z-10 max-w-md mb-6">
                <h3 className="text-2xl md:text-3xl font-serif italic text-silver mb-4 leading-tight">Carrier Integration</h3>
                <p className="text-muted text-[15px] md:text-[16px] font-light leading-relaxed">We build bridges between your CRM and carrier portals, automating the repetitive data-entry that kills productivity.</p>
              </div>
              
              <div className="flex-grow relative flex items-center justify-center min-h-[250px] md:min-h-[350px]">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-black ante-border rounded-3xl flex items-center justify-center z-20 shadow-2xl group-hover:scale-105 transition-transform duration-1000">
                  <BrainCircuit className="w-8 h-8 text-silver" strokeWidth={1.5} />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <svg className="w-full h-full overflow-visible" viewBox="-150 -150 300 300">
                    {[ShieldCheck, HardDrive, MessageCircle, FileText, PieChart, FileSpreadsheet].map((_, idx) => {
                      const angle = (idx / 6) * Math.PI * 2;
                      const radius = window.innerWidth > 768 ? 120 : 80; 
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;
                      return (
                        <motion.line
                          key={idx}
                          x1="0"
                          y1="0"
                          x2={x}
                          y2={y}
                          stroke="currentColor"
                          className="text-white/10 group-hover:text-brand transition-colors duration-700"
                          strokeWidth="0.5"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1.5, delay: idx * 0.1, ease: "easeOut" }}
                        />
                      );
                    })}
                  </svg>
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-90">
                  {[ShieldCheck, HardDrive, MessageCircle, FileText, PieChart, FileSpreadsheet].map((Icon, idx) => {
                    const angle = (idx / 6) * Math.PI * 2;
                    const radius = window.innerWidth > 768 ? 120 : 80; 
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    return (
                      <div 
                        key={idx} 
                        className="absolute w-10 h-10 md:w-12 md:h-12 bg-black/80 backdrop-blur-sm ante-border rounded-xl flex items-center justify-center transition-all duration-700 group-hover:bg-brand group-hover:border-brand/50 z-20"
                        style={{ transform: `translate(${x}px, ${y}px)` }}
                      >
                        <Icon className="w-4 h-4 md:w-5 md:h-5 text-silver group-hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" strokeWidth={1.5} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Team ---

const Team = () => {
  const teamMembers = [
    { name: "Dennis M. Postema", role: "Founder / Architect", img: "https://lh3.googleusercontent.com/d/1gFEinqZRnyBevAPnRHVUvqSx6Yv8IUHH", desc: "Multi-million dollar producer. Founder of D-Mac Digital and the primary architect of Producer OS." },
    { name: "Christian", role: "Systems Engineer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop", desc: "Building the resilient back-end integrations that connect carriers to our proprietary data layers." },
    { name: "Ahmed", role: "Product Director", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop", desc: "Translating insurance workflows into elegant automated software solutions for our clients." },
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-black border-t border-white/[0.05]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif italic text-silver mb-3 tracking-tighter text-silver-gradient">The Industry Architects</h2>
            <p className="text-muted text-[15px] md:text-[16px] leading-relaxed font-light">
              Built by producers who have actually written business in the field.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <FadeIn delay={index * 0.05} key={index}>
              <div className="group relative cursor-default text-left">
                <div className="aspect-[3/4] bg-[#0a0a0a] overflow-hidden rounded-[2rem] relative mb-5 ante-card transition-all duration-1000 group-hover:scale-[1.02] shadow-2xl border border-white/5">
                    <img 
                        src={member.img} 
                        alt={member.name} 
                        className="w-full h-full object-cover grayscale transition-all duration-1000 ease-out opacity-50 group-hover:opacity-30 group-hover:scale-[1.05]" 
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent">
                        <h3 className="text-xl font-serif italic text-silver mb-1 tracking-tight">{member.name}</h3>
                        <p className="text-[10px] font-mono text-muted uppercase tracking-[0.3em] mb-3 font-bold">{member.role}</p>
                        <div className="h-[1px] w-12 bg-white/20 mb-3"></div>
                        <p className="text-[12px] text-muted leading-relaxed font-light">{member.desc}</p>
                    </div>
                </div>
                <div className="px-6 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-[18px] font-sans font-bold text-silver mb-1 tracking-tight">{member.name}</h3>
                  <p className="text-[10px] font-mono text-dim uppercase tracking-[0.35em] font-bold transition-colors">{member.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- FAQ & Contact ---

const FAQ = () => {
    const items = [
        { q: "Is this compliant with carrier guidelines?", a: "Yes. Our systems are built with compliance first, ensuring all communications follow industry and carrier-specific regulations." },
        { q: "Does this replace my CRM?", a: "No. Producer OS acts as the 'brain' on top of your CRM (GoHighLevel, Salesforce, AgencyBloc), making it work 10x harder for you." },
        { q: "How fast will I see results?", a: "Most agencies see a measurable decrease in administrative time within 14 days and an increase in touch-points within 30 days." }
    ];

    return (
        <section id="faq" className="py-16 md:py-24 bg-black border-t border-white/[0.05]">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-serif italic text-silver mb-12 text-center tracking-tighter text-silver-gradient">Industry Specifics</h2>
                    <div className="space-y-4">
                        {items.map((item, i) => (
                            <div key={i} className="group p-8 md:p-10 ante-card hover:scale-[1.01] transition-all duration-500 cursor-default text-left">
                                <h3 className="text-lg md:text-xl font-serif italic text-silver/90 mb-3 group-hover:text-silver transition-colors duration-500">{item.q}</h3>
                                <p className="text-muted text-[14px] leading-relaxed font-light">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}

const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => setStatus('success'), 2000);
    };

    return (
        <section id="contact" className="py-16 md:py-24 bg-black relative overflow-hidden border-t border-white/[0.05]">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                    <FadeIn>
                        <p className="text-muted text-[10px] font-mono uppercase tracking-[0.6em] mb-6 font-bold">Scale Your Production</p>
                        <h2 className="text-5xl md:text-7xl font-serif italic text-silver mb-6 tracking-tighter leading-tight text-silver-gradient">Ready to Deploy Your Agency OS?</h2>
                        <p className="text-muted text-lg mb-8 font-light leading-relaxed max-w-md">
                            Join the waitlist for our next cohort of agency partners. Dennis and the team review every application personally.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full ante-border flex items-center justify-center text-brand">
                                    <Mail size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-mono text-dim uppercase tracking-widest font-bold">Direct Line</p>
                                    <p className="text-silver font-medium">hello@produceros.com</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="ante-card p-10 md:p-14 relative group">
                        {status === 'success' ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                className="text-center py-16 space-y-5"
                            >
                                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-8 h-8 text-brand" />
                                </div>
                                <h3 className="text-3xl font-serif italic text-silver tracking-tight">Transmission Received</h3>
                                <p className="text-muted font-light">Our architects will reach out within 24 business hours.</p>
                                <Button onClick={() => setStatus('idle')} className="mt-8">Send another</Button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-mono text-dim uppercase tracking-widest font-bold px-1">Full Name</label>
                                        <input 
                                            required 
                                            type="text" 
                                            placeholder="Dennis M. Postema"
                                            className="w-full bg-black/50 ante-border rounded-xl px-5 py-3 text-silver focus:outline-none focus:ring-1 focus:ring-brand/50 transition-all font-sans"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-mono text-dim uppercase tracking-widest font-bold px-1">Email Address</label>
                                        <input 
                                            required 
                                            type="email" 
                                            placeholder="dennis@agency.com"
                                            className="w-full bg-black/50 ante-border rounded-xl px-5 py-3 text-silver focus:outline-none focus:ring-1 focus:ring-brand/50 transition-all font-sans"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono text-dim uppercase tracking-widest font-bold px-1">Agency Name / Production Volume</label>
                                    <input 
                                        type="text" 
                                        placeholder="Elite Life & Annuity - $10M/yr"
                                        className="w-full bg-black/50 ante-border rounded-xl px-5 py-3 text-silver focus:outline-none focus:ring-1 focus:ring-brand/50 transition-all font-sans"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono text-dim uppercase tracking-widest font-bold px-1">How can we help?</label>
                                    <textarea 
                                        rows={3} 
                                        placeholder="Tell us about your biggest bottleneck..."
                                        className="w-full bg-black/50 ante-border rounded-xl px-5 py-3 text-silver focus:outline-none focus:ring-1 focus:ring-brand/50 transition-all font-sans resize-none"
                                    ></textarea>
                                </div>
                                <button 
                                    disabled={status === 'sending'}
                                    className="w-full py-4 bg-brand text-white font-mono font-black uppercase tracking-[0.3em] rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(46,65,182,0.4)] flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    {status === 'sending' ? (
                                        <Settings className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <>Deploy Application <Send size={14} /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

const Home = () => {
  return (
    <>
      <Hero />
      <RevenueSection />
      <Services />
      <Team />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
