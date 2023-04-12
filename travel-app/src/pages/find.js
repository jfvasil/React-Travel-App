import Dropdown from "../components/Dropdown"
const options = [
  {value: 'adventurous', label: 'adventurous'},
  {value: 'tropical', label: 'tropical'},
  {value: 'mountains', label: 'mountains'}
]
const otherOptions = [
  {value: 'test', label: 'test'},
  {value: 'other test', label: 'other test'},
  {value: 'last test', label: 'last test'}
]
const Find = () => {
  return (
    <div>
        <Dropdown placeHolder={'Select...'} options={options} />
        <Dropdown placeHolder={'Select...'} options={otherOptions} />
    </div>
  )
}

export default Find