export type TournamentStatus = 'Registration open' | 'In progress' | 'Completed'

export type Tournament = {
  id: string
  name: string
  game: string
  status: TournamentStatus
  participants: number
  capacity: number
  prize: string
  startsAt: string
  format: string
}

export const tournaments: Tournament[] = [
  { id: 'ef-open-01', name: 'EF Open: Weekend Cup', game: 'eFootball', status: 'Registration open', participants: 22, capacity: 32, prize: '₹2,500', startsAt: 'Sat, 7:00 PM IST', format: 'Single elimination' },
  { id: 'ef-league-02', name: 'Rivals League — Season 1', game: 'eFootball', status: 'In progress', participants: 48, capacity: 48, prize: '₹10,000', startsAt: 'Started Oct 10', format: 'League + playoffs' },
  { id: 'ef-rookie-03', name: 'Rookie Showdown', game: 'eFootball', status: 'Registration open', participants: 11, capacity: 16, prize: '₹1,000', startsAt: 'Sun, 5:30 PM IST', format: 'Single elimination' },
  { id: 'ef-night-04', name: 'Night Shift Challenge', game: 'eFootball', status: 'Completed', participants: 16, capacity: 16, prize: '₹1,500', startsAt: 'Completed Oct 8', format: 'Single elimination' },
]

export const leaderboard = [
  { rank: 1, name: 'PixelStriker', handle: '@pixelstriker', points: 2480, wins: 42, losses: 6, form: ['W', 'W', 'W', 'W', 'L'] },
  { rank: 2, name: 'TikiTakaPro', handle: '@tikitaka', points: 2315, wins: 38, losses: 9, form: ['W', 'L', 'W', 'W', 'W'] },
  { rank: 3, name: 'CounterKing', handle: '@counterking', points: 2240, wins: 35, losses: 10, form: ['L', 'W', 'W', 'W', 'W'] },
  { rank: 4, name: 'FalseNine', handle: '@falsenine', points: 2180, wins: 31, losses: 12, form: ['W', 'L', 'W', 'L', 'W'] },
  { rank: 5, name: 'PressingLab', handle: '@pressinglab', points: 2045, wins: 29, losses: 14, form: ['W', 'W', 'L', 'W', 'L'] },
]
