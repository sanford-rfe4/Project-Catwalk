import React from 'react';
import '../../styles/header.css';

const Header = (props: any) => {
  return (
    <>
      <div id='header'>
        <div id='logo'>
          <em>Logo</em>
        </div>
        <div id='search-bar'>
          <form>
            <input type='text'></input>
            <input type='submit'></input>
          </form>
        </div>
      </div>
      <div id='subheader'>
        <em>SITE-WIDE ANNOUNCEMENT MESSAGE!</em> -- SALE / DISCOUNT <b>OFFER</b> -- <u>NEW PRODUCT HIGHLIGHT</u>
      </div>
    </>
  );
}

export default Header;