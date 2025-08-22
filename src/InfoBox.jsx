import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {

    let SUMMER = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let RAINY = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let WINTER = "https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=1208&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    

    return (

        
        <div className="infoBox">
            
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAINY : info.temp > 20 ? SUMMER : WINTER}
                    title="Weather box"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ? <SunnyIcon/> : <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature = {info.temp}&deg;C <br/></p>
                    <p>Humidity = {info.humidity} <br/></p>
                    <p>Min Temp = {info.tempMin}&deg;C <br/></p>
                    <p>Max Temp = {info.tempMax}&deg;C <br/></p>
                    <p>The weather can be descripbed as <i>{info.weather}</i> feels like = {info.feelsLike}&deg;C <br/></p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
}
