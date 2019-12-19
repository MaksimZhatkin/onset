// Mobile menu
const menuBtn = document.querySelector('.menu-mob-tgl')
const menu = document.querySelector('.main-nav_mob')

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('hidden')
})


// Modal windows
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
})


// Carousel
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide')
const carouselButtons = document.querySelectorAll('.carousel-buttons__item')


// When I press the #X button, slide #X opens and all other slides are hidden
carousel.addEventListener('click', (e) => {
	const tg = e.target
	if (tg.closest('.carousel-buttons__item')) {
		btnNum = tg.dataset.stage
		showSlide(btnNum)
	}
});

let showSlide = (n) => {
	hideAllSlide()
	slides[n].classList.remove('visually-hidden')
	carouselButtons[n].classList.add('current-slide')
}

const hideAllSlide = () => {
	slides.forEach((item) => {
		item.classList.add('visually-hidden')
	})
	carouselButtons.forEach((item) => {
		item.classList.remove('current-slide')
	})
}