import Dropdown from "../components/Dropdown"
const options = [
  {value: 'adventurous', label: 'adventurous'},
  {value: 'tropical', label: 'tropical'},
  {value: 'mountains', label: 'mountains'}
]

const Find = () => {
  return (
    <div className='Find'>
        <Dropdown placeHolder={'Select...'} options={options} 
        onChange={(value) =>console.log(value)} />
        <Dropdown placeHolder={'Select...'} options={options} 
       onChange={(value) =>console.log(value)} />
    </div>
  )
}

export default Find