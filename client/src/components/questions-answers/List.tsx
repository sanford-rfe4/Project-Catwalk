import React from 'react';
import { useState, useEffect } from 'react';
import ListItem from './ListItem';
import Question from './Question';
const List = (props: any) => {
  console.log(props.allVisible)
  const [list, setList] = useState([]);
  const [current, setCurrent] = useState(0);
  const [allVisible, setAllVisible] = useState(false);

  useEffect(() => {
    setList(props.list);
  }, [props.list]);

  // useEffect(() => {
  //   if (current === list.length) {
  //     setAllVisible(true);
  //   }
  // }, [current])

  useEffect(() => {
    setCurrent(list.length < 2 ? list.length : 2)
  }, [list]);

  useEffect(() => {
    console.log('current: ', current);
    console.log('list length: ', list.length);
    if (current !== 0 && current === list.length) {
    setAllVisible(true);
    }
  }, [current])
  const handleMoreQuestionsClick = () => {
    setCurrent(current + 2 < list.length ? current + 2 : list.length);
  }

  return (
    <>
      <div className='question-list'>
      {list.slice(0,current).map((element: any) => (
        <props.listItem question={element} />
      )

      )}
      </div>
      {(!allVisible && list.length > 0) &&
      <button onClick={handleMoreQuestionsClick}>load more</button>
      }

    </>
  )
}

export default List;