'use strict';

import createDOMElement from "../utils/createDOMElement.js";
import createNextQuestionButtonElement from './createNextQuestionButtonElement.js'
import {TIMER_ID, SCORE_ID, QUESTION_CONTAINER_ID, QUIZ_CONTAINER_ID} from '../constants.js';
import { addClass } from "../utils/manageClass.js";
import skipThisQuestion from "../listeners/skipThisQuestion.js";



const setupQuizHTML = () =>{
  const quizContainer = createDOMElement('div', { id: QUIZ_CONTAINER_ID });
  const scoreContainer = createDOMElement('div');
  const scoreText = createDOMElement('p', {id: SCORE_ID});
  scoreContainer.appendChild(scoreText);
  addClass(scoreContainer, 'questions_info_bar-score');

  const timerContainer = createDOMElement('div');
  const timerContent = createDOMElement('p');
  timerContent.innerHTML = `Time left: <span id="${TIMER_ID}"></span> seconds`;
  timerContainer.appendChild(timerContent);
  addClass(timerContainer, 'questions_info_bar-timer');

  const topBar = createDOMElement('div');
  addClass(topBar, 'questions_info_bar');
  topBar.appendChild(scoreContainer);
  topBar.appendChild(timerContainer);

  const questionContainer = createDOMElement('div', {
    id: QUESTION_CONTAINER_ID,
  });
  
  quizContainer.appendChild(topBar);
  
  quizContainer.appendChild(questionContainer);

  const nextQuestionButton = createNextQuestionButtonElement();
  quizContainer.appendChild(nextQuestionButton);

  const skipQuestion = createDOMElement('div');
  addClass(skipQuestion, 'skip_question');
  const skipText = createDOMElement('span');
  skipText.textContent = "You have an option to skip only one question: ";
  const skipButton = createDOMElement('button');
  skipButton.innerText = "Skip This Question";
  addClass(skipButton, 'btn');
  addClass(skipButton, 'skip_question-btn');
  skipButton.addEventListener('click', skipThisQuestion);
  skipQuestion.appendChild(skipText).appendChild(skipButton);
  quizContainer.appendChild(skipQuestion);
  
  return quizContainer;
}

export default setupQuizHTML;