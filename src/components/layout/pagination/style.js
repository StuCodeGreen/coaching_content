import styled from 'styled-components';

export const PageSelector = styled('div')`
  outline: 1px dashed red;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 60px;

  .pages {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: #cccccc;
    border-radius: 10px;
    margin: 0px 6px;
  }

  .pages.active {
    background-color: #222222;
  }
`;
