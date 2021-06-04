'use strict';

import handleSkipThisQuestion from "../handlers/handleSkipThisQuestion.js";
import getDOMElement from "../utils/getDOMElement.js";
import { NEXT_QUESTION_BUTTON_ID } from "../constants.js";

const skipThisQuestion = (event) => {
    const nextButton = getDOMElement(NEXT_QUESTION_BUTTON_ID);
    if(nextButton.dataset.status === "checkAnswer"){
        event.currentTarget.parentNode.remove();
        handleSkipThisQuestion(nextButton);
    }
    
}

export default skipThisQuestion;