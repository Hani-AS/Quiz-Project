'use strict';
import showResults from './showResults.js';
import showCurrentQuestion from './showCurrentQuestion.js';
import { quizData } from '../data.js';
import handleTimer from './handleTimer.js';
import { addClass, removeClass } from '../utils/manageClass.js';
import getDOMElement from '../utils/getDOMElement.js';
import { CORRECT_INCORRECT_ICON } from '../constants.js';


const handleNextQuestion = (buttonElement) => {
  buttonElement.innerText = 'Check The Answer';
  buttonElement.dataset.status = 'checkAnswer';
  removeClass(buttonElement, 'btn-next')
  addClass(buttonElement, 'btn-check')
  const correctIncorrectIcon = getDOMElement(CORRECT_INCORRECT_ICON);
  removeClass(correctIncorrectIcon, 'correct_incorrect_icon');
  removeClass(correctIncorrectIcon, 'correct_icon');
  // console.log(quizData.selectedQuestionsIndex.length);
  if (quizData.selectedQuestionsIndex.length < quizData.numberOfQuestions) {
    quizData.currentQuestionIndex = generateQuestionIndex();
    quizData.selectedQuestionsIndex.push(quizData.currentQuestionIndex);
    showCurrentQuestion();
    handleTimer(true);
  } else {
    showResults();
  }
  
  console.log(quizData.selectedQuestionsIndex);

};

function generateQuestionIndex(){
  const index = Math.floor(Math.random() * quizData.questions.length);
  // console.log(index);
  if( quizData.selectedQuestionsIndex.includes(index) || quizData.skippedQuestions.includes(index)){
    // console.log(index);
    return generateQuestionIndex();
  }
    return index;
  
}

export default handleNextQuestion;
