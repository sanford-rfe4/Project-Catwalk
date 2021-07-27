import React from 'react';
import { useState, useEffect } from 'react';
import GET from '../../../api/GET';
const Questions = (props: any) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    GET.questions.getProductQuestionsById(props.productId)
    .then(data => {
      setQuestions(data.results)
      console.log(data.results)});
  }, []);

  return (
    <div className='question-container'>
      { questions.map((question: any, idx) => {
        for (let k in question.answers) {
          console.log(question.answers[k])
        }
        return (
        <>
        <div className='question' key={question.question_id}>
        <p><em>Q: </em> {question.question_body}</p>
        <div className='answers'>
          {Object.values(question.answers).map((answer: any) => {
            return <div className='answer'>
              <p><em>A: </em> {answer.body}</p>
              </div>
          })}
        </div>
          </div>


        </>
        )
      })}
    </div>
  );
};

export default Questions;