import {useState, useEffect} from 'react'

const HotelInfo = ({city}) => {
    const [locationId, setLocationId] = useState()
    const [locationState, setLocationState] = useState()
    const locationForUrl = (location) => {
        if(location.includes(' ')){
          return  location.split(' ').join('%20')
        } else{
            return location
        }
    }
    useEffect(() => {
        const url = `https://api.content.tripadvisor.com/api/v1/location/search?key=${process.env.REACT_APP_TRIPADVISOR_KEY}&searchQuery=${locationForUrl('new york city')}&language=en`
   
    const fetchHotelInfo = async () => {
        const res = await fetch(url)
        if(!res.ok){
            throw new Error('Broken Promise :(')
        } else{
            const data = await res.json()
            console.log(data.data[0])
            setLocationId(data.data[0].location_id)
            setLocationState(data.data[0].address_obj.state)
            
        }
    }
    fetchHotelInfo()
    
}, [city])
    const refUrl = `https://www.tripadvisor.com/Hotels-g${locationId}-${locationForUrl('New York City')}_${locationState}Hotels.html`
    return(
        <div>
        <a href={refUrl} target='_blank' rel = 'noreferrer'>
            this is a placeholder link for testing
            </a>
        </div>
    )


}
export default HotelInfo