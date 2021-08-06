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

  const [list, setList] = useState([]);
  const [reported, setReported] = useState(false);
  const [clickedHelpful, setClickedHelpful] = useState(false);
  const [helpful, setHelpful] = useState(0);
  const [show, setShow] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [current, setCurrent] = useState(2);

  const updateCurrent = (n: number) => {
    setCurrent(current + n);
  };
  useEffect(() => {
    setFilteredList(filteredList)
  }, [current])

  useEffect(() => {
    setFilteredList(list);
  }, [list])
  useEffect(() => {
    console.log(props.question.answers)
    let v: any = Object.values(props.question.answers);
    console.log(list)
    v.sort((a: any, b: any) => b.helpfulness - a.helpfulness);
    setList(v);


  }, [])

  useEffect(() => {
    setHelpful(props.question.question_helpfulness);
  }, [props.question]);

  const handleReportClick = (id: number) => {
    PUT.questions.report(id, () => {
      console.log('reported');
      setReported(true);
    })
  }
  const handleHelpfulnessClick = (question: any) => {
    console.log(question);
    PUT.questions.helpful(question.question_id, () => {
      setClickedHelpful(true);
      setHelpful(helpful + 1);
    })
  };
  const handleClose = () => {
    setShow(false);
  }

  return (
    <>
    <div className='question'>
      <div className='question-body'>
      <b>{'Q: ' + props.question.question_body}</b>
      </div>
    <div className='question-response'>
    <div className='add-answer' onClick={()=>setShow(true)}>
      Add Answer
    </div>
    <div className='helpful'>
    <Helpful helpful={helpful} answer={props.question}
      handleHelpfulnessClick={clickedHelpful ? () => {} : () => handleHelpfulnessClick(props.question) }/>
    {/* <Report handleReportClick={() => handleReportClick(props.question.question_id)} clickedReported={reported} /> */}
    </div>

    </div>
    </div>
    <div className='answers'>
    <List list={filteredList.slice(0, current)}
    listItem={Answer}
     buttonText='LOAD MORE ANSWERS' />
    { current >= filteredList.length ? null :
      <div onClick={
        () => {
          updateCurrent(2)
          console.log(current)
        console.log('hi')}}>MORE ANSWERS</div>
      }
    </div>
    <Modal.Answer question={props.question}
    show={show} close={handleClose} />
    </>
  )
}

export default Question;