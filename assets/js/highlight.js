const button = document.querySelector('.main__button')
const panel = document.querySelector('.main__code')
const language = document.querySelector('.settings__style__language')

var isCodeHighlighted = false

button.addEventListener('click', function() {
    if(isCodeHighlighted) {
        setHighlightOff()
    } else {
        setHighlightOn()
    }
})

language.addEventListener('change', function() {
    if(isCodeHighlighted) {
        const originalText = panel.innerText

        panel.setAttribute('class', `main__code hljs language-${language.value}`)
        panel.textContent = originalText
        
        hljs.highlightElement(panel)
    }
})

function setHighlightOn() {
    const originalText = panel.innerText

    panel.setAttribute('class', `main__code hljs language-${language.value}`)
    panel.setAttribute('contenteditable', 'false')
    panel.textContent = originalText

    button.setAttribute('class', 'main__button main-button--pattern')
    button.innerText = 'Desativar o highlight'

    hljs.highlightElement(panel)
    isCodeHighlighted = true
}

function setHighlightOff() {
    const originalText = panel.innerText

    panel.setAttribute('class', 'main__code hljs language-plaintext')
    panel.setAttribute('contenteditable', 'true')
    panel.textContent = originalText

    button.setAttribute('class', 'main__button secondary-button--pattern')
    button.innerText = 'Visualizar com o highlight'

    hljs.highlightElement(panel)
    isCodeHighlighted = false
}