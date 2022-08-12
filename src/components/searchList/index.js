import React, { useEffect } from 'react';
import MovieItem from './movieItem';
import { useSelector, useDispatch } from 'react-redux';
import { getMovielist } from '../../redux/slices/searchMovieSlice';
import { addovieToFavoritelist } from '../../redux/slices/favoriteSlice';
import "./searchList.css";

const MovieList = () => {
    const searchList = useSelector((state) => state.searchMovie.searchResult);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovielist());
    }, [dispatch])

    const handleAddMovielist = (newBook) => {
        dispatch(addovieToFavoritelist(newBook));
    }

    return (
        <section className='movieApp__container'>
            <section className='movieApp__contents'>
                {searchList.map(content => (
                    <div key={content.id} onClick={() => handleAddMovielist(content)}>
                        <MovieItem  {...content} />
                    </div>
                ))}
            </section>
        </section>
    )
}

export default MovieList;