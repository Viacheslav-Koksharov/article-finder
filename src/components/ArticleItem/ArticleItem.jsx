import React from 'react';
import moment from "moment";
import { Link } from 'react-router-dom';
import Keywords from 'react-keywords';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import '../../sass/components/_articleItem.scss';


const ArticleItem = ({ id, imageUrl, publishedAt, title,summary,filter}) => {

    const shortString = (string) => {
        return string.length > 100? `${string.slice(0, 100)}...` : string;
      };
    const shortTitle = (string) => {
        return string.length > 50? `${string.slice(0, 50)}...` : string;
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
        <li key={id} className="item">
        <Card sx={{ width: 400 }} >
          <CardMedia
            sx={{ height: 217 }}
            image={imageUrl}
            component="img"
          />
          <CardContent sx={{ padding:0}}>
            <Typography variant="body2" color="text.secondary" className="card_date">
              {moment(publishedAt).format("MMMM Do, YYYY")}
            </Typography>                     
            <Typography gutterBottom variant="h5" component="div" className="card_title"> 
            <Keywords value={`${filter}`}>         
              {shortTitle(title)} 
              </Keywords>                 
            </Typography>            
            <Typography variant="body2" color="text.secondary" className="card_summary">
            <Keywords value={`${filter}`}>            
            {shortString(summary)} 
            </Keywords>           
            </Typography>                
          </CardContent>         
          <CardActions sx={{ padding:0}}>
            <Link to={`/articles/${id}`} className="card_link">Read more<EastOutlinedIcon style={{marginLeft: "6px"}}/></Link>
          </CardActions>
        </Card>
      </li>
    );
  };
  
  export default ArticleItem;