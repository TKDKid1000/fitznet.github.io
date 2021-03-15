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

