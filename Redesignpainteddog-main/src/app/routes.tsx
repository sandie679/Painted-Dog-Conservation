import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { WhoWeAre } from './pages/WhoWeAre';
import { AboutPaintedDogs } from './pages/AboutPaintedDogs';
import { FAQ } from './pages/FAQ';
import { Blog } from './pages/Blog';
import { Donate } from './pages/Donate';
import { Publications } from './pages/Publications';
import { Contact } from './pages/Contact';
import { ConservationPrograms } from './pages/ConservationPrograms';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'who-we-are', Component: WhoWeAre },
      { path: 'about-painted-dogs', Component: AboutPaintedDogs },
      { path: 'faq', Component: FAQ },
      { path: 'blog', Component: Blog },
      { path: 'donate', Component: Donate },
      { path: 'publications', Component: Publications },
      { path: 'contact', Component: Contact },
      { path: 'conservation-programs', Component: ConservationPrograms },
    ],
  },
  { path: '/admin', Component: AdminLogin },
  { path: '/admin/dashboard', Component: AdminDashboard },
]);
