import {useState, useEffect} from 'react'
const Amadeus = require('amadeus')
const amadeus = new Amadeus({
    clintID: process.env.REACT_APP_AMADEUS_KEY,
    clientSecret: process.env.REACT_APP_AMADEUS_SECRET
})
const FlightInfo = () => {

const [flightInfo, setFlightInfo] = useState()

amadeus.shopping.flightOffersSearch.get({
    originLocationCode: 'SYD',
    destinationLocationCode: 'BKK',
    departureDate: '2022-08-01',
    adults: '2'
  }).then(function (response) {
    console.log(response);
  }).catch(function (response) {
    console.error(response);
  });

// useEffect(() => {
//    fetchFlightInfo()
//    .then((res) => {
//     setFlightInfo(res)
//    })
//    .catch((e) => { 
//     console.log(e.message)
//    })
// })


  return (
    <div></div>
  )

  }
export default FlightInfo