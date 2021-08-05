import React, {useState, useEffect} from "react";
import PUT from "../../../../api/PUT";
import Answer from "./Answer";

const Helpful = (props: any) => {
  return (
    <div className='helpful-button' onClick=
    {props.handleAnswerHelpfulnessClick}>
      {`helpful?(${props.helpful})`}
    </div>
  )
}
const QAnswer = (props: any) => {
  const [helpful, setHelpful] = useState(0);
  const [reported, setReported] = useState(false);
  const [markedHelpful, setMarkedHelpful] = useState(false);

  useEffect(() => {
    setHelpful(props.answer.helpfulness)
  },[props.answer])
  const handleAnswerHelpfulnessClick = (answer: any) => {
    PUT.answers.helpful(answer);
    setHelpful(helpful+1)
  };
  const handleReportClick = (answer: any) => {
    PUT.answers.report(answer);
    setReported(true);
  }
  return (
    <>
      <div>
        <b>A: </b> {props.answer.body}
      </div>
      <div>
        by {props.answer.answerer_name}
      </div>
      <div>
        {props.answer.date}
      </div>
      <div onClick={() => {
        handleAnswerHelpfulnessClick(props.answer.id);
        setHelpful(helpful+1)
      }}>
        {`helpful? Yes(${helpful})`}
      </div>
      <div onClick={() => {
        if (!reported) {
        handleReportClick(props.answer.id);
        } else {
          return null;
        }
      }}>
      {reported ? 'reported' : 'report'}</div>

    </>
  )
}

export default QAnswer;