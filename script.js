const questionArr = [
  'Wieviel Einwohner hat Österreich?',
  'Wie heißt Österreichs Bundespräsident?',
  'Wieviel Bundesländer hat Österreich?'
]
const answerArr = [['8 Millionen'], ['Alexander Van der Bellen'], ['9']]
let answeredQuestions = []
let currentQuestionIndex
let streakValue = 0
let questionOutput = document.getElementById('questionOutput')
let inputField = document.getElementById('inputField')
let submitButton = document.getElementById('submit')
let addToAnswerButton = document.getElementById('addToAnswer')
let correctAnswerOutput = document.getElementById('correctAnswer')
let correctAnswerDiv = document.getElementById('correctAnswerDiv')
let questionDiv = document.getElementById('questionDiv')
let congratsField = document.getElementById('congratsField')
let streak = document.getElementById('streak')
let beginAgain = document.getElementById('vonVornAnfangen')
addToAnswerButton.style.display = 'none'
const generateQuestion = () => {
  console.log('yo')
  correctAnswerDiv.style.display = 'none'
  addToAnswerButton.style.display = 'none'
  questionOutput.innerHTML = ''
  inputField.value = ''
  inputField.style.backgroundColor = '#903749'
  let questionLength = questionArr.length
  let randomIndex
  if (questionArr.length !== answeredQuestions.length) {
    do {
      randomIndex = Math.floor(Math.random() * questionLength)
    } while (answeredQuestions.includes(questionArr[randomIndex]))
    currentQuestionIndex = randomIndex
    questionOutput.innerHTML = questionArr[currentQuestionIndex]
  } else {
    questionDiv.style.display = 'none'
    questionOutput.style.display = 'none'
    inputField.style.display = 'none'
    submitButton.style.display = 'none'
    streak.style.display = 'none'
    congratsField.style.display = 'flex'
  }
}
const addToAnswer = () => {
  let input = inputField.value
  answerArr[currentQuestionIndex].push(input)
  console.log(answerArr)
  setTimeout(generateQuestion, 0.2 * 1000)
}
const checkIfTrue = () => {
  let answer = inputField.value
  if (answerArr[currentQuestionIndex].includes(answer)) {
    inputField.style.backgroundColor = 'green'
    answeredQuestions.push(questionArr[currentQuestionIndex])
    streakValue++
    streak.style.display = 'flex'
    streak.innerHTML = 'Streak: ' + streakValue
    setTimeout(generateQuestion, 0.75 * 1000)
  } else {
    inputField.style.backgroundColor = 'red'
    addToAnswerButton.style.display = 'flex'
    addToAnswerButton.addEventListener('click', addToAnswer)
    correctAnswerDiv.style.display = 'block'
    correctAnswerOutput.innerHTML = answerArr[currentQuestionIndex][0]
    streakValue = 0
    streak.style.display = 'none'
  }
}
const startAgain = () => {
  congratsField.style.display = 'none'
  questionDiv.style.display = 'flex'
  questionOutput.style.display = 'flex'
  inputField.style.display = 'flex'
  submitButton.style.display = 'flex'
  answeredQuestions = []
  generateQuestion()
}
document.addEventListener('DOMContentLoaded', generateQuestion)
submitButton.addEventListener('click', checkIfTrue)
beginAgain.addEventListener('click', startAgain)
