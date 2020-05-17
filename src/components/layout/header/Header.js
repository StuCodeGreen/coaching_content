import React from 'react';
import styled from 'styled-components';
import { H1 } from '../../core/typography';

const StyledComponent = styled('div')`
  display: flex;
  flex: 0 0 auto;
  max-width: 1060px;
  width: 100%;
  height: 37px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`;

export const Header = () => {
  return (
    <StyledComponent>
      <H1>Your Content</H1>
    </StyledComponent>
  );
};
