const btn = document.querySelector('.menu-mob-tgl');
const menu = document.querySelector('.main-nav_mob');

btn.addEventListener('click', () => {
	menu.classList.toggle('hidden');
});
