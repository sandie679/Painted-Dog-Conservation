import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', type: 'General Enquiry' });

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
          <h2 className="text-3xl font-bold text-[#2c1810] mb-4">Message Sent!</h2>
          <p className="text-[#8b6f47] mb-8 leading-relaxed">Thank you for reaching out. Our team will respond within 2–3 business days.</p>
          <button onClick={() => setSubmitted(false)} className="bg-[#d97836] text-white px-8 py-3 rounded-full font-bold hover:bg-[#c46a2f] transition-all">
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#2c1810] py-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="text-[#d97836] text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</div>
            <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/60 max-w-xl mx-auto">Whether you have a question, want to volunteer, or just want to say hello — we'd love to hear from you.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Info */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">
                  <h3 className="font-bold text-[#2c1810] text-lg mb-5">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#d97836]/10 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-[#d97836]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#2c1810] text-sm">Address</div>
                        <div className="text-[#8b6f47] text-sm">Painted Dog Conservation<br />Hwange National Park<br />Zimbabwe</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#d97836]/10 rounded-xl flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-[#d97836]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#2c1810] text-sm">Email</div>
                        <a href="mailto:info@painteddog.org" className="text-[#d97836] text-sm hover:text-[#c46a2f] transition-colors">info@painteddog.org</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#d97836]/10 rounded-xl flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-[#d97836]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#2c1810] text-sm">Phone</div>
                        <div className="text-[#8b6f47] text-sm">+263 13 42 069</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#d97836]/10 rounded-xl flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-[#d97836]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#2c1810] text-sm">Office Hours</div>
                        <div className="text-[#8b6f47] text-sm">Mon–Fri: 8:00 AM – 5:00 PM CAT<br />Weekends: Emergency only</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">
                  <h3 className="font-bold text-[#2c1810] text-lg mb-4">Follow Us</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Facebook, label: 'Facebook', color: '#1877f2' },
                      { icon: Instagram, label: 'Instagram', color: '#e4405f' },
                      { icon: Twitter, label: 'Twitter/X', color: '#1da1f2' },
                      { icon: Youtube, label: 'YouTube', color: '#ff0000' },
                    ].map(({ icon: Icon, label, color }) => (
                      <a
                        key={label}
                        href="#"
                        className="flex items-center gap-2 bg-[#f5f1e8] rounded-xl px-3 py-2.5 hover:bg-[#d97836]/10 transition-colors group"
                      >
                        <Icon className="w-4 h-4 text-[#8b6f47] group-hover:text-[#d97836]" />
                        <span className="text-sm text-[#8b6f47] group-hover:text-[#2c1810] font-medium">{label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Regional Contacts */}
                <div className="bg-[#2c1810] rounded-3xl p-6 text-white">
                  <h3 className="font-bold text-[#d97836] text-lg mb-4">International Partners</h3>
                  <div className="space-y-3 text-sm">
                    {[
                      { country: '🇦🇺 Australia', org: 'PDC Australia', email: 'australia@painteddog.org' },
                      { country: '🇬🇧 United Kingdom', org: 'PDC UK', email: 'uk@painteddog.org' },
                      { country: '🇺🇸 United States', org: 'PDC USA', email: 'usa@painteddog.org' },
                    ].map((c, i) => (
                      <div key={i} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                        <div className="font-semibold text-white">{c.country}</div>
                        <div className="text-white/60">{c.org}</div>
                        <a href={`mailto:${c.email}`} className="text-[#d97836] text-xs hover:text-[#f0a060] transition-colors">{c.email}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-[#2c1810] mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Inquiry type */}
                <div>
                  <label className="block text-sm font-semibold text-[#2c1810] mb-2">Type of Enquiry</label>
                  <div className="flex flex-wrap gap-2">
                    {['General Enquiry', 'Donation', 'Volunteering', 'Media', 'Research'].map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, type }))}
                        className={`px-4 py-2 rounded-full text-xs font-semibold border-2 transition-all ${formData.type === type ? 'border-[#d97836] bg-[#d97836] text-white' : 'border-[#e8ddd0] text-[#8b6f47]'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#2c1810] mb-2">Full Name *</label>
                    <input
                      required
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      placeholder="John Smith"
                      className="w-full border-2 border-[#e8ddd0] rounded-xl px-4 py-3 text-[#2c1810] placeholder-[#8b6f47]/50 focus:outline-none focus:border-[#d97836] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2c1810] mb-2">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      placeholder="john@example.com"
                      className="w-full border-2 border-[#e8ddd0] rounded-xl px-4 py-3 text-[#2c1810] placeholder-[#8b6f47]/50 focus:outline-none focus:border-[#d97836] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2c1810] mb-2">Subject *</label>
                  <input
                    required
                    value={formData.subject}
                    onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))}
                    placeholder="How can we help?"
                    className="w-full border-2 border-[#e8ddd0] rounded-xl px-4 py-3 text-[#2c1810] placeholder-[#8b6f47]/50 focus:outline-none focus:border-[#d97836] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2c1810] mb-2">Message *</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    placeholder="Tell us more about your enquiry..."
                    className="w-full border-2 border-[#e8ddd0] rounded-xl px-4 py-3 text-[#2c1810] placeholder-[#8b6f47]/50 focus:outline-none focus:border-[#d97836] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#d97836] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#c46a2f] transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
                <p className="text-center text-xs text-[#8b6f47]">We respond within 2–3 business days</p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-0">
        <div className="h-64 bg-[#2c1810] flex items-center justify-center relative overflow-hidden">
          <div className="text-center text-white">
            <MapPin className="w-10 h-10 text-[#d97836] mx-auto mb-3" />
            <div className="font-bold text-lg">Hwange National Park, Zimbabwe</div>
            <div className="text-white/50 text-sm">18.3°S, 26.5°E</div>
          </div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1623952625109-6c47a93f675c?w=1920&q=60')] bg-cover bg-center opacity-20" />
        </div>
      </section>
    </div>
  );
}
