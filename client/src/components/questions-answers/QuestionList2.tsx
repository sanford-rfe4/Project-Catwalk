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
  const handleClose = () => {
    setShow(false);
  }
  useEffect(() => {
    GET.questions.getProductQuestionsById(19090, 1, 50)
    .then((questions) => {setList(questions.results);
      console.log(questions.results)})
  },[])

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
    setProduct_id(19090);
  }, []);

  return (<>
      <SearchQuestions list={list}
      setList={setList} />
      <List list={list} listItem={Question}
      displayLength={4}
      buttonText='more questions' />
      <button onClick={()=>setShow(true)}>ADD A QUESTION</button>
      <Modal.Ask show={show}
      close={handleClose} />
      </>)
}

export default QuestionList2;