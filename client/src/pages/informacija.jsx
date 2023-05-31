import * as React from 'react';
import dayjs from 'dayjs';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import '../styles/img.css';


dayjs.extend(isBetweenPlugin);



export default function Dashboard() {


  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <> <Container maxWidth="xl" sx={{ display: "flex", height: "150px" }}>
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