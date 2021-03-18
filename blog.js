function loadblog(divid, number) {
    const div = document.getElementById(divid);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', "/data/blog.json", true);
    xhr.send()
    xhr.onreadystatechange = processRequest;
    function processRequest(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = JSON.parse(xhr.responseText);
            if (response.length-1 < number) {
                div.querySelector("#posttitle").innerHTML = "404 Post not Found";
                var content = ["No post here!", "Please hold on!"];
                div.querySelector("#datetime").innerHTML = "No date or time here!";
                div.querySelector("#permalink").innerHTML = "Blog Home";
            } else {
                div.querySelector("#posttitle").innerHTML = response[number]["title"];
                for (var x=0; x<response[number]["content"].length; x++) {
                    var element = document.createElement("div");
                    element.innerHTML = marked(response[number]["content"][x]);
                    div.querySelector("#postcontent").appendChild(element);
                }
                div.querySelector("#datetime").innerHTML = `<i class="fas fa-book"></i> ${response[number]["readtime"]} minutes | <i class="fas fa-calendar-alt"></i> ${response[number]["date"]}`;
                div.querySelector("#permalink").href = `/post.html?post=${number}`;
            }
        }
    }
}