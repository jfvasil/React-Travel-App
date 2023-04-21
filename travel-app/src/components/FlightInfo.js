import {useState, useEffect} from 'react'

const FlightInfo = () => {

const [flightInfo, setFlightInfo] = useState()

const fetchFlightInfo = async () => {
    const res = await fetch('')
    if(!res){
        throw new Error('Broken Promise :(')
    } else{
        return res.json
    }
}

useEffect(() => {
   fetchFlightInfo()
   .then((res) => {
    setFlightInfo(res)
   })
   .catch((e) => { 
    console.log(e.message)
   })
})


  return (
    <div></div>
  )

  }
export default FlightInfo