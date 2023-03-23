import React from 'react'
import "./index.scss"
import searchLogo from "../../assets/search.png"
import profileLogo from "../../assets/profile.png"
import favoriteLogo from "../../assets/heart.png"

const Search = () => {
  return (
    <div className='search'>
      <div className='search__input-container'>
        <img src={searchLogo} alt="Logo de procurar" className='search__search-logo'/>
        <input type="text" placeholder='Search'/>
      </div>
      <img src={profileLogo} alt="Logo de profile" />
      <img src={favoriteLogo} alt="Logo de favorito" />
    </div>
  );
};

export default Search