import styled from 'styled-components';

export const ContentCard = styled('div')`
  outline: 1px dashed red;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 340px;
  min-height: 544px;
  grid-template-areas:
    'photo '
    'type '
    'title '
    'author ';
  grid-gap: 20px;
  background: #fff;
`;

export const ContentType = styled('div')`
  outline: 1px dashed red;
  grid-area: type;
  padding: 0px 30px;
  .typeName {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #ffffff;
    padding: 6px 12px;
    margin: 3px;
    border-radius: 1000px;
  }
  .video {
    background: #37cda8;
  }
  .webinar {
    background: #ffbd13;
  }
  .animation {
    background: #3b4ce4;
  }
  .infographic {
    background: #de5114;
  }
`;

export const Title = styled('div')`
  padding: 0px 30px;
`;

export const Image = styled('div')`
  outline: 1px dashed red;
  grid-area: photo;
  height: 340px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Profile = styled('div')`
  outline: 1px dashed red;
  grid-area: author;
  display: flex;
  align-items: center;
  padding: 0px 30px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
  p {
    outline: 1px dashed red;
    color: #555555;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
  }
`;
