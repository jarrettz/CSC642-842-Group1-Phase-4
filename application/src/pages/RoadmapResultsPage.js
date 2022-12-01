import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import RoadmapTable from '../components/RoadmapTable'

const RoadmapResultsPage = () => {
  const [roadmap, setRoadmap] = useState('');
  const [semester, setSemester] = useState('');

  const handleRoadmapSelect = (event) => {
    setRoadmap(event.target.value);
  };
  const handleSemesterSelect = (event) => {
    setSemester(event.target.value);
  };

  return (
    <div>
      <Navbar/>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 200px 0 200px',
        }}
      >
        <h1
          style={{
            textAlign:'center',
            marginTop: '50px'
          }}
        >
          University Roadmap
        </h1>
        <FormControl
          style={{
            margin: '50px 50px 0 50px'
          }}
        >
          <InputLabel id="roadmap-select-label">Roadmap</InputLabel>
          <Select
            labelId="roadmap-select-label"
            id="roadmap-select"
            value={roadmap}
            label="Roadmap"
            onChange={handleRoadmapSelect}
          >
            <MenuItem 
              value={"Roadmap A"}
            >
              Roadmap A
            </MenuItem>
            <MenuItem 
              value={"Roadmap B"}
            >
              Roadmap B
            </MenuItem>
            <MenuItem 
              value={"Roadmap C"}
            >
              Roadmap C
            </MenuItem>
          </Select>
         
        </FormControl>
        <FormControl
          style={{
            margin: '50px'
          }}
        >
           <InputLabel id="semester-select-label">Semester</InputLabel>
          <Select
            labelId="semester-select-label"
            id="semester-select"
            value={semester}
            label="Semester"
            onChange={handleSemesterSelect}
            style={{
            }}
          >
            <MenuItem 
              value={"Semester 1"}
            >
              Semester 1
            </MenuItem>
            <MenuItem 
              value={"Semester 2"}
            >
              Semester 2
            </MenuItem>
            <MenuItem 
              value={"Semester 3"}
            >
              Semester 3
            </MenuItem>
          </Select>
        </FormControl>
        {(roadmap!=='' && semester!=='') &&
        <RoadmapTable />
        }
      </div>
    </div>
  )
}

export default RoadmapResultsPage