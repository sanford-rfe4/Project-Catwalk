import React from 'react';

const HelpfulOrReport = (props: any) => {
  return (
      <div>Helpful?
        <span> <a>Yes</a>
          &#40;{props.value}&#41;
        </span>
         &#124; Report
      </div>
  )
}

export default HelpfulOrReport;