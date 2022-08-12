import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../components/pagination';
import SearchBox from '../../components/searchBox';
import MovieList from '../../components/searchList';
import { changePage } from '../../redux/slices/searchMovieSlice';

const Home = () => {
    const page = useSelector((state) => state.searchMovie.page);
    const searchList = useSelector((state) => state.searchMovie.searchResult);
    const totalPages = useSelector((state) => state.searchMovie.total_pages);
    const dispatch = useDispatch();

    const handlePage = (n) => {
        dispatch(changePage(n))
    }
    const pageInfo = { page: +page, items: searchList, totalPages: totalPages, handlePage: handlePage }
    return (
        <main>
            <SearchBox />
            <Pagination {...pageInfo} />
            <MovieList />
            <Pagination {...pageInfo} />
        </main>
    )
}

export default Home;