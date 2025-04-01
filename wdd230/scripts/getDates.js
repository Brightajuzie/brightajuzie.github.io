document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("currentYear").textContent = new Date().getFullYear();
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});                                                                                                                                                                                                                                                                                                                     querySelector(".visits");

 
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

 
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
 
numVisits++;

 
localStorage.setItem("numVisits-ls", numVisits);
 
