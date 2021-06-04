'use strict';
import showResults from './showResults.js';
import showCurrentQuestion from './showCurrentQuestion.js';
import { quizData } from '../data.js';
import handleTimer from './handleTimer.js';
import { addClass, removeClass } from '../utils/manageClass.js';
import handleHiddenResultImage from './handleHiddenResultImage.js';

const handleNextQuestion = (buttonElement) => {
  buttonElement.innerText = 'Check The Answer';
  buttonElement.dataset.status = 'checkAnswer';
  removeClass(buttonElement, 'btn-next');
  addClass(buttonElement, 'btn-check');

  if (quizData.selectedQuestionsIndex.length < quizData.numberOfQuestions) {
    quizData.currentQuestionIndex = generateQuestionIndex();
    quizData.selectedQuestionsIndex.push(quizData.currentQuestionIndex);
    showCurrentQuestion();
    handleTimer(true);
  } else {
    showResults();
    setTimeout(handleHiddenResultImage, 2000);
  }
};

function generateQuestionIndex() {
  const index = Math.floor(Math.random() * quizData.questions.length);
  // console.log(index);
  if (quizData.selectedQuestionsIndex.includes(index)) {
    // console.log(index);
    return generateQuestionIndex();
  }
  return index;
}

export default handleNextQuestion;
