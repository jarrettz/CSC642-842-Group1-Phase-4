import {Card, Grid} from '@mui/material'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button';
const TeacherCard = () => {
    return (
        <><CardActionArea>
            <p>Name:</p>
            <CardMedia
                sx={{
                    maxWidth: 280,
                    margin: "0 auto",
                    padding: "0.1em",
                }}
                component="img"
                image="https://picsum.photos/400/300"
                alt="CardMedia Image Example"
                height="100px"
                width={10}
                title="CardMedia Image Example" />
            <p>School:</p>
            <p>Classes:</p>
            <p>Rank:</p>
        </CardActionArea><Button style={{border:'1px solid red',color:"red"}}> Learn More</Button></>
    )
}
export default TeacherCard;