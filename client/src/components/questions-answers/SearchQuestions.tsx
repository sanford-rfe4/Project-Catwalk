import React, {useState, useEffect} from "react";

const SearchQuestions = (props: any) => {
  const [query, setQuery] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(props.list)
    props.setList(props.list.filter((item: any) =>
      item.question_body.includes(query)
    ))
  }
  return (
    <div className='search-questions'>
      <form onSubmit={handleSubmit}>
        <label>
          search for answers
          <input type='text'
          value={query}
          onChange={e => setQuery(e.target.value)} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default SearchQuestions;