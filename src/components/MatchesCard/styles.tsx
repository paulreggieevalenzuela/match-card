import styled from 'styled-components';

export const Container = styled.div`
  max-width: 750px;
  margin: 2rem auto;
  padding: 1rem;
`;

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
  max-width: 180px;
`;

export const DropdownButton = styled.button`
  background: #fff;
  color: #000;
  border: transparent;
  cursor: pointer;
  font-size: 20px;
  padding: 18px 24px;
  width: 250px;
  text-align: left;
`;

export const DropdownMenu = styled.ul<{ open: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  margin: 0;
  background: #fff;
  list-style: none;
  width: 250px;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

export const DropdownItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #3d3d3d;
  color: #000;
  cursor: pointer;
  fontweight: 500;
  padding: 12px 30px;

  &:first-child {
    border-top: 1px solid #3d3d3d;
  }

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #3d3d3d;
    color: #fff;
  }
`;

export const Count = styled.span`
  background: #3d3d3d;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  padding: 5px 8px 6px;
`;

export const ListOfMatch = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const MatchListItem = styled.li`
  margin-bottom: 10px;
`;