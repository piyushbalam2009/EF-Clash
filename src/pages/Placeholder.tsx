import { ArrowLeft, Construction } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const copy: Record<string, { title: string; description: string }> = {
  players: { title: 'Players', description: 'Player discovery, verified records and public profiles are planned for the next stage.' },
  activity: { title: 'Match activity', description: 'Your submitted results, verification history and upcoming fixtures will appear here.' },
  settings: { title: 'Settings', description: 'Account preferences and security controls will be added after authentication is connected.' },
}

export default function Placeholder() {
  const location = useLocation()
  const key = location.pathname.replace('/', '')
  const page = copy[key] ?? { title: 'Tournament details', description: 'Persistent tournament details and bracket data will be connected in a later stage.' }
  return <div className="page-content"><div className="placeholder-card"><span className="placeholder-icon"><Construction size={25} /></span><span className="eyebrow">COMING IN A LATER STAGE</span><h2>{page.title}</h2><p>{page.description}</p><Link className="button button-secondary" to="/"><ArrowLeft size={16} /> Back to overview</Link></div></div>
}
