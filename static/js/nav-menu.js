export default {
  
}

const btn = document.querySelector('button.mobile-button-menu');
const menu = document.querySelector('.mobile-menu');

btn.addEventListener('click', () => {
  menu.classList.toogle("hidden");
})