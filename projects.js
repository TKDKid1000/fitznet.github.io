var table = document.getElementById("repos");
let xhr = new XMLHttpRequest();
            xhr.open('GET', "https://raw.githubusercontent.com/TKDKid1000/tkdkid1000.github.io/master/data/repositories.json", true);
            xhr.send();

            xhr.onreadystatechange = processRequest;
            function processRequest(e) {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    let response = JSON.parse(xhr.responseText);
                    console.log(response);
                    response.repo.forEach((repo) => {
                        var row = table.insertRow(-1);
                        var name = row.insertCell(-1);
                        name.innerHTML = repo.name;
                        var url = row.insertCell(-1);
                        url.innerHTML = repo.url;
                        var description = row.insertCell(-1);
                        description.innerHTML = repo.description;
                        var language = row.insertCell(-1);
                        language.innerHTML = repo.language;
                    });
                }
            }
