import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const RoadmapOptionsPage = () => {
  return (
    <div>
      <Navbar/>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 200px 0 200px'
        }}
      >
        <h1
          style={{
            textAlign:'center',
            margin: '50px'
          }}
        >
          University Roadmap
        </h1>
        <TextField
          id="outlined-basic" 
          label="University" 
          variant="outlined" 
          style={{
            marginBottom: '50px'
          }}
        />
        <TextField 
          id="outlined-basic" 
          label="Major" 
          variant="outlined" 
          style={{
            marginBottom: '50px'
          }}
        />
        <FormGroup>
          <FormControlLabel 
            control={<Checkbox />} 
            label="First Time Student" 
          />
          <FormControlLabel 
            control={<Checkbox />} 
            label="Transfer Student" 
            style={{
              marginBottom: '50px'
            }}
          />
        </FormGroup>
        <Link to='/roadmap/results'>
          <Button 
            variant="contained"
            size="large"
            style={{
              width: 'fit-content',
            }}
          >
            Next
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default RoadmapOptionsPage