import React, {useState} from 'react';
import POST from '../../../../api/POST';
import '../../styles/reviewModal.css';

const ReviewModal = (props: any) => {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('body: ', body);
    console.log('name: ', name);
    console.log('email: ', email);
    // POST.postAnswer(props.question_id,{
    //   body: body,
    //   name: name,
    //   email: email,
    //   photos: []
    // })
    props.handleClose();
  }
  const printChar = () => {
    return (
      <div>
      </div>
    )
  }
  return (
    <div className='review-modal'>
    <div className='review-wrapper'>
    <form className='review-form' onSubmit={handleSubmit}>
        <div className='description'>Review Summary</div>
        <textarea placeholder='Example: Best purchase ever!' cols={100} rows={5} value={body} onChange={(e)=>setBody(e.target.value)} />
        <div className='description'>Review Body</div>
        <textarea placeholder='Why did you like the product or not?' cols={100} rows={10} value={body} onChange={(e)=>setBody(e.target.value)} />
        <input type='text' placeholder='Username' value={name} onChange={(e)=> setName(e.target.value)} />
        <input type='text' placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
        <div className='rec'>Recommend product?</div>
        <div className='recommend-options'>
        <div className = 'radio-recommend'>
        <input type="radio" value='true' name='recommendation'/>
        Yes
        </div>
        <div className = 'radio-recommend'>
        <input type="radio" value='false' name='recommendation'/>
        No
        </div>
        </div>
      <button onClick={() => {props.handleClose()}}>Close</button>
      <input className='submit-button' type='submit' value='Submit' />
    </form>
    </div>
    </div>
  )
}

export default ReviewModal;