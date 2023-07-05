const buttons = document.querySelectorAll('.button')
const modal = document.querySelector('.modal.modal-payment')
const modalSuccess = document.querySelector('.modal.modal-success')
const backdrop = document.querySelector('.backdrop')

const closeModal = () => {
	document.querySelectorAll('.modal').forEach((item) => {
		if (item.classList.contains('active')) {
			item.classList.remove('active')
		}
	})
	if (backdrop.classList.contains('active')) {
		backdrop.classList.remove('active')
	}
}

const showModalSuccess = () => {
	document.querySelectorAll('.modal').forEach((item) => {
		if (item.classList.contains('active')) {
			item.classList.remove('active')
		}
	})
	if (backdrop.classList.contains('active')) {
		backdrop.classList.remove('active')
	}
	modalSuccess.classList.add('active')
	backdrop.classList.add('active')

	modalSuccess.querySelector('.button').addEventListener('click', closeModal)
	modalSuccess.querySelector('.modal-close').addEventListener('click', closeModal)
}

window.showModalSuccess = showModalSuccess

backdrop.addEventListener('click', () => {
	document.querySelectorAll('.modal').forEach((item) => {
		if (item.classList.contains('active')) {
			item.classList.remove('active')
		}
	})
	backdrop.classList.remove('active')
	const burgerMenu = document.querySelector('nav.nav')
	if (burgerMenu.classList.contains('active')) {
		burgerMenu.classList.remove('active')
	}
})

buttons.forEach((button) => {
	if (!button.closest('.modal-payment')) {
		button.addEventListener('click', () => {
			modal.classList.add('active')
			backdrop.classList.add('active')
			if (button.dataset.target) {
				modal.querySelector(`[id="${button.dataset.target}"]`).click()
				modal
					.querySelector(`[id="${button.dataset.target}"]`)
					.closest('.price-item')
					.querySelector('.button').textContent = 'Выбрано'
			}
			modal.querySelectorAll('input[type="radio"]').forEach((item) => {
				if (item.checked) {
					item.closest('.price-item').querySelector('.button').textContent = 'Выбрано'
				} else {
					item.closest('.price-item').querySelector('.button').textContent = 'Выбрать'
				}
			})

			modal.querySelector('.modal-close').addEventListener('click', () => {
				modal.classList.remove('active')
				backdrop.classList.remove('active')
			})
		})
	} else {
		if (button.closest('.price-item')) {
			button.addEventListener('click', (e) => {
				e.preventDefault()
				button.closest('.price-item').querySelector('input').click()
				modal.querySelectorAll('.price-item .button').forEach((item) => {
					item.textContent = 'Выбрать'
				})
				button.textContent = 'Выбрано'
			})
		}
	}
})

if (document.querySelectorAll('input[type="radio"]')) {
	document.querySelectorAll('input[type="radio"]').forEach((item) => {
		if (item.closest('.price-item').querySelector('.button').disabled) {
			item.setAttribute('disabled', '')
		}
		item.addEventListener('change', () => {
			if (item.checked) {
				item.closest('.price-item').querySelector('.button').textContent = 'Выбрано'
			} else {
				item.closest('.price-item').querySelector('.button').textContent = 'Выбрать'
			}
		})
	})
}
