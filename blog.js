let table = document.getElementById("repos");
let xhr = new XMLHttpRequest();
            xhr.open('GET', "https://api.github.com/users/TKDKid1000/repos", true);
            xhr.send();

            xhr.onreadystatechange = processRequest;
            function processRequest(e) {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    let response = JSON.parse(xhr.responseText);
                    response.forEach((repo) => {
                        let row = table.insertRow(1);
                        let name = row.insertCell(0);
                        name.innerHTML = "<p>"+repo.full_name+"</p>";
                        let url = row.insertCell(-1);
                        url.innerHTML = "<a href=\""+repo.html_url+"\">"+repo.html_url+"</a>";
                        let description = row.insertCell(-1);
                        if (repo.description !== null) {
                            description.innerHTML = "<p>"+repo.description+"</p>";
                        } else {
                            description.innerHTML = "<p>The repository has no description.</p>";
                        }
                        let language = row.insertCell(-1);
                        if (language !== null) {
                            language.innerHTML = "<p>"+repo.language+"</p>";
                        } else {
                            language.innerHTML = "<p>This repository doesn't have a primary language.</p>";
                        }
                        let license = row.insertCell(-1);
                        if (repo.license !== null) {
                            license.innerHTML = "<p>"+repo.license.name+"</p>"
                        } else {
                            license.innerHTML = "<p>This repository has no license.</p>";
                        }
                    });
                }
            }
