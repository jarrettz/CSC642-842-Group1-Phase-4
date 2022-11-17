import React from 'react'
import RequirementsTable from '../components/RequirementsTable'
import { Box, TextField } from '@mui/material';

const RequirementsResultsPage = () => {
  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
      <RequirementsTable />
    </>
  )
}

export default RequirementsResultsPage