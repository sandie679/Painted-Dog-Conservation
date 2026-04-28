import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  Facebook, Video, Calendar, BarChart2, FileText, LogOut, PawPrint,
  Sparkles, Copy, CheckCircle, Send, Plus, Clock, Users, Eye, Heart,
  Share2, MessageCircle, Menu, X, RefreshCw, Trash2, Edit3, Bell,
  TrendingUp, BookOpen, Mic, ChevronRight, ArrowUpRight
} from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────
type Tab = 'overview' | 'ai-content' | 'meetings' | 'calendar' | 'blog' | 'analytics';

interface Meeting {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  attendees: string;
  link: string;
  status: 'upcoming' | 'live' | 'ended';
}

interface Post {
  id: string;
  content: string;
  topic: string;
  type: string;
  createdAt: string;
  scheduled?: string;
  status: 'draft' | 'scheduled' | 'published';
}

// ── Mock AI generation ─────────────────────────────────────────────────────
const AI_TEMPLATES: Record<string, Record<string, string>> = {
  awareness: {
    informative: `🐾 Did you know? African painted dogs (Lycaon pictus) have a hunting success rate of up to 80% — far higher than lions (25%) or leopards (20%). They achieve this through extraordinary teamwork, communication, and endurance.

With fewer than 7,000 remaining in the wild, these remarkable animals need our protection now more than ever.

📍 Painted Dog Conservation has been working in Hwange, Zimbabwe for over 30 years to ensure their survival.

How can you help? 👇
🔗 www.painteddog.org/donate

#PaintedDogs #WildDogs #AfricanWildlife #Conservation #Zimbabwe #Hwange #WildlifeConservation #EndangeredSpecies`,
    engaging: `✨ Meet the world's most social predator. 🐾

Painted dogs don't just hunt together — they vote on when to go. By sneezing. Seriously. 😄

The pack that sneezes most wins. Democracy in the wild!

These incredible animals are found only in sub-Saharan Africa, and with fewer than 7,000 left, they're one of our most endangered carnivores.

Help us protect them 👉 painteddog.org

#PaintedDogs #WildlifeWednesday #AmazingAnimals #AfricaWildlife #Conservation`,
    urgent: `⚠️ URGENT: Painted dogs need your help TODAY.

Every 3 days, a painted dog is killed in a wire snare. These cruel traps don't discriminate — they catch any animal that crosses the path.

Our scout teams work 24/7 to remove snares across Hwange National Park. In 2024, they removed over 2,500 snares. But they need more support.

For just $25, we can remove 5 snares and potentially save a life.

👉 Donate now: painteddog.org/donate

Please share this post. Every share saves lives. 🙏

#SavePaintedDogs #AntiPoaching #ZimbabweWildlife #Conservation`,
  },
  fundraising: {
    informative: `💛 Your donation makes a direct impact on painted dog conservation in Zimbabwe.

Here's what your support funds:
✅ $10 → removes 2 wire snares
✅ $25 → feeds a recovering dog for a week
✅ $100 → one full day of anti-poaching patrol
✅ $500 → GPS collar for one painted dog

100% of your donation goes directly to conservation programs.

Donate today: painteddog.org/donate

#Donate #Conservation #PaintedDogs #MakeADifference`,
    engaging: `Your $25 could save a life today. 💛

Seriously — for the cost of a dinner out, our scout team can remove 5 wire snares from painted dog territory in Zimbabwe.

This is what real, tangible impact looks like. And you can be part of it.

Tap the link in our bio to donate → painteddog.org/donate

Thank you for caring. 🐾

#PaintedDogs #Donate #WildlifeConservation #Zimbabwe #MakeADifference`,
    urgent: `🚨 Last 48 HOURS of our fundraising campaign!

We're $3,200 short of our $20,000 goal. This money will fund our entire anti-poaching patrol for the next quarter.

If we don't reach our goal, we may need to reduce patrol coverage — putting painted dog packs at risk.

PLEASE donate now: painteddog.org/donate
Even $5 makes a difference.

Please share this post 🙏

#Fundraising #ConservationEmergency #PaintedDogs #Zimbabwe`,
  },
  event: {
    informative: `📅 Join us for a Virtual Conservation Talk with PDC Executive Director Peter Blinston.

Topic: "30 Years of Painted Dog Conservation — What We've Learned"

🗓 Date: Friday, 9 May 2026
🕗 Time: 7:00 PM CAT (Central Africa Time)
📍 Platform: Zoom (free to attend)

Register at: painteddog.org/events

Learn about our work, ask questions, and find out how you can make a difference.

#ConservationTalk #PaintedDogs #Zimbabwe #WildlifeEvent`,
    engaging: `🎉 EXCITING NEWS! We're hosting a live Q&A session and we want YOU there!

Got questions about painted dogs? Our team of experts will answer everything live!

🐾 Why are painted dogs so endangered?
🐾 How does GPS tracking work?
🐾 What's a typical day in Hwange?

Join us Friday 9 May at 7PM CAT!

Register FREE → painteddog.org/events

Tag a wildlife lover who should join! 👇

#LiveEvent #PaintedDogs #QandA #Conservation`,
    urgent: `⏰ ONLY 24 HOURS LEFT to register!

Our free conservation webinar is tomorrow and spaces are filling fast!

"30 Years of Painted Dog Conservation"
📅 Friday 9 May | 7PM CAT | FREE

Don't miss this rare chance to hear directly from the field.

Register NOW: painteddog.org/events

#LastChance #ConservationWebinar #PaintedDogs`,
  },
  news: {
    informative: `📰 Conservation Update: Record breeding season for painted dogs in Hwange!

Our research team has confirmed 47 pups born across 8 monitored packs this season — the highest number recorded in PDC's 30-year history.

This incredible milestone is a direct result of three decades of:
📡 GPS monitoring and territory protection
🛡️ Anti-poaching patrols
🏥 Veterinary rehabilitation
👩‍🏫 Community conservation education

Thank you to everyone who has supported our work. This is YOUR impact. 🙏

Read the full update: painteddog.org/blog

#GoodNews #Conservation #PaintedDogs #Zimbabwe #Wildlife`,
    engaging: `47 painted dog pups. 🐾🐾🐾

Let that sink in. 47 new lives that wouldn't exist without our conservation programs and YOUR support.

This is the best news we've had in 30 years of protecting these incredible animals.

Swipe to see some of our newest pack members (photos in comments 📸)

Share this joy with your feed! 🎉

#GoodNews #BabyAnimals #PaintedDogs #ConservationWins #Zimbabwe`,
    urgent: `🚨 Conservation NEWS: Critical corridor under threat!

Agricultural expansion is threatening a key painted dog movement corridor between Hwange National Park and Chizarira National Park.

Without intervention, this corridor — which our GPS data shows is used by 3 packs — could be lost within 2 years.

PDC is working urgently with local communities and government to secure this land. But we need funds to negotiate and survey.

Help us act NOW: painteddog.org/donate

#Wildlife #Corridor #Conservation #UrgentAction #PaintedDogs`,
  },
};

function generateContent(topic: string, tone: string, type: string): string {
  const toneKey = tone as keyof typeof AI_TEMPLATES[string];
  const typeKey = type as keyof typeof AI_TEMPLATES;
  return AI_TEMPLATES[typeKey]?.[toneKey] || AI_TEMPLATES.awareness.informative;
}

// ── Overview Stats ─────────────────────────────────────────────────────────
const overviewStats = [
  { label: 'Facebook Reach (7d)', value: '12,847', change: '+18%', icon: Facebook, color: '#d97836' },
  { label: 'Post Engagement', value: '4.2%', change: '+0.8%', icon: Heart, color: '#8b6f47' },
  { label: 'Upcoming Meetings', value: '3', change: 'This week', icon: Video, color: '#6b7280' },
  { label: 'Drafts Saved', value: '7', change: '2 scheduled', icon: FileText, color: '#2c1810' },
];

// ── Dashboard ──────────────────────────────────────────────────────────────
export function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // AI Content State
  const [aiTopic, setAiTopic] = useState('');
  const [aiTone, setAiTone] = useState('engaging');
  const [aiType, setAiType] = useState('awareness');
  const [generating, setGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [copied, setCopied] = useState(false);
  const [savedPosts, setSavedPosts] = useState<Post[]>([
    { id: '1', content: AI_TEMPLATES.awareness.engaging, topic: 'Species awareness', type: 'awareness', createdAt: '2026-04-20', status: 'published' },
    { id: '2', content: AI_TEMPLATES.fundraising.engaging, topic: 'Q2 fundraising', type: 'fundraising', createdAt: '2026-04-22', status: 'scheduled', scheduled: '2026-04-25' },
  ]);
  // Meetings State
  const [meetings, setMeetings] = useState<Meeting[]>([
    { id: '1', title: 'Board Meeting — Q2 Review', date: '2026-05-02', time: '10:00', duration: '60 min', attendees: 'Peter, Rosie, Jealous, Board Members', link: 'https://meet.pdc.org/q2-board-2026', status: 'upcoming' },
    { id: '2', title: 'Volunteer Orientation', date: '2026-04-28', time: '15:00', duration: '30 min', attendees: 'New volunteers, HR team', link: 'https://meet.pdc.org/volunteer-orientation', status: 'upcoming' },
    { id: '3', title: 'Conservation Team Standup', date: '2026-04-25', time: '08:00', duration: '15 min', attendees: 'Field team', link: 'https://meet.pdc.org/standup-april', status: 'upcoming' },
  ]);
  const [showNewMeeting, setShowNewMeeting] = useState(false);
  const [newMeeting, setNewMeeting] = useState({ title: '', date: '', time: '', duration: '30 min', attendees: '', description: '' });
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  useEffect(() => {
    if (!localStorage.getItem('pdc_admin')) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('pdc_admin');
    navigate('/admin');
  };

  const handleGenerate = async () => {
    setGenerating(true);
    setGeneratedContent('');
    await new Promise(r => setTimeout(r, 2200));
    const content = generateContent(aiTopic || aiType, aiTone, aiType);
    setGeneratedContent(content);
    setGenerating(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSavePost = () => {
    const post: Post = {
      id: Date.now().toString(),
      content: generatedContent,
      topic: aiTopic || aiType,
      type: aiType,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'draft',
    };
    setSavedPosts(p => [post, ...p]);
    setGeneratedContent('');
    setActiveTab('calendar');
  };

  const handleCreateMeeting = () => {
    if (!newMeeting.title || !newMeeting.date || !newMeeting.time) return;
    const meeting: Meeting = {
      id: Date.now().toString(),
      ...newMeeting,
      link: `https://meet.pdc.org/${newMeeting.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}-${Date.now().toString(36)}`,
      status: 'upcoming',
    };
    setMeetings(m => [meeting, ...m]);
    setNewMeeting({ title: '', date: '', time: '', duration: '30 min', attendees: '', description: '' });
    setShowNewMeeting(false);
  };

  const copyMeetingLink = (link: string, id: string) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const navItems: { id: Tab; icon: typeof Facebook; label: string }[] = [
    { id: 'overview', icon: BarChart2, label: 'Overview' },
    { id: 'ai-content', icon: Sparkles, label: 'AI Content' },
    { id: 'meetings', icon: Video, label: 'Meetings' },
    { id: 'calendar', icon: Calendar, label: 'Content Calendar' },
    { id: 'blog', icon: BookOpen, label: 'Blog Manager' },
    { id: 'analytics', icon: TrendingUp, label: 'Analytics' },
  ];

  return (
    <div className="min-h-screen bg-[#f5f1e8] flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#2c1810] flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:flex`}>
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#d97836] rounded-xl flex items-center justify-center">
              <PawPrint className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">PDC Admin</div>
              <div className="text-white/40 text-xs">Marketing Dashboard</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => { setActiveTab(id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === id ? 'bg-[#d97836] text-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
              {id === 'ai-content' && (
                <span className="ml-auto bg-[#d97836]/30 text-[#d97836] text-xs px-1.5 py-0.5 rounded-full">AI</span>
              )}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-white/50 hover:text-white text-sm rounded-xl hover:bg-white/5 transition-all">
            <ArrowUpRight className="w-4 h-4" />
            View Website
          </Link>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-white/50 hover:text-red-400 text-sm rounded-xl hover:bg-white/5 transition-all">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white border-b border-[#e8ddd0] px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button className="lg:hidden text-[#2c1810]" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-[#2c1810] font-bold text-lg capitalize">
              {navItems.find(n => n.id === activeTab)?.label || 'Dashboard'}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative text-[#8b6f47] hover:text-[#2c1810]">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#d97836] rounded-full text-white text-[8px] flex items-center justify-center">3</span>
            </button>
            <div className="w-8 h-8 bg-[#d97836] rounded-full flex items-center justify-center text-white text-sm font-bold">A</div>
          </div>
        </header>

        {/* Tab Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">

          {/* ── OVERVIEW ───────────────────────────────────────────────── */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {overviewStats.map(({ label, value, change, icon: Icon, color }, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
                        <Icon className="w-5 h-5" style={{ color }} />
                      </div>
                      <span className="text-xs text-[#6b7280] bg-[#f5f1e8] px-2 py-1 rounded-full">{change}</span>
                    </div>
                    <div className="text-2xl font-bold text-[#2c1810]">{value}</div>
                    <div className="text-xs text-[#8b6f47] mt-1">{label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#2c1810] mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: 'Create Post', icon: Sparkles, tab: 'ai-content' as Tab, color: '#d97836' },
                    { label: 'Schedule Meeting', icon: Video, tab: 'meetings' as Tab, color: '#8b6f47' },
                    { label: 'View Calendar', icon: Calendar, tab: 'calendar' as Tab, color: '#6b7280' },
                    { label: 'Write Blog Post', icon: Edit3, tab: 'blog' as Tab, color: '#2c1810' },
                  ].map(({ label, icon: Icon, tab, color }) => (
                    <button key={label} onClick={() => setActiveTab(tab)}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-[#e8ddd0] hover:border-[#d97836] transition-all group">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
                        <Icon className="w-5 h-5" style={{ color }} />
                      </div>
                      <span className="text-xs font-semibold text-[#2c1810]">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#2c1810]">Recent Content</h3>
                  <button onClick={() => setActiveTab('calendar')} className="text-[#d97836] text-sm font-semibold flex items-center gap-1">
                    View all <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  {savedPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex items-center gap-4 p-3 rounded-xl bg-[#f5f1e8]">
                      <div className="w-8 h-8 bg-[#d97836]/20 rounded-lg flex items-center justify-center shrink-0">
                        <Facebook className="w-4 h-4 text-[#d97836]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-[#2c1810] truncate">{post.topic}</div>
                        <div className="text-xs text-[#8b6f47]">{post.createdAt}</div>
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${post.status === 'published' ? 'bg-[#d97836]/15 text-[#d97836]' : post.status === 'scheduled' ? 'bg-[#6b7280]/15 text-[#6b7280]' : 'bg-[#8b6f47]/15 text-[#8b6f47]'}`}>
                        {post.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Meetings */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#2c1810]">Upcoming Meetings</h3>
                  <button onClick={() => setActiveTab('meetings')} className="text-[#d97836] text-sm font-semibold flex items-center gap-1">
                    View all <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  {meetings.slice(0, 3).map((m) => (
                    <div key={m.id} className="flex items-center gap-4 p-3 rounded-xl bg-[#f5f1e8]">
                      <div className="w-8 h-8 bg-[#6b7280]/20 rounded-lg flex items-center justify-center shrink-0">
                        <Video className="w-4 h-4 text-[#6b7280]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-[#2c1810] truncate">{m.title}</div>
                        <div className="text-xs text-[#8b6f47]">{m.date} at {m.time}</div>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#6b7280]/15 text-[#6b7280]">
                        {m.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── AI CONTENT ─────────────────────────────────────────────── */}
          {activeTab === 'ai-content' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Generator */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-[#d97836] rounded-lg flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <h2 className="font-bold text-[#2c1810]">AI Facebook Post Generator</h2>
                  </div>

                  {/* Topic */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-[#2c1810] mb-2">Topic / Brief (optional)</label>
                    <input
                      value={aiTopic}
                      onChange={e => setAiTopic(e.target.value)}
                      placeholder="e.g. 'New pups born in Hwange' or leave blank for template"
                      className="w-full border-2 border-[#e8ddd0] rounded-xl px-4 py-3 text-[#2c1810] placeholder-[#8b6f47]/40 focus:outline-none focus:border-[#d97836] transition-colors text-sm"
                    />
                  </div>

                  {/* Post Type */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-[#2c1810] mb-2">Post Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'awareness', label: '🐾 Species Awareness' },
                        { id: 'fundraising', label: '💛 Fundraising' },
                        { id: 'event', label: '📅 Event Promotion' },
                        { id: 'news', label: '📰 Conservation News' },
                      ].map(({ id, label }) => (
                        <button key={id} onClick={() => setAiType(id)}
                          className={`py-2.5 px-3 rounded-xl border-2 text-sm font-medium transition-all text-left ${aiType === id ? 'border-[#d97836] bg-[#d97836]/5 text-[#d97836]' : 'border-[#e8ddd0] text-[#8b6f47]'}`}>
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tone */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-[#2c1810] mb-2">Tone</label>
                    <div className="flex gap-2">
                      {['informative', 'engaging', 'urgent'].map(tone => (
                        <button key={tone} onClick={() => setAiTone(tone)}
                          className={`flex-1 py-2 rounded-xl border-2 text-sm font-medium transition-all capitalize ${aiTone === tone ? 'border-[#d97836] bg-[#d97836] text-white' : 'border-[#e8ddd0] text-[#8b6f47]'}`}>
                          {tone}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleGenerate}
                    disabled={generating}
                    className="w-full bg-[#d97836] text-white py-3.5 rounded-xl font-bold hover:bg-[#c46a2f] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {generating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Generating Post...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Generate Post with AI
                      </>
                    )}
                  </button>
                </div>

                {/* Tips */}
                <div className="bg-[#2c1810] rounded-2xl p-5 text-white">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Mic className="w-4 h-4 text-[#d97836]" /> Content Tips
                  </h3>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-start gap-2"><span className="text-[#d97836] mt-0.5">•</span> Post at 7–9am or 6–8pm for maximum reach</li>
                    <li className="flex items-start gap-2"><span className="text-[#d97836] mt-0.5">•</span> Include a photo or video with every post</li>
                    <li className="flex items-start gap-2"><span className="text-[#d97836] mt-0.5">•</span> Always include a clear call-to-action</li>
                    <li className="flex items-start gap-2"><span className="text-[#d97836] mt-0.5">•</span> Respond to comments within 2 hours</li>
                    <li className="flex items-start gap-2"><span className="text-[#d97836] mt-0.5">•</span> Fundraising posts perform best on Fridays</li>
                  </ul>
                </div>
              </div>

              {/* Generated Content */}
              <div>
                <div className="bg-white rounded-2xl p-6 shadow-sm min-h-96">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-[#2c1810]">Generated Post</h3>
                    {generatedContent && (
                      <div className="flex gap-2">
                        <button onClick={handleCopy}
                          className={`flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg transition-all ${copied ? 'bg-[#d97836] text-white' : 'bg-[#f5f1e8] text-[#8b6f47] hover:bg-[#d97836]/10'}`}>
                          {copied ? <CheckCircle className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          {copied ? 'Copied!' : 'Copy'}
                        </button>
                        <button onClick={() => setGeneratedContent('')}
                          className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg bg-[#f5f1e8] text-[#8b6f47] hover:bg-red-50 hover:text-red-400 transition-all">
                          <RefreshCw className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {generating ? (
                    <div className="flex flex-col items-center justify-center h-64 gap-4">
                      <div className="w-12 h-12 border-4 border-[#d97836]/30 border-t-[#d97836] rounded-full animate-spin" />
                      <p className="text-[#8b6f47] text-sm">AI is crafting your post...</p>
                    </div>
                  ) : generatedContent ? (
                    <>
                      {/* Facebook Preview */}
                      <div className="border-2 border-[#e8ddd0] rounded-2xl overflow-hidden mb-4">
                        <div className="bg-[#1877f2] text-white text-xs font-bold px-4 py-2 flex items-center gap-2">
                          <Facebook className="w-3.5 h-3.5" /> Facebook Post Preview
                        </div>
                        <div className="p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 bg-[#d97836] rounded-full flex items-center justify-center">
                              <PawPrint className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-[#2c1810]">Painted Dog Conservation</div>
                              <div className="text-xs text-[#6b7280]">Just now · 🌐</div>
                            </div>
                          </div>
                          <div className="text-sm text-[#2c1810] whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto">
                            {generatedContent}
                          </div>
                          <div className="flex items-center gap-4 pt-3 mt-3 border-t border-[#e8ddd0] text-xs text-[#6b7280]">
                            <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-red-400" /> 0 Likes</span>
                            <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> 0 Comments</span>
                            <span className="flex items-center gap-1"><Share2 className="w-3.5 h-3.5" /> 0 Shares</span>
                          </div>
                        </div>
                      </div>

                      {/* Edit area */}
                      <textarea
                        value={generatedContent}
                        onChange={e => setGeneratedContent(e.target.value)}
                        rows={6}
                        className="w-full border-2 border-[#e8ddd0] rounded-xl px-4 py-3 text-sm text-[#2c1810] focus:outline-none focus:border-[#d97836] transition-colors resize-none"
                      />
                      <div className="flex gap-3 mt-3">
                        <button onClick={handleSavePost}
                          className="flex-1 bg-[#d97836] text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-[#c46a2f] transition-all flex items-center justify-center gap-2">
                          <CheckCircle className="w-4 h-4" /> Save to Calendar
                        </button>
                        <button onClick={handleGenerate}
                          className="flex-1 border-2 border-[#d97836] text-[#d97836] py-2.5 rounded-xl font-semibold text-sm hover:bg-[#d97836]/5 transition-all flex items-center justify-center gap-2">
                          <RefreshCw className="w-4 h-4" /> Regenerate
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 text-center">
                      <div className="w-16 h-16 bg-[#d97836]/10 rounded-2xl flex items-center justify-center mb-4">
                        <Sparkles className="w-8 h-8 text-[#d97836]/40" />
                      </div>
                      <p className="text-[#8b6f47] text-sm">Select your options and click Generate to create a Facebook post with AI</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ── MEETINGS ───────────────────────────────────────────────── */}
          {activeTab === 'meetings' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#2c1810]">Online Meetings</h2>
                <button
                  onClick={() => setShowNewMeeting(!showNewMeeting)}
                  className="bg-[#d97836] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#c46a2f] transition-all flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" /> New Meeting
                </button>
              </div>

              {/* New Meeting Form */}
              <AnimatePresence>
                {showNewMeeting && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#d97836]/20"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <h3 className="font-bold text-[#2c1810]">Schedule New Meeting</h3>
                      <button onClick={() => setShowNewMeeting(false)} className="text-[#8b6f47] hover:text-[#2c1810]">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-[#2c1810] mb-1">Meeting Title *</label>
                        <input
                          value={newMeeting.title}
                          onChange={e => setNewMeeting(p => ({ ...p, title: e.target.value }))}
                          placeholder="e.g. Board Meeting, Team Standup"
                          className="w-full border-2 border-[#e8ddd0] rounded-xl px-4 py-3 text-sm text-[#2c1810] focus:outline-none focus:border-[#d97836] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#2c1810] mb-1">Date *</label>
                        <input
                          type="date"
                          value={newMeeting.date}
                          onChange={e => setNewMeeting(p => ({ ...p, date: e.target.value }))}
                          className="w-full border-2 border-[#e8ddd0] rounded-xl px-4 py-3 text-sm text-[#2c1810] focus:outline-none focus:border-[#d97836] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#2c1810] mb-1">Time *</label>
                        <input
                          type="time"
                          value={newMeeting.time}
                          onChange={e => setNewMeeting(p => ({ ...p, time: e.target.value }))}
                          className="w-full border-2 border-[#e8ddd0] rounded-xl px-4 py-3 text-sm text-[#2c1810] focus:outline-none focus:border-[#d97836] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#2c1810] mb-1">Duration</label>
                        <select
                          value={newMeeting.duration}
                          onChange={e => setNewMeeting(p => ({ ...p, duration: e.target.value }))}
                          className="w-full border-2 border-[#e8ddd0] rounded-xl px-4 py-3 text-sm text-[#2c1810] focus:outline-none focus:border-[#d97836] transition-colors bg-white"
                        >
                          {['15 min', '30 min', '45 min', '60 min', '90 min', '2 hours'].map(d => <option key={d}>{d}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#2c1810] mb-1">Attendees</label>
                        <input
                          value={newMeeting.attendees}
                          onChange={e => setNewMeeting(p => ({ ...p, attendees: e.target.value }))}
                          placeholder="Team members, email addresses..."
                          className="w-full border-2 border-[#e8ddd0] rounded-xl px-4 py-3 text-sm text-[#2c1810] focus:outline-none focus:border-[#d97836] transition-colors"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-[#2c1810] mb-1">Description (optional)</label>
                        <textarea
                          value={newMeeting.description}
                          onChange={e => setNewMeeting(p => ({ ...p, description: e.target.value }))}
                          placeholder="Meeting agenda, notes..."
                          rows={2}
                          className="w-full border-2 border-[#e8ddd0] rounded-xl px-4 py-3 text-sm text-[#2c1810] focus:outline-none focus:border-[#d97836] transition-colors resize-none"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={handleCreateMeeting}
                        className="flex-1 bg-[#d97836] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#c46a2f] transition-all">
                        Create Meeting & Generate Link
                      </button>
                      <button onClick={() => setShowNewMeeting(false)}
                        className="px-6 border-2 border-[#e8ddd0] text-[#8b6f47] py-3 rounded-xl font-semibold text-sm hover:bg-[#f5f1e8] transition-all">
                        Cancel
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Meetings List */}
              <div className="space-y-4">
                {meetings.map((meeting) => (
                  <motion.div
                    key={meeting.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="w-12 h-12 bg-[#6b7280]/10 rounded-2xl flex items-center justify-center shrink-0">
                        <Video className="w-6 h-6 text-[#6b7280]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-bold text-[#2c1810]">{meeting.title}</h3>
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${meeting.status === 'live' ? 'bg-red-100 text-red-500' : 'bg-[#6b7280]/10 text-[#6b7280]'}`}>
                            {meeting.status === 'live' ? '🔴 LIVE' : 'Upcoming'}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#8b6f47]">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {meeting.date}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {meeting.time} ({meeting.duration})</span>
                          <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {meeting.attendees}</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="bg-[#f5f1e8] rounded-lg px-3 py-1.5 flex-1 min-w-0">
                            <span className="text-xs text-[#8b6f47] truncate block">{meeting.link}</span>
                          </div>
                          <button
                            onClick={() => copyMeetingLink(meeting.link, meeting.id)}
                            className={`shrink-0 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${copiedLink === meeting.id ? 'bg-[#d97836] text-white' : 'bg-[#f5f1e8] text-[#8b6f47] hover:bg-[#d97836]/10'}`}
                          >
                            {copiedLink === meeting.id ? <CheckCircle className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                            {copiedLink === meeting.id ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button className="bg-[#d97836] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#c46a2f] transition-all flex items-center gap-1.5">
                          <Video className="w-4 h-4" /> Start
                        </button>
                        <button onClick={() => setMeetings(m => m.filter(x => x.id !== meeting.id))}
                          className="text-[#8b6f47] hover:text-red-400 p-2 rounded-xl hover:bg-red-50 transition-all">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* ── CONTENT CALENDAR ───────────────────────────────────────── */}
          {activeTab === 'calendar' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#2c1810]">Content Calendar</h2>
                <button onClick={() => setActiveTab('ai-content')}
                  className="bg-[#d97836] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#c46a2f] transition-all flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Create Post
                </button>
              </div>
              <div className="space-y-4">
                {savedPosts.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
                    <div className="text-4xl mb-4">📅</div>
                    <h3 className="font-bold text-[#2c1810] mb-2">No posts yet</h3>
                    <p className="text-[#8b6f47] text-sm mb-4">Use the AI Content Generator to create your first post</p>
                    <button onClick={() => setActiveTab('ai-content')}
                      className="bg-[#d97836] text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#c46a2f] transition-all">
                      Create Post
                    </button>
                  </div>
                ) : (
                  savedPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#1877f2]/10 rounded-xl flex items-center justify-center shrink-0">
                          <Facebook className="w-5 h-5 text-[#1877f2]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="font-semibold text-[#2c1810] text-sm">{post.topic}</span>
                            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${post.status === 'published' ? 'bg-[#d97836]/15 text-[#d97836]' : post.status === 'scheduled' ? 'bg-[#6b7280]/15 text-[#6b7280]' : 'bg-[#8b6f47]/15 text-[#8b6f47]'}`}>
                              {post.status}
                            </span>
                            {post.scheduled && (
                              <span className="text-xs text-[#6b7280] flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {post.scheduled}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-[#8b6f47] line-clamp-2 leading-relaxed">{post.content}</p>
                          <div className="flex gap-3 mt-3">
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(post.content);
                              }}
                              className="flex items-center gap-1.5 text-xs font-semibold text-[#d97836] hover:text-[#c46a2f]"
                            >
                              <Copy className="w-3.5 h-3.5" /> Copy
                            </button>
                            <button
                              onClick={() => setSavedPosts(p => p.map(x => x.id === post.id ? { ...x, status: 'published' } : x))}
                              className="flex items-center gap-1.5 text-xs font-semibold text-[#6b7280] hover:text-[#2c1810]"
                            >
                              <Send className="w-3.5 h-3.5" /> Mark Published
                            </button>
                            <button
                              onClick={() => setSavedPosts(p => p.filter(x => x.id !== post.id))}
                              className="flex items-center gap-1.5 text-xs font-semibold text-[#8b6f47] hover:text-red-400"
                            >
                              <Trash2 className="w-3.5 h-3.5" /> Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* ── BLOG ───────────────────────────────────────────────────── */}
          {activeTab === 'blog' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#2c1810]">Blog Manager</h2>
                <button className="bg-[#d97836] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#c46a2f] transition-all flex items-center gap-2">
                  <Plus className="w-4 h-4" /> New Post
                </button>
              </div>
              <BlogManager />
            </div>
          )}

          {/* ── ANALYTICS ──────────────────────────────────────────────── */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-[#2c1810]">Analytics Overview</h2>
              <AnalyticsDashboard />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// ── Blog Manager Component ─────────────────────────────────────────────────
function BlogManager() {
  const [drafts, setDrafts] = useState([
    { id: 1, title: 'New Pack Discovery in Hwange', status: 'published', date: '2026-04-15', views: 1240 },
    { id: 2, title: 'Education Centre Q1 Report', status: 'draft', date: '2026-04-22', views: 0 },
    { id: 3, title: 'GPS Tracking Season 2026', status: 'scheduled', date: '2026-04-28', views: 0 },
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [showEditor, setShowEditor] = useState(false);

  return (
    <div className="space-y-4">
      {showEditor && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#d97836]/20">
          <h3 className="font-bold text-[#2c1810] mb-4">New Blog Post</h3>
          <div className="space-y-4">
            <input
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              placeholder="Post title..."
              className="w-full border-2 border-[#e8ddd0] rounded-xl px-4 py-3 text-[#2c1810] text-sm focus:outline-none focus:border-[#d97836] transition-colors"
            />
            <textarea
              value={newContent}
              onChange={e => setNewContent(e.target.value)}
              placeholder="Write your blog post content here..."
              rows={8}
              className="w-full border-2 border-[#e8ddd0] rounded-xl px-4 py-3 text-[#2c1810] text-sm focus:outline-none focus:border-[#d97836] transition-colors resize-none"
            />
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setDrafts(d => [...d, { id: Date.now(), title: newTitle || 'Untitled', status: 'draft', date: new Date().toISOString().split('T')[0], views: 0 }]);
                  setNewTitle(''); setNewContent(''); setShowEditor(false);
                }}
                className="bg-[#d97836] text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#c46a2f] transition-all"
              >
                Save Draft
              </button>
              <button onClick={() => setShowEditor(false)} className="border-2 border-[#e8ddd0] text-[#8b6f47] px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#f5f1e8] transition-all">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {!showEditor && (
        <button onClick={() => setShowEditor(true)} className="w-full border-2 border-dashed border-[#d97836]/40 text-[#d97836] py-4 rounded-2xl font-semibold text-sm hover:bg-[#d97836]/5 transition-all flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" /> Write New Blog Post
        </button>
      )}
      {drafts.map(draft => (
        <div key={draft.id} className="bg-white rounded-2xl p-5 shadow-sm flex items-center gap-4 hover:shadow-md transition-all">
          <div className="w-10 h-10 bg-[#f5f1e8] rounded-xl flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5 text-[#8b6f47]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="font-semibold text-[#2c1810] text-sm">{draft.title}</h3>
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${draft.status === 'published' ? 'bg-[#d97836]/15 text-[#d97836]' : draft.status === 'scheduled' ? 'bg-[#6b7280]/15 text-[#6b7280]' : 'bg-[#8b6f47]/15 text-[#8b6f47]'}`}>
                {draft.status}
              </span>
            </div>
            <div className="flex gap-4 text-xs text-[#8b6f47]">
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {draft.date}</span>
              {draft.views > 0 && <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {draft.views} views</span>}
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <button className="text-[#8b6f47] hover:text-[#d97836] p-2 rounded-lg hover:bg-[#d97836]/10 transition-all">
              <Edit3 className="w-4 h-4" />
            </button>
            <button onClick={() => setDrafts(d => d.filter(x => x.id !== draft.id))} className="text-[#8b6f47] hover:text-red-400 p-2 rounded-lg hover:bg-red-50 transition-all">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Analytics Dashboard Component ─────────────────────────────────────────
function AnalyticsDashboard() {
  const metrics = [
    { label: 'Page Likes', value: '14,832', change: '+342 this month', up: true },
    { label: 'Post Reach (avg)', value: '3,241', change: '+18% vs last month', up: true },
    { label: 'Engagement Rate', value: '4.2%', change: '+0.8% vs last month', up: true },
    { label: 'Link Clicks', value: '892', change: '-3% vs last month', up: false },
    { label: 'Donations Referred', value: '$4,320', change: '+28% vs last month', up: true },
    { label: 'New Followers', value: '218', change: 'This month', up: true },
  ];

  const topPosts = [
    { title: '47 Pups Born This Season 🐾', reach: '12,847', engagement: '8.4%', date: 'Apr 15' },
    { title: 'Snare Removal Campaign Update', reach: '8,234', engagement: '6.2%', date: 'Apr 10' },
    { title: 'Education Centre Milestone', reach: '6,891', engagement: '5.1%', date: 'Apr 5' },
    { title: 'GPS Tracking Reveals Giant Territory', reach: '5,432', engagement: '4.8%', date: 'Mar 28' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="text-sm text-[#8b6f47] mb-1">{m.label}</div>
            <div className="text-2xl font-bold text-[#2c1810] mb-1">{m.value}</div>
            <div className={`text-xs font-semibold flex items-center gap-1 ${m.up ? 'text-[#d97836]' : 'text-[#8b6f47]'}`}>
              <TrendingUp className="w-3 h-3" /> {m.change}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="font-bold text-[#2c1810] mb-4">Top Performing Posts (Last 30 Days)</h3>
        <div className="space-y-3">
          {topPosts.map((post, i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-[#f5f1e8]">
              <div className="w-7 h-7 bg-[#d97836] rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-[#2c1810] truncate">{post.title}</div>
                <div className="text-xs text-[#8b6f47]">{post.date}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-sm font-bold text-[#2c1810]">{post.reach}</div>
                <div className="text-xs text-[#6b7280]">{post.engagement} eng.</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#2c1810] rounded-2xl p-6 text-white">
        <h3 className="font-bold mb-3 text-[#d97836]">AI Recommendations</h3>
        <ul className="space-y-2 text-sm text-white/70">
          <li className="flex items-start gap-2"><span className="text-[#d97836] mt-0.5">→</span> Your wildlife photos get 3x more engagement than text posts. Post more imagery.</li>
          <li className="flex items-start gap-2"><span className="text-[#d97836] mt-0.5">→</span> Tuesday and Thursday between 7–9am have highest audience activity.</li>
          <li className="flex items-start gap-2"><span className="text-[#d97836] mt-0.5">→</span> Your fundraising posts perform best when paired with a specific impact metric.</li>
          <li className="flex items-start gap-2"><span className="text-[#d97836] mt-0.5">→</span> Try increasing video content — it currently makes up only 8% of posts.</li>
        </ul>
      </div>
    </div>
  );
}