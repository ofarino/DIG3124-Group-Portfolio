const nav = document.querySelector('.site-nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.link a');

if (nav && navToggle) {
	navToggle.addEventListener('click', () => {
		const isOpen = nav.classList.toggle('nav-open');
		navToggle.setAttribute('aria-expanded', String(isOpen));
		navToggle.setAttribute(
			'aria-label',
			isOpen ? 'Close navigation menu' : 'Open navigation menu'
		);
	});

	navLinks.forEach((link) => {
		link.addEventListener('click', () => {
			nav.classList.remove('nav-open');
			navToggle.setAttribute('aria-expanded', 'false');
			navToggle.setAttribute('aria-label', 'Open navigation menu');
		});
	});
}
