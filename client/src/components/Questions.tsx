import React from 'react';
import '../styles/questions.css';
import QuestionList2 from './questions-answers/QuestionList2';
const Questions = (props: any) => {

  return (
    <QuestionList2 product={props.product} />
  );
};

export default Questions;