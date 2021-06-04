'use strict';

import { quizData } from '../data.js';
import initializeLandingPage from '../handlers/initializeLandingPage.js';
import handleInitializer from '../handlers/handleInitializer.js';
import { addClass, removeClass } from '../utils/manageClass.js';
// import {resultGIF, userInterface} from '../views/createResultsDOM.js';

const resetTheQuiz = () => {
  quizData.currentQuestionIndex = 0;
  quizData.correctAnswerScore = 0;
  quizData.selectedQuestionsIndex = [];
  initializeLandingPage();

//start
// const resultGIF = document.getElementsByClassName("hidden")
// const userInterface = document.getElementsByClassName("result-page")

//end




  
};

export default resetTheQuiz;
