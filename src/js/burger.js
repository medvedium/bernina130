const burgerButton = document.querySelector('.burger')
const burgerMenu = document.querySelector('nav.nav')
const backdrop = document.querySelector('.backdrop')
const burgerClose = document.querySelector('.nav .close-burger')

const closeBurger = () => {
	burgerMenu.classList.remove('active')
	backdrop.classList.remove('active')
}

burgerButton.addEventListener('click', () => {
	burgerMenu.classList.add('active')
	backdrop.classList.add('active')

	burgerClose.addEventListener('click', closeBurger)

	burgerMenu.querySelectorAll('.nav__link').forEach((item) => {
		item.addEventListener('click', closeBurger)
	})
})
