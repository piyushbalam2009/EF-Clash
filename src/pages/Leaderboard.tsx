import { ArrowDownUp, Crown, Medal, Search, TrendingUp } from 'lucide-react'
import { useMemo, useState } from 'react'
import { leaderboard } from '../data/demo'

export default function LeaderboardPage() {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState<'points' | 'wins'>('points')
  const players = useMemo(() => leaderboard.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()) || p.handle.toLowerCase().includes(query.toLowerCase())).sort((a, b) => b[sort] - a[sort]), [query, sort])
  return <div className="page-content">
    <div className="page-intro-row"><div><span className="eyebrow">EARN YOUR PLACE</span><h2>Leaderboard</h2><p>Player rankings will be calculated from verified match results.</p></div><div className="ranking-chip"><TrendingUp size={16} /> Season 01 <span>DEMO</span></div></div>
    <div className="leaderboard-hero"><div><span className="eyebrow">THE CURRENT STANDARD</span><h3>Every match counts.</h3><p>Win verified matches to climb the table. The live ranking engine will be connected in a later stage.</p></div><div className="podium-preview"><div className="podium-player second"><Medal size={19} /><span>02</span><strong>{leaderboard[1].name}</strong><small>{leaderboard[1].points.toLocaleString()} pts</small></div><div className="podium-player first"><Crown size={23} /><span>01</span><strong>{leaderboard[0].name}</strong><small>{leaderboard[0].points.toLocaleString()} pts</small></div><div className="podium-player third"><Medal size={17} /><span>03</span><strong>{leaderboard[2].name}</strong><small>{leaderboard[2].points.toLocaleString()} pts</small></div></div></div>
    <div className="panel table-panel"><div className="table-toolbar"><div><span className="eyebrow">PLAYER STANDINGS</span><h3>Global rankings <span className="demo-pill">SAMPLE</span></h3></div><div className="table-tools"><label className="search-field compact"><Search size={16} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Find player..." aria-label="Find player" /></label><button className="button button-secondary button-small" onClick={() => setSort(sort === 'points' ? 'wins' : 'points')}><ArrowDownUp size={14} /> Sort: {sort === 'points' ? 'Points' : 'Wins'}</button></div></div>
      <div className="table-scroll"><table><thead><tr><th>RANK</th><th>PLAYER</th><th>POINTS</th><th>WINS</th><th>LOSSES</th><th>WIN RATE</th><th>RECENT FORM</th></tr></thead><tbody>{players.map((p) => <tr key={p.name}><td><span className={`table-rank ${p.rank <= 3 ? 'rank-highlight' : ''}`}>{String(p.rank).padStart(2, '0')}</span></td><td><div className="table-player"><span className={`avatar avatar-${p.rank}`}>{p.name.slice(0, 2).toUpperCase()}</span><span><strong>{p.name}</strong><small>{p.handle}</small></span></div></td><td><strong className="table-points">{p.points.toLocaleString()}</strong></td><td>{p.wins}</td><td>{p.losses}</td><td>{Math.round(p.wins / (p.wins + p.losses) * 100)}%</td><td><div className="form-dots">{p.form.map((v, i) => <span key={i} className={v === 'W' ? 'form-win' : 'form-loss'}>{v}</span>)}</div></td></tr>)}</tbody></table></div>
      {!players.length && <div className="empty-state compact-empty"><Search size={22} /><p>No players match that search.</p></div>}
      <div className="table-footnote">All names, scores and records on this page are illustrative demo data.</div>
    </div>
  </div>
}
