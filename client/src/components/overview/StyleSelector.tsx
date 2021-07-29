import React, { useState, useEffect } from 'react';
import '../../styles/images.css';

const StyleSelector = (props: any) => {

  let {styles, setStylePrice, setStyleDiscountPrice} = props;

  let [selectedStyle, setSelectedStyle] = useState('');
  let [selectedStyleId, setSelectedStyleId] = useState(0);

  const setCurrentStyle = (e: any) => {
    let currentlySelected = document.querySelector('.current-thumbnail');
    if (currentlySelected !== null) {
      currentlySelected.classList.remove('current-thumbnail');
    }
    e.target.classList.add('current-thumbnail');

    let styleName = e.target.attributes[1].value
    let findStyle = styles.find((style: any) => {
      return style.name === styleName;
    })

    setSelectedStyleId(findStyle.id);
    setSelectedStyle(findStyle.name);
    setStylePrice(findStyle.original_price);
    setStyleDiscountPrice(findStyle.sale_price);
  }

  useEffect(() => {
    if (styles !== undefined && styles[0] !== undefined) {
      setSelectedStyle(styles[0].name)
      document.querySelector('#img0')?.classList.add('current-thumbnail');
    }
  }, [styles]);

  return (
    <div>
      <b>STYLE {'>  '}</b>  {selectedStyle}
        <div id='thumb-nails'>
          {styles.map((style: any, index: number) => {
            return (
                <img
                  onClick={setCurrentStyle}
                  className='style-thumbnail'
                  alt={style.name}
                  src={style.photos[0].thumbnail_url}
                  key={index}
                  id={'img' + index}>
                </img>
              )
          })}
        </div>
    </div>
  );
}

export default StyleSelector;