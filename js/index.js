$(document).ready(function () {
	function initForms () {
		$('form').submit(function (e) {
			e.preventDefault()

			let data = $(this).serialize()

			$.get('').done(function (data) {
				$.fancybox.open('<div class="message"><h2 class="text-center">Спасибо!</h2><p>Мы свяжемся с вами в ближайшее время!</p></div>');
			})
		})
	}

	function initMasks () {
		let masks = {
			'MASK_NAME': /[A-zА-я ]/g
		}

		$('input[class*="MASK_"]').on('input', function () {
			let $this = $(this)

			for(let mask in masks) {
				if($this.hasClass(mask)) {
					let $mask = masks[mask]
					let changeValue = $this.val().match($mask)

					let valNew = ''

					if(changeValue instanceof Array && changeValue) {
						valNew = changeValue.join('')
					}

					$this.val( valNew )
				}
			}
		})
	}


	function init () {
		initMasks()
		initForms()
	}

	init()

})