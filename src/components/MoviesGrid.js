import React,{useEffect,useState} from "react";
import '../styles.css'
import MovieCard from "./MovieCard";

export default function MoviesGrid({movies,watchlist,toggleWatchlist})
{

    
  
    const [searchItems, setSearchItems]=useState("")

    const [genre,setGenre]=useState("All Genres");
    const [rating,setRating]=useState("All");

  

    
    const handleSearch=(e)=>
      {

        setSearchItems(e.target.value)  

      }

      const handleGenre=(e)=>
      {

        setGenre(e.target.value)  

      }

      const handleRating=(e)=>
      {

        setRating(e.target.value)  

      }

      const matchesGenre=(movies,genre)=>
      {
        return genre==="All Genres" || 
        movies.genre.toLowerCase()=== genre.toLowerCase();
      }


      const matchesRating=(movies,rating)=>
      {
        switch(rating)
        {
          case 'All':
            return true;

          case 'Good':
            return movies.rating>7;

          case 'Bad':
            return movies.rating<7

          default:
              return false
          
        }
      }





       const matchesSearchTerm=(movies,searchItems)=>
      {
        return  movies.title.toLowerCase().includes(searchItems.toLowerCase())
      }


      const filteredMovies=movies.filter(movie=>
        
        matchesGenre(movie,genre)
         && matchesRating(movie,rating)
          && matchesSearchTerm(movie,searchItems)
      )



    return(
       <div>

       <input

       className="search-input" 
       type="text"
        placeholder="Search movies..."
        value={searchItems}
        onChange={handleSearch}
        />

          <div className="filter-bar">
            <div className="filter-slot">
             <label>Genre</label>

             <select className="filter-dropdown"  value={genre} onChange={handleGenre} >
              

              <option>All Genres</option>
              <option>Horror</option>
              <option>Action</option>
              <option>Fantasy</option>
              <option>Drama</option>
             </select>


            </div>

             <div className="filter-slot">
             <label>Rating</label>

            <select className="filter-dropdown" value={rating} onChange={handleRating} >
              <option>All</option>
              <option>Good</option>
              <option>Bad</option>
              
            </select>
          
            </div>

          </div>




         <div className="movies-grid">

        {
           filteredMovies.map(movie=>(
              <MovieCard movie={movie} key={movie.id} 
              
              toggleWatchlist={toggleWatchlist} 
              isWatchlisted={watchlist.includes(movie.id)} ></MovieCard>
            ))
        }
        </div>
       </div>
   );
}