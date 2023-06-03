import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import '../styles/img.css';

dayjs.extend(isBetweenPlugin);

export default function Dashboard() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <>
      <Container maxWidth="xl" sx={{ display: "flex", height: "150px" }}>
        <Grid container xs={12} justifyContent="center" mt={10} fontSize="xxx-large">
          <Typography>
            Forma
          </Typography>
        </Grid>
        <Grid item xs={12} md={10} mt={30}>
          <TextField sx={{ m: 1, width: '55ch' }} required label="Email" />
          <TextField sx={{ m: 1, width: '55ch' }} required label="Telefons" />
          <TextField id="standard-basic" sx={{ m: 1, width: '55ch', height: '20ch' }} multiline rows={5} variant="standard" required label="Text" />

          <Button sx={{ m: 5, width: '25ch' }} style={{ color: 'orange' }} variant="outlinedorange">
            Pasūtīt risinājumu
          </Button>
          <Button variant="contained" sx={{ m: 1, width: '25ch' }} endIcon={<SendIcon />}>
            Vai reģistrēties
          </Button>
          <Grid>
            <TextField disabled label="Mūsu Darbinieki" sx={{ m: 1, width: '55ch', mr: 1 }} variant="standard" />
          </Grid>

          <Grid>
            <Stack direction="row" spacing={13}>
              <Avatar sx={{ bgcolor: deepOrange[300] }}>D</Avatar>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>I</Avatar>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>S</Avatar>
              <Avatar sx={{ bgcolor: deepPurple[300] }}>A</Avatar>
            </Stack>
          </Grid>
          <Grid>
            <TextField disabled label="Dmitrijs" sx={{ m: 1, width: '7ch', mr: 6 }} variant="standard" />
            <TextField disabled label="Ilja" sx={{ m: 1, width: '7ch', mr: 10 }} variant="standard" />
            <TextField disabled label="Sergejs" sx={{ m: 1, width: '7ch', mr: 10 }} variant="standard" />
            <TextField disabled label="Andrejs" sx={{ m: 1, width: '7ch', mr: 9 }} variant="standard" />
          </Grid>
        </Grid>
        <Grid container xs={12} justifyContent="center" mt={10} fontSize="xxx-large">
          <div>
            {dateState.toLocaleString('en-LV', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: false,
            })}
          </div>
        </Grid>
      </Container>
    </>
  );
}
