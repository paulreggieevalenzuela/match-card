'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Match, Filter } from '@/types/match';
import { MatchScoreCard } from '@/components/MatchScoreCard';

import { 
  Container,
  DropdownWrapper,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  Count,
  ListOfMatch,
  MatchListItem 
} from './styles';

const filterLabels: any = {
  all: 'All',
  finished: 'Result',
  inprogress: 'Live',
  upcoming: 'Upcoming',
};

export const MatchesCard: React.FC = () => {
  const [data, setData] = useState<Match[]>([]);
  const [filter, setFilter] = useState<Filter>('all');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  //   ALL -> No Filters, Result => status.type == finished, Live => status.type == inprogress, Upcoming => status.type == notstarted
  const filteredMatches = data.filter((match) => {
    if (filter === 'finished') return match.status.type === 'finished';
    if (filter === 'inprogress') return match.status.type === 'inprogress';
    if (filter === 'upcoming') return match.status.type === 'notstarted';
    return true;
  });

  const counts: any = {
    finished: data.filter((m) => m.status.type === 'finished').length,
    inprogress: data.filter((m) => m.status.type === 'inprogress').length,
    upcoming: data.filter((m) => m.status.type === 'notstarted').length,
    all: data.length,
  };

  const handleSelect = (value: Filter) => {
    setFilter(value);
    setDropdownOpen(false);
  };

  useEffect(() => {
    fetch('/data/sports.json') 
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <Container>
      <DropdownWrapper>
        <DropdownButton onClick={() => setDropdownOpen((prev) => !prev)}>
          Filters
        </DropdownButton>

        <DropdownMenu open={dropdownOpen}>
          {(Object.keys(filterLabels) as any[]).map((key) => (
            <DropdownItem key={key} onClick={() => handleSelect(key)}>
              {filterLabels[key]} 
              <Count>
                {counts[key]}
              </Count>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </DropdownWrapper>

      <ListOfMatch>
        {filteredMatches.length && filteredMatches.map((match) => {
          const readableStatus =
            match?.status?.type === 'finished'
              ? 'ENDED'
              : match?.status?.type === 'inprogress'
              ? 'LIVE'
              : match?.status?.type === 'canceled'
              ? 'CANCELLED'
              : 'UPCOMING';

          return (
            <MatchListItem key={match.id}>
              <MatchScoreCard match={match} />
            </MatchListItem>
          )
        })}
      </ListOfMatch>
    </Container>
  );
};