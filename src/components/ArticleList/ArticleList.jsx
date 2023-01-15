import React from 'react';
import ArticleItem from '../ArticleItem';

const ArticleList = ({articles,value}) => (
  <ul style={{ display: 'flex', flexWrap: 'wrap'}}>
    
    {articles.map(({ id, imageUrl, publishedAt, title,summary}) => (
      
      <ArticleItem
        key={id}
        id={id}
        imageUrl={imageUrl}
        publishedAt={publishedAt}
        title={title}
        summary={summary}
        filter={value}
      />
    ))}
    
  </ul>

 
);

export default ArticleList;