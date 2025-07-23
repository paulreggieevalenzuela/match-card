
export type Filter = 'all' | 'notstarted' | 'inprogress' | 'finished' | 'canceled' | 'upcoming';

export interface Match {
  country: string;
  id: string;
  name: string;
  competition: string;
  date: string;
  time: string;
  timestamp: number;
  status: {
    type: 'notstarted' | 'inprogress' | 'finished' | 'canceled' | 'upcoming';
  };
  homeTeam: {
    name: string;
  };
  awayTeam: {
    name: string;
  };
  homeScore: {
    current: number;
  };
  awayScore: {
    current: number;
  };
  liveStatus: string;
}