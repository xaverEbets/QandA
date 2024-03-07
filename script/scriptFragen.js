const questionArr = [
  'Wieviel Einwohner hat Österreich?',
  'Wie heißt Österreichs Bundespräsident?',
  'Wieviel Bundesländer hat Österreich?',
  'Welche Farbe hat Milch?',
  'Wer ist dumm?',
  'Was ist Gelb?',
  'Was ist Grün'
]
const answerArr = [
  ['8 Millionen'],
  ['Alexander Van der Bellen'],
  ['9'],
  ['Weiß'],
  ['Du'],
  ['Gelb'],
  ['Grün']
]

let output = document.getElementById('fragenOutput')

for (i = 0; i < questionArr.length; i++) {
  const newDiv = document.createElement('div')
  let question = document.createTextNode(questionArr[i])
  let answer = document.createTextNode(answerArr[i][0])
  let br = document.createElement('br')
  newDiv.appendChild(question)
  newDiv.appendChild(br)
  newDiv.appendChild(answer)

  output.appendChild(newDiv)
  newDiv.classList.add('outputDiv')
}
