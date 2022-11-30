import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import CheckIcon from '@mui/icons-material/Check';

const UniversityPage = () => {
  return (
    <div>
      <Navbar/>
      <h1 style={{textAlign: 'center', paddingTop: '20px'}}>University Prices</h1>
      <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
      >
        <Card sx={{ maxWidth: 300}} style={{margin: '50px', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <CardMedia
            component="img"
            height="200"
            image="https://plan.sfsu.edu/sites/default/files/images/062218-007.jpg"
            alt="SFSU"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{textAlign: 'center'}}>
              SFSU
            </Typography>
            <Typography gutterBottom variant="h7" component="div" style={{textAlign: 'center'}}>
              $3,567
            </Typography>
            <Typography variant="body2">
            <CheckIcon/> On Campus
            </Typography>
            <Typography variant="body2">
              <CheckIcon/> Off Campus
            </Typography>
            <Typography variant="body2">
              <CheckIcon/> With Parents
            </Typography>
          </CardContent>
          <CardActions style={{justifyContent: 'center', paddingBottom: '20px'}}>
            <a href="https://sfsu.edu" target="_blank" rel="noreferrer">
              <Button size="small" variant='contained'>Select</Button>
            </a>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300}} style={{margin: '50px', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <CardMedia
            component="img"
            height="200"
            image="https://www.sjsu.edu/_images/buildings/ADV_aerial-view_dorms-beyond_01.jpg"
            alt="SJSU"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{textAlign: 'center'}}>
              SJSU
            </Typography>
            <Typography gutterBottom variant="h7" component="div" style={{textAlign: 'center'}}>
              $3,330
            </Typography>
            <Typography variant="body2">
            <CheckIcon/> On Campus
            </Typography>
            <Typography variant="body2">
              <CheckIcon/> Off Campus
            </Typography>
            <Typography variant="body2">
              <CheckIcon/> With Parents
            </Typography>
          </CardContent>
          <CardActions style={{justifyContent: 'center', paddingBottom: '20px'}}>
            <a href="https://sjsu.edu" target="_blank" rel="noreferrer">
              <Button size="small" variant='contained'>Select</Button>
            </a>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300}} style={{margin: '50px', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <CardMedia
            component="img"
            height="200"
            image="https://www.csueastbay.edu/about/files/images/visitor-thumb.jpg"
            alt="CSUEB"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{textAlign: 'center'}}>
              CSUEB
            </Typography>
            <Typography gutterBottom variant="h7" component="div" style={{textAlign: 'center'}}>
              $3,456
            </Typography>
            <Typography variant="body2">
            <CheckIcon/> On Campus
            </Typography>
            <Typography variant="body2">
              <CheckIcon/> Off Campus
            </Typography>
            <Typography variant="body2">
              <CheckIcon/> With Parents
            </Typography>
          </CardContent>
          <CardActions style={{justifyContent: 'center', paddingBottom: '20px'}}>
            <a href="https://csueastbay.edu" target="_blank" rel="noreferrer">
              <Button size="small" variant='contained'>Select</Button>
            </a>
          </CardActions>
        </Card>
        
        
      </div>
    </div>
  )
}

export default UniversityPage