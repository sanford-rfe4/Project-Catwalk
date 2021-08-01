import React from 'react';
import List from './List';
import Answer from './Answer';
import PUT from './../../../../api/PUT';
import { useState, useEffect } from 'react';
import Modal from './Modal';
import AddAnswer from './AskAnswer';

const Report = (props: any) => {

  // const [show, setShow] = useState(false);
  // const handleClose = () => {
  //   setShow(false);
  // }
  return (
    <>
    <div className='report' onClick={props.handleReportClick}>
      <u>{props.clickedReported ? 'Reported' : 'Report'}</u>
    </div>
    {/* <div className='add-answer' onClick={()=>{setShow(true)}}>
      <u>add answer</u>
    </div> */}
    </>
  )
}

const Helpful = (props: any) => {
  return (
    <div className='helpful-button' onClick=
    {props.handleHelpfulnessClick}>
      {`helpful?(${props.helpful}) `}
    </div>
  )
}

const Question = (props: any) => {
  const [reported, setReported] = useState(false);
  const [clickedHelpful, setClickedHelpful] = useState(false);
  const [helpful, setHelpful] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setHelpful(props.question.helpfulness);
  }, [props.question]);
  const handleReportClick = (id: number) => {
    PUT.questions.report(id, () => {
      console.log('reported');
      setReported(true);
    })
  }
  const handleHelpfulnessClick = (id: number) => {
    PUT.questions.helpful(id, () => {

    })
  }
  const handleClose = () => {
    setShow(false);
  }
  return (
    <>
    <div>
      {'Q: ' + props.question.question_body}
    </div>
    <List list={Object.values(props.question.answers)}
    listItem={Answer} displayLength={2}
     buttonText='more answers' />

    <Report handleReportClick={() => handleReportClick(props.question.question_id)} clickedReported={reported} />
    <div className='add-answer' onClick={()=>setShow(true)}>
      <ul>answer</ul>
    </div>
    <Modal.Answer question={props.question}
    show={show} close={handleClose} />
    </>
  )
}

export default Question;