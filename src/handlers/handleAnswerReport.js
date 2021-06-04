'use strict';
import { quizData } from '../data.js';
import { addClass, removeClass } from '../utils/manageClass.js';




const handleAnswerReport = (question) => {
    const questionContainer = document.getElementsByClassName("")

    if(question.selected === question.correct){
          addClass(questionContainer, "correct-answer")
          userAnswer.innerText = `Excellent, your correct answer was (${question.selected ? question.selected : 'No Selection'}): ${
           question.answers[question.selected] ? question.answers[question.selected] : 'No Selection'
         }`;
             } else if (question.selected === null){
               addClass(questionContainer, "no-answer")
               userAnswer.innerText = `You didn't answer`
                correctAnswer.innerText = `The correct answer is (${question.correct}): ${
                  question.answers[question.correct]
                }`;
              } else {
               addClass(questionContainer, "wrong-answer")
               userAnswer.innerText = `Your wrong answer was (${question.selected ? question.selected : 'No Selection'}): ${
                question.answers[question.selected] ? question.answers[question.selected] : 'No Selection'
              }`;
               correctAnswer.innerText = `The correct answer is (${question.correct}): ${
                question.answers[question.correct]
              }`;
             }
}

// export default handleAnswerReport;
