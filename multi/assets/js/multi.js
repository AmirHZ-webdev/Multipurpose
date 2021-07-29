const showmenu = document.getElementById('show-menu')
const bars = document.querySelector('.bars')
const close =document.querySelector('.close')

function openmenu() {
  bars.style.display='none'
  showmenu.classList.add('toggle-menu')
  close.classList.add('toggle-menu')
  // close.style.display='block'
}
function closemenu(){
  bars.style.display='block'
  showmenu.classList.remove('toggle-menu')
  close.classList.remove('toggle-menu')
}
