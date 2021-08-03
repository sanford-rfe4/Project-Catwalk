import React, {useEffect, useState} from 'react';
import List from './List';
import GET from '../../../../api/GET';
import Question from './Question';
import Modal from './Modal';
import POST from '../../../../api/POST';
import axios from 'axios';
import AJAX from '../../config'
import SearchQuestions from './SearchQuestions';
const addQuestion = (props: any) => {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert('submitted');
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        question:
        <input type='text' value={body} onChange={(e)=>setBody(e.target.value)} />

      </label>
      <input type='submit' value='Submit' />
    </form>
  )
}
const QuestionList2 = (props: any) => {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [current, setCurrent] = useState(4);

  // current is index of next question to be displayed
  // updateCurrent increases current to display more questions
  // List gets passed a sliced, filtered list
  const updateCurrent = (n: number) => {
    setCurrent(current + n);
  }

  useEffect(() => {
    setFilteredList(filteredList.slice(0, current));
  }, [current])
  const handleClose = () => {
    setShow(false);
  }
  useEffect(() => {
    GET.questions.getProductQuestionsById(props.product.id, 1, 50)
    .then((questions) => {setList(questions.results);
      console.log(questions.results)})
  },[props.product])

  useEffect(() => {
    setFilteredList(list);
  }, [list]);
  //add a question about product
  const headers = {
    'Authorization': `${AJAX.API_KEY}`,
    // 'Content-Type': 'application/json'
  }

  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [product_id, setProduct_id] = useState(0);
  const [email, setEmail] = useState('');

  const setFormInfo = {
    name: setName,
    body: setBody,
    product_id: setProduct_id,
    email: setEmail
  };

  useEffect(() => {
    setProduct_id(props.product.id);
  }, []);

  return (<>
    <div className='qa-container'>
      <span className='label'><h3>QUESTIONS & ANSWERS</h3></span>
      <SearchQuestions list={list}
      setFilteredList={setFilteredList} />
      <div className='ask-question' onClick={()=>setShow(true)}>ADD A QUESTION</div>
      <Modal.Ask show={show}
      close={handleClose} />
      <List list={filteredList.slice(0, current)} listItem={Question}
      // displayLength={4}
      buttonText='more questions' />
      <div className='show-and-ask'>
      {/* <div className='ask-question' onClick={()=>setShow(true)}>ADD A QUESTION</div>
      <Modal.Ask show={show}
      close={handleClose} /> */}
      </div>
      { current === filteredList.length ? null :
      <div className='ask-question show-more-questions' onClick={() => updateCurrent(2)}>MORE QUESTIONS</div>
      }
      </div>
      </>)
}

export default QuestionList2;