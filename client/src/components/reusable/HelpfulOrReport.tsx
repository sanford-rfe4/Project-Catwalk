import React, { useState } from 'react';
import PUT from '../../../../api/PUT';

const HelpfulOrReport = (props: any) => {
  const [helpful, setHelpful] = useState(props.value);
  const [helpClick, setHelpClick] = useState(false);

  const HelpfulClick = () => {
   if (helpClick === false) {
   PUT.reviews.helpful(props.index);
   setHelpful(helpful + 1);
   setHelpClick(true);
   }
  }
  const Report = () => {
    PUT.reviews.report(props.index);
    props.setClick(true);
  }

  return (
      <div>Helpful?
        <span> <a onClick={() => {HelpfulClick()}}>Yes</a>
          &#40;{helpful}&#41;
        </span>
         &#124; <a onClick={() => {Report()}}>Report</a>
      </div>
  )
}

export default HelpfulOrReport;