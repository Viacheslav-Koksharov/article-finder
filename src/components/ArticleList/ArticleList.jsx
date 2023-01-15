import React from 'react';
import ArticleItem from '../ArticleItem';
import '../../sass/components/_articleList.scss';

const ArticleList = ({articles,value}) => (
  <ul className="list">    
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