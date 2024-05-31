// close open navbar in mobile view
const toggleMenu = () => {
    navMobile.classList.toggle("hidden");
}

//popup coming in 1s (just add hiden class first in the popupButton id div)
// setTimeout(() => {
//     popupBottom.classList.remove('hidden')
// }, 1500);

// close the popup
const closePopup = () => {
    popupBottom.classList.add('hidden')
}