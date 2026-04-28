import { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search } from 'lucide-react';

const faqData = [
  {
    category: 'About Painted Dogs',
    items: [
      { q: 'What is an African painted dog?', a: 'The African painted dog (Lycaon pictus), also known as the African wild dog or African hunting dog, is a large carnivore native to sub-Saharan Africa. It is characterized by its mottled, multicolored coat and is one of Africa\'s most endangered mammals.' },
      { q: 'How many painted dogs are left in the wild?', a: 'Fewer than 7,000 African painted dogs remain in the wild, making them one of the most endangered carnivores on Earth. They were once found across 40 African countries; today they survive in fragmented populations mainly in southern and eastern Africa.' },
      { q: 'Why are painted dogs endangered?', a: 'The primary threats are habitat loss and fragmentation, wire snare poaching, road collisions, and diseases transmitted from domestic dogs (rabies, canine distemper). Human-wildlife conflict and persecution also contribute to population decline.' },
      { q: 'Are painted dogs the same as hyenas or wolves?', a: 'No. Painted dogs are neither hyenas nor wolves. They belong to their own genus (Lycaon) and are more closely related to wolves and domestic dogs than to hyenas. They are unique enough that scientists have placed them in their own genus.' },
      { q: 'How large is a typical painted dog pack?', a: 'Packs typically range from 6 to 20 individuals, led by a dominant breeding pair (alpha male and female). The entire pack cooperates to raise pups, share food, and protect territory.' },
    ],
  },
  {
    category: 'Our Conservation Work',
    items: [
      { q: 'Where does Painted Dog Conservation operate?', a: 'PDC operates primarily in and around Hwange National Park in western Zimbabwe — the last significant stronghold of the painted dog. We also partner with organizations in Zambia, Botswana, South Africa, and Mozambique.' },
      { q: 'How do you protect painted dogs from snares?', a: 'Our community scout program employs over 50 trained rangers who patrol critical wildlife corridors daily. They locate and remove wire snares, monitor pack movements, and report any suspicious activity to wildlife authorities.' },
      { q: 'What happens to snare-injured dogs?', a: 'Dogs with snare injuries are carefully captured by our veterinary team, transported to our rehabilitation facility, and given the medical care they need to recover. Once healthy, they are reintroduced to their pack or, if necessary, to a compatible wild pack.' },
      { q: 'How do you track painted dog packs?', a: 'We use GPS satellite collars on key pack members to monitor their movements in real-time. This data allows us to identify territory boundaries, migration routes, conflict hotspots, and breeding activity.' },
    ],
  },
  {
    category: 'How to Help',
    items: [
      { q: 'How can I donate to Painted Dog Conservation?', a: 'You can donate online through our secure donation page, by bank transfer, or by mail. We accept one-time and recurring donations. All donations are tax-deductible where applicable.' },
      { q: 'Can I adopt a painted dog?', a: 'Yes! Our adoption program allows you to symbolically adopt a real painted dog from our monitored packs. You\'ll receive updates, photos, and tracking data for your adopted dog.' },
      { q: 'Do you accept volunteers?', a: 'We accept international volunteers for specific programs, including conservation education, research support, and camp assistance. Visit our contact page to enquire about available volunteer positions.' },
      { q: 'Can I visit the conservation area?', a: 'Our Painted Dog Conservation Centre near Hwange welcomes visitors. You can see rehabilitated dogs, learn about our programs, and support conservation directly. Contact us to arrange a visit.' },
    ],
  },
  {
    category: 'Organization & Finances',
    items: [
      { q: 'Is PDC a registered charity?', a: 'Yes. Painted Dog Conservation is a registered NGO in Zimbabwe and has partner organizations in Australia, the UK, and the USA, all registered as charitable organizations in their respective countries.' },
      { q: 'What percentage of donations go directly to conservation?', a: 'Over 80% of all donations go directly to on-the-ground conservation programs. Overhead costs are kept as low as possible through efficient management and volunteer support.' },
      { q: 'Do you publish annual reports?', a: 'Yes. We publish annual reports and financial statements that are publicly available on our website. Transparency and accountability are core to how we operate.' },
    ],
  },
];

export function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...faqData.map(c => c.category)];

  const filteredData = faqData
    .map(cat => ({
      ...cat,
      items: cat.items.filter(
        item =>
          (search === '' || item.q.toLowerCase().includes(search.toLowerCase()) || item.a.toLowerCase().includes(search.toLowerCase())) &&
          (activeCategory === 'All' || activeCategory === cat.category)
      ),
    }))
    .filter(cat => cat.items.length > 0);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#2c1810] py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-[#d97836] text-sm font-semibold uppercase tracking-widest mb-3">Help Centre</div>
            <h1 className="text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-white/60 max-w-xl mx-auto mb-8">Find answers to common questions about painted dogs, our conservation work, and how you can help.</p>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search questions..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-full pl-12 pr-6 py-4 focus:outline-none focus:border-[#d97836] transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-[#f5f1e8] border-b border-[#e8ddd0] sticky top-20 z-30">
        <div className="container mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
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

      {/* FAQ Content */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-6 max-w-3xl">
          {filteredData.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-[#2c1810] mb-2">No results found</h3>
              <p className="text-[#8b6f47]">Try a different search term or browse all categories.</p>
            </div>
          ) : (
            filteredData.map((category, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className="text-xl font-bold text-[#2c1810] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#d97836] rounded-full" />
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.items.map((item, ii) => {
                    const key = `${ci}-${ii}`;
                    const isOpen = openItem === key;
                    return (
                      <div key={ii} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                        <button
                          onClick={() => setOpenItem(isOpen ? null : key)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f5f1e8] transition-colors"
                        >
                          <span className="font-semibold text-[#2c1810] pr-4">{item.q}</span>
                          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0">
                            <ChevronDown className="w-5 h-5 text-[#d97836]" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 text-[#8b6f47] text-sm leading-relaxed border-t border-[#f0e8d8] pt-4">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#2c1810] mb-4">Still Have Questions?</h2>
          <p className="text-[#8b6f47] mb-8 max-w-lg mx-auto">Our team is always happy to help. Reach out to us directly.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#d97836] text-white px-8 py-3 rounded-full font-bold hover:bg-[#c46a2f] transition-all">
              Contact Us
            </Link>
            <a href="mailto:info@painteddog.org" className="border-2 border-[#d97836] text-[#d97836] px-8 py-3 rounded-full font-bold hover:bg-[#d97836] hover:text-white transition-all">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
