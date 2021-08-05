import React from 'react';
import '../../styles/starbar.css'

const StarBar = (props: any) => {
  if (props.percent === undefined) {
    var widthBar = {width: '0%'}
  } else {
    var widthBar = {width: `${props.percent * 100}%`}
  }
  return (
    <div className='breakdown'>
      <a className='stars' onClick={() => {props.filterClick(props.rating)}}>
        {props.rating} stars
      </a>
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
      <div className ='review-amount'>
          {props.ratingsCheck(props.reviews)} reviews
        </div>
    </div>
  )
}

export default StarBar;
