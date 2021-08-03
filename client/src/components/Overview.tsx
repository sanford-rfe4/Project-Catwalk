import React, { useState, useEffect } from "react";

import Modal from './reusable/Modal';
import Stars from './reusable/Stars';
import Header from './overview/Header';
import ProductInfo from './overview/ProductInfo';
import Gallery from './overview/Gallery';

const Overview = (props: any) => {

  let {selectedProduct, setProduct} = props;

  let [selectedStyle, setSelectedStyle] = useState('');
  let [selectedStyleId, setSelectedStyleId] = useState();
  let [selectedStylePhotos, setSelectedStylePhotos] = useState([]);
  let [showModal, setShowModal] = useState(false);
  let [modalDisplay, setModalDisplay] = useState("none");

  useEffect(() => {
    showModal ? setModalDisplay("block") : setModalDisplay("none");
  }, [showModal]);

  return (
    <div>
      <Header setProduct={setProduct}/>
      <div id='overview-flex'>
        <div id='gallery-flex'>
          <Gallery
            product={selectedProduct}
            selectedStyle={selectedStyle}
            styleId={selectedStyleId}
            stylePhotos={selectedStylePhotos}
          />
        </div>
        <div id='product-info-flex'>
          <ProductInfo
            product={selectedProduct}
            selectedStyle={selectedStyle}
            styleId={selectedStyleId}
            setStyle={setSelectedStyle}
            setStyleId={setSelectedStyleId}
            setStylePhotos={setSelectedStylePhotos}
          />
        </div>
      </div>
      {/* <button onClick={() => setShowModal(!showModal)}>Open Modal</button> */}
      <Modal
        title={'Question'}
        body={'Please write your question in the space below.'}
        buttonText={"close"}
        modalDisplay={modalDisplay}
        setModal={setShowModal}
        textBox={true}
        submitFunc={() => "hi"}
      />
    </div>
  );
};

export default Overview;
