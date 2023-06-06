import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { css, StyleSheet } from 'aphrodite';
import Spinner from '../components/Spinner'

const theme = createTheme();

export default function Registration() {
  const navigate = useNavigate();
  
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [acceptTerms, setAcceptTerms] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const [emailErr, setEmailErr] = React.useState('');
  const [passwordErr, setPasswordErr] = React.useState('');
  const [confirmPasswordErr, setConfirmPasswordErr] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) return setEmailErr('Enter email');
    if (!password) return setPasswordErr('Enter password');
    if (!confirmPassword || confirmPassword !== password) return setConfirmPasswordErr('Passwords do not match');

    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 3000));
    navigate('/dashboard');

    setLoading(false);
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
              Registration
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
                label="Email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailErr) setEmailErr('');
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
                label="Password"
                type="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordErr) setPasswordErr('');
                }}
                autoComplete="new-password"
              />
              <div className={css(style.err)}>
                {passwordErr.length > 0 && passwordErr}
              </div>
              <TextField
                margin="normal"
                required
                fullWidth
                value={confirmPassword}
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (confirmPasswordErr) setConfirmPasswordErr('');
                }}
                autoComplete="new-password"
              />
              <div className={css(style.err)}>
                {confirmPasswordErr.length > 0 && confirmPasswordErr}
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e, c) => setAcceptTerms(c)}
                    value={acceptTerms}
                    color="primary"
                  />
                }
                label="I accept the terms and conditions"
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
                    : 'Register'
                }
              </Button>
            </Box>
          </Box>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}