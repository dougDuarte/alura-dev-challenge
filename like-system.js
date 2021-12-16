const iconLike = document.querySelectorAll('.icon-like')

iconLike.forEach(function(elem) {
    let isLikeGiven = false

    elem.addEventListener('click', function() {
        const span = elem.querySelector('span')
        const icon = elem.querySelector('svg')
        
        let initialValue = Number(span.innerText)

        if(isLikeGiven) {
            span.innerText = initialValue - 1
            icon.style.fill = 'var(--brightColor)'
            isLikeGiven = false
        } else {
            span.innerText = initialValue + 1
            icon.style.fill = 'red'
            isLikeGiven = true
        }
    })
})