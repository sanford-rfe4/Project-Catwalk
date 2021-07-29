import React, { useState } from 'react';
import '../../styles/images.css';

const StyleSelector = (props: any) => {

  let {styles, setStylePrice, setStyleDiscountPrice} = props;

  let [selectedStyle, setSelectedStyle] = useState('(selected style)');

  const setCurrentStyle = (e: any) => {
    let styleName = e.target.innerHTML
    let findStyle = styles.find((style: any) => {
      return style.name === styleName;
    })
    console.log(findStyle);
    setSelectedStyle(findStyle.name);
    setStylePrice(findStyle.original_price);
    setStyleDiscountPrice(findStyle.sale_price);
  }


  return (
    <div>
      <b>STYLE {'>'}</b> {selectedStyle}
      <ul>
        {styles.map((style: any) => {
          return (
            <li>
              <a onClick={setCurrentStyle} href='#'>
                {style.name}
                <img className='style-image' src={style.photos[0].thumbnail_url}></img>
                {console.log(style.photos)}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default StyleSelector;