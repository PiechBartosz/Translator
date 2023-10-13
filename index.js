const burgerBtn = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".navigation__mobile");
const navigation = document.querySelector(".navigation");
const navlinks = document.querySelectorAll(".navigation__mobile-link");

const showMobile = () => {
	if (mobileMenu.classList.contains("navigation__mobile--show")) {
		navigation.style.backgroundColor = "transparent";
	} else {
		navigation.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	}
	mobileMenu.classList.toggle("navigation__mobile--show");
	delayLinks();
};

const delayLinks = () => {
	navlinks.forEach((item) => item.classList.toggle("linksAnimation"));
};

const removalMenu = () => {
	navlinks.forEach((item) =>
		item.addEventListener("click", () => {
			mobileMenu.classList.toggle("navigation__mobile--show");
			navigation.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
		})
	);
};

burgerBtn.addEventListener("click", showMobile);
removalMenu();
