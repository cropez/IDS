import * as React from 'react';
import dayjs from 'dayjs';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import Banner from '../img/banner-4.png'
import CardMedia from "@mui/material/CardMedia"
import '../styles/img.css';


dayjs.extend(isBetweenPlugin);

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  }),
  ...(isLastDay && {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  }),
}));

export default function Dashboard() {
  const [value, setValue] = React.useState(dayjs('2022-11-07'));

  const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }

    const start = value.startOf('week');
    const end = value.endOf('week');

    const dayIsBetween = date.isBetween(start, end, null, '[]');
    const isFirstDay = date.isSame(start, 'day');
    const isLastDay = date.isSame(end, 'day');

    return (
      <CustomPickersDay
        {...pickersDayProps}
        disableMargin
        dayIsBetween={dayIsBetween}
        isFirstDay={isFirstDay}
        isLastDay={isLastDay}
      />
    );
  };

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
    </Container>
      <Container maxWidth="xl">
        <Grid container xs={12} mt={2} lg={12}>
          <Grid item xs={12} display="flex" alignSelf="baseline" >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                label="Week picker"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderDay={renderWeekPickerDay}
                renderInput={(params) => <TextField {...params} />}
                inputFormat="'Week of' MMM d" />
            </LocalizationProvider>
            <CardMedia
              className="img"
              component="img"
              image={Banner}
              alt="Error"
            />
          </Grid>
        </Grid>
      </Container></>
  );
}