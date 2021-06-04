'use strict';

import setupLandingPage from '../views/setupLandingPage.js';
import getDOMElement from '../utils/getDOMElement.js';
import clearDOMElement from '../utils/clearDOMElement.js';

const initializeLandingPage = () => {
  const userInterfaceContainer = getDOMElement('user-interface');
  clearDOMElement(userInterfaceContainer);
  userInterfaceContainer.appendChild(setupLandingPage());
};

export default initializeLandingPage;
