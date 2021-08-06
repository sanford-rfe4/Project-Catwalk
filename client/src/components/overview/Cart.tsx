import React, { useState, useEffect } from 'react';
import { reduceEachLeadingCommentRange } from 'typescript';
import POST from '../../../../api/POST';
import '../../styles/cart.css';

const Cart = (props: any) => {

  let {styleId, styles, selectedStyle, setCurrentStyle} = props;

  let [sizes, setSizes] = useState<object[]>([]);
  let [selectedSize, setSelectedSize] = useState('SELECT SIZE');
  let [selectedQuantity, setSelectedQuantity] = useState<any>(0);
  let [selectedSkuId, setSelectedSkuId] = useState<any>('');
  let [skuIdsAndSize, setSkuIdsAndSize] = useState<object[]>([])
  let [quantityList, setQuantityList] = useState<number[]>([]);
  let [sizeOpen, setSizeOpen] = useState(false);
  let [quantityOpen, setQuantityOpen] = useState(false);
  let [isQuantitySelected, setIsQuantitySelected] = useState(false);

  let [messageDisplay, setMessageDisplay] = useState('none');

  let quantityListStyle = {
    display: quantityOpen ? 'flex' : 'none'
  }

  let sizeListStyle = {
    display: sizeOpen ? 'flex' : 'none'
  }

  let selectSizeMessageStyle = {
    color: 'red',
    display: messageDisplay
  }

  const displayMessage = () => {
    setMessageDisplay('block');
    setSizeOpen(true);
  }

  const hideMessage = () => {
    setMessageDisplay('none');
  }

  const findCurrentStyleAndSizes = async () => {
    let styleObj: any = styles.find((style: any) => {
      return style.style_id === styleId
    });

    let skuIds = Object.keys(styleObj?.skus);
    let sizesArr = [];
    let skuIdAndSizeArr = [];

    for (let i = 0; i < skuIds.length; i++) {
      sizesArr.push(styleObj.skus[skuIds[i]]);
      skuIdAndSizeArr.push({
        sku_id: skuIds[i],
        size: styleObj.skus[skuIds[i]].size
      });
    }
    setSkuIdsAndSize(skuIdAndSizeArr);
    setSizes(sizesArr);
    setCurrentStyle(styleObj);
  }

  const findCurrentSkuId = () => {
    let current: any = skuIdsAndSize.find((sizeId: any) => {
      return sizeId.size === selectedSize
    });
    console.log(current);
    setSelectedSkuId(current?.sku_id);
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

  const addToBag = () => {
    POST.addToCart({
      sku_id: selectedSkuId
    }, () => {alert('added to cart')})
    return;
  }

  useEffect(() => {
    if (styleId) {
      findCurrentStyleAndSizes();
    }
  }, [styleId])

  useEffect(() => {
    if (selectedSize !== 'SELECT SIZE' && selectedSize !== undefined) {
      findQuantity();
      findCurrentSkuId();
    }
  }, [selectedSize])
  console.log(selectedSkuId);
  useEffect(() => {
    if (styles) {
      setSelectedQuantity(1);
      setSelectedSize('SELECT SIZE');
      setQuantityList([]);
    }
  }, [styles, selectedStyle])

  return (
    <div id='dropdown-container'>
      <div style={selectSizeMessageStyle} id='select-size-message'>
        please select a size
      </div>
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
                hideMessage();
              }}
              className='size-item'>{size.size}</span>
            })}
          </div>
        </div>

          <div
            onClick={() => {
              selectedSize === 'SELECT SIZE' ? setQuantityOpen(false) : setQuantityOpen(!quantityOpen);
              setSizeOpen(false);
            }}
            onMouseLeave={() => setQuantityOpen(false)}
            className='product-info-dropdown'
            id='quantity'>
            <div id='quantity-header'>
              {selectedSize === 'SELECT SIZE' ? '-' : selectedQuantity}
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

      {console.log()}
      <div id='add-to-bag-favorite-container'>
        <div onClick={selectedSize !== 'SELECT SIZE' ? addToBag : displayMessage} className='product-info-dropdown' id='add-to-bag'>
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