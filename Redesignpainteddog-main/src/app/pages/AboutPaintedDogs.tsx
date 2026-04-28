import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { AlertTriangle, Eye, Heart, Zap } from 'lucide-react';

const facts = [
  { icon: '🐾', title: 'Scientific Name', value: 'Lycaon pictus', desc: 'Meaning "painted wolf" in Greek — a reference to their mottled, multicolored coats.' },
  { icon: '📍', title: 'Range', value: 'Sub-Saharan Africa', desc: 'Once found across 40 African countries, now restricted to fragmented populations.' },
  { icon: '🏃', title: 'Speed', value: 'Up to 72 km/h', desc: 'Can sustain speeds of 60 km/h over 5km — exceptional endurance hunters.' },
  { icon: '🎯', title: 'Hunt Success', value: '~80%', desc: 'The most successful large predator in Africa — lions succeed only 25–30% of the time.' },
  { icon: '👥', title: 'Pack Size', value: '6–20 dogs', desc: 'Highly social animals that live and hunt cooperatively in packs with a dominant pair.' },
  { icon: '🧬', title: 'Unique Coat', value: 'Every dog is unique', desc: 'Like human fingerprints, no two painted dogs have the same coat pattern.' },
];

const threats = [
  { icon: AlertTriangle, title: 'Snare Poaching', desc: 'Wire snares set for bushmeat kill or injure thousands of painted dogs annually.' },
  { icon: Eye, title: 'Habitat Loss', desc: 'Expanding agriculture and human settlements fragment critical habitat corridors.' },
  { icon: Zap, title: 'Road Collisions', desc: 'Painted dogs cross vast territories — road networks cause significant mortality.' },
  { icon: Heart, title: 'Disease', desc: 'Diseases transmitted from domestic dogs, including rabies and canine distemper, threaten wild populations.' },
];

export function AboutPaintedDogs() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1572390511659-c6458999a6d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGVkJTIwZG9nJTIwYWZyaWNhbiUyMHdpbGQlMjBkb2clMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3Njk3MzA3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Painted dog close up"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2c1810]/70 flex items-center">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-[#d97836] text-sm font-semibold uppercase tracking-widest mb-3">Species Profile</div>
              <h1 className="text-5xl font-bold text-white mb-3">About Painted Dogs</h1>
              <p className="text-white/70 max-w-xl">Meet Africa's most endangered and fascinating large carnivore</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-[#2c1810] mb-6">Africa's Most Social Predator</h2>
              <p className="text-[#8b6f47] leading-relaxed mb-4">
                The African painted dog (<em>Lycaon pictus</em>) is one of the world's most endangered mammals. With fewer than 7,000 individuals remaining in isolated pockets across sub-Saharan Africa, they face extinction without urgent intervention.
              </p>
              <p className="text-[#8b6f47] leading-relaxed mb-4">
                What makes painted dogs truly extraordinary is their social structure. They live in highly cooperative packs where every member cares for pups, shares food, and looks after injured companions — a level of social cohesion rarely seen in the animal kingdom.
              </p>
              <p className="text-[#8b6f47] leading-relaxed mb-6">
                Their communication is sophisticated, using chirps, squeaks, and unique body postures. They even vote democratically on when to go hunting — by sneezing!
              </p>
              <div className="bg-[#d97836]/10 border border-[#d97836]/20 rounded-2xl p-5">
                <div className="text-[#d97836] font-semibold mb-1">Conservation Status</div>
                <div className="text-[#2c1810] font-bold text-2xl">Endangered</div>
                <div className="text-[#8b6f47] text-sm">IUCN Red List — fewer than 7,000 remaining</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759145223076-aa96aa7ef122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd2lsZCUyMGRvZyUyMHBhaW50ZWQlMjBkb2clMjBwYWNrJTIwc2F2YW5uYXxlbnwxfHx8fDE3NzY5NzMwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Painted dog pack"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2c1810] mb-3">Key Facts</h2>
            <p className="text-[#8b6f47]">What makes painted dogs so extraordinary</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facts.map((fact, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">{fact.icon}</div>
                <div className="text-[#d97836] text-xs font-semibold uppercase tracking-wider mb-1">{fact.title}</div>
                <div className="text-2xl font-bold text-[#2c1810] mb-2">{fact.value}</div>
                <p className="text-[#8b6f47] text-sm leading-relaxed">{fact.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threats */}
      <section className="py-16 bg-[#2c1810]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Threats They Face</h2>
            <p className="text-white/60">Understanding the challenges to build effective solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {threats.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-5 hover:border-[#d97836]/40 transition-all"
              >
                <div className="w-12 h-12 bg-[#d97836]/20 rounded-2xl flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-[#d97836]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Behavior */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden aspect-[4/3]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709567484031-87bc70607500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjBzYWZhcmklMjBjb25zZXJ2YXRpb24lMjByZXNlYXJjaCUyMGZpZWxkd29ya3xlbnwxfHx8fDE3NzY5NzMwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Research field work"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-[#2c1810] mb-6">Extraordinary Behaviors</h2>
              {[
                { title: 'Democratic Hunting', desc: 'Packs vote on when to hunt by sneezing — the majority rules. The more sneezes, the higher the motivation to move.' },
                { title: 'Altruistic Care', desc: 'Pack members regurgitate food for injured or elderly dogs, ensuring no individual is left behind.' },
                { title: 'Greeting Rituals', desc: 'Elaborate greeting ceremonies involving chirping, tail-wagging, and nose-touching reinforce social bonds.' },
                { title: 'Nomadic Lifestyle', desc: 'Home ranges can exceed 1,000 km², making them the most wide-ranging large carnivore in Africa.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 mb-5">
                  <div className="w-2 h-2 rounded-full bg-[#d97836] mt-2.5 shrink-0" />
                  <div>
                    <div className="font-bold text-[#2c1810] mb-1">{item.title}</div>
                    <p className="text-[#8b6f47] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#d97836]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Help Protect Painted Dogs</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Your support directly funds the protection of these remarkable animals.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/donate" className="bg-white text-[#d97836] px-8 py-3 rounded-full font-bold hover:bg-[#f5f1e8] transition-all">Donate Now</Link>
            <Link to="/conservation-programs" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#d97836] transition-all">Our Programs</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
