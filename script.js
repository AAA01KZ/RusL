// КОПИПАСТА НЕ ПРИВЕТСТВУЕТСЯ, Напишите сами
const nav = document.getElementById('mainNav');
const navLinks = nav.querySelectorAll('a');

function getNavOffset(){
	return nav.getBoundingClientRect().height;
}

navLinks.forEach(link => {
	link.addEventListener('click', function(e){
		const targetId = this.getAttribute('href');
		if (!targetId.startsWith('#')) return;
		const targetEl = document.querySelector(targetId);
		if (!targetEl) return;
		e.preventDefault();

		const navOffset = getNavOffset();
		const targetY = targetEl.getBoundingClientRect().top + window.scrollY;
		const scrollToY = targetY - navOffset + 1;

		window.scrollTo({top: scrollToY, behavior: 'smooth'});
	});
});

function highlightNav(){
	const fromTop = window.scrollY + getNavOffset() + 5;
	navLinks.forEach(link => {
		const id = link.getAttribute('href');
		if (!id.startsWith('#')) return;
		const section = document.querySelector(id);
		if (!section) return;
		if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
			link.classList.add('active');
		} else {
			link.classList.remove('active');
		}
	});
}
window.addEventListener('scroll', highlightNav);
window.addEventListener('load', highlightNav);

const cards = document.querySelectorAll('.fade-card');
function revealCards(){
	const trigger = window.innerHeight * 0.86;
	cards.forEach(card => {
		const top = card.getBoundingClientRect().top;
		if (top < trigger) card.classList.add('show');
	});
}
window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);

window.addEventListener('resize', () => {
	revealCards();
	highlightNav();
});
