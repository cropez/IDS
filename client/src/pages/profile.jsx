import { Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import '../styles/img.css';
import Divider from '@mui/material/Divider';
import Layout from '../components/Layout';

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
          </Grid>
          
          <Grid container xs={11} justifyContent="center" mt={-10} fontSize="xxx-large">

      <Typography>
      Vārds
           </Typography>
          </Grid>
        </Layout>
  </>
  );

}