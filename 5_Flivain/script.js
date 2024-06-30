document.getElementById("toggler").addEventListener("click", function () {
  var toggler = document.getElementById("toggler");
  if (toggler.src.includes("bars.png")) {
    toggler.src = "images/close.png";
    toggler.style.width = '23px';

  } else {
    toggler.src = "images/bars.png";
    toggler.style.width = '33px';

  }
});

toggler.addEventListener('click',()=>{
    // mobileNav.classList.toggle('hidden')
    mobileNav.classList.toggle('-translate-y-[110%]')
    
})
