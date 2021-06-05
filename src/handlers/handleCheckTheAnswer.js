'use strict';

import { quizData } from '../data.js';
import { addClass, removeClass } from '../utils/manageClass.js';
import handleTimer from './handleTimer.js';
import showScore from './showScore.js';

const handleCheckTheAnswer = (buttonElement) => {
  handleTimer(false);
  document
    .querySelector('.source_links')
    .setAttribute('style', 'bottom: -65px; visibility: visible;');

  if (quizData.selectedQuestionsIndex.length < quizData.numberOfQuestions) {
    buttonElement.innerText = 'Next Question';
    buttonElement.dataset.status = 'nextQuestion';
    removeClass(buttonElement, '.btn-check');
    addClass(buttonElement, 'btn-next');
  } else {
    buttonElement.innerText = 'Show results';
    buttonElement.dataset.status = 'showResults';
    removeClass(buttonElement, '.btn-check');
    addClass(buttonElement, 'btn-result');
  }

  const correctAnswer =
    quizData.questions[quizData.currentQuestionIndex].correct;
  const selectedElement = document.querySelector('.selected');

  if (selectedElement) {
    const selectedAnswer = selectedElement.dataset.answer;
    quizData.questions[quizData.currentQuestionIndex].selected = selectedAnswer;
    removeClass(selectedElement, 'selected');
    if (selectedAnswer === correctAnswer) {
      addClass(selectedElement.parentNode, 'questions_list-correct');
      quizData.correctAnswerScore++;
      showScore();
    } else {
      addClass(selectedElement, 'wrong');
    }
  } else {
    quizData.questions[quizData.currentQuestionIndex].selected = null;
  }

  const correctAnswerElement = document.querySelector(
    `[data-answer='${correctAnswer}']`
  );
  addClass(correctAnswerElement, 'correct');
  addClass(correctAnswerElement.parentElement, 'questions_list-wrong');
  removeClass(document.querySelector('.hover'), 'hover');
};

export default handleCheckTheAnswer;
