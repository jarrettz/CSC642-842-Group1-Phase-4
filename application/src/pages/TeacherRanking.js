import React, { Component, Fragment, useState } from "react"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search'
import {Grid} from '@mui/material'
import TeacherCard from "./TeacherCards";
import Navbar from '../components/Navbar'

const TeacherRanking = () => {
  return (
    <div>
      <Navbar />
      <TextField
      id="search_bar"
      type="search"
      placeholder="Last Name, First Name, School Name"
      style={{display: 'flex', alignItems:'center',justifyContent:'center'}}
      variant="outlined"
      margin="normal"
      onKeyPress={(event) => {
        if (event.key === 'Enter')
        console.log(document.getElementById('search_bar').value)
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )
        , 
      }
      
    } />
<p style={{display: 'flex', alignItems:'center',justifyContent:'center',color:'red',fontWeight: 'bold' }}>Search for Last Name, First Name, School Name</p>
<Grid container spacing={24} >
  <Grid item md={3}>
  <div> <TeacherCard /> </div>   
  </Grid>
  <Grid item md={3}>
  <div> <TeacherCard /> </div>   
  </Grid>
  <Grid item md={3}>
  <div> <TeacherCard /> </div>   
  </Grid>
  <Grid item md={3}>
  <div> <TeacherCard /> </div>   
  </Grid>
  <Grid item md={3}>
  <div> <TeacherCard /> </div>   
  </Grid>
  <Grid item md={3}>
  <div> <TeacherCard /> </div>   
  </Grid>
  <Grid item md={3}>
  <div> <TeacherCard /> </div>   
  </Grid>
  <Grid item md={3}>
  <div> <TeacherCard /> </div>   
  </Grid>
  <Grid item md={3}>
  <div> <TeacherCard /> </div>   
  </Grid>
  <Grid item md={3}>
  <div> <TeacherCard /> </div>   
  </Grid>
  <Grid item md={3}>
  <div> <TeacherCard /> </div>   
  </Grid>
  <Grid item md={3}>
  <div> <TeacherCard /> </div>   
 
  </Grid>
</Grid>

     

    </div>

  )
}

export default TeacherRanking