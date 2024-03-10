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

let output = document.getElementById('fragenOutput')

for (i = 0; i < questionArr.length; i++) {
  const newDiv = document.createElement('div')
  let question = document.createElement('p')
  question.innerHTML = questionArr[i]
  let answer = document.createElement('p')
  answer.innerHTML = answerArr[i][0]
  newDiv.appendChild(question)
  newDiv.appendChild(answer)

  output.appendChild(newDiv)
  newDiv.classList.add('outputDiv')
  question.classList.add('question')
}
