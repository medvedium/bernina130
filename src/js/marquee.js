import Splide from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'

const splide = new Splide('.marquee__wrap', {
	type: 'loop',
	drag: 'free',
	focus: 'center',
	perPage: 5,
	arrows: false,
	pagination: false,
	autoWidth: true,
	pauseOnHover: false,
	pauseOnFocus: false,
	autoScroll: {
		speed: 1
	}
})

splide.mount({ AutoScroll })
