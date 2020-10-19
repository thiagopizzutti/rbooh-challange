import React from 'react';
import AddToPhotosRoundedIcon from '@material-ui/icons/AddToPhotosRounded';
import MuiButton from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {ButtonProps} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      marginLeft: theme.spacing(1)
    }
  }),
);

const Button: React.FC<ButtonProps> = ({onClick, ...rest}) => {
  const classes = useStyles();

  return (
    
      <MuiButton
      variant="contained"
      color="inherit"
      style={{
        color: "#4d4d4d",
        fontSize: "10px",
        fontWeight: "bold",
        
      }}
      onClick={onClick}
      {...rest}
      
    
    >Adicionar prato
        <AddToPhotosRoundedIcon
          fontSize="large"              
          className={classes.margin}/>
      </MuiButton> 

    
    
  
  );
};

export default Button;
