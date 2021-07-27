import React from 'react';
import { useState, useEffect } from 'react';
const Search = (props: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='search'>
      <form onSubmit={props.submitSearch} >
        <input type='text'
        onChange={(e) => setSearchTerm(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Search;