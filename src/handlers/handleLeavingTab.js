'use strict';

import { NEXT_QUESTION_BUTTON_ID } from "../constants.js";
import getDOMElement from "../utils/getDOMElement.js";
import handleCheckTheAnswer from "./handleCheckTheAnswer.js";


const handleLeavingTab = () => {
    const nextButton = getDOMElement(NEXT_QUESTION_BUTTON_ID);
    if( nextButton && nextButton.dataset.status === "checkAnswer"){
        alert('Sorry! You lost this question because you left to another page.');
        handleCheckTheAnswer(nextButton);
    }
}

export default handleLeavingTab;