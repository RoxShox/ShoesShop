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


//search
try{
	let searchBtn = document.getElementById('search')
	let searchWrap = document.getElementById('search-wrap')

	searchBtn.addEventListener('click', function () {
		searchWrap.classList.toggle('active')
	})

//filter

	let filterBtn = document.querySelector('.filter-title');
	let filter = document.querySelector('.filter')


	filterBtn.addEventListener('click', function () {
		filter.classList.toggle('open')
	})

	let filterItemBtn = document.querySelectorAll('.filter-item__title')

	filterItemBtn.forEach((item) => {
		item.addEventListener('click', function () {
			item.parentElement.classList.toggle('active')
		})
	})
}
catch {

}



//-----JS for Price Range slider-----

$(function() {
	$( "#slider-range" ).slider({
		range: true,
		min: 1,
		max: 48000,
		values: [ 1, 48000 ],
		slide: function( event, ui ) {
			$( "#amount" ).val(ui.values[ 0 ] + "                                            " + ui.values[ 1 ] );
		}
	});
	$( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ) +
		"                                            " + $( "#slider-range" ).slider( "values", 1 ) );
});