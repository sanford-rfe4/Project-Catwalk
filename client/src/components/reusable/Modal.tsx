import React, { useEffect, useState } from 'react';
import '../../styles/modal.css'

interface modal {
  title: string,
  body: string,
  buttonText: string,
  modalDisplay: any,
  setModal: any,
  textBox: boolean,
  submitFunc: Function
}

const Modal = (props: modal) => {
  let {title, body, buttonText, modalDisplay, setModal, textBox, submitFunc} = props;

  let [display, setDisplay] = useState(modalDisplay);
  let [input, setInput] = useState('');

  let modalStyle = {
    display: display
  }

  useEffect(() => {
    setDisplay(modalDisplay)
  }, [modalDisplay])

  const onClose = () => {
    setDisplay('none');
    setModal(false);
    setInput('');
  }

  const onSubmit = () => {
    setDisplay('none');
    setModal(false);
    setInput('');
    submitFunc();
    alert('Thank you!');
  }

  const onTextChange = (e: any) => {
    setInput(e.target.value);
    console.log(input);
  }

  return (
    <div style={modalStyle} className="modal">
      <div className="modal-content">
        <div className="modal-title">{title}</div>
        <hr></hr>
        <div className="modal-body">{body}</div>
        {textBox ?
        <textarea
          className="modal-input"
          style={{resize: 'none'}}
          cols={20}
          rows={5}
          value={input}
          onChange={onTextChange}>
        </textarea> :
        ''}
        <hr></hr>
        <div className="modal-footer">
          <button onClick={onClose} className="modal-button">{buttonText}</button>
          {textBox ? <button className="modal-button" onClick={onSubmit}>submit</button> : ''}
        </div>
      </div>
    </div>
  );
};

export default Modal;