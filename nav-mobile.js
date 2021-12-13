const navMobile = document.querySelector('.nav-mobile')
const menuQueryButton = document.querySelector('.menu__query-button')

menuQueryButton.setAttribute('onclick', 'handleNavMobile()')

var isNavMobileOpen = false

function handleNavMobile() {
    if(isNavMobileOpen) {
        navMobile.style.display = 'none'
        isNavMobileOpen = false
    } else {
        navMobile.style.display = 'flex'
        isNavMobileOpen = true
    }
}

window.matchMedia('(min-width: 1200px)').addEventListener('change', function() {
	if(this.matches && isNavMobileOpen) {
        handleNavMobile()
    }
});