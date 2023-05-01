import React from 'react';
import Style from './SearchBar.module.css';

const SearchBar = ({}) => {


  return (
    <div className={Style.search}>
    <input type="text" className={Style.searchTerm} placeholder="Search 'white interior paint'"/>
    <button type="submit" className={Style.searchButton}>
      <i className="fa fa-search"></i>
   </button>
 </div> 

  )
}

export default SearchBar