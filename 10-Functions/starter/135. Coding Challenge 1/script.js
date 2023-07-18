'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer: function () {
    const answerNumber = Number(prompt(`${this.question}\n ${this.options}`));

    if (
      typeof answerNumber === 'number' &&
      answerNumber < this.answers.length
    ) {
      this.answers[answerNumber]++;
      this.displayResults();
      this.displayResults('string');
    } else {
      alert('Sai');
    }
  },
  displayResults: function (type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Pool result is ${this.answers.join(', ')}`);
    }
  },
};

document
  .getElementById('poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [1, 2, 3, 4] });
poll.displayResults.call({ answers: [1, 2, 3, 4] }, 'string');
