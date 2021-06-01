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
      ],
    },
  ],
};
