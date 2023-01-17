import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container';
import Filter from '../../components/Filter';
import ArticleList from '../../components/ArticleList';
import { getArticles } from '../../redux/articles/articles-operations';
import articlesSelectors from '../../redux/articles/articles-selectors';
import '../../sass/main.scss';

const HomePage = () => {
  const [filter, setFilter] = useState('');
  const articles = useSelector(articlesSelectors.articlesView);

  const dispatch: any = useDispatch();
  const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleArticles = () => {
    const normalizedFilter = filter.toLowerCase();

    if (filter.length) {
      const filterByTitle = articles.filter(({ title }) =>
        title.toLowerCase().includes(normalizedFilter),
      );
      const filterBySummary = articles.filter(({ summary }) =>
        summary.toLowerCase().includes(normalizedFilter),
      );
      return [...new Set([...filterByTitle, ...filterBySummary])];
    } else {
      return articles;
    }
  };

  const filterArticles = filter ? getVisibleArticles() : articles;

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <Container>
      <Filter value={filter} onFilterArticles={changeFilter} />
      {articles && (
        <p className="homepage__results">{`Results: ${filterArticles.length}`}</p>
      )}
      {articles && <ArticleList articles={filterArticles} value={filter} />}
    </Container>
  );
};

export default HomePage;
