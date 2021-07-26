import React, { useState, useEffect } from 'react';

import Modal from './reusable/Modal';
import Stars from './reusable/Stars';

const Overview = (props: any) => {

  let [showModal, setShowModal] = useState(false);
  let [modalDisplay, setModalDisplay] = useState('none')

  useEffect(() => {
    showModal ? setModalDisplay('block') : setModalDisplay('none');
  }, [showModal]);

  return (
    <div>
      <button onClick={() => setShowModal(!showModal)}>Open Modal</button>
      <Modal
        title={'My Modal'}
        body={'This is the body of my modal. I am going to write a bunch of shit to see if it wraps properly'}
        buttonText={'close'}
        modalDisplay={modalDisplay}
        setModal={setShowModal}
        textBox={true}
      />
      <Stars ratingNum={3.5}/>
    </div>
  );
};

export default Overview;