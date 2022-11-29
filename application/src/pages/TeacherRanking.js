import React, { Component, Fragment, useState } from "react"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search'

const TeacherRanking = () => {
  return (
    <><TextField
      id="search_bar"
      type="search"
      placeholder="Last Name, First Name, School Name"
      style={{ width: "400px" }}
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
        ), 
      }
    } /></>
  )
}

export default TeacherRanking