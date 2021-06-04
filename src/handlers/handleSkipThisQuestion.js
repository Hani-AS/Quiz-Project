'use strict';

import { NEXT_QUESTION_BUTTON_ID } from "../constants.js";
import { quizData } from "../data.js";
import getDOMElement from "../utils/getDOMElement.js";
import handleNextQuestion from "./handleNextQuestion.js";



const handleSkipThisQuestion = () => {
    
    const skippedIndex = quizData.selectedQuestionsIndex.pop();
    quizData.skippedQuestions.push(skippedIndex);
    const nextButton = getDOMElement(NEXT_QUESTION_BUTTON_ID);
    handleNextQuestion(nextButton);
}

export default handleSkipThisQuestion;