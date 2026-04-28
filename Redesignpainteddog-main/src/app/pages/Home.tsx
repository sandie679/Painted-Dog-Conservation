import { Link } from 'react-router';
import { Heart, Users, BookOpen, TrendingUp, Award, ArrowRight, Shield, Camera, Globe, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const stats = [
  { value: '7,000', label: 'Wild painted dogs remaining', icon: '🐾' },
  { value: '45%', label: 'Population increase in protected areas', icon: '📈' },
  { value: '25K+', label: 'Children reached through education', icon: '📚' },
  { value: '150+', label: 'Communities engaged', icon: '🤝' },
];

const newsItems = [
  {
    image: 'https://images.unsplash.com/photo-1759145223076-aa96aa7ef122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd2lsZCUyMGRvZyUyMHBhaW50ZWQlMjBkb2clMjBwYWNrJTIwc2F2YW5uYXxlbnwxfHx8fDE3NzY5NzMwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'New Pack Spotted in Hwange',
    date: 'April 15, 2026',
    category: 'Conservation',
    excerpt: 'Researchers have confirmed a thriving new pack of 12 painted dogs in a previously unprotected corridor.',
  },
  {
    image: 'https://images.unsplash.com/photo-1587285758914-4b47d29bca46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGFmcmljYSUyMHdpbGRsaWZlfGVufDF8fHx8MTc3Njk3MzA4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Education Program Expansion',
    date: 'April 10, 2026',
    category: 'Education',
    excerpt: 'Our Painted Dog Education Centre reaches 5 new rural schools, bringing conservation awareness to thousands.',
  },
  {
    image: 'https://images.unsplash.com/photo-1572390511659-c6458999a6d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGVkJTIwZG9nJTIwYWZyaWNhbiUyMHdpbGQlMjBkb2clMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3Njk3MzA3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Record Breeding Season',
    date: 'April 5, 2026',
    category: 'Research',
    excerpt: 'Multiple packs welcome new pups this season, marking the most successful breeding year in our 30-year history.',
  },
];

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759145223076-aa96aa7ef122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd2lsZCUyMGRvZyUyMHBhaW50ZWQlMjBkb2clMjBwYWNrJTIwc2F2YW5uYXxlbnwxfHx8fDE3NzY5NzMwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="African painted dogs in savanna"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c1810]/90 via-[#2c1810]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <div className="inline-flex items-center gap-2 bg-[#d97836]/20 border border-[#d97836]/40 text-[#d97836] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-[#d97836] rounded-full animate-pulse" />
                Zimbabwe's Most Endangered Carnivore
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Save the<br />
                <span className="text-[#d97836]">Painted Dog</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/80 leading-relaxed max-w-xl">
                With fewer than 7,000 remaining in the wild, we work tirelessly to protect Africa's most social and intelligent predator.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/donate"
                  className="bg-[#d97836] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c46a2f] transition-all hover:scale-105 shadow-xl shadow-[#d97836]/30"
                >
                  Support Our Mission
                </Link>
                <Link
                  to="/about-painted-dogs"
                  className="border-2 border-white/50 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#2c1810] transition-all"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-0.5 h-8 bg-white/30 relative overflow-hidden">
            <motion.div
              className="absolute top-0 w-full bg-[#d97836]"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ height: '50%' }}
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#2c1810] py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#d97836]">{stat.value}</div>
                <div className="text-white/60 text-xs mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2c1810] mb-3">Our Conservation Work</h2>
          <p className="text-[#8b6f47] max-w-xl mx-auto">Three decades of protecting Africa's most endangered carnivore through science, community, and education.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[220px]">
          {/* Mission Card - Large */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 md:row-span-2 bg-[#2c1810] rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <Shield className="w-12 h-12 mb-4 text-[#d97836]" />
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  Painted Dog Conservation works to ensure the long-term survival of the endangered African painted dog through on-the-ground conservation, community education, and scientific research across Zimbabwe.
                </p>
              </div>
              <Link
                to="/who-we-are"
                className="inline-flex items-center gap-2 bg-[#d97836] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c46a2f] transition-all w-fit"
              >
                Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#d97836] rounded-full -mr-36 -mb-36 opacity-10 group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          {/* Stat: Population */}
          <motion.div whileHover={{ scale: 1.04 }} className="bg-[#d97836] rounded-3xl p-6 text-white relative overflow-hidden group cursor-pointer">
            <TrendingUp className="w-8 h-8 mb-3 opacity-80" />
            <div className="text-4xl font-bold mb-1">45%</div>
            <p className="text-sm text-white/80">Population increase in protected areas over 10 years</p>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full group-hover:scale-150 transition-transform" />
          </motion.div>

          {/* Stat: Education */}
          <motion.div whileHover={{ scale: 1.04 }} className="bg-[#8b6f47] rounded-3xl p-6 text-white relative overflow-hidden group cursor-pointer">
            <BookOpen className="w-8 h-8 mb-3 opacity-80" />
            <div className="text-4xl font-bold mb-1">25K+</div>
            <p className="text-sm text-white/80">Children reached through our education programs</p>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full group-hover:scale-150 transition-transform" />
          </motion.div>

          {/* Image Card */}
          <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-2 rounded-3xl overflow-hidden relative group cursor-pointer">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1572390511659-c6458999a6d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGVkJTIwZG9nJTIwYWZyaWNhbiUyMHdpbGQlMjBkb2clMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3Njk3MzA3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Painted dog pack"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/80 to-transparent flex items-end p-6">
              <div className="text-white">
                <div className="text-xs text-[#d97836] font-semibold uppercase tracking-wider mb-1">Pack Behavior</div>
                <h4 className="text-xl font-bold">Social Intelligence</h4>
                <p className="text-sm text-white/70 mt-1">Painted dogs have the highest hunting success rate of any African predator — up to 80%</p>
              </div>
            </div>
          </motion.div>

          {/* Community */}
          <motion.div whileHover={{ scale: 1.04 }} className="bg-[#6b7280] rounded-3xl p-6 text-white relative overflow-hidden group cursor-pointer">
            <Users className="w-8 h-8 mb-3 opacity-80" />
            <div className="text-4xl font-bold mb-1">150+</div>
            <p className="text-sm text-white/80">Local communities engaged in conservation</p>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full group-hover:scale-150 transition-transform" />
          </motion.div>

          {/* Award */}
          <motion.div whileHover={{ scale: 1.04 }} className="bg-gradient-to-br from-[#d97836] to-[#8b6f47] rounded-3xl p-6 text-white cursor-pointer">
            <Award className="w-8 h-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">Award Winning</h3>
            <p className="text-sm text-white/80">Globally recognized for conservation excellence since 1992</p>
          </motion.div>

          {/* Get Involved */}
          <motion.div whileHover={{ scale: 1.01 }} className="md:col-span-2 bg-white rounded-3xl p-8 relative overflow-hidden group cursor-pointer border border-[#e8ddd0]">
            <Heart className="w-10 h-10 mb-4 text-[#d97836]" />
            <h3 className="text-2xl font-bold mb-3 text-[#2c1810]">Get Involved</h3>
            <p className="text-[#8b6f47] mb-6 text-sm leading-relaxed">
              Every contribution helps protect painted dogs and their habitat. Choose how you want to make a difference today.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/donate" className="bg-[#d97836] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#c46a2f] transition-all">
                Donate Now
              </Link>
              <Link to="/conservation-programs" className="border-2 border-[#d97836] text-[#d97836] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#d97836] hover:text-white transition-all">
                Volunteer
              </Link>
              <Link to="/donate" className="border-2 border-[#6b7280] text-[#6b7280] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#6b7280] hover:text-white transition-all">
                Adopt a Dog
              </Link>
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#d97836] rounded-full opacity-5 group-hover:scale-150 transition-transform" />
          </motion.div>

          {/* Research */}
          <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-2 rounded-3xl overflow-hidden relative group cursor-pointer">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1709567484031-87bc70607500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjBzYWZhcmklMjBjb25zZXJ2YXRpb24lMjByZXNlYXJjaCUyMGZpZWxkd29ya3xlbnwxfHx8fDE3NzY5NzMwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Conservation research"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/90 via-[#2c1810]/30 to-transparent flex flex-col justify-end p-6 text-white">
              <div className="text-xs text-[#d97836] font-semibold uppercase tracking-wider mb-1">Field Research</div>
              <h4 className="text-xl font-bold mb-2">Research & Monitoring</h4>
              <p className="text-sm text-white/70 mb-4">Advanced GPS tracking and behavioral studies inform our conservation strategies</p>
              <Link
                to="/conservation-programs"
                className="self-start bg-[#d97836] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#c46a2f] transition-all"
              >
                View Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conservation Programs Preview */}
      <section className="bg-[#2c1810] py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Conservation Programs</h2>
              <p className="text-white/60">Our integrated approach to protecting painted dogs</p>
            </div>
            <Link to="/conservation-programs" className="border border-[#d97836] text-[#d97836] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#d97836] hover:text-white transition-all">
              View All Programs
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Anti-Poaching', desc: 'Community scouts patrol key corridors 24/7, protecting painted dogs and other wildlife from snares and poaching.', color: '#d97836' },
              { icon: Camera, title: 'Research & Tracking', desc: 'GPS collars and camera traps provide crucial data on pack movements, territories, and breeding success.', color: '#8b6f47' },
              { icon: Globe, title: 'Community Education', desc: 'Our education centre visits schools, engaging the next generation of conservation champions.', color: '#6b7280' },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#d97836]/40 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: `${color}20` }}>
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="text-4xl font-bold text-[#2c1810] mb-2">Latest News</h2>
              <p className="text-[#8b6f47]">Stories from the field</p>
            </div>
            <Link to="/blog" className="border border-[#d97836] text-[#d97836] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#d97836] hover:text-white transition-all">
              View All Posts
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, i) => (
              <motion.article
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="h-52 overflow-hidden relative">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#d97836] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#6b7280] text-xs mb-2 flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#d97836]" /> {item.date}
                  </p>
                  <h3 className="text-lg font-bold text-[#2c1810] mb-2 leading-tight">{item.title}</h3>
                  <p className="text-[#8b6f47] text-sm leading-relaxed mb-4">{item.excerpt}</p>
                  <Link to="/blog" className="text-[#d97836] font-semibold text-sm hover:text-[#c46a2f] transition-colors inline-flex items-center gap-1">
                    Read More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#d97836] py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Help Us Protect Painted Dogs</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Your donation directly funds anti-poaching patrols, veterinary care, and community education programs.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/donate" className="bg-white text-[#d97836] px-8 py-4 rounded-full font-bold hover:bg-[#f5f1e8] transition-all text-lg hover:scale-105">
              Donate Today
            </Link>
            <Link to="/conservation-programs" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#d97836] transition-all text-lg">
              Our Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
