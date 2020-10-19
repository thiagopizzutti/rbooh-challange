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
import { DataContext } from '../../hooks/useContext';
import { Container, FormControlLabel, FormGroup, Grid, Switch } from '@material-ui/core';
import { api } from '../../services/api';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "100",
      '& .MuiTypography-root': {
        fontSize: "15px",


      }
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    
    gridContainer: {
      paddingTop: "20px",
    },
    switchPosition: {
      display: "flex",
      alignItems: "flex-end"
    },
    nameStyle: {
      marginBottom: "20px"
    },
    descriptionStyle: {
      marginBottom: "20px",
      textOverflow: "ellipsis",
      marginRight: "20px"
    }
  }),
);


const Cards: React.FC = () => {

  const { plateItems, handleGetPlates, handleOpenEditModal, handletoggleChecked} = useContext(DataContext)

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
                      component="h2"
                      className={classes.nameStyle}
                    >
                        
                      {item.name}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.descriptionStyle}
                      
                    >
                      {item.description}
                    </Typography>
                   
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
                  
                  <Container
                  >
                  <FormGroup className={classes.switchPosition}>
                      <FormControlLabel
                      control={<Switch
                      size="medium"
                      color="primary"
                      checked={item.available}
                      onChange={() => handletoggleChecked(item)} />
                    }
                    label={item.available ? 'Disponível' : 'Indisponível'}
                      
                    />
                    
                  </FormGroup>
                  </Container>
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