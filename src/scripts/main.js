const menuBtn = document.querySelector('.menu-mob-tgl')
const menu = document.querySelector('.main-nav_mob')

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('hidden')
});


const orderBtn = document.querySelectorAll('.modal-button')
const orderModal = document.querySelector('.bg-modal')
const privacyBtn = document.querySelector('.privacy-link')
const privacyModal = document.querySelector('.bg-modal-privacy')
const closeBtn = document.querySelector('.button_close')

document.addEventListener('click', (e) => {
	if (e.target.dataset.order != undefined) {
		orderModal.classList.toggle('visually-hidden')
	}else if (e.target.dataset.privacy != undefined) {
		privacyModal.classList.toggle('visually-hidden')
	}else if(e.target.dataset.close != undefined) {
		e.target.parentElement.parentElement.parentElement.classList.toggle('visually-hidden')
	}else if(e.target.dataset.close_bg != undefined) {
		e.target.classList.toggle('visually-hidden')
	}
});


// privacyBtn.addEventListener('click', () => {
// 	privacyModal.classList.toggle('visually-hidden')
// })

// orderBtn.children.addEventListener('click', () => {
// 	orderModal.classList.toggle('visually-hidden')
// })