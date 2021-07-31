import React, {useEffect, useState} from 'react';
import List from './List';
import GET from '../../../../api/GET';
import Question from './Question';
const QuestionList2 = (props: any) => {
  const [list, setList] = useState([]);
  // const [current, setCurrent] = useState(0);
  // const [allVisible, setAllVisible] = useState(false);

  useEffect(() => {
    GET.questions.getProductQuestionsById(20000)
    .then((questions) => {setList(questions.results);
      console.log(questions.results)})
  },[])
  // useEffect(() => {
  //   setCurrent(list.length < 2 ? list.length : 2)
  // }, [list])
  // useEffect(() => {
  //   console.log('current: ', current);
  //   console.log('list length: ', list.length);
  //   if (current !== 0 && current === list.length) {
  //   setAllVisible(true);
  //   }
  // }, [current])
  // const handleMoreQuestionsClick = () => {
  //   setCurrent(current + 2 < list.length ? current + 2 : list.length);
  // }
  return (<List list={list} listItem={Question} />);
      // getMore={handleMoreQuestionsClick}
      // allVisible={allVisible} />)
}

export default QuestionList2;