'use strict';

import { QUESTIONS_DROPDOWN, SECONDS_DROPDOWN } from '../constants.js';
import { quizData } from '../data.js';
import handleInitializer from '../handlers/handleInitializer.js';
import handleLeavingTab from '../handlers/handleLeavingTab.js';
import getDOMElement from '../utils/getDOMElement.js';

const startQuiz = () => {
  quizData.numberOfQuestions = getDOMElement(QUESTIONS_DROPDOWN).value;
  quizData.numberOfSeconds = getDOMElement(SECONDS_DROPDOWN).value;
  console.log(quizData.numberOfQuestions);
  handleInitializer();
  window.onblur = handleLeavingTab;
};

export default startQuiz;
