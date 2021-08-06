import React, { useState, useEffect } from 'react';
import POST from '../../../../api/POST';
import GET from '../../../../api/GET';
import '../../styles/reviewModal.css';

// product_id: String,
//   rating: Number,
//   summary: String,
//   body: String,
//   recommend: Boolean,
//   name: String,
//   email: String,
//   photos: String[]
//   characteristics: Object

const ReviewModal = (props: any) => {
  const [rating, setRating] = useState(0);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState<any>([]);
  const [characteristics, setCharacteristics] = useState({});
  const [printChar, setPrintChar] = useState<any>([]);

  useEffect(() => {
    radioChar();
  }, [props.productID])

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // console.log('productID:', props.productID);
    // console.log('rating', rating);
    // console.log('summary: ', summary);
    // console.log('body: ', body);
    // console.log('recommend: ', recommend);
    // console.log('name: ', name);
    // console.log('email: ', email);
    // console.log('photos: ', photos);
    // console.log('characteristic', characteristics);

    var reqBody = {
      product_id: props.productID,
      rating: rating,
      summary: summary,
      body: body,
      recommend: recommend,
      name: name,
      email: email,
      photos: photos,
      characteristics: characteristics
    }
    POST.postReview(reqBody, () => {
      console.log('post successful')
    })

    props.handleClose();
  }
  const updateChar = (e: any) => {
    console.log(characteristics);
    var newChar: any = characteristics;
    newChar[e.target.name] = parseInt(e.target.value);
    setCharacteristics({ ...newChar });
  }


  const radioChar = async () => {
    var meta = await GET.reviews.getProductReviewMetaDataById(props.productID);
    var newPrint = [];
    var charObj: any = {};
    for (var key in meta.characteristics) {
      var id = meta.characteristics[key].id;
      charObj[id] = null;
      newPrint.push(
        <div className='char-total'>
          <div className='char'>
            {key}
            <input type="radio" value={1} name={id} onChange={(e) => { updateChar(e) }} />
            <input type="radio" value={2} name={id} onChange={(e) => { updateChar(e) }} />
            <input type="radio" value={3} name={id} onChange={(e) => { updateChar(e) }} />
            <input type="radio" value={4} name={id} onChange={(e) => { updateChar(e) }} />
            <input type="radio" value={5} name={id} onChange={(e) => { updateChar(e) }} />
          </div>
          <div className='char'>
            <div>
              Value
            </div>
            <div>
              1
            </div>
            <div>
              2
            </div>
            <div>
              3
            </div>
            <div>
              4
            </div>
            <div>
              5
            </div>
          </div>
        </div>
      )
    }
    setCharacteristics({ ...charObj });
    setPrintChar([...newPrint]);
  }

  return (
    <div className='review-modal'>
      <div className='review-wrapper'>
        <form className='review-form' onSubmit={handleSubmit}>
          <div>Rating</div>
          <div className='radio-rating'>
            <input type="radio" value={1} name='rating' onChange={(e) => { setRating(parseInt(e.target.value)) }} />
            <input type="radio" value={2} name='rating' onChange={(e) => { setRating(parseInt(e.target.value)) }} />
            <input type="radio" value={3} name='rating' onChange={(e) => { setRating(parseInt(e.target.value)) }} />
            <input type="radio" value={4} name='rating' onChange={(e) => { setRating(parseInt(e.target.value)) }} />
            <input type="radio" value={5} name='rating' onChange={(e) => { setRating(parseInt(e.target.value)) }} />
          </div>
          <div className='radio-rating'>
            <div className='radio-rating-value'>
              1
            </div>
            <div className='radio-rating-value'>
              2
            </div>
            <div className='radio-rating-value'>
              3
            </div>
            <div className='radio-rating-value'>
              4
            </div>
            <div className='radio-rating-value'>
              5
            </div>
          </div>
          <div className='description'>Review Summary</div>
          <textarea placeholder='Example: Best purchase ever!' cols={100} rows={5} value={summary} onChange={(e) => setSummary(e.target.value)} />
          <div className='description'>Review Body</div>
          <textarea placeholder='Why did you like the product or not?' cols={100} rows={10} value={body} onChange={(e) => setBody(e.target.value)} />
          <input type='text' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} />
          <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <div className='rec'>Would you recommend this product?</div>
          <div className='recommend-options'>
            <div className='radio-recommend'>
              <input type="radio" value='true' name='recommendation' onChange={(e) => { setRecommend(true) }} />
              Yes
            </div>
            <div className='radio-recommend'>
              <input type="radio" value='false' name='recommendation' onChange={(e) => { setRecommend(false) }} />
              No
            </div>
          </div>
          <div>
            Characteristic Ratings
          </div>
          <div className='radio-char'>
            {printChar}
          </div>
          <div className='end-options'>
            <button onClick={() => { props.handleClose() }}>Close</button>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReviewModal;