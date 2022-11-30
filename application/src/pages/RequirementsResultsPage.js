import React from 'react'
import RequirementsTable from '../components/RequirementsTable'
import { TextField } from '@mui/material';
import Navbar from '../components/Navbar';

const RequirementsResultsPage = () => {
  return (
    <div>
      <Navbar/>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <h1
          style={{textAlign: 'center'
        }}
        >
          Requirements Results
        </h1>
        <TextField 
          id="outlined-basic" 
          label="Search" 
          variant="outlined" 
          style={{
            alignSelf: 'center',
            margin: '20px 0 20px 0'
          }}
        />
        <RequirementsTable/>
      </div>
    </div>
  )
}

export default RequirementsResultsPage