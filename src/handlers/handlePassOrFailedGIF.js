'use strict';



const handlePassOrFailedGIF = (resultGIF, data, userInterface ) => {
    
if(data.correctAnswerScore>=(data.numberOfQuestions/2)){
resultGIF.src ="https://media.giphy.com/media/5bvMcdx0gZf2mdiPjf/giphy.gif"
} else {
resultGIF.src ="https://media.giphy.com/media/JT7Td5xRqkvHQvTdEu/giphy.gif"
}

resultContainer.appendChild(resultGIF)
window.onload = setTimeout(addClass(resultGIF, "hidden"),3000);


addClass(userInterface, "result-page")
removeClass(userInterface, "centered")
}

// export default handlePassOrFailedGIF;