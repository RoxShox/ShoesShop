// accordion

function accordion(block, active) {
	const itemAccordion = document.querySelectorAll(block);

	itemAccordion.forEach(item => {
		item.addEventListener('click', function () {
			let parent = item.parentNode;
			if (parent.classList.contains(active)) {
				parent.classList.remove(active);
			} else {
				document
					.querySelectorAll(active)
					.forEach(child => child.classList.remove(active));
				parent.classList.add(active);
			}
		});
	});
}

accordion('.accordion__item', 'accordion__item--active');


// slider-banner	

$('.slider-banner__items').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrow: true,
	dots: true,
	prevArrow: document.querySelector('.slick-prev'),
	nextArrow: document.querySelector('.slick-next'),
  });


//   Counter

try {
	// Counter
	let assortmentCounterWrapper = $('.counter');
	$('#number').value = 0;

	function setAssortmntCount(input, operator = 'decrease') {
		let inputValue = input.value;
		let value = parseInt(inputValue, 10);
		value = isNaN(value) ? 0 : value;

		switch (operator) {
			case 'decrease':
				value < 1 ? value = 1 : '';
				value--;
				
				break;
			case 'increase':
				value++;
				break;
		}

		input.setAttribute('value', value);
	}

	assortmentCounterWrapper.on('click', function (e) {
		let currentInput = this.querySelector('input');
		let $thisTarget = e.target;
		let decreaseButton = $thisTarget.classList.contains('decrease-button');
		let increaseButton = $thisTarget.classList.contains('increase-button');

		if (!decreaseButton && !increaseButton) return;

		decreaseButton
			?
			setAssortmntCount(currentInput, 'decrease') :
			setAssortmntCount(currentInput, 'increase');
	});


} catch {

}

// call counter

const stockBtn = document.querySelectorAll('.stock__item-btn-box')
const stockCount = document.querySelectorAll('.counter')

	  stockBtn.forEach(btn=> {
		  btn.addEventListener('click', () =>{
			  stockCount.forEach(count => {
				count.classList.toggle('show')
			  })
		  })
	  })
