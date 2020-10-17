import React from 'react';
import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import Cards from '../Cards'
import Form from '../Form';


const useStyles = makeStyles({
  gridContainer: {
    paddingTop: "20px",
  },
  paperContainer: {
    padding: "20px 20px 0 20px"
  }
})

const PlateList: React.FC = () => {

  const classes = useStyles()

  return (
    <>
      <Container className={classes.paperContainer}>
      <Paper>
        <Form />
      </Paper>
      </Container>

    <Container>
      <Grid
        container
        spacing={2}
        className={classes.gridContainer}
        justify="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Cards />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Cards />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Cards />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Cards />
        </Grid>
      </Grid>
    </Container>
    </>
  );
}

export default PlateList;
