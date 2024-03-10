const questionArr = [
  'Nennen Sie 2 unterschiedliche Markenformen?',
  'Was ist eine Marke?',
  'Was schützt das Patentrecht?',
  'Was will ein Unternehmen mit einer Marke erreichen?',
  'Was wird im Musterrecht geschützt?',
  'Wie lange gilt ein Patent?',
  'Wo wird ein Patent angemeldet?',
  'Wie nennt man die wichtigste Phase im betrieblichen Leistungsprozess?',
  'Damit Betriebe ihre Produkte verkaufen können, müssen sie den Markt beobachten und sich dort auch orientieren. Wie nent man diesen Prozess im Marketing?',
  'Was ist die Grundlage für eine marktorientierte Betriebsführung?',
  'Bei der marktorientierten Betriebsfühurng benötigen die Firmen bestimmte Informationen. Welche?',
  'Wie heißen die Maßnahmen, die eine Firma ergreifen kann um ihre Produkte besser verkaufen zu können?',
  'Welchen Nutzen sollte ein Produkt dem Käufer bieten?',
  'Nenne drei Faktoren von dennen der Preis ahängt.',
  'Erkäre den Begriff "Direkter Absatz"',
  'Erkäre den Begriff "Indirekter Absatz"',
  'Bei der Kommunikationspolitik oder auch Werbung gennant gibt es den Begriff "Werbestrategien". Nenne 3.',
  'Für Werbung muss man oft viel Geld ausgeben, Firmen haben deshalb ein ...'
]
const answerArr = [
  ['Wort-, Bildmarke'],
  [
    'Ein Unternehmenskennzeichen das Waren von anderen Anbietern unterscheidet.'
  ],
  ['neue technische Erfindungen, die gewerblich anwendbar sind'],
  ['Von anderen Mitbewerbern unterscheiden'],
  ['Designs'],
  ['max. 20 Jahre'],
  ['Ö. Patentamt'],
  ['Absatz'],
  ['Marktorientierte Betriebsführung'],
  ['Marktforschung'],
  ['Marktverhältnisse, Konkurrenz, Kaufgewohnheiten, Bedarf'],
  ['Produktpolitik, Preispolitik, Distributionspolitik, Kommunikationspolitik'],
  ['Grundnutzen, Zusatznutzen'],
  ['Verhältnis Angebot und Nachfrage, Marktform, Eigene Kosten'],
  ['Verkauf - Direkt an den Kunden'],
  ['Verkauf - erfolgt über Handelsbetriebe'],
  ['Wofür wird geworben, mit Wem wird geworben, womit wird geworben'],
  ['Werbebudget']
]

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

for (let i = 0; i < answerArr.length; i++) {
  answerArr[i][0] = answerArr[i][0].toLowerCase()
}

const generateQuestion = () => {
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
  if (answerArr[currentQuestionIndex].includes(answer.toLowerCase())) {
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
