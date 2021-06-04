'use strict';

import setupLandingPAge from '../views/setupLandingPage.js';
import getDOMElement from '../utils/getDOMElement.js';
import clearDOMElement from '../utils/clearDOMElement.js';
import { addClass, removeClass } from '../utils/manageClass.js';

const initializeLandingPage = () => {
  const userInterfaceContainer = getDOMElement('user-interface');
  clearDOMElement(userInterfaceContainer);
  ['result-page', 'scrollable'].forEach((cl) =>
    removeClass(userInterfaceContainer, cl)
  );
  addClass(userInterfaceContainer, 'centered');
  userInterfaceContainer.appendChild(setupLandingPAge());
};

export default initializeLandingPage;
