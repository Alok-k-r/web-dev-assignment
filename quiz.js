(function startQuiz() {
  const TIME_LIMIT = 20;

  const questions = [
    {
      question: "Which keyword is used to define a constant?",
      options: ["A) let\n", "B) static\n", "C) const\n", "D) var\n"],
      answer: "c",
      hint: "It prevents reassignment after initialization.",
    },
    {
      question: "Which symbol is used for strict equality?",
      options: ["A) ==\n", "B) =\n", "C) ===\n", "D) !==\n"],
      answer: "c",
      hint: "It compares both value and type.",
    },
    {
      question: "What does `typeof null` return?",
      options: ["A) null\n", "B) object\n", "C) undefined\n", "D) boolean\n"],
      answer: "b",
      hint: "It is a famous JavaScript quirk.",
    },
    {
      question: "What does DOM stand for?",
      options: [
        "A) Document Object Model\n",
        "B) Data Object Method\n",
        "C) Digital Order Model\n",
        "D) Document Operation Manager\n",
      ],
      answer: "a",
      hint: "It represents elements on a webpage.",
    },
    {
      question: "Which language runs in the browser?",
      options: ["A) Python\n", "B) Java\n", "C) JavaScript\n", "D) C++\n"],
      answer: "c",
      hint: "It shares its name with the most popular web scripting language.",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "A) Computer Style System\n",
        "B) Creative Style Sheet\n",
        "C) Colorful Style System\n",
        "D) Cascading Style Sheet\n",
      ],
      answer: "d",
      hint: "It describes how elements should be displayed on screen.",
    },
    {
      question: "What is the output of 2 + '2' in JavaScript?",
      options: ["A) 4\n", "B) 22\n", "C) NaN\n", "D) Error\n"],
      answer: "b",
      hint: "JavaScript performs type coercion when types mismatch.",
    },
    {
      question: "Which HTML tag is used for the largest heading?",
      options: ["A) <h6>\n", "B) <head>\n", "C) <heading>\n", "D) <h1>\n"],
      answer: "d",
      hint: "The smaller the number, the bigger the text.",
    },
    {
      question: "Which loop is used when the number of iterations is known?",
      options: ["A) for\n", "B) do-while\n", "C) while\n", "D) foreach\n"],
      answer: "a",
      hint: "You define start, condition, and increment ahead.",
    },
  ];

  let score = 0;

  alert(
    `Welcome to the JavaScript Console Quiz!
    You have ${TIME_LIMIT} seconds per question.
    Press OK to start.`
  );

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    let questionText = `
    Question ${i + 1}: ${q.question}
    \n${q.options.join("")}
    Type A, B, C, or D:
    (You have ${TIME_LIMIT} seconds)`;

    let startTime = Date.now();
    let userAnswer = prompt(questionText);
    let timeTaken = (Date.now() - startTime) / 1000;

    if (userAnswer === null) {
      alert("Quiz cancelled.");
      return;
    }

    userAnswer = userAnswer.trim().toLowerCase();

    if (timeTaken > TIME_LIMIT) {
      alert(
        `Time is up! You took ${timeTaken.toFixed(
          1
        )} seconds.\nCorrect answer: ${q.answer.toUpperCase()}`
      );
      continue;
    }

    if (userAnswer === q.answer) {
      score++;
      alert(`Correct!\nTime: ${timeTaken.toFixed(1)}s`);
    } else {
      alert(
        `Incorrect.\nHint: ${q.hint}\nCorrect answer: ${q.answer.toUpperCase()}`
      );
    }
  }

  let finalMessage = "Quiz Finished!\n";
  finalMessage += "Your Score: " + score + " / " + questions.length + "\n";

  if (score === questions.length) {
    finalMessage += "Perfect score!";
  } else if (score > questions.length / 2) {
    finalMessage += "Great job!";
  } else {
    finalMessage += "Keep practicing!";
  }

  alert(finalMessage);

  const restart = confirm("Do you want to play again?");
  if (restart) {
    startQuiz();
  } else {
    alert("Thanks for playing!");
  }
})();