import { Filter, Plus, Search, SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import TournamentCard from '../components/TournamentCard'
import { tournaments, type TournamentStatus } from '../data/demo'

type FilterValue = 'All' | TournamentStatus

export default function TournamentsPage() {
  const [filter, setFilter] = useState<FilterValue>('All')
  const [query, setQuery] = useState('')
  const visible = useMemo(() => tournaments.filter((t) => (filter === 'All' || t.status === filter) && t.name.toLowerCase().includes(query.toLowerCase())), [filter, query])
  const filters: FilterValue[] = ['All', 'Registration open', 'In progress', 'Completed']
  return <div className="page-content">
    <div className="page-intro-row"><div><span className="eyebrow">THE COMPETITIVE CIRCUIT</span><h2>Tournaments</h2><p>Find your bracket, prepare your squad, and compete.</p></div><button className="button button-primary" disabled title="Tournament creation is implemented in a later stage"><Plus size={17} /> Create tournament <span className="soon-label">SOON</span></button></div>
    <div className="toolbar"><div className="search-field"><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tournaments..." aria-label="Search tournaments" /></div><div className="filter-label"><SlidersHorizontal size={16} /> Filter</div><div className="filter-tabs" role="group" aria-label="Tournament status filter">{filters.map((f) => <button key={f} className={filter === f ? 'filter-tab selected' : 'filter-tab'} onClick={() => setFilter(f)}>{f}</button>)}</div></div>
    <div className="results-caption"><span><Filter size={14} /> Showing <strong>{visible.length}</strong> tournaments</span><span>Demo data · not live registrations</span></div>
    {visible.length ? <div className="tournament-grid">{visible.map((t) => <TournamentCard key={t.id} tournament={t} />)}</div> : <div className="empty-state"><Search size={25} /><h3>No tournaments found</h3><p>Try another name or status filter.</p><button className="button button-secondary" onClick={() => { setFilter('All'); setQuery('') }}>Clear filters</button></div>}
  </div>
}
