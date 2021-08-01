import React from 'react';
import '../../styles/starbar.css'

const StarBar = (props: any) => {
  return (
    <div className='full-bar'>
      <a className='stars' onClick={() => (props.filterClick(props.rating))}>
        {props.rating} stars
      </a>
        <div
        className = 'back-bar'
        style = {{width: `${100 * 0.15}%`}}
        />
        <div
        id ='bar-percent'
        style = {{width: `${props.percent * 100 * 0.15}%`}}
        />
      <div>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{props.reviews} Reviews
      </div>
    </div>
  )
}

<div className = 'back-bar' style = {{width: `${100}%`}} />
export default StarBar;
