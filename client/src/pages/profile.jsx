import { Container, Typography, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import '../styles/img.css';
import Divider from '@mui/material/Divider';
import Layout from '../components/Layout';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
<<<<<<< HEAD

export default function Bildes() {
  return (
    <Layout>
      <Grid container>
        <Grid item xs={5}>
          <Grid container justifyContent="center" mt={10} fontSize="xxx-large">
            <Typography>
              Profils
            </Typography>
=======
export default function bildes() {
  return (<><Layout>

    <Grid container xs={5} justifyContent="center" mt={10} fontSize="xxx-large">
      <Typography>

  Profils

      </Typography>
  
    </Grid>
    <Grid container xs={5} justifyContent="center" mt={10} fontSize="xxx-large">
      <Typography>

  Paroles maiņa
      </Typography>

    </Grid>
    <Grid container xs={5} justifyContent="center" mt={10} fontSize="xxx-large">
      <Typography>

  Dalībnieki
      </Typography>

    </Grid>
    <Grid container>
  
  <Divider orientation="vertical" flexItem>
    VERTICAL
  </Divider>

</Grid>

    <Grid container xs={11} justifyContent="center" mt={-9} fontSize="xxx-large">

      <Typography>
      Epasts
      </Typography>
      
    </Grid>
    <Grid container xs={11} justifyContent="center" mt={-10} fontSize="xxx-large">

    

      <Typography>
      Telefon Nummurs
           </Typography>

    </Grid>
    <Grid container xs={11} justifyContent="center" mt={-10} fontSize="xxx-large">

      <Typography>
        Uzvards
           </Typography>
>>>>>>> 2fc5946daad9b5f09d15169ad99ad136ad8fc00f
          </Grid>
          <Grid container justifyContent="center" mt={10} fontSize="xxx-large">
            <Typography>
              Paroles maiņa
            </Typography>
          </Grid>
<<<<<<< HEAD
          <Grid container justifyContent="center" mt={10} fontSize="xxx-large">
            <Typography>
              Dalībnieki
            </Typography>
          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={6}>
          <Grid container justifyContent="center" mt={10}  fontSize="xxx-large">
            <Typography>
              Vārds
            </Typography>
          </Grid>
          <Grid container justifyContent="center" mt={5} fontSize="xxx-large">
            <Typography>
              Uzvards
            </Typography>
          </Grid>
          <Grid container justifyContent="center" mt={5} fontSize="xxx-large">
            <Typography>
              Epasts
            </Typography>
          </Grid>
          <Grid container justifyContent="center"mt={5}  fontSize="xxx-large">
            <Typography>
              Telefon Nummurs
            </Typography>
          </Grid>
         
          <Grid container justifyContent="center" mt={25} fontSize="xxx-large">
            <Button xs={12} variant="contained" endIcon={<SendIcon />}>
              Iziet no profila
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
=======
        </Layout>
        <Grid container justifyContent="center" mt={-30} fontSize="xxx-large">
      <Button xs={12} variant="contained" endIcon={<SendIcon />}>
        Iziet no profila
      </Button>
    </Grid>


  </>
>>>>>>> 2fc5946daad9b5f09d15169ad99ad136ad8fc00f
  );
}
