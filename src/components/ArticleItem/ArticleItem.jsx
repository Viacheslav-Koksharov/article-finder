import React, { useCallback } from 'react';
import moment from "moment";
import { Link } from 'react-router-dom';
import Keywords from 'react-keywords';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
 


const ArticleItem = ({ id, imageUrl, publishedAt, title,summary,filter}) => {

    const shortString = (string) => {
        return string.length > 100? `${string.slice(0, 100)}...` : string;
      };
    
//       const Hightlight = (props)=>{
//         const {filter, str} = props
//         if(!filter) return str
//         const regexp = new RegExp(filter, 'ig');
//       const matchValue = str.match(regexp);
//       if(matchValue){
//         return str.split(regexp).map((s,index,array)=>{
//             if(index<array.length-1){
//                 const c = matchValue.shift()
//                 return <>{s}<span style={{ background: 'yellow'}}>{c}</span></>
//             }
//             return s
//         })
//       }
//       return str
//      }
// const light = useCallback((str)=>{
//     return <Hightlight filter = {filter} str={str}/>
// },[filter])

      return (
        <li key={id} style={{ margin: '5px'}}>
        <Card sx={{ maxWidth: 400 }} >
          <CardMedia
            sx={{ height: 217 }}
            image={imageUrl}
            component="img"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {moment(publishedAt).format("MMMM Do, YYYY")}
            </Typography>                     
            <Typography gutterBottom variant="h5" component="div"> 
            <Keywords value={`${filter}`}>         
              {title} 
              </Keywords>                 
            </Typography>            
            <Typography variant="body2" color="text.secondary">
            <Keywords value={`${filter}`}>            
            {shortString(summary)} 
            </Keywords>           
            </Typography>                
          </CardContent>         
          <CardActions>
            <Link to={`/articles/${id}`}>Read more<EastOutlinedIcon/></Link>
          </CardActions>
        </Card>
      </li>
    );
  };
  
  export default ArticleItem;