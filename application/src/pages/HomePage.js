import React from 'react'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div
      style={{
        display: 'flex',
        margin: '100px',
        justifyContent: 'center'
      }}
      >
        <div
          style={{width: '500px', paddingRight: '20px'}}
        >
          <img 
            src='https://etcanada.com/wp-content/uploads/2021/08/GettyImages-493170697.jpg?quality=80&strip=all' 
            alt='college students'
            style={{maxWidth: '100%'}}
          />
        </div>
        <div
          className='text'
          style={{width: '500px', paddingLeft: '20px'}}
        >
          <h1>Welcome to DPR</h1>
          <p>A website that accomodates college students</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage