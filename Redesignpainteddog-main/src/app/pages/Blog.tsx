import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Clock, User, Tag, ArrowRight, Search } from 'lucide-react';

const posts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1759145223076-aa96aa7ef122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd2lsZCUyMGRvZyUyMHBhaW50ZWQlMjBkb2clMjBwYWNrJTIwc2F2YW5uYXxlbnwxfHx8fDE3NzY5NzMwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Record Breeding Season: 47 Pups Born Across 8 Packs',
    excerpt: 'This year marks the most successful breeding season in Painted Dog Conservation\'s 30-year history, with 47 pups confirmed across 8 monitored packs in Hwange National Park.',
    author: 'Peter Blinston',
    date: 'April 15, 2026',
    readTime: '5 min',
    category: 'Conservation News',
    featured: true,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1572390511659-c6458999a6d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGVkJTIwZG9nJTIwYWZyaWNhbiUyMHdpbGQlMjBkb2clMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3Njk3MzA3N3ww&ixlib=rb-4.1.0&q=80&w=600',
    title: 'The Democratic Hunt: How Painted Dogs Vote by Sneezing',
    excerpt: 'New research published in the Proceedings of the Royal Society reveals the remarkable democratic decision-making process that painted dogs use to decide when to go hunting.',
    author: 'Dr. Rosie Groom',
    date: 'April 10, 2026',
    readTime: '7 min',
    category: 'Research',
    featured: false,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1587285758914-4b47d29bca46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGFmcmljYSUyMHdpbGRsaWZlfGVufDF8fHx8MTc3Njk3MzA4MXww&ixlib=rb-4.1.0&q=80&w=600',
    title: 'Education Centre Milestone: 25,000 Children and Counting',
    excerpt: 'The Painted Dog Education Centre has reached a landmark 25,000 children with conservation education, helping build a new generation of wildlife advocates across Zimbabwe.',
    author: 'Jealous Mpofu',
    date: 'April 5, 2026',
    readTime: '4 min',
    category: 'Education',
    featured: false,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1709567484031-87bc70607500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjBzYWZhcmklMjBjb25zZXJ2YXRpb24lMjByZXNlYXJjaCUyMGZpZWxkd29ya3xlbnwxfHx8fDE3NzY5NzMwNzd8MA&ixlib=rb-4.1.0&q=80&w=600',
    title: 'GPS Tracking Reveals 1,200km Territory of Alpha Female "Maya"',
    excerpt: 'Satellite tracking data from painted dog Maya has revealed a home range of over 1,200 square kilometers — one of the largest recorded for the species — providing vital corridor protection data.',
    author: 'Dr. Rosie Groom',
    date: 'March 28, 2026',
    readTime: '6 min',
    category: 'Research',
    featured: false,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1670259182436-049da7055bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkbGlmZSUyMGNvbnNlcnZhdGlvbiUyMHRlYW0lMjBaaW1iYWJ3ZSUyMEFmcmljYXxlbnwxfHx8fDE3NzY5NzMwNzd8MA&ixlib=rb-4.1.0&q=80&w=600',
    title: 'Community Scout Program Removes 2,500 Snares in Q1 2026',
    excerpt: 'Our dedicated community scout team has achieved a record 2,500 snare removals in the first quarter of 2026, protecting an estimated 150 individual animals across multiple species.',
    author: 'Peter Blinston',
    date: 'March 20, 2026',
    readTime: '3 min',
    category: 'Conservation News',
    featured: false,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1734246954912-6eaf197506e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjB3aWxkbGlmZSUyMHZvbHVudGVlciUyMHJhbmdlciUyMGNvbnNlcnZhdGlvbnxlbnwxfHx8fDE3NzY5NzMwODF8MA&ixlib=rb-4.1.0&q=80&w=600',
    title: 'Volunteer Spotlight: Dr. Sarah Chen\'s Month in Hwange',
    excerpt: 'Veterinary volunteer Dr. Sarah Chen shares her experience treating painted dogs at our rehabilitation facility, including a challenging snare removal surgery on a young male.',
    author: 'PDC Team',
    date: 'March 15, 2026',
    readTime: '8 min',
    category: 'Stories',
    featured: false,
  },
];

const categories = ['All', 'Conservation News', 'Research', 'Education', 'Stories'];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = posts.filter(
    p =>
      (activeCategory === 'All' || p.category === activeCategory) &&
      (searchTerm === '' || p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const featuredPost = filtered.find(p => p.featured);
  const regularPosts = filtered.filter(p => !p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#2c1810] py-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <div className="text-[#d97836] text-sm font-semibold uppercase tracking-widest mb-3">Field Updates</div>
            <h1 className="text-5xl font-bold text-white mb-4">Our Blog</h1>
            <p className="text-white/60 max-w-xl mx-auto">Stories, research updates, and news from our conservation team in Zimbabwe</p>
          </motion.div>
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-full pl-12 pr-6 py-4 focus:outline-none focus:border-[#d97836] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-[#f5f1e8] border-b border-[#e8ddd0] sticky top-20 z-30">
        <div className="container mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto py-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'bg-[#d97836] text-white' : 'bg-white text-[#8b6f47] hover:bg-[#d97836]/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-[#2c1810] mb-2">No posts found</h3>
              <p className="text-[#8b6f47]">Try a different search or category.</p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm mb-10 flex flex-col md:flex-row group cursor-pointer hover:shadow-xl transition-all"
                >
                  <div className="md:w-1/2 h-72 md:h-auto overflow-hidden">
                    <ImageWithFallback
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex-1 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-[#d97836] text-white text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
                      <span className="bg-[#f5f1e8] text-[#8b6f47] text-xs font-semibold px-3 py-1 rounded-full">{featuredPost.category}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#2c1810] mb-3 leading-tight">{featuredPost.title}</h2>
                    <p className="text-[#8b6f47] leading-relaxed mb-6 text-sm">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-[#6b7280] mb-6">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" /> {featuredPost.author}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featuredPost.readTime} read</span>
                      <span>{featuredPost.date}</span>
                    </div>
                    <button className="inline-flex items-center gap-2 text-[#d97836] font-semibold text-sm hover:text-[#c46a2f] transition-colors">
                      Read Full Story <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              )}

              {/* Regular Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post, i) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 bg-[#d97836] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-[#2c1810] text-base mb-2 leading-tight line-clamp-2">{post.title}</h3>
                      <p className="text-[#8b6f47] text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-[#6b7280]">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#d97836]" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
