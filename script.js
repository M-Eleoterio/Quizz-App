question = document.getElementById('questionText')
topText = document.getElementById('jsQuizChal')
container = document.getElementById('container')
bottomText = document.getElementById('jsQuizText')
btnStart = document.getElementById('btnStart')

let verifier = document.createElement("p")
let crtQstn = "B) Compares two values for equality, considering data type"
let questions = `What is the function of the "===" operator?`
let alternatives = [
    "A) Compares two values for equality without considering data type",
    "B) Compares two values for equality, considering data type",
    "C) Performs a value assignment to a variable",
    "D) Evaluates the truthiness of a condition in JavaScript"
]
let actualQstn = 1

const verifyAlt = (qstn) => {
    if (qstn == crtQstn) {
        verifier.innerText = "Correct!"
        if (actualQstn == 1) {
            document.getElementById('question-1').style.backgroundColor = "green"
            document.getElementById('question-1').style.color = "white"
            setTimeout(QstnTwo, 1500)
        } else if (actualQstn == 2) {
            document.getElementById('question-0').style.backgroundColor = "green"
            document.getElementById('question-0').style.color = "white"
            setTimeout(End, 1500)
        }
        actualQstn++
    } else {
        verifier.innerText = "Incorrect... Try again."
    }
}

const QstnOne = () => {
    topText.remove();
    bottomText.remove();
    btnStart.remove();
    question.innerText = questions

    for (let i = 0; i <= 3; i++) {
        const btn = document.createElement("button")
        const br = document.createElement("br")
        br.id = `break-${i}`
        btn.className = "alternative"
        btn.id = `question-${i}`
        btn.innerText = alternatives[i]
        btn.onclick = function () {
            verifyAlt(alternatives[i])
        }
        container.appendChild(btn)
        container.appendChild(br)
    }

    verifier.innerText = ""
    container.appendChild(verifier)

}

const QstnTwo = () => {
    verifier.innerText = ""
    for (let i = 0; i <= 3; i++) {
        document.getElementById(`question-${i}`).remove()
        document.getElementById(`break-${i}`).remove()
    }
    questions = `What is the result of this expression: "console.log(1 + '2' + '2');`; // Altera a questão
    alternatives = ["122", "32", "TypeError", "5"]; // Altera a lista de alternativas
    crtQstn = "122"
    QstnOne();
}

const End = () => {
    question.innerText = "Congrats! You're a JavaScript genius!"
    verifier.innerText = ""
    for (let i = 0; i <= 3; i++) {
        document.getElementById(`question-${i}`).remove()
        document.getElementById(`break-${i}`).remove()
    }
    endText = document.createElement("p")
    endText.innerText = "This is the end of the quiz... for now. I'm still workin' in this project, so please be patient, this will be even greater! Thx! -Rvsso み"
    container.appendChild(endText)
}