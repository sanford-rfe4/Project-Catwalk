import GET from '../../../../api/GET'
import React from 'react';
import { useEffect, useState } from 'react';
import moment from 'moment';

const QuestionList = (props: any) => {

  let [selectedProduct, setSelectedProduct] = useState(props.selectedProduct);

  let [showModal, setShowModal] = useState(false);
  let [modalDisplay, setModalDisplay] = useState('none');

  const [questions, setQuestions] = useState([]);
  const [numQuestions, setNumQuestions] = useState(0);

  const fetchQuestions = async (sort: string ) => {
    let fetchedQuestions = await GET.questions.getProductQuestionsById(20000, 1, 5);
    let formatted = fetchedQuestions.results.map((question: any) => (
      <div className='question'>
        {console.log('question---------------')}
        <div style={{fontWeight: 'bold'}}>
          {'Q: ' + question.question_body}
        </div>
        <div className='answer-container'>
         { Object.values(question.answers).sort((a:any,b:any) => b.helpfulness - a.helpfulness).map((val: any) => (
           <div className='answer'>
             <b>A: </b> {val.body}
             </div>
         ))
          })
          hi
          </div>

        <div className='header'>
          {question.asker_name}, {moment(question.question_date).format('MMMM Do YYYY')}
        </div>
        </div>

    ))
    setQuestions(formatted)
    console.log(fetchedQuestions.results)

  }
  useEffect(() => {
    fetchQuestions('')

  }, [])

  return (
    <>{questions}
    </>

  )
}

export default QuestionList;