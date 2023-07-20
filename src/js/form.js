const formHiddenTypeButtonInput = document.getElementById('FORM_TICKET_TYPE')

document.addEventListener('click', (event) => {
	event.stopPropagation()
	const { target } = event

	if (target.dataset.ticketByBtn) {
		formHiddenTypeButtonInput.value = e.target.dataset.ticketBuyBtn
	}
})
