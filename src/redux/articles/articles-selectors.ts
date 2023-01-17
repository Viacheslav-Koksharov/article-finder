import { RootState } from '../store';
const articlesView= (state: RootState) => state.articles.articles;
const articleView= (state: RootState)  => state.articles.article;
const articlesSelectors = {
    articlesView,
    articleView 
}

export default articlesSelectors;