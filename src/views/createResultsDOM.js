'use strict';
import { addClass, removeClass } from '../utils/manageClass.js';
import createDOMElement from '../utils/createDOMElement.js';
import { RESULT_IMG_CONTAINER } from '../constants.js';

const createResultsDOM = (data) => {
  const resultContainer = createDOMElement('div');
  
  const totalScoreElement = createDOMElement('p');
  totalScoreElement.innerText = `You scored (${data.correctAnswerScore}) out of (${data.numberOfQuestions})`;
  resultContainer.appendChild(totalScoreElement);

  //start
  addClass(totalScoreElement, 'total-score');

  const imgContainer = createDOMElement('div', {id: RESULT_IMG_CONTAINER});
  addClass(imgContainer, 'result_img_container');
  const resultGIF = createDOMElement('img') ;
  imgContainer.appendChild(resultGIF);
  if (data.correctAnswerScore >= data.numberOfQuestions / 2) {
    resultGIF.src =
      'https://media.giphy.com/media/5hgYDDh5oqbmE4OKJ3/giphy.gif';
  } else {
    resultGIF.src =
      'https://img1.freepng.fr/20180328/kbq/kisspng-rubber-stamp-failure-clip-art-stamp-5abc0e1fa79ed1.6265747015222738236866.jpg';
  }
  resultContainer.appendChild(imgContainer);


  addClass(resultContainer, 'result-page');
  removeClass(resultContainer, 'centered');

  
  //end

  const resultReport = createDOMElement('div');
  addClass(resultReport, "show-grid");
  
  data.selectedQuestionsIndex.forEach((questionIndex, index) => {
    const questionContainer = createDOMElement('div');
    const userAnswer = createDOMElement('p');
    const correctAnswer = createDOMElement('p');
    const questionNum = createDOMElement('h2');
    const question = data.questions[questionIndex];
    questionNum.innerText = `Question ${index + 1}: ${question.text}`;


    //start

    if (question.selected === question.correct) {
      addClass(questionContainer, 'correct-answer');
      userAnswer.innerText = `Excellent, your correct answer was (${question.selected}): ${question.answers[question.selected]}`;
    } else if (question.selected === null) {
      addClass(questionContainer, 'no-answer');
      userAnswer.innerText = `You didn't answer`;
      correctAnswer.innerText = `The correct answer is (${question.correct}): ${
        question.answers[question.correct]
      }`;
    } else {
      addClass(questionContainer, 'wrong-answer');
      userAnswer.innerText = `Your wrong answer was (${question.selected}): ${question.answers[question.selected]}`;
      correctAnswer.innerText = `The correct answer is (${question.correct}): ${
        question.answers[question.correct]
      }`;
    }
   

    
    //end

    questionContainer.appendChild(questionNum);
    questionContainer.appendChild(userAnswer);
    questionContainer.appendChild(correctAnswer);
   
    resultReport.appendChild(questionContainer);
    resultContainer.appendChild(resultReport);
    
  });
  return resultContainer;
};

export default createResultsDOM;
