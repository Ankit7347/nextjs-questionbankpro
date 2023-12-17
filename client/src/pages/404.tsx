import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={3}>
        <div>
            404 OOPs This Page Not Found
        </div>
        </Paper>
    </Box>
  );
}
