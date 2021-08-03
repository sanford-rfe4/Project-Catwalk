import React from 'react';
import '../../styles/starbar.css'

const StarBar = (props: any) => {
  return (
    <div className='full-bar'>
        <div
        className = 'back-bar'
        style = {{width: '200px'}}
        >
        <div
        id ='bar-percent'
        style = {{width: `${props.percent * 100}%`}}
        />
        </div>
    </div>
  )
}

export default StarBar;
