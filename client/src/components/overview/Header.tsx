import React, { useState, useEffect } from 'react';
import GET from '../../../../api/GET';
import '../../styles/header.css';

const Header = (props: any) => {

  let [searchText, setSearchText] = useState('');

  const searchForProduct = async (searchId: string) => {
    let id = Number(searchId);
    let product = await GET.products.getProductById(id);
    if (product === 'error') {
      alert('item not found.');
    } else {
      props.setProduct(product);
    }
  }

  useEffect(() => {
    console.log(searchText)
  }, [searchText])

  return (
    <>
      <div id='header'>
        <div id='logo'>
          <em>Logo</em>
        </div>
        <div id='search-bar'>
          <form>
            <input
              onChange={e => setSearchText(e.target.value)}
              placeholder='search...'
              type='text'>
            </input>
            <input onClick={() => searchForProduct(searchText)} type='submit'></input>
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