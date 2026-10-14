import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import TournamentsPage from './pages/Tournaments'
import LeaderboardPage from './pages/Leaderboard'
import Placeholder from './pages/Placeholder'

function AppFrame() {
  const location = useLocation()
  const titleMap: Record<string, string> = {
    '/': 'Overview',
    '/tournaments': 'Tournaments',
    '/leaderboard': 'Leaderboard',
    '/profile': 'My profile',
    '/players': 'Players',
    '/activity': 'Match activity',
    '/settings': 'Settings',
  }
  const isTournamentDetail = location.pathname.startsWith('/tournaments/')
  const title = isTournamentDetail ? 'Tournament details' : titleMap[location.pathname] ?? 'EF Clash'
  useEffect(() => { document.title = `${title} · EF Clash` }, [title])
  return <div className="app-shell"><Sidebar /><main className="main-area"><Topbar title={title} /><Routes><Route path="/" element={<Dashboard />} /><Route path="/tournaments" element={<TournamentsPage />} /><Route path="/tournaments/:id" element={<Placeholder />} /><Route path="/leaderboard" element={<LeaderboardPage />} /><Route path="/profile" element={<Placeholder />} /><Route path="/players" element={<Placeholder />} /><Route path="/activity" element={<Placeholder />} /><Route path="/settings" element={<Placeholder />} /><Route path="*" element={<Navigate to="/" replace />} /></Routes><footer className="app-footer"><span>© {new Date().getFullYear()} EF Clash</span><span>Built for fair play and competitive eFootball.</span><span><i className="footer-dot" /> Foundation preview</span></footer></main></div>
}

export default function App() { return <AppFrame /> }
