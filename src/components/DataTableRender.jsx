import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import HomePage from './HomePage';


const DataTableRender = () => {

  const [data, setData] = useState([])
  const LoadFromApi = () => {

    var url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=25&page=1&sparkline=false`
    console.log(url);
    axios.get(url)
      .then(response => setData(response.data))
      .catch(error => console.log(error))


  }
  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Symbol',
      selector: row => row.symbol,
      sortable: true
    },
    {
      name: 'Logo',
      selector: row => row.image,
      sortable: true,
      cell: row => <img height="30px" width="30px" alt={row.name} src={row.image} />
    },
    {
      name: 'Current Price',
      selector: row => row.current_price,
      sortable: true
    },
    {
      name: 'Market Capital',
      selector: row => row.market_cap,
      sortable: true
    },
    {
      name: 'Market Capital Rank',
      selector: row => row.market_cap_rank,
      sortable: true
    },
    {
      name: 'Last Updated',
      selector: row => row.last_updated,
      sortable: true
    }

  ]



  return (
    <div>
      <HomePage />
      
      <Button onClick={LoadFromApi} >Load</Button>
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        striped
        highlightOnHover
        selectableRowsHighlight


      />
    </div>
  )
}

export default DataTableRender
