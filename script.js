$(function () {
	var includes = $('[data-include]')
	$.each(includes, function () {
	  var file = $(this).data('include')
	  var obj = $(this);
	  $.get(file, function(data) {
			obj.after(data);
	 	}, 'text');
	})
	setTimeout(() => {
		initDarkmode();
	}, 10);
  })

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

function initDarkmode() {
	if (window.localStorage.getItem("darkmode") === null) {
		window.localStorage.setItem("darkmode", "false");
	}
	
	if (window.localStorage.getItem("darkmode") == "true") {
		document.body.classList.add("darkmode");
	} else {
		document.body.classList.remove("darkmode");
	}
}

window.addEventListener('storage', () => {
	if (window.localStorage.getItem("darkmode") == "true") {
		document.body.classList.add("darkmode");
	} else {
		document.body.classList.remove("darkmode");
	}
    
});

function toggleDarkMode() {
    if (window.localStorage.getItem("darkmode") == "false") {
        window.localStorage.setItem("darkmode", "true");
        document.body.classList.add("darkmode");
    } else {
        window.localStorage.setItem("darkmode", "false");
        document.body.classList.remove("darkmode");
    }
}
