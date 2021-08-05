import React, {useState} from 'react';
import '../../styles/characteristics.css';

const Characteristics = (props: any) => {
  const renderFunction = () => {
    var mapped = [];
    for (var key in props.char) {
      var bars = [];
      var measure;
      if (
        key === 'Size' ||
        key === 'Width' ||
        key === 'Length' ||
        key === 'Fit') {
          for (var i = 1; i < 4.99; i += 1.33) {
          if (i <= props.char[key].value && i + 1.33 > props.char[key].value) {
            var point = (((props.char[key].value - i) / 1.33) * 100);
            bars.push(
              <div
              className='bar'
              style={{width: `${200 / 3}px`, margin: '3px'}}>
                <div
                className = 'pointer'
                style={{left: `${point}%`}}>&#9662;</div>
              </div>
            )
          } else {
            bars.push(
              <div className='bar' style={{width: `${200 / 3}px`, margin: '3px'}}>
              </div>
            )
          }
        }
        measure = (
          <div className = 'measurement'>
            <div>Too small</div>
            <div>Perfect</div>
            <div>Too Big</div>
          </div>
        )
      } else if (
        key === 'Comfort' ||
        key === 'Quality') {
          for (var i = 1; i < 5; i++) {
          if (i === Math.floor(props.char[key].value)) {
            var point = (props.char[key].value - i) * 100;
            bars.push(
              <div
              className='bar'
              style={{width: '50px', margin: '2px'}}>
                <div
                className = 'pointer'
                style={{left: `${point}%`}}>&#9662;</div>
              </div>
            )
          } else {
            bars.push(
              <div className='bar' style={{width: '50px', margin: '2px'}}>
              </div>
            )
          }
        }
        measure = (
          <div className = 'measurement'>
            <div>Poor</div>
            <div>Perfect</div>
          </div>
        )
      }
      mapped.push(
        <div className='full-char'>
          <div className='char'>
            {key}
          </div>
          <div className = 'complete-bar'>
            {bars}
          </div>
          {measure}
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