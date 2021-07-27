import React from 'react';

const MoreAdd = (props: any) => {
  return (
    <React.Fragment>
      <button>More {props.widget}s</button>
      <button>Add a {props.widget}</button>
    </React.Fragment>
  )
}

export default MoreAdd;