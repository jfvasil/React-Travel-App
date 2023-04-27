import {useState, useEffect} from 'react'

const HotelInfo = ({city}) => {
    const [hotelInfo, setHotelInfo] = useState()
    const url = ''
    useEffect(() => {
    const fetchHotelInfo = async () => {
        const res = await fetch('tripadvisor.com/api')
        if(!res.ok){
            throw new Error('Broken Promise :(')
        } else{
            const data = await res.json()
            setHotelInfo(data.id)
        }
    }
    fetchHotelInfo()
}, [city])

    return(
        <div>
        <a href={url}>
            <img src=''></img>
            </a>
        </div>
    )


}
export default HotelInfo