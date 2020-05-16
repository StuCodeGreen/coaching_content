import styled from 'styled-components';

export const ContentCard = styled('div')`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 340px;
  height: 544px;
  grid-template-areas:
    'photo '
    'type '
    'title '
    'author ';
  grid-gap: 20px;
  background: #fff;
`;

export const Image = styled('div')`
  grid-area: photo;
  height: 340px;
  outline: 1px dashed red;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileImage = styled('div')`
  grid-area: author;
  outline: 1px dashed red;
  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
`;
