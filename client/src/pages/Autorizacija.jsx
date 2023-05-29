import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'
import { css, StyleSheet } from 'aphrodite'
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Spinner from '../components/Spinner'


const theme = createTheme();


const EMAIL = 'mail@example.com'
const PASSWORD = 'password'


export default function Autorizacija() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [remember, setRemember] = React.useState(false)

  const [loading, setLoading] = React.useState(false)

  const [passwordErr, setPasswordErr] = React.useState('')
  const [emailErr, setEmailErr] = React.useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) return setEmailErr('Enter email')
    if (!password) return setPasswordErr('Enter password')

    setLoading(true)

    await (async () => {
      return new Promise((res, _) => {
        setTimeout(() => {
          res(0)
        }, 3000)
      })
    })()

    let isErr = false

    if (email !== EMAIL) {
      isErr = true

      setEmailErr('Email is invalid')
    }

    if (password !== PASSWORD) {
      if (!isErr) isErr = true

      setPasswordErr('Password is invalid')
    }

    if (!isErr) {
      if (remember) {
        window.localStorage.setItem('auth', '1')
      }

      navigate('/dashboard')
    }

    setLoading(false)
  }

  const style = StyleSheet.create({
    container: { marginTop: -150 },
    err: {
      fontSize: 9,
      marginTop: 4,
      width: '100%',
      fontWeight: 800,
      color: '#c44444'
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs" className={css(style.container)}>
        <Grid container xs={12} mt={25} >
          <CssBaseline />
          <Box
            sx={{
              width: '100%',
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Autorizācija
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate sx={{ mt: 1, width: '100%' }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="lietājvārds vai Email "
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (emailErr) setEmailErr('')
                }}
                autoComplete="email"
                autoFocus
              />
              <div className={css(style.err)}>
                {emailErr.length > 0 && emailErr}
              </div>
              <TextField
                margin="normal"
                required
                fullWidth
                value={password}
                name="password"
                label="Parole"
                type="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value)
                  if (passwordErr) setPasswordErr('')
                }}
                autoComplete="current-password"
              />
              <div className={css(style.err)}>
                {passwordErr.length > 0 && passwordErr}
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e, c) => setRemember(c)}
                    value={remember}
                    color="primary"
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {
                  loading
                    ? <Spinner />
                    : 'Pieteikties'
                }
              </Button>
            </Box>
          </Box>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
