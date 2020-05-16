import React from 'react';
import { ContentCard, Image, ProfileImage } from './styles';

export const Card = ({ id, contentType, title, author, image }) => {
  return (
    <ContentCard>
      <Image>
        <img src={image.src} alt={image.alt} />
      </Image>

      <div>
        {contentType.map((type) => (
          <span className={`typeName ${type}`}>{type}</span>
        ))}
      </div>

      <h1>{title}</h1>
      <ProfileImage>
        <img src={author.image.src} alt={author.image.alt}></img>
      </ProfileImage>

      <p>{author.name}</p>
    </ContentCard>
  );
};
