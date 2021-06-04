'use strict';

import { QUESTIONS_DROPDOWN, SECONDS_DROPDOWN } from '../constants.js';
import startQuiz from '../listeners/startQuiz.js';
import createDOMElement from '../utils/createDOMElement.js';
import { addClass } from '../utils/manageClass.js';

const setupLandingPage = () => {
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
  

  const numberOFQuestionsContainer = createDOMElement('div');
  addClass(numberOFQuestionsContainer, 'questions_menu');
  const questionsDropdownTitle = createDOMElement('label');
  questionsDropdownTitle.setAttribute('for', QUESTIONS_DROPDOWN);
  questionsDropdownTitle.innerText = 'Select Number Of Questions: '
  const questionsDropdown = createDOMElement('select', {id: QUESTIONS_DROPDOWN});
  questionsDropdown.innerHTML = `
  <option value="5">5 Questions</option>
  <option value="7" selected>7 Questions</option>
  <option value="10">10 Questions</option>
  `;
  numberOFQuestionsContainer.appendChild(questionsDropdownTitle);
  numberOFQuestionsContainer.appendChild(questionsDropdown);
  contentContainer.appendChild(numberOFQuestionsContainer);

  const numberOFSecondsContainer = createDOMElement('div');
  addClass(numberOFSecondsContainer, 'seconds_menu');
  const secondsDropdownTitle = createDOMElement('label');
  secondsDropdownTitle.setAttribute('for', SECONDS_DROPDOWN);
  secondsDropdownTitle.innerText = 'Select Seconds: '
  const secondsDropdown = createDOMElement('select', {id: SECONDS_DROPDOWN});
  secondsDropdown.innerHTML = `
  <option value="10">10 Seconds</option>
  <option value="15" selected>15 Seconds</option>
  <option value="20">20 Seconds</option>
  `;
  numberOFSecondsContainer.appendChild(secondsDropdownTitle);
  numberOFSecondsContainer.appendChild(secondsDropdown);
  contentContainer.appendChild(numberOFSecondsContainer);

  contentContainer.appendChild(btnContainer);
  btnContainer.appendChild(startBtn);

  return mainContainer;
};

export default setupLandingPage;
