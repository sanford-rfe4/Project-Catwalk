import React, { useState, useEffect } from 'react';

const Cart = (props: any) => {

  let {styleId, styles, setCurrentStyle} = props;

  let [sizes, setSizes] = useState<object[]>([]);

  const findCurrentStyleAndSizes = async () => {
    let styleObj: any = styles.find((style: any) => {
      return style.style_id === styleId
    });

    let skuIds = Object.keys(styleObj?.skus);
    let sizesArr = [];

    for (let i = 0; i < skuIds.length; i++) {
      sizesArr.push(styleObj.skus[skuIds[i]]);
    }
    setSizes(sizesArr);
    setCurrentStyle(styleObj);
  }

  useEffect(() => {
    if (styleId) {
      findCurrentStyleAndSizes();
    }
  }, [styleId])

  console.log(sizes);

  return (
    <div>
      <div id='size-quantity-container'>
        <div className='product-info-dropdown' id='select-style'>
          SELECT SIZE
          <svg
            id='style-arrow'
            className='style-arrow'
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 32 32">
            <path
              d="M26,22a2,2,0,0,1-1.41-.59L16,12.83,7.41,21.41a2,2,0,0,1-2.82-2.82l10-10a2,2,0,0,1,2.82,0l10,10A2,2,0,0,1,26,22Z"
            />
          </svg>
        </div>
        <div className='product-info-dropdown' id='quantity'>
          1
          <svg
            id='quantity-arrow'
            className='style-arrow'
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 32 32">
            <path
              d="M26,22a2,2,0,0,1-1.41-.59L16,12.83,7.41,21.41a2,2,0,0,1-2.82-2.82l10-10a2,2,0,0,1,2.82,0l10,10A2,2,0,0,1,26,22Z"
            />
          </svg>
        </div>
      </div>

      <div id='add-to-bag-favorite-container'>
        <div className='product-info-dropdown' id='add-to-bag'>
          ADD TO BAG
          <img id='plus-sign' src='client/assets/images/product-info/plus.svg'></img>
        </div>
        <div className='product-info-dropdown' id='favorite'>
          <img id='favorite-star' src='client/assets/images/product-info/star.svg'></img>
        </div>
      </div>
      <div>
          {sizes.map((size: any) => {
            return <span>{size.quantity}{size.size}</span>
          })}
      </div>
    </div>
  );
}

export default Cart;