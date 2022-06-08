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

// slider-card
$('.card-slider__inner').slick({
	slidesToShow: 1,
	arrows: false,
	dots: true,
});

  // slider-brand
$('.brands__items-slider').slick({
	infinite: true,
	slidesToShow: 7,
	slidesToScroll: 1,
	arrows: false,
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
const stockWrap = document.querySelectorAll('.stock__item-price')

	  stockBtn.forEach(btn=> {
		  btn.addEventListener('click', (e) =>{
			stockWrap.forEach((item, e) => {
				let target = e.target
				item.classList.toggle('show')
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

// Flex-heart

const heart = document.querySelectorAll('.stock__item-favorites')

	heart.forEach(item => {
		item.addEventListener('click', ()=> {
			item.classList.toggle('stock__item-favorites--active')
		})
	})


// Tabs
$('.tabs__item').click(function () {
	$('.tabs__item').removeClass('tabs__item-active').eq($(this).index()).addClass('tabs__item-active');
	$('.tabs__content').hide().eq($(this).index()).fadeIn()
}).eq(0).addClass('tabs__item-active');


try{
	$(".custom-select").each(function() {
		var classes = $(this).attr("class"),
			id      = $(this).attr("id"),
			name    = $(this).attr("name");
		var template =  '<div class="' + classes + '">';
		template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
		template += '<div class="custom-options">';
		$(this).find("option").each(function() {
			template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
		});
		template += '</div></div>';

		$(this).wrap('<div class="custom-select-wrapper"></div>');
		$(this).hide();
		$(this).after(template);
	});
	$(".custom-option:first-of-type").hover(function() {
		$(this).parents(".custom-options").addClass("option-hover");
	}, function() {
		$(this).parents(".custom-options").removeClass("option-hover");
	});
	$(".custom-select-trigger").on("click", function() {
		$('html').one('click',function() {
			$(".custom-select").removeClass("opened");
		});
		$(this).parents(".custom-select").toggleClass("opened");
		event.stopPropagation();
	});
	$(".custom-option").on("click", function() {
		$(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
		$(this).parents(".custom-options").find(".custom-option").removeClass("selection");
		$(this).addClass("selection");
		$(this).parents(".custom-select").removeClass("opened");
		$(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
	});
}
catch {
	
}


let inputWrapInput = document.querySelectorAll(".input-wrapper input");
let inputWrap = document.querySelectorAll(".input-wrapper");
let inputWrapLabel = document.querySelectorAll(".input-wrapper label");

inputWrapInput.forEach((item) => {
	item.addEventListener('change', function () {
		if(item.value === '') {
			item.closest('div').classList.add('active')
			console.log(item.value)
		}
		// else {
		// 	item.closest('div').classList.remove('active')
		// }
	})

})

