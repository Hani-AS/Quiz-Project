'use strict';
import resetTheQuiz from '../listeners/resetTheQuiz.js';
import createDOMElement from '../utils/createDOMElement.js';
import { addClass } from '../utils/manageClass.js';

const createResetButton = () => {
  const resetButton = createDOMElement('button');
  addClass(resetButton, 'reset-button');
  resetButton.addEventListener('click', resetTheQuiz);
  resetButton.innerText = 'Reset the quiz';
  return resetButton;
};

export default createResetButton;
