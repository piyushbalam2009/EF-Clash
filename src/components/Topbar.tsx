import { Bell, ChevronDown, Search } from 'lucide-react'

type Props = { title: string; eyebrow?: string }

export default function Topbar({ title, eyebrow = 'PLAYER HUB' }: Props) {
  return (
    <header className="topbar">
      <div className="page-heading">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
      </div>
      <div className="topbar-actions">
        <button className="icon-button search-button" aria-label="Search (coming soon)" title="Search is planned for a later stage"><Search size={18} /></button>
        <button className="icon-button notification-button" aria-label="Notifications (coming soon)" title="Notifications are planned for a later stage"><Bell size={18} /><i /></button>
        <button className="user-menu" aria-label="Demo account menu">
          <span className="avatar avatar-sm">EF</span>
          <span className="user-menu-copy"><strong>Guest player</strong><small>Demo mode</small></span>
          <ChevronDown size={15} className="muted-icon" />
        </button>
      </div>
    </header>
  )
}
