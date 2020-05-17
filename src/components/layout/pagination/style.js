import styled from 'styled-components';

export const PageSelector = styled('div')`
  display: flex;
  justify-content: center;
  position: relative;

  .pages {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: #cccccc;
    border-radius: 10px;
    margin-right: 12px;
  }

  .pages.active {
    background-color: #222222;
  }
`;
