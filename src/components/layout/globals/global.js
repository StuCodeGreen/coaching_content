import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1080px;
  grid-gap: 20px;
  padding: 10px;
`;
