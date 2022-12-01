import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const RoadmapOptionsPage = () => {
  const [university, setUniversity] = useState('');
  const [degree, setDegree] = useState('');

  const handleUniversitySelect = (event) => {
    setUniversity(event.target.value);
  };

  const handleDegreeSelect = (event) => {
    setDegree(event.target.value);
  };
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
        <FormControl 
          fullWidth 
            style={{
              marginBottom: '50px'
            }}
        >
          <InputLabel id="university-select-label">University</InputLabel>
          <Select
            labelId="university-select-label"
            id="university-select"
            value={university}
            label="University"
            onChange={handleUniversitySelect}
          >
            <MenuItem
              value={"SFSU"}
            >
              SFSU
            </MenuItem>
            <MenuItem 
              value={"SJSU"}
            >
              SJSU
            </MenuItem>
            <MenuItem 
              value={"CSUEB"}
            >
              CSUEB
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl 
          fullWidth 
            style={{
              marginBottom: '50px'
            }}
        >
          <InputLabel id="degree-select-label">Degree</InputLabel>
          <Select
            labelId="degree-select-label"
            id="degree-select"
            value={degree}
            label="Degree"
            onChange={handleDegreeSelect}
          >
            <MenuItem 
              value={"Computer Science"}
            >
              Computer Science
            </MenuItem>
            <MenuItem 
              value={"Computer Engineering"}
            >
              Computer Engineering
            </MenuItem>
            <MenuItem 
              value={"Physics"}
            >
              Physics
            </MenuItem>
          </Select>
        </FormControl>
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