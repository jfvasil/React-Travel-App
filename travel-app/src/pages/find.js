import Dropdown from "../components/Dropdown"
const options = [
  {value: 'adventurous', label: 'adventurous'},
  {value: 'tropical', label: 'tropical'},
  {value: 'mountains', label: 'mountains'}
]
const Find = () => {
  return (
    <div>
        <Dropdown placeHolder={'Select...'} options={options} />
    </div>
  )
}

export default Find