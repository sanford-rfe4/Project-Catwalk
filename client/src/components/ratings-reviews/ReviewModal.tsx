import React, {useState, useEffect} from 'react';
import POST from '../../../../api/POST';
import GET from '../../../../api/GET';
import '../../styles/reviewModal.css';

const ReviewModal = (props: any) => {
  const [rating, setRating] = useState('');
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [characteristics, setCharacteristics] = useState({});
  const [printChar, setPrintChar] = useState([]);

  useEffect(() => {
    radioChar();
  }, [props.productID])

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('productID:', props.productID);
    console.log('rating', rating);
    console.log('summary: ', summary);
    console.log('body: ', body);
    console.log('recommend: ', recommend);
    console.log('name: ', name);
    console.log('email: ', email);
    console.log('photos: ', photos);
    console.log('characteristic', characteristics);

    // POST.postAnswer(props.question_id,{
    //   body: body,
    //   name: name,
    //   email: email,
    //   photos: []
    // })

    props.handleClose();
  }


  const radioChar = async () => {
    var meta = await GET.reviews.getProductReviewMetaDataById(props.productID);
    var charID = [];
    var charObj : any = {};
    for (var key in meta.characteristics) {
      charID.push(meta.characteristics[key].id);
    }
  }

  return (
    <div className='review-modal'>
    <div className='review-wrapper'>
    <form className='review-form' onSubmit={handleSubmit}>
        <div>Rating</div>
        <div className = 'radio-rating'>
        <input type="radio" value={1} name='rating' onChange={(e) => {setRating(e.target.value)}}/>
        <input type="radio" value={2} name='rating' onChange={(e) => {setRating(e.target.value)}}/>
        <input type="radio" value={3} name='rating' onChange={(e) => {setRating(e.target.value)}}/>
        <input type="radio" value={4} name='rating' onChange={(e) => {setRating(e.target.value)}}/>
        <input type="radio" value={5} name='rating' onChange={(e) => {setRating(e.target.value)}}/>
        </div>
        <div className='description'>Review Summary</div>
        <textarea placeholder='Example: Best purchase ever!' cols={100} rows={5} value={summary} onChange={(e)=>setSummary(e.target.value)} />
        <div className='description'>Review Body</div>
        <textarea placeholder='Why did you like the product or not?' cols={100} rows={10} value={body} onChange={(e)=>setBody(e.target.value)} />
        <input type='text' placeholder='Username' value={name} onChange={(e)=> setName(e.target.value)} />
        <input type='text' placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
        <div className='rec'>Recommend product?</div>
        <div className='recommend-options'>
          <div className = 'radio-recommend'>
            <input type="radio" value='true' name='recommendation' onChange={(e) => {setRecommend(e.target.value)}}/>
            Yes
          </div>
          <div className = 'radio-recommend'>
            <input type="radio" value='false' name='recommendation' onChange={(e) => {setRecommend(e.target.value)}}/>
            No
          </div>
        </div>
        <div className ='radio-char'>
        {printChar}
        </div>
      <button onClick={() => {props.handleClose()}}>Close</button>
      <input className='submit-button' type='submit' value='Submit' />
    </form>
    </div>
    </div>
  )
}

export default ReviewModal;