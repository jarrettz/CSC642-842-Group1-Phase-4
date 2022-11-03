import React from 'react'
import Navbar from '../components/Navbar'
import RequirementsTable from '../components/RequirementsTable'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const RequirementsResultsPage = () => {
  return (
    <div>
      <Navbar />
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
    </div>
  )
}

export default RequirementsResultsPage