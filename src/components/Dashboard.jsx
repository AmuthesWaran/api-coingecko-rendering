import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from '@mui/material/Button';
import CachedIcon from '@mui/icons-material/Cached';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import HomePage from './HomePage';

const Dashboard = () => {

    // dbaefe94344341b6b68c526c4070fe6f
    // https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=dbaefe94344341b6b68c526c4070fe6f
    // https://newsapi.org/v2/top-headlines?country=in&apiKey=dbaefe94344341b6b68c526c4070fe6f

    // https://newsapi.org/v2/top-headlines?q=trump&apiKey=dbaefe94344341b6b68c526c4070fe6f


    //https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=dbaefe94344341b6b68c526c4070fe6f

    // https://newsapi.org/v2/top-headlines?${country}${category}apiKey=dbaefe94344341b6b68c526c4070fe6f
    const [data, setData] = useState([])

    // var date = "2022-09-30T11:49:49Z"
    // date.search("T")
    // var exdate = date.substring(0, date.search("T"))
    // console.log(exdate);


    // .substring(0, news.publishedAt.search("T"))

    // console.log(category);
    // console.log(news);

    const LoadNews = () => {

        var url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=25&page=1&sparkline=false`
        console.log(url);
        axios.get(url)
            .then(response => setData(response.data))
            .catch(error => console.log(error))


    }
    // console.log(news[0].source.name);

    return (

        <Container fluid >
            <HomePage />
            <Button variant="outlined" startIcon={<CachedIcon />} onClick={LoadNews} >
                Load
            </Button>


            <Table striped bordered hover variant="dark" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>image</th>
                        <th>current_price</th>
                        <th>market_cap</th>
                        <th>market_cap_rank</th>
                        <th>last_updated</th>
                    </tr>
                </thead>
                <tbody>

                    {
                    
                    data.map(data => (
                    <tr key={data.id} >
                        <td>{data.id}</td>
                        <td>{data.symbol}</td>
                        <td>{data.name}</td>
                        <td>

                            <img src={data.image} 
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt={data.name}
                            />
                            
                            
                            </td>
                        <td>{data.current_price}</td>
                        <td>{data.market_cap}</td>
                        <td>{data.market_cap_rank}</td>
                        <td>{data.last_updated}</td>
                    </tr>
))}
                </tbody>
            </Table>

        </Container>
    )
}

export default Dashboard