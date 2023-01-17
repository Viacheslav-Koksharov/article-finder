import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { getArticleById } from '../../redux/articles/articles-operations';
import articlesSelectors from '../../redux/articles/articles-selectors';
import '../../sass/main.scss';

const MovieReview = () => {
  const { id } = useParams();
  const article = useSelector(articlesSelectors.articleView);

  const dispatch: any = useDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatch(getArticleById(id))
  }, [dispatch, id]);

  return (
    <>
      {article && (
        <div className="article">
          <CardMedia
            sx={{height: 245, width:'100%', position: 'absolute', top:0, left:0}}
            image={article?.imageUrl}
            title="image"
          />
          <div className="container__article">
          <CardContent sx={{ padding: 0}}>
            <h5 className="article__title">
              {article?.title}
            </h5>
            <p className="article__summary">
              {article?.summary}
            </p>
          </CardContent>
          </div>
          <div className="container__link">
          <Link to={`/`} className="back__link"><WestOutlinedIcon style={{marginRight: "6px", width: 12, height: 10}}/> Back to homepage</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieReview;