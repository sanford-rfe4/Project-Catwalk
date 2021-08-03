import React, {useState} from 'react';
import '../../styles/characteristics.css';

const Characteristics = (props: any) => {
  const renderFunction = () => {
    var mapped = [];
    for (var key in props.char) {
      mapped.push(
        <div className='full-char'>
          <div className='char'>
            {key}
          </div>
          <div>
            <div className='bar' style={{width: '200px'}}>
              <div className = 'pointer' style={{left: `${(props.char[key].value * 100) / 5}%`}}>&#9662;</div>
            </div>
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