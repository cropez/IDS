import { Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import '../styles/img.css';

export default function bildes() {
  return (<>

    <Grid container xs={5} justifyContent="center" mt={10} fontSize="xxx-large">
      <Avatar alt="D" src="A" sx={{ width: 132, height: 132 }} />
      <Typography>

        <TextField disabled fullWidth sx={{ width: 500, maxWidth: '100%', }} id="outlined-disabled" label="Dmitrijs Vasiļčenko" multiline rows={4.5} defaultValue="Programmas izstrādāša,dokumentācijas izviedošana 
Veidoja programmatūras kopejo struktūru, un to aspektus.ka arī veidoja vizuālo programmēšanas dizainu.
" />
      </Typography>

    </Grid>

    <Grid container xs={11} justifyContent="center" mt={10} fontSize="xxx-large">

      <Typography>
        <TextField disabled fullWidth sx={{ width: 500, maxWidth: '100%', }} id="outlined-disabled" label="Ilja Aniskovs" multiline rows={4.5} defaultValue="Palīdzēja veidot dokumetāciju un veidot afišu/vizītkarti. Veicinājas Programmatūras inženierijas attistība dokumentāciju
" />
      </Typography>
      <Avatar alt="I" src="A" sx={{ width: 132, height: 132 }} />
    </Grid>
    <Grid container xs={5} justifyContent="center" mt={10} fontSize="xxx-large">

      <Avatar alt="S" src="A" sx={{ width: 132, height: 132 }} />

      <Typography>
        <TextField disabled fullWidth sx={{ width: 500, maxWidth: '100%', }} id="outlined-disabled" label="Sergejs Jukna" multiline rows={4.5} defaultValue="Darba vadītājs Palīdzēja veidot dokumentāciju.Veicināja sistēmas parvaldības dokumentāciju " />
      </Typography>

    </Grid>
    <Grid container xs={11} justifyContent="center" mt={10} fontSize="xxx-large">

      <Typography>
        <TextField disabled fullWidth sx={{ width: 500, maxWidth: '100%', }} id="outlined-disabled" label="Andrejs Kuzminskis" multiline rows={4.5} defaultValue="Grafiskais dizains, programmas izstrādāšana. kā ari dokumentācijas veidošana programs un dizaina aspektos.Veicināja programmatūras izpildes funkcijas veidojot grafisko un vizuālo dizainu." />
      </Typography>
      <Avatar alt="A" src="A" sx={{ width: 132, height: 132 }} />
    </Grid>
  </>
  );

}