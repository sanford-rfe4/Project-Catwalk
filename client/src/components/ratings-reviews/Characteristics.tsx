import React, {useState} from 'react';
import '../../styles/characteristics.css';

const Characteristics = (props: any) => {
  const renderFunction = () => {
    var mapped = [];
    for (var key in props.char) {
      var bars = [];
      if (
        key === 'Size' ||
        key === 'Width' ||
        key === 'Length' ||
        key === 'Fit') {
          bars.push(
            <div className='bar' style={{width: '50px'}}/>
          )
          bars.push(
            <div className='bar' style={{width: '100px'}}/>
          )
          bars.push(
            <div className='bar' style={{width: '50px'}}/>
          )
      } else if (
        key === 'Comfort' ||
        key === 'Quality') {
          for (var i = 0; i < 4; i++)
          bars.push(
            <div className='bar' style={{width: '50px'}}/>
          )
      }
      mapped.push(
        <div className='full-char'>
          <div className='char'>
            {key}
          </div>
          <div className = 'complete-bar'>
            {bars}
            <div className = 'pointer' style= {{left: `${(props.char[key].value * 100) / 5}%`}}>&#9662;</div>
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