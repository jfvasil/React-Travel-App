
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing.js'
import Search from './pages/Search.js'
import Find from './pages/Find.js'
import FindResults from './pages/findResults.js'
import TravelInfo from './pages/TravelInfo.js'
  import './style/App.css'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Landing />} />
      <Route exact path='/search'  element={<Search />} />
       <Route exact path='/find'  element={<Find />} /> 
      <Route  path='/findResults'  element={<FindResults />} />
       <Route  path='/TravelInfo' element={<TravelInfo />} />  
    

      </Routes>
    </Router>
  )
}

export default App
