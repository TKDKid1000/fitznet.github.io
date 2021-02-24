let table = document.getElementById("repos");
let xhr = new XMLHttpRequest();
            xhr.open('GET', "https://raw.githubusercontent.com/TKDKid1000/tkdkid1000.github.io/master/data/repositories.json", true);
            xhr.send();

            xhr.onreadystatechange = processRequest;
            function processRequest(e) {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    let response = JSON.parse(xhr.responseText);
                    console.log(response);
                    response.repo.forEach((repo) => {
                        let row = table.insertRow(1);
                        let name = row.insertCell(0);
                        name.innerHTML = "<p>"+repo.name+"</p>";
                        let url = row.insertCell(-1);
                        url.innerHTML = "<p>"+repo.url+"</p>";
                        let description = row.insertCell(-1);
                        description.innerHTML = "<p>"+repo.description+"</p>";
                        let language = row.insertCell(-1);
                        language.innerHTML = "<p>"+repo.language+"</p>";
                    });
                }
            }
