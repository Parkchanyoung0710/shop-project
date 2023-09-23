import { useState, useContext } from 'react';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './CardBox.css';
import { CartContext } from '../CartProvider';
import Alert from './Alert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardBox(props) {
  const { cardTitle, imageSrc, cardDetail, cardPrice } = props;

  const [expanded, setExpanded] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const { addToCart } = useContext(CartContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickAddCart = () => {
    setShowAlert(true);
    addToCart(props);
  };

  return (
    <>
      <Card sx={{ maxWidth: 300, marginTop: 5 }}>
        <CardHeader title={cardTitle} />
        <CardMedia className="img"component='img' image={require(`${imageSrc}`)} />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            가격 : {cardPrice}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='cart'>
            <ShoppingCartIcon onClick={handleClickAddCart} />
          </IconButton>
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography>{cardDetail}</Typography>
          </CardContent>
        </Collapse>
      </Card>
      {showAlert && <Alert showAlert={showAlert} setShowAlert={setShowAlert} content={'장바구니에 담겼습니다.'} />}
    </>
  );
}
