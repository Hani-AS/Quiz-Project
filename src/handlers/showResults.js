'use strict';

import { quizData } from '../data.js';
import getDOMElement from '../utils/getDOMElement.js';
import createResultsDOM from '../views/createResultsDOM.js';
import clearDOMElement from '../utils/clearDOMElement.js';
import createResetButton from '../views/createResetButton.js';
import { RESULT_IMG_CONTAINER } from '../constants.js';
import { addClass, removeClass } from '../utils/manageClass.js';

const showResults = () => {
  const userInterface = getDOMElement('user-interface');
  clearDOMElement(userInterface);
  removeClass(userInterface, "centered");
  removeClass(userInterface, "scrollable");
  addClass(userInterface, "results-container");
  const resultContainer = createResultsDOM(quizData);
  userInterface.appendChild(resultContainer);
  const resetButton = createResetButton();
  userInterface.appendChild(resetButton);
  const resultIMG =getDOMElement(RESULT_IMG_CONTAINER);
  setTimeout(()=> addClass(resultIMG, 'hidden'), 1500);
  
};

export default showResults;
