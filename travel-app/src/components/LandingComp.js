import Button from "./Button";


const LandingComp = () => {

  return (
    <div>
    <h1>Welcome to Wanderlust!</h1>
    <h3>Do you know where you want to go???</h3>
    <Button color={'green'} text={'You Do Not Know'} navToPage={'/find'}/>
    <Button color={'orange'} text={'You do know'} navToPage={'/search'}/>
    </div>
  )
}

export default LandingComp