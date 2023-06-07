import { Box } from '@mui/system';
import * as React from 'react';
import backgroundImage from '../img/background.png';

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      {children}
    </Box>
  );
}