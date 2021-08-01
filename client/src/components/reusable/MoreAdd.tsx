import React from 'react';

const MoreAdd = (props: any) => {
  const renderMore = () => {
    if (!props.noMoreItems)
    return (<button onClick={() => {props.moreClick()}}>More {props.widget}s</button>)
  }
  return (
    <React.Fragment>
      {renderMore()}
      <button>Add a {props.widget}</button>
    </React.Fragment>
  )
}

export default MoreAdd;