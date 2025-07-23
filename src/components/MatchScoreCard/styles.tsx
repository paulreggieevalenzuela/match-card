import styled from 'styled-components';

export const Card = styled.div`
  background-color: #3d3d3d;
  color: #fff;
  padding: 50px 15px;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 100%;
`;

export const Country = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.75rem;
  color: #ccc;
`;

export const League = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
  word-wrap: break-word;
  margin: 8px 0;
`;

export const Status = styled.div<{ statusType: string }>`
  color: ${({ statusType }) =>
    statusType === 'notstarted' ? '#fff' :
    statusType === 'finished' ? '#4ade80' :
    statusType === 'inprogress' ? '#facc15' :
    statusType === 'cancelled' ? '#f87171' : '#fbbf24'};
  font-size: 0.875rem;
  margin-top: 0.25rem;
  text-transform: uppercase;
`;

export const Score = styled.div`
  font-size: 3rem;
  font-weight: 600;
  margin: 3.5rem 0 1rem;

  span {
    color: #fff;
    margin: 0 0.5rem;
  }
`;

export const TeamRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding: 0 1rem;
  gap: 1rem;
`;

export const TeamName = styled.div`
  font-size: 1rem;
  flex: 1 1 40%;
  text-align: center;
`;

export const StatusCircle = styled.div`
  width: 75px;
  height: 75px;
  border: 2px solid #4ade80;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4ade80;
  font-size: 24px;
`;

export const PlaceholderCircle = styled(StatusCircle)`
  border-color: #4b5563;
  color: #4b5563;
`;

