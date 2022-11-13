import Constant from './components/home/constant/Constant'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomeBody from './components/home/Body/HomeBody'
import PlaceToStay from './components/placetostay/PlaceToStay'
import './App.scss'
import { useEffect, useState } from 'react'
function App() {
  const [popup, setpopup] = useState(false)
  const openPopup = () => {
    setpopup(true)
  }
  const closePopup = () => {
    setpopup(false)
  }
  useEffect(() => {
      if(popup) {
        document.body.style.overflowY ="hidden"
      }
      else if(!popup) {
        document.body.style.overflowY ="scroll"
      }
      console.log(popup)
  }, [popup])
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Constant pop={openPopup}  popup={popup} closePopup={closePopup}/>}>
            <Route index element={<HomeBody  />} />
            <Route path='/placetostay' element={<PlaceToStay />} />


          </Route>

        </Routes>
        
      
      </div>

    </Router>
    
  )
}

export default App
