'use strict';

import handleInitializer from '../handlers/handleInitializer.js';
import handleLeavingTab from '../handlers/handleLeavingTab.js';

const startQuiz = () => {
  handleInitializer();
  window.onblur = handleLeavingTab;
};

export default startQuiz;
