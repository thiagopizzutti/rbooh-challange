import React, { ChangeEvent, FormEvent, useState } from 'react';
import {Grid, makeStyles, TextField} from '@material-ui/core';
import Button from '../Button';

interface IProps{
  onSubmit: (values: FormValues) => (e: FormEvent) => Promise<void>
  initialFieldValues: FormValues
}

interface FormValues {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
  available: boolean
}

const useStyles = makeStyles((theme) => ({
  root: {
      margin: "0 30px",
    '& .MuiFormControl-root': {
      width: '95%',
        margin: theme.spacing(2),
      }
  }
  }),
);



const Form: React.FC<IProps> = ({onSubmit, initialFieldValues}) => {
  const classes = useStyles();

  const [values, setValues] = useState(initialFieldValues)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })}
  



  return (
        
        <form
          className={classes.root}
          autoComplete="off"
          onSubmit={onSubmit(values)}
       >
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
          <Button style={{ margin: "0px 0px 20px"}} type="submit" />              
            </Grid>
          </Grid>
        </form>    
  );
};

export default Form;
