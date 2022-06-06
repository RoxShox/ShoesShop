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

accordion('#accordion__item', 'accordion__item--active');


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