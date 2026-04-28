import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Shield, Camera, BookOpen, Heart, Stethoscope, Globe } from 'lucide-react';

const programs = [
  {
    icon: Shield,
    color: '#d97836',
    title: 'Anti-Poaching & Law Enforcement',
    shortTitle: 'Anti-Poaching',
    image: 'https://images.unsplash.com/photo-1734246954912-6eaf197506e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjB3aWxkbGlmZSUyMHZvbHVudGVlciUyMHJhbmdlciUyMGNvbnNlcnZhdGlvbnxlbnwxfHx8fDE3NzY5NzMwODF8MA&ixlib=rb-4.1.0&q=80&w=600',
    desc: 'Our community scout program trains and employs local rangers who patrol known painted dog territories 24 hours a day, removing wire snares, reporting poaching activity, and gathering vital population data.',
    impact: '50+ scouts deployed',
    impact2: '10,000+ snares removed',
  },
  {
    icon: Camera,
    color: '#8b6f47',
    title: 'Research & GPS Tracking',
    shortTitle: 'Research',
    image: 'https://images.unsplash.com/photo-1709567484031-87bc70607500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjBzYWZhcmklMjBjb25zZXJ2YXRpb24lMjByZXNlYXJjaCUyMGZpZWxkd29ya3xlbnwxfHx8fDE3NzY5NzMwNzd8MA&ixlib=rb-4.1.0&q=80&w=600',
    desc: 'GPS satellite collars allow our research team to track pack movements in real-time, understand territory requirements, identify conflict hotspots, and collect critical breeding data to inform conservation planning.',
    impact: '15 packs monitored',
    impact2: '30 years of data',
  },
  {
    icon: BookOpen,
    color: '#6b7280',
    title: 'Education & Outreach',
    shortTitle: 'Education',
    image: 'https://images.unsplash.com/photo-1587285758914-4b47d29bca46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGFmcmljYSUyMHdpbGRsaWZlfGVufDF8fHx8MTc3Njk3MzA4MXww&ixlib=rb-4.1.0&q=80&w=600',
    desc: 'Our Painted Dog Education Centre has welcomed over 25,000 children from rural and urban Zimbabwe. We deliver hands-on conservation education, creating lifelong advocates for wildlife and wild spaces.',
    impact: '25,000+ children reached',
    impact2: '100+ schools visited',
  },
  {
    icon: Stethoscope,
    color: '#d97836',
    title: 'Rehabilitation & Veterinary Care',
    shortTitle: 'Rehabilitation',
    image: 'https://images.unsplash.com/photo-1623952625109-6c47a93f675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd2lsZGVybmVzcyUyMG5hdGlvbmFsJTIwcGFyayUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzY5NzMwNzh8MA&ixlib=rb-4.1.0&q=80&w=600',
    desc: 'Our rehabilitation facility provides critical care to snare-injured, orphaned, and sick painted dogs. Once recovered, dogs are carefully reintroduced to wild packs to maximize their survival and contribution to the breeding population.',
    impact: '200+ dogs rehabilitated',
    impact2: '85% release success rate',
  },
  {
    icon: Heart,
    color: '#8b6f47',
    title: 'Community Conservation',
    shortTitle: 'Community',
    image: 'https://images.unsplash.com/photo-1670259182436-049da7055bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkbGlmZSUyMGNvbnNlcnZhdGlvbiUyMHRlYW0lMjBaaW1iYWJ3ZSUyMEFmcmljYXxlbnwxfHx8fDE3NzY5NzMwNzd8MA&ixlib=rb-4.1.0&q=80&w=600',
    desc: 'Lasting conservation only works when local communities benefit. We provide alternative livelihoods, compensation schemes for livestock losses, and employment opportunities that make conservation economically viable for communities.',
    impact: '150+ communities',
    impact2: '300+ jobs created',
  },
  {
    icon: Globe,
    color: '#6b7280',
    title: 'International Partnerships',
    shortTitle: 'Partnerships',
    image: 'https://images.unsplash.com/photo-1642911837726-0646d41b00b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpZmljJTIwcmVzZWFyY2glMjBwdWJsaWNhdGlvbiUyMGpvdXJuYWwlMjB3aWxkbGlmZSUyMGJpb2xvZ3l8ZW58MXx8fHwxNzc2OTczMDgyfDA&ixlib=rb-4.1.0&q=80&w=600',
    desc: 'We collaborate with leading conservation organizations, universities, and governments across 5 countries to share data, harmonize approaches, and build transboundary corridors that allow painted dog populations to recover.',
    impact: '5 country collaboration',
    impact2: '40+ research papers',
  },
];

export function ConservationPrograms() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1623952625109-6c47a93f675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd2lsZGVybmVzcyUyMG5hdGlvbmFsJTIwcGFyayUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzY5NzMwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Conservation programs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2c1810]/70 flex items-center">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-[#d97836] text-sm font-semibold uppercase tracking-widest mb-3">What We Do</div>
              <h1 className="text-5xl font-bold text-white mb-3">Our Conservation Programs</h1>
              <p className="text-white/70 max-w-xl">An integrated approach to protecting painted dogs across Zimbabwe</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="bg-[#2c1810] py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '6', label: 'Active programs' },
              { value: '500+', label: 'Dogs protected' },
              { value: '30+', label: 'Years running' },
              { value: '$2M+', label: 'Annual impact' },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-4xl font-bold text-[#d97836]">{stat.value}</div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            {programs.map((program, i) => {
              const Icon = program.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className={`bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <ImageWithFallback
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${program.color}20` }}>
                        <Icon className="w-6 h-6" style={{ color: program.color }} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: program.color }}>Program {i + 1}</div>
                        <h3 className="text-xl font-bold text-[#2c1810]">{program.title}</h3>
                      </div>
                    </div>
                    <p className="text-[#8b6f47] leading-relaxed mb-6 text-sm">{program.desc}</p>
                    <div className="flex gap-4 flex-wrap">
                      {[program.impact, program.impact2].map((imp, j) => (
                        <div key={j} className="bg-[#f5f1e8] rounded-xl px-4 py-2">
                          <div className="text-[#2c1810] font-bold text-sm">{imp}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-16 bg-[#2c1810]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Support Our Programs</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">Every dollar directly funds our conservation work in the field.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { amount: '$25', impact: 'Removes 5 wire snares from protected corridors' },
              { amount: '$100', impact: 'Funds one day of community scout patrol' },
              { amount: '$500', impact: 'Supports GPS collar for one painted dog' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#d97836]/40 transition-all">
                <div className="text-4xl font-bold text-[#d97836] mb-2">{item.amount}</div>
                <p className="text-white/60 text-sm">{item.impact}</p>
              </div>
            ))}
          </div>
          <Link to="/donate" className="bg-[#d97836] text-white px-8 py-4 rounded-full font-bold hover:bg-[#c46a2f] transition-all text-lg">
            Donate Now
          </Link>
        </div>
      </section>
    </div>
  );
}
