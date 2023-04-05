import {Link} from 'react-router-dom'

const Button = ({color, text, navToPage}) => {
    const style = {
        backgroundColor: color
    }
  return (
    <>
    <Link to={navToPage}>
        <button style={style} >
            {text} 
        </button>
       </Link>
            </>
  )
}

export default Button