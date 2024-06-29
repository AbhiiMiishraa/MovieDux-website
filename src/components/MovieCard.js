import React from "react";
import '../styles.css';

export default function MovieCard({movie,isWatchlisted,toggleWatchlist})
{


    function handleError(e)
    {
            e.target.src='images/default.jpg'
    }

    function ratingColor(rating)
    {
        if(rating>=7)
            {
                return "rating-good"
            }

            else{
                return "rating-bad"
            }
    }





    return(

        <div  key={movie.id} className="movie-card">

        <img src={`images/${movie.image}`} alt={movie.title} onError={handleError} />

    <div className="movie-card-info">
        <h3 className="movie-card-title"> {movie.title}</h3>

        <div>
            <span className={`movie-card-rating ${ratingColor(movie.rating)}`}> {movie.rating}</span>
    <span className="movie-card-genre"> {movie.genre}</span>
        </div>


            <label className="switch">
              <input type="checkbox" checked={isWatchlisted} onChange={()=>toggleWatchlist(movie.id)}  >

              </input>

              <span className="slider">
                <span className="slider-label">{isWatchlisted?"in watchlist":"Add to watchlist"}</span>
              </span>
            </label>
    
    

    </div>
    </div>
    )

}