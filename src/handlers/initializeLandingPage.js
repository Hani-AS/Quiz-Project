'use strict';

import setupLandingPage from '../views/setupLandingPage.js';
import getDOMElement from '../utils/getDOMElement.js';
import clearDOMElement from '../utils/clearDOMElement.js';
import { quizData } from '../data.js';

const initializeLandingPage = () => {
  const userInterfaceContainer = getDOMElement('user-interface');
  clearDOMElement(userInterfaceContainer);
  userInterfaceContainer.appendChild(setupLandingPage(quizData.numberOfQuestions, quizData.numberOfSeconds));
};

export default initializeLandingPage;
