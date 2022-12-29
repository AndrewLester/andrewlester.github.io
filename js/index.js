const emailReplacements = {
	AT: "@",
	DOT: ".",
};
const emails = document.getElementsByClassName("email-link");

for (const email of emails) {
	for (const replacer in emailReplacements) {
		const replacement = emailReplacements[replacer];
		email.href = email.href.replace(replacer, replacement);
	}
}

const header = document.getElementById("intro-header");
const headerFixed = document.createElement("header");
headerFixed.id = "intro-header-fixed";
headerFixed.innerHTML = header.innerHTML;
const projects = document.getElementById("projects");

const diff = window.scrollY - projects.offsetTop;
headerFixed.hidden = diff <= 0;

document.body.prepend(headerFixed);

window.onscroll = () => {
	const diff = window.scrollY - projects.offsetTop;
	headerFixed.classList.toggle("fixed", diff > 0);
	if (diff > 0) {
		headerFixed.style.transform = `translateY(${Math.min(
			0,
			diff - headerFixed.clientHeight
		)}px)`;
		headerFixed.hidden = false;
	} else {
		headerFixed.style.transform = "";
		headerFixed.hidden = true;
	}
};
