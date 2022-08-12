import React, { useEffect } from 'react';
import "./pagination.css";

const Pagination = ({ page, items, totalPages, handlePage }) => {

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    const handleClick = (e) => {
        const newPage = e.target.getAttribute('data-id')
        handlePage(newPage);
    }

    return (
        <div className='pagination__container'>
            {items?.length > 0 && <>
                <button 
                    data-id={page-1}
                    disabled={page <= 1}
                    onClick={handleClick}>prev</button>
                {page > 1 &&
                    <button onClick={handleClick} data-id={page-1}>
                        {page - 1}
                    </button>
                }
                <button disabled>{page}</button>
                {page < totalPages &&
                    <button onClick={handleClick} data-id={page+1}>
                        {page + 1}
                    </button>
                }
                <button
                    disabled={page >= totalPages}
                    data-id={page+1}
                    onClick={handleClick}>next</button>
            </>}
        </div>
    )
}

export default Pagination;