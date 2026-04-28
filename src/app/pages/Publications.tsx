import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FileText, Download, ExternalLink, Search, BookOpen, Calendar } from 'lucide-react';

const publications = [
  {
    type: 'Research Paper',
    year: 2025,
    title: 'Home range requirements and corridor connectivity for Lycaon pictus in the Greater Hwange Ecosystem',
    authors: 'Groom R., Blinston P., Murindagomo F.',
    journal: 'Oryx',
    doi: '10.1017/S0030605324000...',
    abstract: 'This study examines GPS tracking data from 15 painted dog packs to determine minimum viable corridor widths for population connectivity across the Greater Hwange landscape.',
    category: 'Ecology',
  },
  {
    type: 'Research Paper',
    year: 2024,
    title: 'Snare removal effectiveness and biodiversity benefits in wildlife corridors: a 10-year analysis',
    authors: 'Blinston P., Groom R., Chikwinya N.',
    journal: 'Biological Conservation',
    doi: '10.1016/j.biocon.2024.110...',
    abstract: 'A decade of snare removal data from PDC community scouts is analyzed to quantify biodiversity benefits across target and non-target species.',
    category: 'Conservation',
  },
  {
    type: 'Annual Report',
    year: 2025,
    title: 'Painted Dog Conservation Annual Report 2024–2025',
    authors: 'PDC Team',
    journal: 'PDC Publications',
    doi: null,
    abstract: 'Comprehensive review of all PDC programs, including anti-poaching, rehabilitation, education, and research activities with financial accounts.',
    category: 'Annual Report',
  },
  {
    type: 'Research Paper',
    year: 2024,
    title: 'Pack social cohesion and democratic decision-making in Lycaon pictus: evidence from acoustic analysis',
    authors: 'Groom R., Walker R., Blinston P.',
    journal: 'Animal Behaviour',
    doi: '10.1016/j.anbehav.2024.08...',
    abstract: 'Acoustic monitoring confirms that sneeze-based voting behavior is a consistent mechanism for group mobilization in all 12 study packs.',
    category: 'Behavior',
  },
  {
    type: 'Research Paper',
    year: 2023,
    title: 'Canine distemper virus exposure in free-ranging African painted dogs: seroprevalence and risk factors',
    authors: 'Chikwinya N., Groom R., Viljoen A.',
    journal: 'Journal of Wildlife Diseases',
    doi: '10.7589/JWD-D-22-00124',
    abstract: 'Serological screening across 8 packs reveals elevated CDV exposure linked to proximity to human settlements, informing targeted vaccination strategies.',
    category: 'Veterinary',
  },
  {
    type: 'Annual Report',
    year: 2024,
    title: 'Painted Dog Conservation Annual Report 2023–2024',
    authors: 'PDC Team',
    journal: 'PDC Publications',
    doi: null,
    abstract: 'Full program review and financial report for the 2023-2024 conservation year, including education centre statistics and field research outcomes.',
    category: 'Annual Report',
  },
  {
    type: 'Research Paper',
    year: 2023,
    title: 'Effectiveness of rehabilitation and reintroduction protocols for snare-injured African painted dogs',
    authors: 'Blinston P., Chikwinya N., Groom R.',
    journal: 'Zoo Biology',
    doi: '10.1002/zoo.21745',
    abstract: 'Analysis of 150 rehabilitation cases over 20 years reveals an 85% successful reintroduction rate when structured pack introduction protocols are followed.',
    category: 'Rehabilitation',
  },
  {
    type: 'Book',
    year: 2022,
    title: 'Painted Dogs: Conservation in Practice — 30 Years of Learning from Hwange',
    authors: 'Blinston P., Groom R.',
    journal: 'IUCN Publications',
    doi: null,
    abstract: 'A comprehensive review of three decades of painted dog conservation in Zimbabwe, covering methods, outcomes, and lessons for practitioners worldwide.',
    category: 'Book',
  },
];

const categories = ['All', 'Research Paper', 'Annual Report', 'Book', 'Ecology', 'Conservation', 'Behavior', 'Veterinary'];

export function Publications() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeYear, setActiveYear] = useState('All');

  const years = ['All', '2025', '2024', '2023', '2022'];

  const filtered = publications.filter(p => {
    const matchSearch = search === '' || p.title.toLowerCase().includes(search.toLowerCase()) || p.authors.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === 'All' || p.type === activeCategory || p.category === activeCategory;
    const matchYear = activeYear === 'All' || p.year.toString() === activeYear;
    return matchSearch && matchCat && matchYear;
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#2c1810] py-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <div className="text-[#d97836] text-sm font-semibold uppercase tracking-widest mb-3">Knowledge Library</div>
            <h1 className="text-5xl font-bold text-white mb-4">Publications</h1>
            <p className="text-white/60 max-w-xl mx-auto">Peer-reviewed research, annual reports, and books from the PDC conservation team</p>
          </motion.div>
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search by title or author..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-full pl-12 pr-6 py-4 focus:outline-none focus:border-[#d97836] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Feature image */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-8">
          <div className="rounded-3xl overflow-hidden h-48 md:h-64 relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1642911837726-0646d41b00b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpZmljJTIwcmVzZWFyY2glMjBwdWJsaWNhdGlvbiUyMGpvdXJuYWwlMjB3aWxkbGlmZSUyMGJpb2xvZ3l8ZW58MXx8fHwxNzc2OTczMDgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Research publications"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#2c1810]/60 flex items-center">
              <div className="container mx-auto px-8">
                <div className="grid grid-cols-3 gap-8 text-center">
                  {[['40+', 'Research Papers'], ['30', 'Annual Reports'], ['5', 'Books Published']].map(([val, label], i) => (
                    <div key={i}>
                      <div className="text-3xl font-bold text-[#d97836]">{val}</div>
                      <div className="text-white/70 text-sm">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-[#f5f1e8] border-b border-[#e8ddd0] sticky top-20 z-30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-2">
            <div className="flex gap-2 overflow-x-auto">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all ${activeCategory === cat ? 'bg-[#d97836] text-white' : 'bg-white text-[#8b6f47] hover:bg-[#d97836]/10'}`}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex gap-2 ml-auto">
              {years.map(year => (
                <button key={year} onClick={() => setActiveYear(year)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${activeYear === year ? 'bg-[#2c1810] text-white' : 'bg-white text-[#8b6f47] hover:bg-[#2c1810]/10'}`}>
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-12 bg-[#f5f1e8]">
        <div className="container mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-[#2c1810] mb-2">No publications found</h3>
              <p className="text-[#8b6f47]">Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="space-y-4 max-w-4xl mx-auto">
              {filtered.map((pub, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d97836]/10 rounded-xl flex items-center justify-center shrink-0 mt-1">
                      {pub.type === 'Annual Report' ? (
                        <FileText className="w-6 h-6 text-[#d97836]" />
                      ) : pub.type === 'Book' ? (
                        <BookOpen className="w-6 h-6 text-[#d97836]" />
                      ) : (
                        <FileText className="w-6 h-6 text-[#d97836]" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="bg-[#d97836]/10 text-[#d97836] text-xs font-semibold px-3 py-1 rounded-full">{pub.type}</span>
                        <span className="bg-[#f5f1e8] text-[#8b6f47] text-xs px-3 py-1 rounded-full">{pub.category}</span>
                        <span className="flex items-center gap-1 text-xs text-[#6b7280]">
                          <Calendar className="w-3 h-3" /> {pub.year}
                        </span>
                      </div>
                      <h3 className="font-bold text-[#2c1810] mb-1 leading-tight">{pub.title}</h3>
                      <p className="text-[#8b6f47] text-sm mb-1">{pub.authors}</p>
                      <p className="text-[#6b7280] text-xs mb-3 italic">{pub.journal}{pub.doi && ` · ${pub.doi}`}</p>
                      <p className="text-[#8b6f47] text-sm leading-relaxed mb-4 line-clamp-2">{pub.abstract}</p>
                      <div className="flex gap-3">
                        {pub.doi && (
                          <button className="flex items-center gap-1 text-xs text-[#d97836] font-semibold hover:text-[#c46a2f] transition-colors">
                            <ExternalLink className="w-3.5 h-3.5" /> View Paper
                          </button>
                        )}
                        <button className="flex items-center gap-1 text-xs text-[#6b7280] font-semibold hover:text-[#2c1810] transition-colors">
                          <Download className="w-3.5 h-3.5" /> Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
