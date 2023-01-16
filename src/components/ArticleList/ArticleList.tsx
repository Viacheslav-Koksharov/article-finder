import ArticleItem from '../ArticleItem';
import '../../sass/main.scss';
import { IArticleItem } from "../../interfaces/ArticleItem.interfaces";

interface IProps {
  articles: IArticleItem[];
  value: string;
}

const ArticleList = ({articles,value}:IProps) => (
  <ul className="list">    
    {articles.map(({ id, imageUrl, publishedAt, title,summary}:IArticleItem) => (      
      <ArticleItem
        key={id}
        id={id}
        imageUrl={imageUrl}
        publishedAt={publishedAt}
        title={title}
        summary={summary}
        filter={value}     />
    ))}    
  </ul> 
);

export default ArticleList;