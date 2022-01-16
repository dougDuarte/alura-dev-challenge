const FORM = document.querySelector('form.settings')
const INPUT_NAME = document.querySelector('.settings__info__title')
const INPUT_DESCRIPTION = document.querySelector('.settings__info__description')
const INPUT_COLOR = document.querySelector('.settings__style__color')
const INPUT_CODE = document.querySelector('.main__code')

let projects = []

FORM.addEventListener('submit', (event) => {
    event.preventDefault()
    projects = JSON.parse(sessionStorage.getItem('saved-projects')) || []

    const PROJECT = {title: INPUT_NAME.value, description: INPUT_DESCRIPTION.value, color: INPUT_COLOR.value, likes: 0, code: INPUT_CODE.textContent}

    projects.push(PROJECT)

    sessionStorage.setItem('saved-projects', JSON.stringify(projects))
})