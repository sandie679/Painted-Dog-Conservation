import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown, Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, PawPrint } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  {
    label: 'About',
    children: [
      { label: 'Who We Are', href: '/who-we-are' },
      { label: 'About Painted Dogs', href: '/about-painted-dogs' },
      { label: 'Conservation Programs', href: '/conservation-programs' },
    ],
  },
  { label: 'Our Blog', href: '/blog' },
  { label: 'Publications', href: '/publications' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdown(null);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#f5f1e8] flex flex-col">
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#2c1810] shadow-2xl' : 'bg-[#2c1810]'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#d97836] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <PawPrint className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-base md:text-lg leading-tight">Painted Dog Conservation</div>
                <div className="text-[#d97836] text-xs hidden sm:block">Zimbabwe · Est. 1992</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDropdown(link.label)}
                    onMouseLeave={() => setDropdown(null)}
                  >
                    <button className="flex items-center gap-1 text-white/90 hover:text-[#d97836] px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {dropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-2xl overflow-hidden min-w-[200px] border border-[#f0e8d8]"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block px-4 py-3 text-[#2c1810] hover:bg-[#f5f1e8] hover:text-[#d97836] transition-colors text-sm font-medium border-b border-[#f0e8d8] last:border-0"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href!}
                    className={`text-white/90 hover:text-[#d97836] px-4 py-2 rounded-lg transition-colors text-sm font-medium ${location.pathname === link.href ? 'text-[#d97836]' : ''}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                to="/donate"
                className="ml-2 bg-[#d97836] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#c46a2f] transition-all hover:scale-105 shadow-lg"
              >
                Donate Now
              </Link>
              <Link
                to="/admin"
                className="ml-2 border border-white/30 text-white/70 hover:text-white hover:border-white px-4 py-2 rounded-full text-xs font-medium transition-all"
              >
                Admin
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-[#1e0f09] border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <div className="text-[#d97836] text-xs font-semibold px-3 pt-3 pb-1 uppercase tracking-wider">{link.label}</div>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-3 py-2 text-white/80 hover:text-[#d97836] text-sm transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      to={link.href!}
                      className="block px-3 py-2 text-white/80 hover:text-[#d97836] text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="pt-3 flex flex-col gap-2">
                  <Link to="/donate" className="bg-[#d97836] text-white px-5 py-3 rounded-full text-sm font-semibold text-center">
                    Donate Now
                  </Link>
                  <Link to="/admin" className="border border-white/30 text-white/70 px-5 py-3 rounded-full text-sm text-center">
                    Admin Login
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#2c1810] text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#d97836] rounded-full flex items-center justify-center">
                  <PawPrint className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">Painted Dog Conservation</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Dedicated to the conservation of the African painted dog (Lycaon pictus) through protection, education, and community engagement in Zimbabwe since 1992.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Youtube, label: 'YouTube' },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 bg-white/10 hover:bg-[#d97836] rounded-full flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-[#d97836] mb-4 text-sm uppercase tracking-wider">About</h4>
              <ul className="space-y-2.5 text-sm text-white/70">
                {[
                  ['Who We Are', '/who-we-are'],
                  ['About Painted Dogs', '/about-painted-dogs'],
                  ['Conservation Programs', '/conservation-programs'],
                  ['Our Team', '/who-we-are'],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} className="hover:text-[#d97836] transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#d97836] mb-4 text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2.5 text-sm text-white/70">
                {[
                  ['Our Blog', '/blog'],
                  ['Publications', '/publications'],
                  ['FAQ', '/faq'],
                  ['Donate', '/donate'],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} className="hover:text-[#d97836] transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#d97836] mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#d97836] mt-0.5 shrink-0" />
                  <span>Hwange National Park, Zimbabwe</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#d97836] shrink-0" />
                  <a href="mailto:info@painteddog.org" className="hover:text-[#d97836] transition-colors">info@painteddog.org</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#d97836] shrink-0" />
                  <span>+263 13 42 069</span>
                </li>
              </ul>
              <Link to="/contact" className="mt-4 inline-block bg-[#d97836] text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-[#c46a2f] transition-all">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>© 2026 Painted Dog Conservation. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/70 transition-colors">Terms of Use</a>
              <Link to="/admin" className="hover:text-white/70 transition-colors">Admin Portal</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
