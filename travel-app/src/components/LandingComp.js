import Button from "./Button";
import PageHeading from "./PageHeading";

const LandingComp = () => {

  return (
    <div>
    <PageHeading text={'Welcome to Wanderlust!'} />
    <h3>Do you know where you want to go???</h3>
    <Button color={'green'} text={'You Do Not Know'} navToPage={'/find'}/>
    <Button color={'orange'} text={'You do know'} navToPage={'/search'}/>
    </div>
  )
}

export default LandingComp