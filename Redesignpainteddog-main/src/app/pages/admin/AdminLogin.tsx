import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { motion } from 'motion/react';
import { Lock, Mail, Eye, EyeOff, PawPrint, AlertCircle } from 'lucide-react';

export function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Demo credentials
  const DEMO_EMAIL = 'admin@painteddog.org';
  const DEMO_PASSWORD = 'admin123';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      localStorage.setItem('pdc_admin', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid email or password. Use demo: admin@painteddog.org / admin123');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#2c1810] flex items-center justify-center p-4">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1759145223076-aa96aa7ef122?w=1920&q=60')" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#d97836] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <PawPrint className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">PDC Admin Portal</h1>
          <p className="text-white/50 text-sm mt-1">Marketing & Operations Dashboard</p>
        </div>

        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">Sign In</h2>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/20 border border-red-500/40 text-red-200 rounded-xl px-4 py-3 mb-5 flex items-start gap-2 text-sm"
            >
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              {error}
            </motion.div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="admin@painteddog.org"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-[#d97836] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl pl-11 pr-11 py-3 focus:outline-none focus:border-[#d97836] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#d97836] text-white py-3.5 rounded-xl font-bold hover:bg-[#c46a2f] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing In...
                </>
              ) : 'Sign In to Dashboard'}
            </button>
          </form>

          <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="text-xs text-white/50 mb-1">Demo credentials:</div>
            <div className="text-xs text-white/70">Email: <code className="text-[#d97836]">admin@painteddog.org</code></div>
            <div className="text-xs text-white/70">Password: <code className="text-[#d97836]">admin123</code></div>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="text-white/50 hover:text-white/80 text-sm transition-colors">
            ← Back to main website
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
