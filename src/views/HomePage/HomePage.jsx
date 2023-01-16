import { useState, useEffect } from 'react';
import Container from '../../components/Container';
import Filter from '../../components/Filter';
import ArticleList from '../../components/ArticleList';
import { getArticles } from '../../services/api.js';
import '../../sass/components/_homepage.scss';

const HomePage = () => {
  const [articles, setArticles] = useState(null);
  const [filter, setFilter] = useState('');
 
  const changeFilter = e => {
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
