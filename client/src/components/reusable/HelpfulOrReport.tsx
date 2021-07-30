import React, { useEffect, useState } from 'react';
import PUT from '../../../../api/PUT';

const HelpfulOrReport = (props: any) => {
  const [helpful, setHelpful] = useState(props.value);
  const [helpClick, setHelpClick] = useState(false);
  useEffect(() => {
    setHelpful(props.value);
  }, [props.value])

  const HelpfulClick = () => {
    if (helpClick === false) {
      if (props.widget === 'Review') {
        PUT.reviews.helpful(props.index);
      } else if (props.widget === 'Question') {
        PUT.questions.helpful(props.index);
      } else if (props.widget === 'Answer') {
        PUT.answers.helpful(props.index);
      }
   setHelpful(helpful + 1);
   setHelpClick(true);
   }
  }
  const Report = () => {
    if (props.widget === "Review") {
    PUT.reviews.report(props.index, props.handleClick);
  } else if (props.widget === 'Answer') {
    PUT.answers.report(props.index, props.handleClick);
  } else if (props.widget === 'Question') {
    PUT.questions.report(props.index, props.handleClick);
  }
};

  return (
    <div style={{padding: "10px"}}>Helpful?
      <span> <a onClick={() => {HelpfulClick()}}>Yes</a>
        &#40;{helpful}&#41;
      </span>
       &#124; <a onClick={() => {Report()}}>Report</a>
    </div>
  )
}

export default HelpfulOrReport;