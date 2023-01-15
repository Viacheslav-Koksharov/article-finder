import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { getArticleById } from '../../services/api.js';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

const MovieReview = () => {
  const { id } = useParams();
  const [article, setArticle] = useState();
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  useEffect(() => {
    getArticleById(id).then(request => setArticle(request.data));
  }, [id]);

  return (
    <>
      {article && (
        <>
          <CardMedia
            sx={{ height: 245 }}
            image={article.imageUrl}
            title="image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {article.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {article.summary}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleClick}><WestOutlinedIcon/>
              Back to homepage
            </Button>
          </CardActions>
        </>
      )}
    </>
  );
}

export default MovieReview;