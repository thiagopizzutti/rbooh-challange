import React, { useCallback, useContext} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import { DataContext } from '../../hooks/useContext';
import { Container, Grid } from '@material-ui/core';
import { api } from '../../services/api';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "100",
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
    },
    gridContainer: {
      paddingTop: "20px",
    },
  }),
);


const Cards: React.FC = () => {

  const { plateItems, handleGetPlates, handleOpenEditModal } = useContext(DataContext)

  const classes = useStyles();


  const handleDelete = useCallback(async(id: number) => {
    await api.delete(`/dishes/${id}`)
    handleGetPlates()
  }, [handleGetPlates]);


  return (
    <Container className={classes.gridContainer}>
      <Grid
        container
        spacing={2}
        className={classes.gridContainer}
        justify="center">
        {plateItems.map(item => {
          
          const parsedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)

          return (

            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card className={classes.root} key={item.id}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item.image}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="h2">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.description}
                    </Typography>
                    <br />
                    <Typography gutterBottom variant="h4" component="h1" style={{ color: "green" }}>
                      {parsedPrice}
                    </Typography>
                  </CardContent>
                </CardActionArea>


                <CardActions disableSpacing>
                  <IconButton
                    aria-label="Editar"
                    onClick={() => handleOpenEditModal(item)}
                  >
                    <EditIcon style={{ fontSize: 25 }}  />
                  </IconButton>
                  <IconButton aria-label="Deletar" onClick={() => handleDelete(item.id)}>
                    <DeleteIcon style={{ fontSize: 25 }} />
                  </IconButton>
               
                


                  <Switch
                    checked={item.available}
                    name={`${item.name}-switch`}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </CardActions>


              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default Cards