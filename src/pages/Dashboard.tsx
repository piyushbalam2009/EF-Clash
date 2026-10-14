import { ArrowRight, ArrowUpRight, CalendarDays, ChevronRight, CirclePlay, Medal, Swords, Trophy, Users, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import StatusBadge from '../components/StatusBadge'
import TournamentCard from '../components/TournamentCard'
import { leaderboard, tournaments } from '../data/demo'

export default function Dashboard() {
  const featured = tournaments.slice(0, 3)
  const topPlayers = leaderboard.slice(0, 4)
  return (
    <div className="page-content">
      <section className="welcome-row">
        <div><div className="welcome-kicker"><span className="live-dot" /> THE NEXT MATCH STARTS HERE</div><h2>Play your game.<br /><span>Own your legacy.</span></h2><p>Compete in structured eFootball tournaments, build your record, and earn your place on the leaderboard.</p><div className="welcome-actions"><Link to="/tournaments" className="button button-primary"><Swords size={17} /> Explore tournaments <ArrowRight size={16} /></Link><Link to="/leaderboard" className="button button-secondary">View rankings</Link></div></div>
        <div className="hero-emblem" aria-hidden="true"><div className="emblem-ring ring-one" /><div className="emblem-ring ring-two" /><div className="emblem-core"><Trophy size={58} strokeWidth={1.1} /><span>EF</span></div><span className="emblem-caption">COMPETE · IMPROVE · REPEAT</span></div>
      </section>
      <section className="stats-grid" aria-label="Platform statistics">
        <div className="stat-card"><span className="stat-icon stat-purple"><Users size={19} /></span><div><span className="stat-label">Registered players</span><strong>—</strong><small>Connect database in Stage 2</small></div></div>
        <div className="stat-card"><span className="stat-icon stat-blue"><Trophy size={19} /></span><div><span className="stat-label">Active tournaments</span><strong>2 <em>demo</em></strong><small>Sample data only</small></div></div>
        <div className="stat-card"><span className="stat-icon stat-green"><Medal size={19} /></span><div><span className="stat-label">Matches completed</span><strong>—</strong><small>Real stats coming with database</small></div></div>
        <div className="stat-card"><span className="stat-icon stat-amber"><Zap size={19} /></span><div><span className="stat-label">Your rating</span><strong>Unranked</strong><small>Play verified matches to rank</small></div></div>
      </section>
      <section className="section-block">
        <div className="section-heading"><div><span className="eyebrow">FIND YOUR NEXT CHALLENGE</span><h2>Featured tournaments</h2></div><Link to="/tournaments" className="text-link">All tournaments <ArrowRight size={16} /></Link></div>
        <div className="tournament-grid">{featured.map((t) => <TournamentCard key={t.id} tournament={t} />)}</div>
      </section>
      <section className="bottom-grid">
        <div className="panel recent-panel"><div className="panel-heading"><div><span className="eyebrow">STAY IN THE LOOP</span><h2>Competition board</h2></div><span className="panel-count">02 OPEN</span></div>
          {tournaments.filter((t) => t.status !== 'Completed').slice(0, 3).map((t) => <Link to={`/tournaments/${t.id}`} className="board-row" key={t.id}><span className="board-icon"><CalendarDays size={17} /></span><span className="board-copy"><strong>{t.name}</strong><small>{t.startsAt} · {t.participants}/{t.capacity} players</small></span><StatusBadge status={t.status} /><ChevronRight size={16} className="muted-icon" /></Link>)}
          <Link to="/tournaments" className="panel-footer-link">Browse the tournament calendar <ArrowRight size={15} /></Link>
        </div>
        <div className="panel ranking-panel"><div className="panel-heading"><div><span className="eyebrow">THE TOP OF THE TABLE</span><h2>Leaderboard preview</h2></div><Link to="/leaderboard" className="icon-link" aria-label="View full leaderboard"><ArrowUpRight size={18} /></Link></div>
          {topPlayers.map((p) => <div className="rank-row" key={p.rank}><span className={`rank-number ${p.rank < 4 ? 'rank-highlight' : ''}`}>{String(p.rank).padStart(2, '0')}</span><span className={`avatar avatar-${p.rank}`}>{p.name.slice(0, 2).toUpperCase()}</span><span className="rank-player"><strong>{p.name}</strong><small>{p.handle}</small></span><strong className="rank-points">{p.points.toLocaleString()} <small>pts</small></strong></div>)}
          <Link to="/leaderboard" className="panel-footer-link">See all rankings <ArrowRight size={15} /></Link>
        </div>
      </section>
      <div className="demo-notice"><CirclePlay size={16} /><span><strong>Foundation preview:</strong> cards and rankings currently use labelled demo data. No signups, registrations, scores, or rewards are being saved yet.</span></div>
    </div>
  )
}
