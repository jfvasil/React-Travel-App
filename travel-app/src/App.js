
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/landing.js'
import Search from './pages/search.js'
// import Find from './pages/find.js'
// import FindResults from './pages/findResults.js'
// import TravelInfo from './pages/travelInfo.js'
  

const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Landing />} />
      <Route exact path='/search'  element={<Search />} />
      {/* <Route exact path='/find'  component={<Find />} /> */}
      {/* <Route  path='/findResults'  element={<FindResults />} />
      <Route  path='/travelInfo' element={<TravelInfo />} /> */}
    

      </Routes>
    </Router>
  )
}

export default App
