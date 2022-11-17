import { Link } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <p>work in progress...</p>
      <p>links</p>
      <ol>
        <Link href="/requirements/university">
          <ul>
            Requirements
          </ul>
        </Link>
      </ol>
    </div>
  )
}

export default HomePage