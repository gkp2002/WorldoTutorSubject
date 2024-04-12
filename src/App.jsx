import Footer from "./Components/Footer/Footer"
import Forms from "./Components/FormsPage/Forms"
import NavBar from "./Components/NavBar/NavBar"
import PopPage from "./Components/PopPage/PopPage"
import Mathes from "./Subjects/Mathes"
import {Routes,Route} from 'react-router-dom'
function App() {
   return (
    <div className="bg-gray-400 ">
      <PopPage/>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Mathes/>}></Route>
         <Route path="/Booktrail"  element={<Forms/>}/>
      </Routes>
      <Footer/>
      </div>
  )
}

export default App
