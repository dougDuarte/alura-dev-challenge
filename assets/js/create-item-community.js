const CONTAINER = document.querySelector('section.projects-container')

const showProjects = () => {
    const projects = JSON.parse(sessionStorage.getItem('saved-projects')) || []

    if(projects.length > 0) {
        projects.forEach((elem, index) => {
            const PROJECT = document.createElement('div')
            PROJECT.classList.add('project')
            CONTAINER.appendChild(PROJECT)

            PROJECT.innerHTML = (`<div class="project__thumbnail-container" data-container${index}>
            <div class="project__thumbnail-icon"><svg width="32" viewBox="0 0 52 12"><use href="#icon-mac"></use></svg></div>

            <pre><code class="project__thumbnail hljs" spellcheck="false" contenteditable="false">${elem.code}</code></pre>
            </div>

            <div class="project__info">
            <h3 class="project__info__title">${elem.title}</h3>
            <p class="project__info__description">${elem.description}</p>
            </div>

            <div class="project__social">
            <div>
            <div class="project__social__icon project__button--pattern">
                <svg width="24" viewBox="0 0 24 24"><use href="#icon-comment"></use></svg>
                <span class="project__user__name">0</span>
            </div>

            <div class="icon-like project__social__icon project__button--pattern">
                <svg width="24" viewBox="0 0 24 24"><use href="#icon-like"></use></svg>
                <span class="project__user__name">${elem.likes}</span>
            </div>
            </div>

            <a class="project__user project__button--pattern" href="">
                <div class="project__user__avatar"></div>
                <span class="project__user__name">@Doug</span>
            </a>
            </div>`)

            const PROJECT_CONTAINER = document.querySelector('[data-container' + index + ']')
            PROJECT_CONTAINER.style.backgroundColor = elem.color
        })
    } else {
        createPhrase()
    }
}

showProjects()

function createPhrase() {
    const PHRASE = document.createElement('h4')
    const CTA = document.createElement('p')

    CONTAINER.style.flexDirection = 'column'

    CONTAINER.appendChild(PHRASE)
    CONTAINER.appendChild(CTA)

    PHRASE.innerText = `Que pena!
    Ainda não existem projetos.`

    CTA.classList.add('call-to-action')
    CTA.innerHTML = `Crie um agora mesmo em nosso <a href="index.html">editor de código</a>`
}