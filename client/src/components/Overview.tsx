import React, { useState, useEffect } from 'react';

import Modal from './reusable/Modal';
import Stars from './reusable/Stars';

const Overview = (props: any) => {

  let [showModal, setShowModal] = useState(false);
  let [modalDisplay, setModalDisplay] = useState('none');

  useEffect(() => {
    showModal ? setModalDisplay('block') : setModalDisplay('none');
  }, [showModal]);

  return (
    <div>
      {/* <button onClick={() => setShowModal(!showModal)}>Open Modal</button> */}
      <Modal
        title={'Question'}
        body={'Please write your question in the space below.'}
        buttonText={'close'}
        modalDisplay={modalDisplay}
        setModal={setShowModal}
        textBox={true}
        submitFunc={() => 'hi'}
      />
      {/* <Stars ratingNum={3.5}/> */}
    </div>
  );
};

export default Overview;