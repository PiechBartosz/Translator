const burgerBtn = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".navigation__mobile");
const navigation = document.querySelector(".navigation");

// const showMobile = () => {
// 	mobileMenu.classList.toggle("navigation__mobile--show");
// 	// navigation.style.backgroundColor = "transparent";
// 	if (mobileMenu.classList.contains("navigation__mobile--show")) {
// 		navigation.style.backgroundColor = "transparent";
// 	} else {
// 		navigation.style.backgroundColor = "";
// 	}
// };

// burgerBtn.addEventListener("click", showMobile);

const showMobile = () => {
	if (mobileMenu.classList.contains("navigation__mobile--show")) {
		navigation.style.backgroundColor = "transparent";
	} else {
		navigation.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	}

	mobileMenu.classList.toggle("navigation__mobile--show");
};

burgerBtn.addEventListener("click", showMobile);
