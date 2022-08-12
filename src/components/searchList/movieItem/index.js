import React from 'react';
import defaultPosterImage from "../../../assets/default-movie.jpeg";
import "./movieItem.css";

const MovieItem = ({ title, overview, poster_path, vote_average }) => {
    return (
        <div className='movieItem'>
            <figure>
                <img src={window.config.movie_img + poster_path} 
                alt={title} 
                onError={(e) => {e.target.onerror = null; e.target.src = defaultPosterImage}}/>
            </figure>
            <div className='movieInfo'>
                {title}
                <span className={+vote_average > 8 ? 'highRate' : ""}>{vote_average}</span>
            </div>
            <div className='overview'>
                <h3>Overview</h3>
                {overview ? overview : "Overview not available"}
            </div>
        </div>
    )
}

export default MovieItem;