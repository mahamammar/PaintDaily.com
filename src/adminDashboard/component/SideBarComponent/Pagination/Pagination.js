import React from 'react';

function Pagination ({postsPerPage, totalPosts, paginate}) {
    const pageNumber = [];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumber.push(i);
    }
    return (
        <nav className={"row "}>
            <div className={"col-lg-12 "}>
                <ul className={"pagination d-flex justify-content-end align-content-end "} style={{marginRight:'60px', marginTop:'20px'}}>
                    {pageNumber.map(number=>(
                        <li key={number} className={"page-item"}>
                            <a onClick={()=>paginate(number)}  className={"page-link"} style={{cursor:'pointer'}}>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Pagination;