import { ArrowUpRight, CalendarDays, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Tournament } from '../data/demo'
import StatusBadge from './StatusBadge'

export default function TournamentCard({ tournament }: { tournament: Tournament }) {
  const progress = Math.min(100, Math.round((tournament.participants / tournament.capacity) * 100))
  return (
    <article className="tournament-card">
      <div className="card-topline"><span className="game-label"><span className="game-dot" />{tournament.game}</span><StatusBadge status={tournament.status} /></div>
      <h3>{tournament.name}</h3>
      <p className="tournament-format">{tournament.format}</p>
      <div className="participant-line"><span><Users size={15} /> Players</span><strong>{tournament.participants}<span className="subtle-number"> / {tournament.capacity}</span></strong></div>
      <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>
      <div className="tournament-meta"><span><CalendarDays size={15} />{tournament.startsAt}</span><span className="prize-value">{tournament.prize}</span></div>
      <Link className={`card-link ${tournament.status === 'Completed' ? 'link-muted' : ''}`} to={`/tournaments/${tournament.id}`}>
        {tournament.status === 'Completed' ? 'View results' : 'View tournament'} <ArrowUpRight size={16} />
      </Link>
    </article>
  )
}
