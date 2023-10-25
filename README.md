# ProGamers Website

Welcome to the ProGamers website repository! This project showcases a modern landing page for a gaming-related business. Below is an overview of the project's structure, features, technologies used and a brief code overview.

## Features 🎮

- Responsive design for various screen sizes.
- Navigation bar with smooth scrolling.
- Animated sections using AOS (Animate On Scroll).

## Technologies Used 🛠️

- HTML: Structure of the website.
- CSS: Styling and layout of the elements.
- Bootstrap 5.3.1: Front-end framework for design components.
- AOS (Animate On Scroll) 2.3.1: JavaScript library for scroll animations.
- Font Awesome 6.0.0: Icon library for stylish icons.

## Project Structure 📁

- **index.html:** Main HTML file for the landing page.
- **css/main.css:** Stylesheet for general styling.
- **css/queries.css:** Stylesheet for responsive design.
- **img/:** Directory containing images used in the project.
- **js/script.js:** JavaScript file for custom scripts.
- **js/aos.js:** JavaScript file for AOS library initialization.

## JavaScript Code Explanation 🧾

The `script.js` file contains code for handling navigation bar behavior and scroll animations:

### Selecting DOM Elements

```javascript
const nav = document.querySelector(".navbar");
const allNavItems = document.querySelectorAll(".nav-link");
const navList = document.querySelector(".navbar-collapse");
```

### Function to add shadow

```javascript
// Function to add shadow to the navigation bar on scroll
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
```

### Event Listeners

```javascript
// Close navigation bar when a nav item is clicked
allNavItems.forEach((link) =>
	link.addEventListener("click", () => {
		navList.classList.remove("show");
	})
);

// Event listener for scroll events to trigger the addShadow function
window.addEventListener("scroll", addShadow);
```

You can see the ProGamers Website in action by clicking here: <a href="https://akwiecinska.github.io/ProGamers/">ProGamers</a>.
