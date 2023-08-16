import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from '@mui/material/Button';
import CachedIcon from '@mui/icons-material/Cached';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import HomePage from './HomePage';
import { FormControlLabel, Switch } from '@mui/material';

const Dashboard = () => {

    // dbaefe94344341b6b68c526c4070fe6f
    // https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=dbaefe94344341b6b68c526c4070fe6f
    // https://newsapi.org/v2/top-headlines?country=in&apiKey=dbaefe94344341b6b68c526c4070fe6f

    // https://newsapi.org/v2/top-headlines?q=trump&apiKey=dbaefe94344341b6b68c526c4070fe6f


    //https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=dbaefe94344341b6b68c526c4070fe6f

    // https://newsapi.org/v2/top-headlines?${country}${category}apiKey=dbaefe94344341b6b68c526c4070fe6f
    const [data, setData] = useState([])
    const [mode, setMode] = useState('dark')

    // var date = "2022-09-30T11:49:49Z"
    // date.search("T")
    // var exdate = date.substring(0, date.search("T"))
    // console.log(exdate);


    // .substring(0, news.publishedAt.search("T"))

    // console.log(category);
    // console.log(news);

    const LoadNews = () => {

        var url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc`
        // console.log(url);
        axios.get(url)
            .then(response => {
                //Top 100 response
                console.log(response);
                setData(response.data)
            })
            .catch(error => console.log(error))


    }
    // console.log(news[0].source.name);

    function switchMode(e) {
        // console.log(e.target.checked)
        if (!e.target.checked) {
            setMode('light')
        }
        else {
            setMode('dark')
        }
    }

    return (

        <Container fluid >
            <HomePage />
            <FormControlLabel
                value="start"
                control={
                    <Switch

                        defaultChecked
                        onChange={switchMode}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
                label="Dark Mode"
                labelPlacement="start"
            />
            <br />
            <Button className='m-4' variant="outlined" startIcon={<CachedIcon />} onClick={LoadNews} >
                Load
            </Button>


            <Table striped bordered hover variant={mode} >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Logo</th>
                        <th>Current Price</th>
                        <th>Market Capital</th>
                        <th>Market Capital Rank</th>
                        <th>Last Updated</th>
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