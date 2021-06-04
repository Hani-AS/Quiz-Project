'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  correctAnswerScore: 0,
  numberOfQuestions: 5,
  selectedQuestionsIndex: [],
  skippedQuestions: [],
  // the questions in the quiz
  questions: [
    {
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'What does `typeof` do?',
      answers: {
        a: 'changes the type of a primitive value',
        b: 'returns a string describing the type of a value',
        c: 'determines if a value is primitive',
        d: 'can tell the difference between arrays and objects',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    // Add more questions here
    {
      text: 'The most popular programing language in 2020 is ?',
      answers: {
        a: 'javascript',
        b: 'python',
        c: 'java',
        d: 'C++',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'According to Northeastern University',
          href:
            'https://www.northeastern.edu/graduate/blog/most-popular-programming-languages/',
        },
        {
          text: 'computer.com',
          href:
            'https://www.computer.org/publications/tech-news/trends/programming-languages-you-should-learn-in-2020',
        },
      ],
    },
    {
      text: 'JavaScript was created by Brendan Eich in?',
      answers: {
        a: '1994',
        b: '1995',
        c: '1998',
        d: '1992',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Javascript History',
          href:
            'https://medium.com/@_benaston/lesson-1a-the-history-of-javascript-8c1ce3bffb17#:~:text=JavaScript%20was%20created%20by%20Brendan,his%20time%20at%20Netscape%20Communications.',
        },
        {
          text: 'Brendan Eich',
          href: 'https://en.wikipedia.org/wiki/Brendan_Eich',
        },
      ],
    },
    {
      text: 'How can we read the properties of an object?',
      answers: {
        a: 'print',
        b: 'log',
        c: 'alert',
        d: 'promt',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/js/js_object_properties.asp',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects',
        },
      ],
    },
    {
      text: 'To ask the user for input we use ?',
      answers: {
        a: 'bracket',
        b: 'index',
        c: '==',
        d: 'dot notation',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'stackabuse',
          href: 'https://stackabuse.com/getting-user-input-in-python/',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors',
        },
      ],
    },
    {
      text: 'JavaScript was originally called ?',
      answers: {
        a: 'Jave',
        b: 'Mocha',
        c: 'JSON',
        d: 'C++',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Wikipedia',
          href: 'https://en.wikipedia.org/wiki/JavaScript',
        },
        {
          text: 'Spring Board',
          href: 'https://www.springboard.com/blog/history-of-javascript/',
        },
      ],
    },
    {
      text: 'What is === operator in JavaScript ?',
      answers: {
        a: 'compare types',
        b: 'compare functions',
        c: 'compare values and types',
        d: 'compare values',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://www.javatpoint.com/javascript-operators',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators',
        },
      ],
    },
    {
      text: 'JS stands for ?',
      answers: {
        a: 'Java',
        b: 'JavaScript',
        c: 'Python',
        d: 'C++',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://www.allacronyms.com/JS',
        },
        {
          text: 'Geeks For Geeks',
          href: 'https://www.geeksforgeeks.org/js-full-form/',
        },
      ],
    },
    {
      text: 'What is an IIFE in JavaScript ?',
      answers: {
        a: 'normal function',
        b: 'Immediately Invoked Function Expression',
        c: 'IIFE does not exist in JavaScritp',
        d: 'type of classes is JavaScript',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href:
            'https://javascript.plainenglish.io/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174',
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Glossary/IIFE',
        },
      ],
    },
    {
      text: 'How do you declare a JavaScript variable?',
      answers: {
        a: 'v carName',
        b: 'var carName',
        c: 'variable carName',
        d: 'variable CARNAME',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/js/js_variables.asp',
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables',
        },
      ],
    },
    {
      text: 'What will the following code return: Boolean(10 > 9)',
      answers: {
        a: 'false',
        b: 'NaN',
        c: 'true',
        d: 'null',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean',
        },
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/js/js_datatypes.asp',
        },
      ],
    },
    {
      text: 'Which event occurs when the user clicks on an HTML element?',
      answers: {
        a: 'onmouseclick',
        b: 'mouseclickon',
        c: 'onclick',
        d: 'onchange',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events',
        },
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/js/js_events.asp',
        },
      ],
    },
    {
      text: 'How do you find the number with the highest value of x and y?',
      answers: {
        a: 'Math.ceil(x, y)',
        b: 'top(x, y)',
        c: 'ceil(x, y)',
        d: 'Math.max(x, y)',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max',
        },
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/js/js_math.asp',
        },
      ],
    },
    {
      text: 'How do you round the number 7.25, to the nearest integer?',
      answers: {
        a: 'Math.rnd(7.25)',
        b: 'Math.round(7.25)',
        c: 'rnd(7.25)',
        d: 'round(7.25)',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round',
        },
        {
          text: 'w3schools',
          href: 'https://www.w3schools.com/js/js_math.asp',
        },
      ],
    },
  ],
};











/***************************************************** */


html, body{
  padding: 0;
  margin: 0;
}

@import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');

.centered {
  /* position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  text-align: center;
  color: #abacad;
  width: 60%;
}





/********************* Start landing-page ***************************/

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(../images/background.png);
  height: 100vh;
}

.rocket-img {
  max-width: 400px;
  animation: moveInBottom 2s ease-out 0.5s;
  animation-fill-mode: both;
}

.content-container {
  border-top: 3px solid rgba(219, 83, 59, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: moveInTop 1s ease-out 0.5s;
  animation-fill-mode: both;
}

.content-container h1 {
  font-family: 'Fredericka the Great', cursive;
  max-width: 35ch;
  font-size: 26px;
  text-align: center;
  color: #abacad;
}

.btn-container {
  width: 400px;
  display: flex;
  align-self: center;
  justify-content: center;
  animation: moveInTop 1.3s ease-out 1s;
  animation-fill-mode: both;
}

/* Start-button */

.start-btn {
  position: relative;
  display: flex;
  font-family: 'Monoton', cursive;
  font-size: 36px;
  color: #e2e2e2;
  justify-content: center;
  align-items: center;
  width: 400px;
  background-color: rgba(219, 83, 59, 1);
}

.start-btn:hover {
  box-shadow: 0 0 20px 10px rgba(230, 30, 10, 0.6);
  animation: burn 1000ms ease-out forwards;
  cursor: pointer;
}

@keyframes moveInBottom {
  0% {
    visibility: hidden;
    opacity: 0;
    transform: translateY(5rem);
  }
  40% {
    opacity: 0.3;
  }
  70% {
    opacity: 0.7;
  }
  100% {
    visibility: visible;
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInTop {
  0% {
    visibility: hidden;
    opacity: 0;
    transform: translateY(-2rem);
  }
  40% {
    opacity: 0.1;
  }
  70% {
    opacity: 0.4;
  }
  100% {
    visibility: visible;
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes flare {
  100% {
    transform: translateY(-20px) scale(1.5);
    filter: blur(10px);
    opacity: 0;
  }
}

@keyframes burn {
  0% {
    color: rgba(255, 130, 110, 1);
    background: rgba(255, 230, 110, 1);
    box-shadow: 0 0 5px 0 rgba(200, 0, 10, 1), 0 0 5px 0 rgba(230, 30, 10, 0.8),
      0 0 5px 0 rgba(230, 230, 10, 0.6);
  }

  100% {
    color: rgba(0, 0, 0, 1);
    background: rgb(214, 214, 214);
    box-shadow: 0 -35px 40px 30px rgba(255, 130, 10, 0),
      0 -30px 30px 10px rgba(230, 30, 10, 0),
      0 -20px 10px 0 rgba(255, 255, 10, 0);
  }
}
/*************************** End landing page *************************************/

/**************************** start questions section ******************************/

.btn {
  font-family: 'Monoton', cursive;
  font-size: 20px;
  cursor: pointer;
  outline-color: transparent;
}
.btn:hover {
  opacity: 0.7;
  /* margin-bottom: -1px; */
}
.btn-check {
  color: #e2e2e2;
  background-color: rgba(219, 83, 59, 1);
}
.btn-next {
  color: rgba(0, 0, 0, 1);
  background: rgb(214, 214, 214);
}
.btn-result {
  color: rgb(34, 148, 49);
  background: rgb(214, 214, 214);
}

.questions_info_bar{
  display: flex;
  align-items: center;
  align-content: space-between;
}
.questions_info_bar-score, .questions_info_bar-timer{
  flex: 1;
}
#timer{
  color:red;
}
.questions_list{
  border: 1px solid #ccc;
  padding: 30px;
}
.questions_list-wrong{
  box-shadow: 0 0 25px red;
}
.questions_list-correct{
  box-shadow: 0 0 25px green;
}
.questions_list li {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  opacity: 0;
}

.hover li {
  cursor: pointer;
}
.hover li:hover {
  background-color: orange;
  color: #5f6266;
}

.selected {
  background-color: orange;
  color: #5f6266;
}

.wrong {
  background-color: red;
}
.correct {
  background-color: green;
}

/*** start of Animation ***/
.questions_list li:first-child {
  animation: answers 0.4s ease-in-out forwards;
  animation-delay: 0.4s;
}

.questions_list li:nth-of-type(2) {
  animation: answers 0.4s ease-in-out forwards;
  animation-delay: 0.8s;
}

.questions_list li:nth-of-type(3) {
  animation: answers 0.4s ease-in-out forwards;
  animation-delay: 1.2s;
}

.questions_list li:last-child {
  animation: answers 0.4s ease-in-out forwards;
  animation-delay: 1.6s;
}

@keyframes answers {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/*** end of Animation ***/


.source_links{
  position: absolute;
  bottom: -20px;
  transition: all .5s linear;
}
.source_links a{
  color: #abacad;
}
.skip_question{
  position: absolute;
  bottom: 5px;
  right: 20%;
}
.skip_question-btn{
  font-size: 13px;
  font-family: sans-serif;
}

/**************************** end questions section ******************************/



/* start results page */
.result-page{
  background-image: url(../images/background.png);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}


.result-page img{
  width: 60%;
  height: 80%;
  position: absolute;
  z-index: 2;
  opacity: .7;
  margin: auto;
  transition: 3s;
}

.result-page .hidden{
  /* opacity: 0; */
  z-index: -1;
}


.total-score{
  font-family: 'Monoton', cursive;
  color: #abacad;
  font-size: 30px;
  text-align: center;
  margin: 40px;
}

.correct-answer, .no-answer, .wrong-answer {
  margin: 20px;
  padding: 10px;
  border: 2px solid #1215eb;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.correct-answer {
  background-color: rgba(18, 243, 18, 0.5);
}

.no-answer {
  background-color: rgb(212, 196, 44, 0.5);
}

.wrong-answer {
  background-color: rgb(240, 10, 10, 0.5);
}

.correct-answer h2, .no-answer h2, .wrong-answer h2 {
  font-family: 'Monoton', cursive;
  
}

.correct-answer p, .no-answer p, .wrong-answer p {
  font-family: 'Monoton', cursive;
  font-size: 21px;
  margin: 5px;
}

.result-page button{
  font-family: 'Monoton', cursive;
  font-size: 36px;
  margin-top: 20px;
  color: #e2e2e2;
  justify-content: center;
  align-items: center;
  width: 400px;
  background-color: rgba(219, 83, 59, 1);
}

.result-page button:hover {
  box-shadow: 0 0 20px 10px rgba(230, 30, 10, 0.6);
  animation: burn 1000ms ease-out forwards;
  cursor: pointer;
}





/* end results page */

