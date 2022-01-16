const ICON_LIKE = document.querySelectorAll('div.icon-like')

ICON_LIKE.forEach(function(elem) {
    let isLikeGiven = false

    elem.addEventListener('click', function() {
        const span = elem.querySelector('span')

        elem.classList.toggle('like-given')
        
        let initialValue = Number(span.innerText)

        if(isLikeGiven) {
            span.innerText = initialValue - 1
            isLikeGiven = false
        } else {
            span.innerText = initialValue + 1
            isLikeGiven = true
        }
    })
})