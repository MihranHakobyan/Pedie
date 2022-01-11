let searchIcone = document.querySelector("header .icones .fa-search")
let searchBar = document.querySelector("header .search-bar")

searchIcone.addEventListener("click", function() {
    searchBar.classList.toggle("active")
    searchIcone.classList.toggle("fa-times")

})
window.onscroll=()=>{
    
    searchBar.classList.remove("active")
    searchIcone.classList.remove("fa-times")
}
let searchBarButton = document.querySelector("header .search-bar .fa-search")
searchBarButton.addEventListener("click", () => {
    //aystex petq e lini searchi hramany
    console.log("");
})
let heartButton = document.querySelector("header .fa-heart")
heartButton.addEventListener("click", () => {
    //aystex petq e grvi hearti hramany
})

let shoppingButton = document.querySelector("header .fa-shopping-cart")
shoppingButton.addEventListener("click", () => {
    //aystex petq e grvi hearti hramany
})
