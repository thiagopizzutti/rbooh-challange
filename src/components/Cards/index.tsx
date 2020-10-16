import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import clsx from 'clsx';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 305,
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
  }),
);



export default function MediaCard() {
  const classes = useStyles();
  
  const [state, setState] = useState({
      checkedA: true,
      checkedB: true,
  });
  
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  };

    return (
    
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://www.englishclub.com/images/vocabulary/food/italian/italian-food-1024.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="h2">
              Pasta and pasta dishes
          </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"             
            >
              Many of the world's most popular recipes for home-cooked meals are also from Italy, especially those for various kinds of pasta.
          </Typography>
            <br/>
          <Typography gutterBottom variant="h4" component="h1" style={{color: "green"}}>
              U$ 19,90
          </Typography>
          </CardContent>
        </CardActionArea>
        

        <CardActions disableSpacing>
          <IconButton aria-label="Editar">
          <EditIcon style={{ fontSize: 25 }} />
        </IconButton>
        <IconButton aria-label="Deletar">
          <DeleteIcon style={{ fontSize: 25 }} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
        </IconButton>
          
        
          <Switch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />          
        
         </CardActions>
        
        
        
      </Card>
  
    
    );
  }
