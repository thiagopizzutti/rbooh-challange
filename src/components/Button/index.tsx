import React from 'react';
import AddToPhotosRoundedIcon from '@material-ui/icons/AddToPhotosRounded';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      marginLeft: theme.spacing(1)

    }
  }),
);

const AddNewPlate = () => {
  const classes = useStyles();

  return (
    
      <Button
      variant="contained"
      color="inherit"
      style={{
        color: "#4d4d4d",
        fontSize: "15px",
        fontWeight: "bold",
      }}
    
    >Adicionar prato
        <AddToPhotosRoundedIcon
          fontSize="large"              
          className={classes.margin}/>
      </Button> 

    
    
  
  );
};

export default AddNewPlate;
