import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function EmailInputField() {
  return (
    <>
      <Box>
        <TextField id="outlined-basic" label="Enter Email" variant="outlined" className="inputEmail" />
        <Button> Get My FREE gift! </Button>
      </Box>
    </>
  );
}
