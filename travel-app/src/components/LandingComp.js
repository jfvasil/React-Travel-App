import Button from "./Button";

const LandingComp = () => {
function dontKnow(){
    console.log('Negative')
}
function doKnow(){
    console.log('Positve')
}
  return (
    <>
    <Button color={'green'} text={'You Do Not Know'} navToPage={dontKnow}/>
    <Button color={'orange'} text={'You do know'} navToPage={doKnow}/>
    </>
  )
}

export default LandingComp