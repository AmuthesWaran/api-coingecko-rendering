import React, { useState } from 'react'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomePage from './HomePage';
import axios from 'axios';
import { Container, ListGroup } from 'react-bootstrap';
const DisplayCard = () => {

    const [data, setData] = useState([])
    const LoadFromApi = () => {

        var url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=25&page=1&sparkline=false`
        console.log(url);
        axios.get(url)
            .then(response => setData(response.data))
            .catch(error => console.log(error))


    }


    return (
        <div>
            <HomePage />
            <Container fluid>
            <Button onClick={LoadFromApi} >Load</Button>
            <div className="row">
            {

                data.map(data => (

                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader


                            title={data.name}
                            subheader={data.symbol}
                        />
                        <CardMedia
                            component="img"
                            height="200"
                            image={data.image}
                            alt={data.name}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                
                                    <table>
                                        <tr>
                                            <td>
                                            Market Price Rank
                                            </td>
                                            <td>
                                            {data.market_cap_rank}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            Current Price
                                            </td>
                                            <td>
                                            {data.current_price}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            Market Price
                                            </td>
                                            <td>
                                            {data.market_cap}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            Last Updated
                                            </td>
                                            <td>
                                            {data.last_updated}
                                            </td>
                                        </tr>
                                    </table>
                                    {/* <ListGroup variant="flush">
                                    <ListGroup.Item>Market Price Rank: {data.market_cap_rank}</ListGroup.Item>
                                    <ListGroup.Item>Current Price: {data.current_price}</ListGroup.Item>
                                    <ListGroup.Item>Market Price: {data.market_cap}</ListGroup.Item>
                                    <ListGroup.Item>Last Updated: {data.last_updated}</ListGroup.Item>
                                </ListGroup> */}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>

                        </CardActions>
                    </Card>
                    

                ))
            }
            </div>
            </Container>
        </div>
    )
}

export default DisplayCard