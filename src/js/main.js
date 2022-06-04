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
