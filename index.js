let selectedColor = 'blue'
const painting = document.querySelector('.painting')

painting.addEventListener('click', function(e) {
    e.target.style.backgroundColor = selectedColor

})

// colorChoice.addEventListener('click', function(f) {
//    f.target.querySelector('color-choice')
// })