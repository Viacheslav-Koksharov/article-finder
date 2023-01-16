import { useState, useEffect } from 'react';
import Container from '../../components/Container';
import Filter from '../../components/Filter';
import ArticleList from '../../components/ArticleList';
import { getArticles } from '../../services/api';
import '../../sass/main.scss';
import { IArticleItem } from "../../interfaces/ArticleItem.interfaces";

const HomePage = () => {
  const [articles, setArticles] = useState<IArticleItem[]>([]);
  const [filter, setFilter] = useState('');
 
  const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  };
  
  const getVisibleArticles = () => {
    const normalizedFilter = filter.toLowerCase();

    if (filter.length) {
      const filterByTitle = articles.filter(({ title }) =>      
        title.toLowerCase().includes(normalizedFilter)
      );
      const filterBySummary = articles.filter(({ summary }) =>
        summary.toLowerCase().includes(normalizedFilter)
      );
      return [...new Set([...filterByTitle, ...filterBySummary])];
    } else {
      return articles;
    }
  };

  const filterArticles = filter ? getVisibleArticles() : articles;

  useEffect(() => {
    getArticles().then(request => setArticles(request.data));
  }, []);

  return (
    <Container>
      <Filter value={filter} onFilterArticles={changeFilter} />
      {articles && <p className="homepage__results">{`Results: ${filterArticles.length}`}</p>}
      {articles && <ArticleList articles={filterArticles} value={filter}/>}
    </Container>
  );
};

export default HomePage;