'use strict';

import { quizData } from '../data.js';
import initializeLandingPage from '../handlers/initializeLandingPage.js';
import getDOMElement from '../utils/getDOMElement.js';
import { removeClass, addClass } from '../utils/manageClass.js';

const resetTheQuiz = () => {
  quizData.currentQuestionIndex = 0;
  quizData.correctAnswerScore = 0;
  quizData.selectedQuestionsIndex = [];
  quizData.skippedQuestions = [];

  const userInterfaceContainer = getDOMElement('user-interface');
  removeClass(userInterfaceContainer, "results-container");
  addClass(userInterfaceContainer, "centered");
  addClass(userInterfaceContainer, "scrollable");
  
  initializeLandingPage();
};

export default resetTheQuiz;
