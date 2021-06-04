'use strict';

import handleSkipThisQuestion from "../handlers/handleSkipThisQuestion.js";


const skipThisQuestion = (event) => {
    event.currentTarget.parentNode.remove();
    handleSkipThisQuestion()
}

export default skipThisQuestion;