import { Container, Typography, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import '../styles/img.css';
import Divider from '@mui/material/Divider';
import Layout from '../components/Layout';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Bildes() {
  return (
    <Layout>
      <Grid container>
        <Grid item xs={5}>
          <Grid container justifyContent="center" mt={10} fontSize="xxx-large">
            <Typography>
              Profils
            </Typography>
          </Grid>
          <Grid container justifyContent="center" mt={10} fontSize="xxx-large">
            <Typography>
              Paroles maiņa
            </Typography>
          </Grid>
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
  );
}
