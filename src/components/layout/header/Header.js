import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  outline: 2px dashed red;
  max-width: 1060px;
  width: 100%;
  flex: 0 0 auto;
  height: 80px;
  align-items: center;
`;

export const Header = () => {
  return (
    <StyledComponent>
      <h1>Left</h1>
      <h1>right</h1>
    </StyledComponent>
  );
};
