import React from "react";
import { css, StyleSheet } from 'aphrodite'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link } from "@mui/material";
import '../styles/Social.css';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import {
    faYoutube,
    faFacebook,
   
  
} from "@fortawesome/free-brands-svg-icons";


export default function Social() {
    const style = StyleSheet.create({
        container: {
            paddingBottom: 20
        }
    })

    return (
        <Container maxWidth="xl" className={css(style.container)}>
            <Grid container direction="row" justifyContent="flex-end" alignItems="flex-end">
                        <Grid item xs={12} md={3} mt={30}>
                    <Button variant="contained" color='primary' fullWidth >
                    Закажите Решение</Button>
                    </Grid>
                    <Grid item xs={12} md={3} mt={30}>
                    <Button variant="text" endIcon={<SendIcon />}>
                      Если не решил, посмотри наши работы
                      </Button>
                      </Grid>
            </Grid>
        </Container>
    );
}