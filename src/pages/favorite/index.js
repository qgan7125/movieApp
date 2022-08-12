import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieItem from '../../components/searchList/movieItem';
import { deleteMovieFromFavoritelist } from '../../redux/slices/favoriteSlice';
import "./favorite.css";

const Favorite = () => {
    const favorit = useSelector((state) => state.favorite.favoritelist);
    const dispatch = useDispatch();

    const handleDelete = (idx) => {
        dispatch(deleteMovieFromFavoritelist(idx))
    }

    return (
        <main className='favorite__contents'>
            {favorit.map((movie, idx) => {
                const { title, overview, poster_path, vote_average  } = movie;
                const props = {
                    title:title, 
                    overview:overview, 
                    poster_path:poster_path, 
                    vote_average:vote_average
                }
                return (
                    <div key={movie.id} onClick={() => handleDelete(idx)}>
                        <MovieItem {...props}/>
                    </div>
                )
            })}
        </main>
    )
}

export default Favorite;