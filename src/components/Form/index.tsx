import React, { useState } from 'react';
import { createStyles, Grid, makeStyles, TextField, Paper, Button, Container, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& .MuiFormControl-root': {
        width: '100%',
        margin: theme.spacing(2),

      }
    },

    paperStyle: {
      width: "100%",
      marginTop: "30px",
      
    },
    containerStyle: {
      width: "100%",
      
    }
  }),
);

const Form: React.FC = () => {

  const initialFieldValues = {
  image: '',
  name: '',
  price: '',
  description: ''
}

  const [values, setValues] = useState(initialFieldValues)
  
  const classes = useStyles();

  const handleInputChange = (e: any) => {
    
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }
    

  return (
    <Container className={classes.containerStyle}>
      <Paper className={classes.paperStyle} >
        <Typography
          variant="h3"
          color="textSecondary"
          component="h2">Adicionar novo prato</Typography>
        <form className={classes.root} autoComplete="off" >
          <Grid container justify="center">
            <Grid item>
              <TextField
                variant="outlined"
                label='Imagem'
                name="name"
                value={values.image}
                onChange={handleInputChange}

              />
              <TextField
                variant="outlined"
                label='Nome do Prato'
                name="name"
                value={values.name}
                onChange={handleInputChange}

              />
              <TextField
                variant="outlined"
                label='Descrição'
                name="description"
                value={values.description}
                onChange={handleInputChange}
              />
              <TextField
                variant="outlined"
                label='Preço'
                name="price"
                value={values.price}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Button />
        </form>
      </Paper>
    </Container>
    
  );
};

export default Form;
