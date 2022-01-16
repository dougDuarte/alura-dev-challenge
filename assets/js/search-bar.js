const searchButton = document.querySelector('.menu__query-search')
const searchBar = document.querySelector('.menu__search')
const iconSearch = document.querySelector('.icon-search')
const iconSearchExit = document.querySelector('.icon-search-exit')

var isSearchOpen = false
searchButton.addEventListener('click', function() {
    if(isSearchOpen) {
        closeSearch()
    } else {
        openSearch()
    }
})

window.matchMedia('(min-width: 640px)').addEventListener('change', function() {
	if(this.matches && isSearchOpen) {
        searchBar.style.position = 'initial'
        searchButton.style.position = 'initial'
        searchButton.style.right = '0px'
        iconSearch.style.display = 'initial'
        iconSearchExit.style.display = 'none'
        isSearchOpen = false
    }
});

window.matchMedia('(max-width: 640px)').addEventListener('change', function() {
	if(this.matches) {
        searchBar.style.display = 'none'
    }
});

function openSearch() {
    searchBar.style.display = 'flex'
    searchBar.style.position = 'absolute'
    searchButton.style.position = 'absolute'
    searchButton.style.right = '5px'
    iconSearch.style.display = 'none'
    iconSearchExit.style.display = 'initial'
    isSearchOpen = true
}

function closeSearch() {
    searchBar.style.display = 'none'
    searchBar.style.position = 'initial'
    searchButton.style.position = 'initial'
    searchButton.style.right = '0px'
    iconSearch.style.display = 'initial'
    iconSearchExit.style.display = 'none'
    isSearchOpen = false
}