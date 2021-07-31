import React from 'react';
import { useState, useEffect } from 'react';
import List from './List';

const ListItem = (props: any) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    let answerList: any;
    if (props.question) {
    answerList = Object.values(props.question.answers);
    answerList = answerList.sort((a: any,b: any) => b.helpfulness - a.helpfulness);
    setAnswers(answerList);
    }
  }, [props.question])
  return (
    <>
    <div className='question'>
      {props.question.question_body}
    </div>

    </>
  )
}

export default ListItem;