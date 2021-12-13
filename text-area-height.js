const codePanel = document.querySelector('.main__code')

window.addEventListener('resize', resizeTextBox)
codePanel.addEventListener('input', resizeTextBox)

codePanel.innerHTML = "const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)\n\nconst compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)\n\nconst unfold = (f, seed) => {\n  const go = (f, seed, acc) => {\n    const res = f(seed)\n    return res ? go(f, res[1], acc.concat([res[0]])) : acc\n  }\n  return go(f, seed, [])\n}"
resizeTextBox()

function resizeTextBox() {
    codePanel.style.height = 'auto'
    codePanel.style.height = codePanel.scrollHeight + 'px'
}






