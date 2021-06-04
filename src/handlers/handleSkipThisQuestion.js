'use strict';


import { quizData } from "../data.js";
import handleNextQuestion from "./handleNextQuestion.js";



const handleSkipThisQuestion = (nextButton) => {
    
    const skippedIndex = quizData.selectedQuestionsIndex.pop();
    quizData.skippedQuestions.push(skippedIndex);
    handleNextQuestion(nextButton);
}

export default handleSkipThisQuestion;