'use strict';
import handleAnswerReport from '../handlers/handleAnswerReport.js';
import handlePassOrFailedGIF from '../handlers/handlePassOrFailedGIF.js';
import createDOMElement from '../utils/createDOMElement.js';

//start mans

import getDOMElement from '../utils/getDOMElement.js';

import { addClass, removeClass } from '../utils/manageClass.js';

// end mans

  const createResultsDOM = (data) => {
  const resultContainer = createDOMElement('div');
  const totalScoreElement = createDOMElement('p');
  totalScoreElement.innerText = `You scored (${data.correctAnswerScore}) of (${data.numberOfQuestions})`;
  resultContainer.appendChild(totalScoreElement);
  addClass(totalScoreElement, "total-score")

  //start

  const resultGIF = createDOMElement('img')
  if(data.correctAnswerScore>=(data.numberOfQuestions/2)){
  resultGIF.src ="https://media.giphy.com/media/5bvMcdx0gZf2mdiPjf/giphy.gif"
} else {
  resultGIF.src ="https://media.giphy.com/media/JT7Td5xRqkvHQvTdEu/giphy.gif"
}
  resultContainer.appendChild(resultGIF)

  // const resultImage = document.getElementsByTagName("img")
  // let i =0;
  // if(i=0){
  //  setTimeout(resultImage.classlist.add("hidden"),500);
  // }
  //addClass(resultGIF, "hidden"
 // window.onload = setTimeout(addClass(resultGIF, "hidden"),3000);

  const userInterface = getDOMElement('user-interface');
  addClass(userInterface, "result-page")
  removeClass(userInterface, "centered")

// handlePassOrFailedGIF(resultGIF, data, userInterface);
  //end

  data.selectedQuestionsIndex.forEach((questionIndex, index) => {
    const questionContainer = createDOMElement('div');
    const userAnswer = createDOMElement('p');
    const correctAnswer = createDOMElement('p');
    const questionNum = createDOMElement('h2');
    const question = data.questions[questionIndex];
    questionNum.innerText = `Question ${index + 1}: ${question.text}`;


    //start



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
    //handleAnswerReport (questionIndex);

    
  const resultImage = document.getElementsByTagName("img")
  let i =0;
  if(i=0){
   setTimeout(resultImage.classlist.add("hidden"),500);
  }
      //end 
    
    questionContainer.appendChild(questionNum);
    questionContainer.appendChild(userAnswer);
    questionContainer.appendChild(correctAnswer);
    resultContainer.appendChild(questionContainer);

  

  });
  return resultContainer;
};
// 
export default createResultsDOM;














// 'use strict';
// import createDOMElement from '../utils/createDOMElement.js';

// const createResultsDOM = (data) => {
//   const resultContainer = createDOMElement('div');
//   const totalScoreElement = createDOMElement('p');
//   totalScoreElement.innerText = `Your score was ${data.correctAnswerScore} out of ${data.numberOfQuestions}`;
//   resultContainer.appendChild(totalScoreElement);
//   data.selectedQuestionsIndex.forEach((questionIndex, index) => {
//     const questionContainer = createDOMElement('div');
//     const userAnswer = createDOMElement('p');
//     const correctAnswer = createDOMElement('p');
//     const questionNum = createDOMElement('h2');
//     const question = data.questions[questionIndex];
//     questionNum.innerText = `Question ${index + 1}: ${question.text}`;
//     userAnswer.innerText = `Your answer was (${question.selected ? question.selected : 'No Selection'}): ${
//       question.answers[question.selected] ? question.answers[question.selected] : 'No Selection'
//     }`;
//     correctAnswer.innerText = `The correct answer is (${question.correct}): ${
//       question.answers[question.correct]
//     }`;
//     questionContainer.appendChild(questionNum);
//     questionContainer.appendChild(userAnswer);
//     questionContainer.appendChild(correctAnswer);
//     resultContainer.appendChild(questionContainer);
//   });
//   return resultContainer;
// };

// export default createResultsDOM;

