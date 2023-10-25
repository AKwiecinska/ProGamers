document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const allNavItems = document.querySelectorAll(".nav-link");
	const navList = document.querySelector(".navbar-collapse");

	function addShadow() {
		let scroll = 0;
		if (window.innerWidth <= 992) {
			scroll = 0;
		} else {
			scroll = 250;
		}
		if (window.scrollY >= scroll) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}
	allNavItems.forEach((link) =>
		link.addEventListener("click", () => {
			navList.classList.remove("show");
		})
	);

	window.addEventListener("scroll", addShadow);
});
