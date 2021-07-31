import React from 'react';

const Answer = (props: any) => {
  return (
    <div className='answer'>
      {props.question.body}
    </div>
    )


}

export default Answer;