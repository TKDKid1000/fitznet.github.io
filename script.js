function togglenav() {
	var x = document.getElementById("topnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
function copytext(text) {
	var copyText = document.createElement("textarea");
	copyText.value = text;
    	document.body.appendChild(copyText);
	copyText.style.display = "block";
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	copyText.remove();
	alert("Copied!");
}
function openlink(link) {
	window.open(link);
}

if (window.localStorage.getItem("darkmode") === null) {
    window.localStorage.setItem("darkmode", "false");
}

if (window.localStorage.getItem("darkmode") == "true") {
    document.getElementById("darkmode").checked = true;
    document.documentElement.classList.add("darkmode");
}

window.addEventListener('storage', () => {
    document.getElementById("darkmode").checked = window.localStorage.getItem("darkmode") == "true";
    document.getElementById("darkmode").checked = window.localStorage.getItem("darkmode") == "false";
});

function toggleDarkMode() {
    if (document.getElementById("darkmode").checked) {
        window.localStorage.setItem("darkmode", "true");
        document.body.classList.add("darkmode");
    } else {
        window.localStorage.setItem("darkmode", "false");
        document.body.classList.remove("darkmode");
    }
}
