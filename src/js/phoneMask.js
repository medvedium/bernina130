const initMask = () => {
	let setCursorPosition = (pos, elem) => {
		elem.focus()

		if (elem.setSelectionRange) {
			elem.setSelectionRange(pos, pos)
		} else if (elem.createTextRange) {
			let range = elem.createTextRange()

			range.collapse(true)
			range.moveEnd('character', pos)
			range.moveStart('character', pos)
			range.select()
		}
	}

	window.createMask = function (event) {
		let matrix = '+7 (___) ___-__-__',
			i = 0,
			def = matrix.replace(/\D/g, ''),
			val = this.value.replace(/\D/g, '')

		if (def.length >= val.length) {
			val = def
		}

		this.value = matrix.replace(/./g, function (a) {
			return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a
		})

		if (event.type === 'blur') {
			if (this.value.length === 2) {
				this.value = ''
			}
		} else {
			setCursorPosition(this.value.length, this)
		}
	}

	const phoneInputs = document.querySelectorAll('[type="tel"]')
	for (let i = 0; i < phoneInputs.length; i++) {
		phoneInputs[i].addEventListener('input', createMask)
	}

	try {
		for (var i = 0; i < phoneInputs.length; i++) {
			phoneInputs[i].addEventListener('focus', createMask)
			phoneInputs[i].addEventListener('keyup', createMask)
			phoneInputs[i].addEventListener('keydown', createMask)
			phoneInputs[i].addEventListener('input', createMask)
			phoneInputs[i].addEventListener('change', createMask)
			phoneInputs[i].addEventListener('blur', createMask)
		}
	} catch (e) {}
}

initMask()
window.initMask = initMask
