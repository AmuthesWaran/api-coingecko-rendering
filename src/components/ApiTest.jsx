import axios from 'axios';
import React from 'react'
import { Button } from 'react-bootstrap';

const ApiTest = () => {

    function click() {
     axios.get('http://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
      }
    })
}



  return (
    <div>
        hi 
    

        <Button onClick={click} > Click</Button>
    </div>
  )
}

export default ApiTest