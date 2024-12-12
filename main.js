const gQuiestions = [
    { id: 101, options: ['cat', 'cow'], correcOptIndex: 1 },
    { id: 102, options: [], correcOptIndex: 0 },
    { id: 103, options: [], correcOptIndex: 0 },
    { id: 104, options: [], correcOptIndex: 0 }
]

var gCurrQuestIdx

OnInitGame()
renderQuestion()

function OnInitGame() {
    gCurrQuestIdx = 0
}

function renderQuestion() {
    let imgId = gQuiestions[gCurrQuestIdx].id
    console.log(imgId)
    let image = document.querySelector('.image')
    let btn1 = document.querySelector('.btn')
    let btn2 = document.querySelector('.btn2')

    image.setAttribute('src', `images/${imgId}`)
    btn1.innerText = gQuiestions[gCurrQuestIdx].options[0]
    btn2.innerText = gQuiestions[gCurrQuestIdx].options[1]


}
function onBtnClick(elBtn){
    let optIdx = gQuiestions[gCurrQuestIdx].options.indexOf(elBtn.innerText)
    checkAnswer(optIdx)
}

function checkAnswer(optIdx) {
    let answer = gQuiestions[gCurrQuestIdx]

    if (optIdx === answer.correcOptIndex) {
        gCurrQuestIdx++
    }
}