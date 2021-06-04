'use strict';

import { NEXT_QUESTION_BUTTON_ID, TIMER_ID } from "../constants.js";
import { quizData } from "../data.js";
import getDOMElement from "../utils/getDOMElement.js";
import handleCheckTheAnswer from "./handleCheckTheAnswer.js";

let timerInterval = null;
const handleTimer = (startTimer) => {
    
    
    clearInterval(timerInterval);
    if(startTimer === true){
        const timerContainer = getDOMElement(TIMER_ID);
        let counter = quizData.numberOfSeconds;
        timerContainer.innerText = counter;
        timerInterval = setInterval(function(){
            counter--;
            timerContainer.innerText = counter;
            
            if (counter == 0){
                clearInterval(timerInterval);
                handleCheckTheAnswer(getDOMElement(NEXT_QUESTION_BUTTON_ID));
            }
        }, 1000);
    }
    
    
}

export default handleTimer;