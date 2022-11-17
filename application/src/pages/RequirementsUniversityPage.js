import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Container, FormControl, InputLabel, Link, MenuItem, Select } from '@mui/material';

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
            <Link href='/requirements/degree/'>
              <MenuItem value={"SFSU"}>SFSU</MenuItem>
              <MenuItem value={"SJSU"}>SJSU</MenuItem>
              <MenuItem value={"CSUEB"}>CSUEB</MenuItem>
            </Link>
          </Select>
        </FormControl>
      </Container>
    </>
  )
}

export default RequirementsUniversityPage