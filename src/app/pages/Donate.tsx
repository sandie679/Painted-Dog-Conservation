import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Heart, Shield, Camera, BookOpen, CheckCircle, CreditCard, Repeat } from 'lucide-react';

const amounts = [10, 25, 50, 100, 250, 500];

const impactItems = [
  { amount: 10, desc: 'Removes 2 wire snares from painted dog territory', icon: Shield },
  { amount: 25, desc: 'Feeds a rehabilitating painted dog for one week', icon: Heart },
  { amount: 50, desc: 'Supports one day of community scout patrol', icon: Camera },
  { amount: 100, desc: 'Educates 20 children about wildlife conservation', icon: BookOpen },
  { amount: 250, desc: 'Covers veterinary care for one injured painted dog', icon: Heart },
  { amount: 500, desc: 'Funds GPS tracking collar for one painted dog for a month', icon: Camera },
];

const adoptDogs = [
  { name: 'Alpha', desc: 'Pack leader of the Hwange River pack. Mother of 12 pups.', image: 'https://images.unsplash.com/photo-1572390511659-c6458999a6d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGVkJTIwZG9nJTIwYWZyaWNhbiUyMHdpbGQlMjBkb2clMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3Njk3MzA3N3ww&ixlib=rb-4.1.0&q=80&w=400', price: 50 },
  { name: 'Scout', desc: 'Snare survivor successfully rehabilitated and reintroduced in 2024.', image: 'https://images.unsplash.com/photo-1759145223076-aa96aa7ef122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd2lsZCUyMGRvZyUyMHBhaW50ZWQlMjBkb2clMjBwYWNrJTIwc2F2YW5uYXxlbnwxfHx8fDE3NzY5NzMwNzd8MA&ixlib=rb-4.1.0&q=80&w=400', price: 50 },
  { name: 'Maya', desc: 'GPS-tracked alpha with the largest known territory of 1,200 km².', image: 'https://images.unsplash.com/photo-1623952625109-6c47a93f675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd2lsZGVybmVzcyUyMG5hdGlvbmFsJTIwcGFyayUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzY5NzMwNzh8MA&ixlib=rb-4.1.0&q=80&w=400', price: 50 },
];

export function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'donate' | 'adopt' | 'corporate'>('donate');

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;
  const impactDesc = impactItems.find(i => i.amount <= finalAmount)?.desc || impactItems[0].desc;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f5f1e8] flex items-center justify-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-lg p-8">
          <div className="w-20 h-20 bg-[#d97836] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#2c1810] mb-4">Thank You!</h2>
          <p className="text-[#8b6f47] mb-6 leading-relaxed">
            Your donation of <strong>${finalAmount}</strong> will make a real difference for painted dogs in Zimbabwe. You'll receive a confirmation email shortly.
          </p>
          <p className="text-[#8b6f47] text-sm mb-8">
            Your contribution: <em>{impactDesc}</em>
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-[#d97836] text-white px-8 py-3 rounded-full font-bold hover:bg-[#c46a2f] transition-all"
          >
            Make Another Donation
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1591522810850-58128c5fb089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb25hdGUlMjBjaGFyaXR5JTIwbm9ucHJvZml0JTIwZnVuZHJhaXNpbmclMjBnaXZpbmd8ZW58MXx8fHwxNzc2OTczMDgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Donation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2c1810]/75 flex items-center">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-[#d97836] text-sm font-semibold uppercase tracking-widest mb-3">Make a Difference</div>
              <h1 className="text-5xl font-bold text-white mb-3">Donate</h1>
              <p className="text-white/70 max-w-xl">Your support directly protects painted dogs and their habitat in Zimbabwe</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-[#2c1810] border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex gap-1 py-4">
            {(['donate', 'adopt', 'corporate'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all capitalize ${activeTab === tab ? 'bg-[#d97836] text-white' : 'text-white/60 hover:text-white'}`}
              >
                {tab === 'donate' ? 'Make a Donation' : tab === 'adopt' ? 'Adopt a Dog' : 'Corporate Giving'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Form */}
      {activeTab === 'donate' && (
        <section className="py-16 bg-[#f5f1e8]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Form */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#2c1810] mb-6">Your Donation</h2>

                {/* Type */}
                <div className="flex gap-3 mb-6">
                  {(['one-time', 'monthly'] as const).map(type => (
                    <button
                      key={type}
                      onClick={() => setDonationType(type)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-semibold text-sm transition-all ${donationType === type ? 'border-[#d97836] bg-[#d97836]/5 text-[#d97836]' : 'border-[#e8ddd0] text-[#8b6f47]'}`}
                    >
                      {type === 'monthly' && <Repeat className="w-4 h-4" />}
                      {type === 'one-time' ? 'One-Time' : 'Monthly'}
                    </button>
                  ))}
                </div>

                {/* Amount Selection */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {amounts.map(amount => (
                    <button
                      key={amount}
                      onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                      className={`py-3 rounded-xl border-2 font-semibold text-sm transition-all ${selectedAmount === amount && !customAmount ? 'border-[#d97836] bg-[#d97836] text-white' : 'border-[#e8ddd0] text-[#8b6f47] hover:border-[#d97836]'}`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="Custom amount ($)"
                  value={customAmount}
                  onChange={e => { setCustomAmount(e.target.value); setSelectedAmount(0); }}
                  className="w-full border-2 border-[#e8ddd0] rounded-xl px-4 py-3 text-[#2c1810] placeholder-[#8b6f47]/50 focus:outline-none focus:border-[#d97836] transition-colors mb-6"
                />

                {/* Impact preview */}
                <div className="bg-[#f5f1e8] rounded-xl p-4 mb-6 flex items-start gap-3">
                  <Heart className="w-5 h-5 text-[#d97836] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-[#2c1810] mb-0.5">Your Impact</div>
                    <div className="text-sm text-[#8b6f47]">{impactDesc}</div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input required placeholder="First Name" className="border-2 border-[#e8ddd0] rounded-xl px-4 py-3 text-[#2c1810] placeholder-[#8b6f47]/50 focus:outline-none focus:border-[#d97836] transition-colors" />
                    <input required placeholder="Last Name" className="border-2 border-[#e8ddd0] rounded-xl px-4 py-3 text-[#2c1810] placeholder-[#8b6f47]/50 focus:outline-none focus:border-[#d97836] transition-colors" />
                  </div>
                  <input required type="email" placeholder="Email Address" className="w-full border-2 border-[#e8ddd0] rounded-xl px-4 py-3 text-[#2c1810] placeholder-[#8b6f47]/50 focus:outline-none focus:border-[#d97836] transition-colors" />
                  <div className="flex items-center gap-3 bg-[#f5f1e8] rounded-xl p-3">
                    <CreditCard className="w-5 h-5 text-[#8b6f47]" />
                    <span className="text-[#8b6f47] text-sm">Secure payment processed via Stripe</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#d97836] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#c46a2f] transition-all hover:scale-[1.02]"
                  >
                    Donate ${finalAmount || 0} {donationType === 'monthly' ? '/month' : ''}
                  </button>
                </form>
                <p className="text-center text-xs text-[#8b6f47] mt-4">🔒 Secure & encrypted. Tax receipt provided.</p>
              </motion.div>

              {/* Impact Stats */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-2xl font-bold text-[#2c1810] mb-6">Your Donation at Work</h2>
                <div className="space-y-4">
                  {impactItems.map(({ amount, desc, icon: Icon }, i) => (
                    <div key={i} className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-sm">
                      <div className="w-10 h-10 bg-[#d97836]/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#d97836]" />
                      </div>
                      <div>
                        <div className="font-bold text-[#d97836] text-sm">${amount}</div>
                        <div className="text-[#8b6f47] text-sm">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-[#2c1810] rounded-2xl p-6 text-white">
                  <div className="text-[#d97836] font-semibold mb-2">Our Commitment</div>
                  <p className="text-white/70 text-sm leading-relaxed">Over 80% of every dollar donated goes directly to on-the-ground conservation programs in Zimbabwe. We publish annual financial reports for full transparency.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Adopt a Dog */}
      {activeTab === 'adopt' && (
        <section className="py-16 bg-[#f5f1e8]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#2c1810] mb-3">Adopt a Painted Dog</h2>
              <p className="text-[#8b6f47] max-w-xl mx-auto">Symbolically adopt a real painted dog from our monitored packs. Receive regular updates, photos, and GPS tracking data for your adopted dog.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {adoptDogs.map((dog, i) => (
                <motion.div key={i} whileHover={{ y: -6 }} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                  <div className="h-56 overflow-hidden">
                    <ImageWithFallback src={dog.image} alt={dog.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="text-[#d97836] text-xs font-semibold uppercase tracking-wider mb-1">Adopt for ${dog.price}/month</div>
                    <h3 className="text-xl font-bold text-[#2c1810] mb-2">{dog.name}</h3>
                    <p className="text-[#8b6f47] text-sm mb-4">{dog.desc}</p>
                    <button className="w-full bg-[#d97836] text-white py-3 rounded-xl font-semibold hover:bg-[#c46a2f] transition-all">
                      Adopt {dog.name}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 bg-white rounded-3xl p-8 max-w-2xl mx-auto shadow-sm text-center">
              <h3 className="font-bold text-[#2c1810] text-lg mb-2">What's Included</h3>
              <ul className="text-[#8b6f47] text-sm space-y-2 text-left max-w-sm mx-auto">
                {['Adoption certificate & welcome pack', 'Quarterly GPS tracking updates', 'Annual photo & video report', 'Direct emails from the research team', 'Tax-deductible donation receipt'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#d97836] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Corporate Giving */}
      {activeTab === 'corporate' && (
        <section className="py-16 bg-[#f5f1e8]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#2c1810] mb-3">Corporate Giving</h2>
              <p className="text-[#8b6f47] max-w-xl mx-auto">Partner with PDC to embed conservation into your brand and make a meaningful difference.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { tier: 'Silver', amount: '$5,000/year', perks: ['Logo on website', 'Social media mentions', 'Employee education session', 'Annual impact report'] },
                { tier: 'Gold', amount: '$20,000/year', perks: ['All Silver benefits', 'Branded field vehicle', 'Staff visit to conservation area', 'Named project sponsorship', 'Press release feature'] },
                { tier: 'Platinum', amount: '$50,000+/year', perks: ['All Gold benefits', 'Named conservation program', 'Quarterly board briefings', 'Custom impact reporting', 'VIP Zimbabwe visit'] },
              ].map((tier, i) => (
                <div key={i} className={`bg-white rounded-3xl p-6 shadow-sm ${i === 1 ? 'border-2 border-[#d97836]' : ''}`}>
                  {i === 1 && <div className="bg-[#d97836] text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">Most Popular</div>}
                  <div className="text-[#d97836] font-bold text-lg mb-1">{tier.tier}</div>
                  <div className="text-2xl font-bold text-[#2c1810] mb-4">{tier.amount}</div>
                  <ul className="space-y-2 mb-6">
                    {tier.perks.map((perk, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#8b6f47]">
                        <CheckCircle className="w-4 h-4 text-[#d97836] shrink-0" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${i === 1 ? 'bg-[#d97836] text-white hover:bg-[#c46a2f]' : 'border-2 border-[#d97836] text-[#d97836] hover:bg-[#d97836] hover:text-white'}`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
