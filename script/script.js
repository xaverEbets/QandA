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

let questionNumber = document.getElementById('questionNumber')
let questionOutput = document.getElementById('questionOutput')
let inputField = document.getElementById('inputField')
let submitButton = document.getElementById('submit')
let correctAnswerOutput = document.getElementById('correctAnswer')
let correctAnswerDiv = document.getElementById('correctAnswerDiv')
let questionDiv = document.getElementById('questionDiv')
let congratsField = document.getElementById('congratsField')
let streak = document.getElementById('streak')
let beginAgain = document.getElementById('vonVornAnfangen')
let similarity = document.getElementById('similarity')

for (let i = 0; i < answerArr.length; i++) {
  answerArr[i][0] = answerArr[i][0].toLowerCase()
}

function similarityPercentage (str1, str2) {
  const maxLength = Math.max(str1.length, str2.length)
  const distance = levenshteinDistance(str1, str2)
  const similarity = ((maxLength - distance) / maxLength) * 100
  return similarity.toFixed(2) // Runde auf zwei Dezimalstellen
}

function levenshteinDistance (str1, str2) {
  const matrix = []

  for (let i = 0; i <= str1.length; i++) {
    matrix[i] = [i]
    for (let j = 1; j <= str2.length; j++) {
      if (i === 0) {
        matrix[i][j] = j
      } else {
        const cost = str1[i - 1] === str2[j - 1] ? 0 : 1
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost
        )
      }
    }
  }

  return matrix[str1.length][str2.length]
}

const generateQuestion = () => {
  let questionLength = questionArr.length
  let answeredQuestionsLength = answeredQuestions.length

  questionNumber.innerHTML = answeredQuestionsLength + ' von ' + questionLength
  similarity.innerHTML = ''
  correctAnswerDiv.style.display = 'none'
  questionOutput.innerHTML = ''
  inputField.value = ''
  inputField.style.backgroundColor = '#903749'
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

const checkIfTrue = () => {
  let answer = inputField.value

  let similarityPercentageResult = similarityPercentage(
    answerArr[currentQuestionIndex][0],
    answer
  )

  if (similarityPercentageResult >= 65) {
    inputField.style.backgroundColor = 'green'
    answeredQuestions.push(questionArr[currentQuestionIndex])
    streakValue++
    streak.style.display = 'flex'
    streak.innerHTML = 'Streak: ' + streakValue
    similarity.innerHTML =
      Math.floor(similarityPercentageResult) + '% Übereinstimmung'
    setTimeout(generateQuestion, 0.75 * 1000)
  } else {
    inputField.style.backgroundColor = 'red'
    correctAnswerDiv.style.display = 'block'
    correctAnswerOutput.innerHTML = answerArr[currentQuestionIndex][0]
    streakValue = 0
    streak.style.display = 'none'
    similarity.innerHTML =
      Math.floor(similarityPercentageResult) + '% Übereinstimmung'
    setTimeout(generateQuestion, 2 * 1000)
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
