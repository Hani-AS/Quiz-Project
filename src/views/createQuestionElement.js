'use strict';

import createDOMElement from '../utils/createDOMElement.js';
import selectAnswer from '../listeners/selectAnswer.js';
import { addClass } from '../utils/manageClass.js';

const createQuestionElement = (question, questionNumber) => {
  const container = createDOMElement('div');
  const title = createDOMElement('h1');
  title.innerText = `Q${questionNumber}: ${question.text}`;
  container.appendChild(title);

  const answersContainer = createDOMElement('ol');
  answersContainer.setAttribute('type', 'a');
  addClass(answersContainer, 'questions_list');
  addClass(answersContainer, 'hover');
  for (const answerKey in question.answers) {
    const answer = createAnswerElement(answerKey, question.answers[answerKey]);
    answersContainer.appendChild(answer);
  }

  container.appendChild(answersContainer);
  const linksContainer = createDOMElement('div');
  addClass(linksContainer, 'source_links');
  const formattedLinks = question.links.map( link => `<a href="${link.href}" target="_blank">${link.text}</a>`);
  linksContainer.innerHTML = `Sources: ${formattedLinks.join(', ')}`;
  container.appendChild(linksContainer); 
  return container;
};

const createAnswerElement = (answerKey, answerText) => {
  const answerElement = createDOMElement('li');
  answerElement.innerText = answerText;
  answerElement.dataset.answer = answerKey;
  answerElement.addEventListener('click', selectAnswer);
  return answerElement;
};

export default createQuestionElement;
