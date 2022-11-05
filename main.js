/** @format */

const defaultOption = document.querySelector(".default-option");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownMenuItem = document.querySelectorAll(".dropdown-item");

defaultOption.addEventListener("click", () => {
	dropdownMenu.classList.add("active");
});
dropdownMenuItem.forEach(item => {
	item.addEventListener("click", () => {
		let txt = item.textContent;
		defaultOption.textContent = txt;
		dropdownMenu.classList.remove("active");
	});
});
