const colorPicker = document.querySelector('.settings__style__color')
const colorArea = document.querySelector('.main__code-container')

colorPicker.addEventListener('input', function() {
    colorArea.style.backgroundColor = colorPicker.value
})