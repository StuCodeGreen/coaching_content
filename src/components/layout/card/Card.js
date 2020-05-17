import React from 'react';
import { ContentCard, Image, Profile, ContentType } from './styles';
import { H2 } from '../../core/typography';

export const Card = ({ id, contentType, title, author, image }) => {
  return (
    <ContentCard>
      <Image>
        <img src={image.src} alt={image.alt} />
      </Image>

      <div>
        <ContentType>
          {contentType.map((type) => (
            <span className={`typeName ${type}`}>{type}</span>
          ))}
        </ContentType>
      </div>

      <H2>{title}</H2>
      <Profile>
        <img src={author.image.src} alt={author.image.alt}></img>
        <p>{author.name}</p>
      </Profile>
    </ContentCard>
  );
};
