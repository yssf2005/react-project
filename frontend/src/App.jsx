import './css/App.css'
import Home from "./Pages/home"
import Favorites from "./Pages/fav"
import {Routes, Route} from "react-router-dom"
import { MovieProvider } from './context/MovieContext'
import NavBar from "./assets/components/NavBar"

function App() {
  return(
    <MovieProvider>
      <div>
        <NavBar/>
        <main className='Main-content'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
          </Routes>
        </main>   
      </div>
    </MovieProvider>
    
  );
}

export default App
