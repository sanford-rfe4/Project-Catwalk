import React from 'react';
import List from './List';
import Answer from './Answer';

const Question = (props: any) => {
  return (
    <>
    <div>
      {props.question.question_body}
    </div>
    <List list={Object.values(props.question.answers)}
    listItem={Answer} />
    </>
  )
}

export default Question;