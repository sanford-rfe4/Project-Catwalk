import React, { useState, useEffect } from 'react';
import '../../styles/cart.css';

const Cart = (props: any) => {

  let {styleId, styles, selectedStyle, setCurrentStyle} = props;

  let [sizes, setSizes] = useState<object[]>([]);
  let [selectedSize, setSelectedSize] = useState('SELECT SIZE');
  let [selectedQuantity, setSelectedQuantity] = useState<any>(0);
  let [quantityList, setQuantityList] = useState<number[]>([]);
  let [sizeOpen, setSizeOpen] = useState(false);
  let [quantityOpen, setQuantityOpen] = useState(false);
  let [isQuantitySelected, setIsQuantitySelected] = useState(false);

  let quantityListStyle = {
    display: quantityOpen ? 'flex' : 'none'
  }

  let sizeListStyle = {
    display: sizeOpen ? 'flex' : 'none'
  }

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

  const findQuantity = () => {
    const currentSize: any = sizes.find((size: any) => {
      return size.size === selectedSize;
    })
      let sizesArr = [];
      for (let i = 0; i < currentSize.quantity; i++) {
        sizesArr.push(i);
      }
      setQuantityList(sizesArr.slice(0, 15));
  }

  useEffect(() => {
    if (styleId) {
      findCurrentStyleAndSizes();
    }
  }, [styleId])

  useEffect(() => {
    if (selectedSize !== 'SELECT SIZE' && selectedSize !== undefined) {
      findQuantity();
    }
  }, [selectedSize])

  useEffect(() => {
    if (styles) {
      setSelectedQuantity(1);
      setSelectedSize('SELECT SIZE');
      setQuantityList([]);
    }
  }, [styles, selectedStyle])

  return (
    <div id='dropdown-container'>
      <div id='size-quantity-container'>
        <div
          onClick={() => {
            setSizeOpen(!sizeOpen);
            setQuantityOpen(false);
          }}
          onMouseLeave={() => setSizeOpen(false)}
          className='product-info-dropdown'
          id='select-style'>
          <div id='select-style-header'>
            {selectedSize}
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
          <div
            onMouseLeave={() => setSizeOpen(false)}
            style={sizeListStyle}
            id='select-style-list'>
            {sizes.map((size: any) => {
              return <span
              onClick={(e: any) => {
                setSelectedSize(e.target.innerText);
                setSelectedQuantity(1);
              }}
              className='size-item'>{size.size}</span>
            })}
          </div>
        </div>

          <div
            onClick={() => {
              setQuantityOpen(!quantityOpen);
              setSizeOpen(false);
            }}
            onMouseLeave={() => setQuantityOpen(false)}
            className='product-info-dropdown'
            id='quantity'>
            <div id='quantity-header'>
              {isQuantitySelected ? selectedQuantity : 1}
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
            <div
              onMouseLeave={() => setQuantityOpen(false)}
              style={quantityListStyle}
              id='quantity-list'>
              {quantityList.map((num: any) => {
                return <span onClick={(e: any) => {
                  setIsQuantitySelected(true);
                  setSelectedQuantity(e.target.innerText)
                }} className='size-item'>{num + 1}</span>
              })}
            </div>
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

      </div>
    </div>
  );
}

export default Cart;