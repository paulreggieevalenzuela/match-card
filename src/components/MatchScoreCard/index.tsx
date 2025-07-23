'use client';

import { Match } from '@/types/match';
import { formatDate } from '@/utils/formatDate';

import { 
  Card,
  Country,
  League,
  Status,
  Score,
  TeamRow,
  TeamName,
  StatusCircle,
  PlaceholderCircle
} from './styles';

interface MatchScoreCardProps {
  match: Match;
}

export const MatchScoreCard: React.FC<MatchScoreCardProps> = ({ match }) => {
  const date = formatDate(match.date);

  const readableStatus =
    match?.status?.type === 'finished'
      ? 'ENDED'
      : match?.status?.type === 'inprogress'
      ? 'LIVE'
      : match?.status?.type === 'canceled'
      ? 'CANCELLED'
      : `${date} ${match.time}`;

  return (
    <Card>
      <Country>{match.country}</Country>
      <League>{match.competition}</League>
      <Status statusType={match.status.type}>{readableStatus}</Status>

      <Score>
        {match.homeScore.current || 0} <span>-</span> {match.awayScore.current || 0}
      </Score>

      <TeamRow>
        <TeamName>{match.homeTeam.name}</TeamName>
        {match?.status?.type === 'canceled' || match?.status?.type === 'notstarted' || match?.status?.type === 'upcoming' ? (
          <PlaceholderCircle />
        ) : (
          <StatusCircle>{match.liveStatus}</StatusCircle>
        )}
        <TeamName>{match.awayTeam.name}</TeamName>
      </TeamRow>
    </Card>
  );
};