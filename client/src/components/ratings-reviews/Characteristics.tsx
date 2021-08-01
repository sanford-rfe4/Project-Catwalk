import React, {useState} from 'react';

const Characteristics = (props: any) => {
  const renderFunction = () => {
    var mapped = [];
    for (var key in props.char) {
      mapped.push(
        <div>
          <div>
            {key}
          </div>
          <div>
            {props.char[key].value}
          </div>
        </div>
      )
    }
    return mapped;
  }

  return (
    <div>
      {renderFunction()}
    </div>
  )
}

export default Characteristics;