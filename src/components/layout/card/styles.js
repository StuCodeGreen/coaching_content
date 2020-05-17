import styled from 'styled-components';

export const ContentCard = styled('div')`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 340px 24px auto auto;
  width: 340px;
  min-height: 544px;
  grid-template-areas:
    'photo '
    'type '
    'title '
    'author ';
  background: #fff;
`;

export const ContentType = styled('div')`
  grid-area: type;
  margin-top: 30px;
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
  margin-top: 42px;
`;

export const Image = styled('div')`
  grid-area: photo;
  height: 340px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Profile = styled('div')`
  grid-area: author;
  display: flex;
  align-items: center;
  padding: 30px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
  p {
    color: #555555;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
  }
`;
