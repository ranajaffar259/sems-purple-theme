// sidebar logic
function sidebarToggle() {
  let element = document.getElementById("mySidebar");
  element.classList.toggle("sidebar-toggle"); 
   let element1 = document.getElementById('content')
  element1.classList.toggle('mx-2')
  let element2 = document.getElementById('hamburger')
  element2.classList.toggle('ms-0')
}
// responsive sidebar logic
function sidebarToggleResponsive() {
  let element = document.getElementById("mySidebar");
  element.classList.toggle("sidebar-responsive-toggle");
  let element2 = document.getElementById('hamburger-responsive')
  element2.classList.toggle('hamburger-responsive-toggle')
}