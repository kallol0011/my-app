import React from 'react';
import "./All.css"
const Pagination = ({page,onChange}) => {
    return (
        <div>
            <button className='paginationButton' disabled={page<=1} onClick={()=>onChange(page-1)} > - </button>
            <button className='paginationButton' >{page}</button>
            <button className='paginationButton' disabled={page>=3} onClick={()=>onChange(page+1)} > + </button>
        </div>
    );
};

export default Pagination;