
// when view portfolio button is clicked 
document.getElementById('portfolio').onclick = function portfolio() {
    window.location.href = './pages/index2.html'

}

// when dark mode button is clicked 
function darkMode() {
    document.getElementById('darkMode')
    var element = document.body
    element.classList.toggle('darkMode')

    var x = document.getElementById('darkMode')
    if (x.innerHTML === '🌑') {
      x.innerHTML = '☀️'      
    } else {
      x.innerHTML = '🌑'
    }

    
    // alert('you are trying to switch to darkmode');

}

function clickSearch() {
    document.getElementById('searchBtn')
    alert('you can only search for dogs as of this moment');
}


// ----------------------------------darkmode switcher--------------------------------

