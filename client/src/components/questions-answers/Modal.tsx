import React, {useState, useEffect} from "react";
import POST from "../../../../api/POST";

import AddQuestion from "./AskAnswer";
import AddAnswer from "./AskAnswer";
import AskAnswer from "./AskAnswer";
const Modal = {
  Ask: (props: any) => {
  if (!props.show) {
    return null;
  } else {
    return (
     <AskAnswer.AddQuestion close={props.close} />

    )
  }
},
  Answer: (props: any) => {
    if (!props.show) {
      return null;
    } else {
      return (<div className='answer-modal'>
        <AskAnswer.AddAnswer close={props.close}
        question_id={props.question.question_id} />
      </div>)
    }
  }
}
export default Modal;