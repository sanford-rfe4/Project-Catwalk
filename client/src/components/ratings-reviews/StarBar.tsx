import React from 'react';
import '../../styles/starbar.css'

const StarBar = (props: any) => {
  if (props.percent === undefined) {
    var widthBar = {width: '0%'}
  } else {
    var widthBar = {width: `${props.percent * 100}%`}
  }
  return (
    <div className='full-bar'>
        <div
        className = 'back-bar'
        style = {{width: '150px'}}
        >
        <div
        id ='bar-percent'
        style = {widthBar}
        />
        </div>
    </div>
  )
}

export default StarBar;
