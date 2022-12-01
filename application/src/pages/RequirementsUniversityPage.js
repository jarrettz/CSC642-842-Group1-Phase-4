import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Link } from "react-router-dom";

const RequirementsUniversityPage = () => {
  const [university, setUniversity] = useState('');

  const handleUniversitySelect = (event) => {
    setUniversity(event.target.value);
  };

  return (
    <>
     <Navbar />
      <Container>
        <h1>Select Your University</h1>
        <FormControl fullWidth>
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
              component={Link} to={'/requirements/degree/'}
            >
              SFSU
            </MenuItem>
            <MenuItem 
              value={"SJSU"}
              component={Link} to={'/requirements/degree/'}
            >
              SJSU
            </MenuItem>
            <MenuItem 
              value={"CSUEB"}
              component={Link} to={'/requirements/degree/'}
            >
              CSUEB
            </MenuItem>
          </Select>
        </FormControl>
      </Container>
    </>
  )
}

export default RequirementsUniversityPage