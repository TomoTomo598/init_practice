let contentBox = new Array()

//querySelectors
const inputEnglish = document.querySelector('.english')
const inputJapanese = document.querySelector('.japanese')
const addButton = document.querySelector('.add-btn')
const AnsButton = document.querySelector('.ans-btn')
const questionScreen = document.querySelector('.contentBx')
const inputWords = document.querySelector('.input-words')
const inputLabels = document.querySelector('label')
const messagesP = document.querySelector('p')
//addEventListeners
addButton.addEventListener('click', addContents)
//Functions

//1. Use the addButton that input a question for box And enter for contentBox. 
function addContents() {
    //Create one question box
    const question = {
        eng: undefined,
        jap: undefined
    }
    //Enter English & Japanese for a question box
    const createAdd = ()=> {
        const English = inputEnglish.value
        const Japanese = inputJapanese.value
        if (English === "" || Japanese === "") {
            alert("please enter English and Japanese")
        } else {
            question.eng = English
            question.jap = Japanese
            contentBox.push(question)
            console.log(contentBox)
        }
    }
    createAdd()
    inputEnglish.value = ''
    inputJapanese.value = ''
    if (contentBox[4]) {
        fadeing()
        ScreenOut()
    }
}
//2. Count the questions until be more than 10.
function fadeing() {
    //Check some questions of random
    const checker = ()=> {
        if (contentBox[4]) {
            const h1 = document.getElementById('heading')
            h1.innerText = "QUESTION"
            //Output some question of random
            function screenInner() {
                if (contentBox[4]) {
                    inputEnglish.classList.add('fadeOut')
                    inputJapanese.classList.add('fadeOut')
                    inputLabels.classList.add('fadeOut')
                    messagesP.classList.add('fadeOut')
                    inputWords.classList.add('fadeIn')
                    addButton.classList.add('buttonOut')
                }
            }
            screenInner()
        }
    }
    
    // Call the functions
checker()
}

//Check the answer from 10 questions
function ScreenOut() {
    const screen = document.querySelector('h2')

    //Function which output on a Screen
    function questionOut() {
        const i = [Math.floor(Math.random() * contentBox.length)]
        const Englishs = contentBox.map(Object => Object.eng)
        const Japaneses = contentBox.map(Object => Object.jap)
        const out = [Englishs[i],Japaneses[i]]
        console.log(out[0])
        console.log(out[1])
        screen.textContent = out[0]
        questionScreen.style.backgroundColor = 'white'
        inputWords.value = ''

        //addEventListener which AnswerChecker Function
        AnsButton.addEventListener('click', AnswerCheck)
        
        function AnswerCheck() {
            if (inputWords.value === out[1]) {
                questionScreen.style.backgroundColor = 'greenYellow'
                setTimeout(questionOut, 1500)
            } else {
                questionScreen.style.backgroundColor = 'pink'
                setTimeout(questionOut, 1500)
            }
        }
    }
    questionOut()
}