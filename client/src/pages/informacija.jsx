import * as React from 'react';
import dayjs from 'dayjs';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import '../styles/img.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';

dayjs.extend(isBetweenPlugin);



export default function Dashboard() {


  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    
    <> <Container maxWidth="xl" sx={{ display: "flex", height: "150px" }}>


<Grid container xs={12} justifyContent="center" mt={10} fontSize="xxx-large">

  <TextField label="Forma" variant="standard" />
</Grid>
<Grid item xs={12} md={10} mt={30}>
<TextField label="Email" />
<TextField label="Telefons" />
<TextField
          id="standard-multiline-static"
          multiline
          rows={10}
          defaultValue="Text"
          variant="standard"
        />
        <Button variant="outlined" >
             Pasūtīt risinājumu
        </Button>
          <Button variant="contained"  endIcon={<SendIcon />}>
            Vai reģistrēties
          </Button>
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

      </Container></>
  );
}