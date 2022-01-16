const navMobile = document.querySelector('.nav-mobile')
const menuQueryButton = document.querySelector('.menu__query-button')
const iconMenu = document.querySelector('.icon-menu')
const iconMenuExit = document.querySelector('.icon-menu-exit')

menuQueryButton.setAttribute('onclick', 'handleNavMobile()')

var isNavMobileOpen = false

function handleNavMobile() {
    if(isNavMobileOpen) {
        iconMenu.style.display = 'initial'
        iconMenuExit.style.display = 'none'
        isNavMobileOpen = false
        navMobile.style.transform = 'translateX(256px)'
    } else {
        iconMenu.style.display = 'none'
        iconMenuExit.style.display = 'initial'
        isNavMobileOpen = true
        navMobile.style.transform = 'translateX(0px)'
    }
}

window.matchMedia('(min-width: 1200px)').addEventListener('change', function() {
	if(this.matches && isNavMobileOpen) {
        handleNavMobile()
    }
});

navMobile.addEventListener('transitionend', function() {
    if(!isNavMobileOpen) {
        navMobile.style.visibility = 'hidden'
    }
})

navMobile.addEventListener('transitionstart', function() {
    if(isNavMobileOpen) {
        navMobile.style.visibility = 'visible'
    }
})