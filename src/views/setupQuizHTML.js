'use strict';

import createDOMElement from "../utils/createDOMElement.js";
import createNextQuestionButtonElement from './createNextQuestionButtonElement.js'
import {TIMER_ID, SCORE_ID, QUESTION_CONTAINER_ID, QUIZ_CONTAINER_ID} from '../constants.js';
import { addClass } from "../utils/manageClass.js";



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
  return quizContainer;
}

export default setupQuizHTML;