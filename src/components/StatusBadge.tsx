import type { TournamentStatus } from '../data/demo'

export default function StatusBadge({ status }: { status: TournamentStatus }) {
  const className = status === 'Registration open' ? 'status-open' : status === 'In progress' ? 'status-live' : 'status-done'
  return <span className={`status-badge ${className}`}><i />{status}</span>
}
