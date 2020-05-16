import React from 'react';
import './styles';

export const Card = ({ id, contentType, title, author, image }) => {
  return (
    <div>
      <img src={image.src} alt="banner" width="100" />

      <div>
        {' '}
        {contentType.map((type) => (
          <span className={`typeName ${type}`}>{type}</span>
        ))}
      </div>

      <h1>{title}</h1>
      <img src={author.image.src} alt={author.image.alt} width="100"></img>
      <p>{author.name}</p>
    </div>
  );
};
