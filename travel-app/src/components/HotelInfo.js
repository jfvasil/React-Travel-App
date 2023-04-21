import {useState, useEffect} from 'react'

const HotelInfo = () => {
    const [hotelInfo, setHotelInfo] = useState()

    const fetchHotelInfo = async () => {
        const res = await fetch('')
        if(!res){
            throw new Error('Broken Promise :(')
        } else{
            return res.json
        }
    }
    
    useEffect(() => {
       fetchHotelInfo()
       .then(res => {
        setHotelInfo(res)
       })
       .catch(e => { 
        console.log(e.message)
       })
    })
    
}

export default HotelInfo