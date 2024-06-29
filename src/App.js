
import './App.css';
import './styles.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

function App() {

  const [movies,setMovies]=useState([]);
  const [watchlist,setWatchlist]=useState([])

    useEffect(()=>{
        
            fetch('movies.json')
            .then(res=>res.json())
            .then(data=>setMovies(data))


    },[])


      const toggleWatchlist=(movieId)=>{

        setWatchlist(prev=>
          prev.includes(movieId)?
          prev.filter(id=>id!==movieId):
          [...prev,movieId]
          
        )

      }


  return (
    <div className="App">

    {/* header part */}
    
      <div className='container'>
          <Header/>

        <Router>
          <nav>

          <ul>
            <li>
              <Link to="/">Home</Link>
              
            </li>

            <li>
              <Link to="watchlist">Watchlist</Link>
            </li>
          </ul>

          </nav>

          <Routes>
            <Route path='/' 
            element={<MoviesGrid movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />}

            ></Route>


            <Route path='/watchlist'
             element={<Watchlist 
            watchlist={watchlist}
            movies={movies} 
              toggleWatchlist={toggleWatchlist}
            />}

            ></Route>
          </Routes>



        </Router>


        

          
      </div>


      {/* footer part */}

      <Footer/>
      
     


    </div>
  );
}

export default App;
