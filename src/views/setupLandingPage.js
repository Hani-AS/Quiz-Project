'use strict';

import { QUESTIONS_DROPDOWN, SECONDS_DROPDOWN } from '../constants.js';
import startQuiz from '../listeners/startQuiz.js';
import createDOMElement from '../utils/createDOMElement.js';
import { addClass } from '../utils/manageClass.js';

const setupLandingPage = (questionsNO, secondsNO) => {
  const mainContainer = createDOMElement('div');
  mainContainer.className = 'main-container';
  const imgContainer = createDOMElement('div');
  imgContainer.className = 'img-container';
  const img = createDOMElement('img');
  Object.assign(img, {
    className: 'rocket-img',
    src: 'images/rocket.png',
    alt: 'rocket-img',
  });
  const contentContainer = createDOMElement('div');
  contentContainer.className = 'content-container';
  const heading = createDOMElement('h1');
  heading.innerText =
    'Discover your javascript skills in just view questions and get awesome insights on how to improve.';

  const btnContainer = createDOMElement('div');
  btnContainer.className = 'btn-container';

  const startBtn = createDOMElement('button');
  Object.assign(startBtn, {
    className: 'start-btn',
    innerText: 'Start Quiz',
  });
  startBtn.addEventListener('click', startQuiz),
    mainContainer.appendChild(imgContainer);
  mainContainer.appendChild(contentContainer);
  imgContainer.appendChild(img);
  contentContainer.appendChild(heading);

  // creating the dropdown menu's
  const dropdownHeading = createDOMElement('p');
  dropdownHeading.innerText = 'Choose difficulty';
  const numberOFQuestionsContainer = createDOMElement('div');
  addClass(numberOFQuestionsContainer, 'questions_menu');
  const questionsDropdown = createDOMElement('select', {
    id: QUESTIONS_DROPDOWN,
  });
  questionsDropdown.innerHTML = `
  <option value="5" ${questionsNO == 5 ? 'selected' : ''}>5 Questions</option>
  <option value="7" ${questionsNO == 7 ? 'selected' : ''}>7 Questions</option>
  <option value="10" ${
    questionsNO == 10 ? 'selected' : ''
  }>10 Questions</option>
  `;
  contentContainer.appendChild(dropdownHeading);
  numberOFQuestionsContainer.appendChild(questionsDropdown);
  contentContainer.appendChild(numberOFQuestionsContainer);

  const numberOFSecondsContainer = createDOMElement('div');
  addClass(numberOFSecondsContainer, 'seconds_menu');
  const secondsDropdown = createDOMElement('select', { id: SECONDS_DROPDOWN });
  secondsDropdown.innerHTML = `
  <option value="10" ${secondsNO == 10 ? 'selected' : ''}>10 Seconds</option>
  <option value="15" ${secondsNO == 15 ? 'selected' : ''}>15 Seconds</option>
  <option value="20" ${secondsNO == 20 ? 'selected' : ''}>20 Seconds</option>
  `;
  // numberOFSecondsContainer.appendChild(secondsDropdownTitle);
  numberOFSecondsContainer.appendChild(secondsDropdown);
  contentContainer.appendChild(numberOFSecondsContainer);

  contentContainer.appendChild(btnContainer);
  btnContainer.appendChild(startBtn);

  return mainContainer;
};

export default setupLandingPage;
