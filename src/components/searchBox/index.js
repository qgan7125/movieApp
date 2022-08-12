import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changePage, getMovielist, updateKeyword } from '../../redux/slices/searchMovieSlice';
import "./searchBox.css";

const SearchBox = () => {
    const keyword = useSelector((state) => state.searchMovie.keyword);
    const total_pages = useSelector((state) => state.searchMovie.total_pages);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(updateKeyword(e.target.value));
        dispatch(getMovielist())
    }

    useEffect(() => {
        dispatch(changePage(1))
    }, [total_pages, dispatch])

    return (
        <form className='searchBox__container'>
            <input value={keyword} onChange={handleChange} />
        </form>
    )
}

export default SearchBox;