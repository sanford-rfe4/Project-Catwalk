import React, {useEffect, useState} from "react";
import POST from "../../../../api/POST";
import '../../styles/questions.css'
const AskAnswer: any = {
AddQuestion: (props: any) => {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('body: ', body);
    console.log('name: ', name);
    console.log('email: ', email);
    POST.postQuestion({
      body: body,
      name: name,
      email: email,
      product_id: 19090
    })
    props.close();
  }
  return (
    <form className='answer-wrapper' onSubmit={handleSubmit}>
      <label>
        question:
        <textarea value={body} onChange={(e)=>setBody(e.target.value)} />
        <input type='text' value={name} onChange={(e)=> setName(e.target.value)} />
        <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)} />
      </label>
      <input type='submit' value='Submit' />
    </form>
  )
},

AddAnswer: (props: any) => {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('body: ', body);
    console.log('name: ', name);
    console.log('email: ', email);
    POST.postAnswer(props.question_id,{
      body: body,
      name: name,
      email: email,
      photos: []
    })
    props.close();
  }
  return (
    <div className='answer-wrapper'>
    <form className='answer-form' onSubmit={handleSubmit}>

        <textarea placeholder='question' cols={100} rows={10} value={body} onChange={(e)=>setBody(e.target.value)} />
        <input type='text' placeholder='name' value={name} onChange={(e)=> setName(e.target.value)} />
        <input type='text' placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
      <input className='submit-button' type='submit' value='Submit' />
    </form>
    </div>
  )
}}

export default AskAnswer;