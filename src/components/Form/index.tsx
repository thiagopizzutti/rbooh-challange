import React, { useState } from 'react';
import { createStyles, Grid, makeStyles, TextField} from '@material-ui/core';
import AddNewPlate from '../Button';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& .MuiFormControl-root': {
        width: '95%',
        margin: theme.spacing(2),
      }
    }
  }),
);

const initialFieldValues = {
  id:0,
  image: '',
  name: '',
  price: '',
  description: ''
}

const Form: React.FC = () => {

  const [values, setValues] = useState(initialFieldValues)
  
  const classes = useStyles();

  const handleInputChange = (e: any) => {
    
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })  }
    

  return (
        
        <form className={classes.root} autoComplete="off" style={{margin: "0 30px"}} >
          <Grid container justify="center" alignContent="center">
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label='Imagem'
                name="image"
                value={values.image}
                onChange={handleInputChange}
              />              
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label='Prato'
                name="name"
                value={values.name}
                onChange={handleInputChange}
              />              
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label='Preço'
                type="text"
                name="price"
                value={values.price}
                onChange={handleInputChange}
              />              
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label='Descriçnao'
                name="description"
                value={values.description}
                onChange={handleInputChange}
              />              
            </Grid>
            <Grid item xs={12} style={{display: "flex", justifyContent:"center"}}>
          <AddNewPlate style={{ margin: "0px 0px 20px"}} />              
            </Grid>
          </Grid>
        </form>    
  );
};

export default Form;
