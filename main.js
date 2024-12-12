const gQuiestions = [
    { id: 101, options: ['cat', 'cow'], correcOptIndex: 1 },
    { id: 102, options: ['dog tail', 'shark tail'], correcOptIndex: 1 },
    { id: 103, options: ['bunny', 'squirl'], correcOptIndex: 0 },
    // { id: 104, options: [], correcOptIndex: 0 }
]

let gCurrQuestIdx

OnInitGame()
// renderQuestion()


function OnInitGame() {
    gCurrQuestIdx = 0
    renderQuestion()
}

function renderQuestion() {
    let imgId = gQuiestions[gCurrQuestIdx].id
    let imagePath = `images/${imgId}.jpeg`
    console.log('image: ', imagePath)

    const image = document.querySelector('.image')
    let btn1 = document.querySelector('.btn')
    let btn2 = document.querySelector('.btn2')

    image.setAttribute("src", `${imagePath}`)
    console.log(imgId)
    btn1.innerText = gQuiestions[gCurrQuestIdx].options[0]
    btn2.innerText = gQuiestions[gCurrQuestIdx].options[1]


}
function onBtnClick(elBtn) {
    let optIdx = gQuiestions[gCurrQuestIdx].options.indexOf(elBtn.innerText)
    checkAnswer(optIdx)
}

function checkAnswer(optIdx) {
    let answer = gQuiestions[gCurrQuestIdx]

    if (optIdx === answer.correcOptIndex) gCurrQuestIdx++

    if (gCurrQuestIdx === gQuiestions.length) showVicrtoryModal()

    else renderQuestion()
}
function showVicrtoryModal() {
    const dialog = document.querySelector('#victory')
    dialog.showModal()

    const closeButton = dialog.querySelector('.close-dialog')
    closeButton.addEventListener('click', () => {
        dialog.close()
        OnInitGame()
        // renderQuestion()
    })
}