const Button = ({color, text, navToPage}) => {
    const style = {
        backgroundcolor: color
    }
  return (
    <div>
        <button style={style} onClick={navToPage}>
            {text}
        </button>
            </div>
  )
}

export default Button