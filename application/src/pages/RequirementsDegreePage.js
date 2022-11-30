import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Link } from "react-router-dom";

const RequirementsDegreePage = () => {
  const [degree, setDegree] = useState('');

  const handleDegreeSelect = (event) => {
    setDegree(event.target.value);
  };

  return (
    <>
     <Navbar />
      <Container>
        <h1>Select Your Degree</h1>
        <FormControl fullWidth>
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
              component={Link} to={'/requirements/results/'}
            >
              Computer Science
            </MenuItem>
            <MenuItem 
              value={"Computer Engineering"}
              component={Link} to={'/requirements/results/'}
            >
              Computer Engineering
            </MenuItem>
            <MenuItem 
              value={"Physics"}
              component={Link} to={'/requirements/results/'}
            >
              Physics
            </MenuItem>
          </Select>
        </FormControl>
      </Container>
    </>
  )
}

export default RequirementsDegreePage