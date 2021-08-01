import React from 'react';
import moment from 'moment';
import PUT from '../../../../api/PUT';
import { useState, useEffect } from 'react';
const Helpful = (props: any) => {
  return (
    <div className='helpful-button' onClick=
    {props.handleHelpfulnessClick}>
      {`helpful?(${props.helpful}) `}
    </div>
  )
}

const Report = (props: any) => {
  return (
    <div className='report' onClick={props.handleReportClick}>
      <u>{props.clickedReported ? 'Reported' : 'Report'}</u>
    </div>
  )
}
const Answer = (props: any) => {
  const handleHelpfulnessClick = (answer: any) => {
    console.log(answer.id)
    PUT.answers.helpful(answer.id, () => {
    setClickedHelpful(true);
    setHelpful(helpful + 1);
    })};
  const handleReportClick = (answer: any) => {
    PUT.answers.report(answer.id, () => {
      setClickedReported(true);
    })
  }
  const [helpful, setHelpful] = useState(0);
  const [clickedReported, setClickedReported] = useState(false);
  const [clickedHelpful, setClickedHelpful] = useState(false);
  useEffect(() => {
    setHelpful(props.question.helpfulness);
  }, [props.question])
  return (
    <>
    <div className='answer'>
      {props.question.body}
      <div>
      {'by  ' + props.question.answerer_name + ',  ' + moment(props.question.date).format('LL') + ' |  '}   <Helpful helpful={helpful} answer={props.question}
      handleHelpfulnessClick={clickedHelpful ? () => {} : () => handleHelpfulnessClick(props.question) }/>
      <Report clickedReported={clickedReported} handleReportClick={ clickedReported ?
      () => {} : setClickedReported } />
      </div>
    </div>
    </>
    )


}

export default Answer;