import { NavLink } from 'react-router-dom'
import { Activity, BarChart3, CircleHelp, Gamepad2, LayoutDashboard, Settings, Shield, Trophy, Users } from 'lucide-react'

const mainLinks = [
  { to: '/', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/tournaments', label: 'Tournaments', icon: Trophy },
  { to: '/leaderboard', label: 'Leaderboard', icon: BarChart3 },
  { to: '/players', label: 'Players', icon: Users },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink to="/" className="brand" aria-label="EF Clash home">
        <span className="brand-mark"><Gamepad2 size={21} /></span>
        <span className="brand-name">EF<span>CLASH</span><small>COMPETITIVE HUB</small></span>
      </NavLink>
      <div className="sidebar-label">WORKSPACE</div>
      <nav className="side-nav" aria-label="Main navigation">
        {mainLinks.map(({ to, label, icon: Icon, ...rest }) => (
          <NavLink key={to} to={to} end={rest.end} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            <Icon size={18} strokeWidth={1.8} /><span>{label}</span>
            {label === 'Tournaments' && <span className="nav-count">4</span>}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-label sidebar-label-spaced">YOUR SPACE</div>
      <nav className="side-nav" aria-label="Personal navigation">
        <NavLink to="/profile" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}><Shield size={18} /><span>My profile</span></NavLink>
        <NavLink to="/activity" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}><Activity size={18} /><span>Match activity</span></NavLink>
      </nav>
      <div className="sidebar-bottom">
        <div className="sidebar-help"><span className="help-icon"><CircleHelp size={17} /></span><div><strong>Need a hand?</strong><small>Visit the player guide</small></div></div>
        <NavLink to="/settings" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}><Settings size={18} /><span>Settings</span></NavLink>
        <div className="sidebar-version">EF Clash <span>v1.0 foundation</span></div>
      </div>
    </aside>
  )
}
