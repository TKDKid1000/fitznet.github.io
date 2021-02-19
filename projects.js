var table = document.getElementById("repos");
let xhr = new XMLHttpRequest();
            xhr.open('GET', "data/repositories.json", true);
            xhr.send();

            xhr.onreadystatechange = processRequest;
            function processRequest(e) {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    let response = JSON.parse(xhr.responseText);
                    response.forEach((repo) => {
                        var row = table.insertRow(-1);
                        var name = row.insertCell(-1);
                        name.innerHTML = response.name;
                        var url = row.insertCell(-1);
                        url.innerHTML = response.url;
                        var description = row.insertCell(-1);
                        description.innerHTML = response.description;
                        var language = row.insertCell(-1);
                        language.innerHTML = response.language;
                    });
                }
            }
