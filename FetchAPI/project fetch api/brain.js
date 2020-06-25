let getText = document.querySelector(".get-text");

getText.addEventListener("click", () => {
    fetch('/data.txt')
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            // console.log(data)
            document.querySelector(".output").innerHTML = data;
        })
        .catch((err) => console.log("OOP's an error: ", err));

})

document.querySelector(".fetch-user").addEventListener("click", () => {
    fetch('https://api.github.com/users')
        .then((reslove) => {
            return reslove.json();
        })
        .then((data) => {
            console.log(data);
            let output = `<h3>Users</h3>`;

            data.forEach(element => {
                output += `
                <ul>
                    <li><b>ID: </b>${element.id}</li>
                    <li><b>Login: </b>${element.login}</li>
                    <li><b>Avatar: </b><a href="${element.avatar_url}">${element.avatar_url}</a></li>
                    <br/>
                </ul>
            `;

            });
            document.querySelector(".output").innerHTML = output;
        })
})


document.querySelector('.fetch-photos').addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((resolve) => {
            console.log("Let's see...")
            return resolve.json();
        })
        .then((Photodata) => {
            // console.log(Photodata)
            let OutputPhotos = `<h2>Here is your album.</h2>`
            Photodata = Photodata.splice(0, 500);
            Photodata.forEach(element => {
                OutputPhotos += `
            <ul>
                <li><b>Title: ${element.title}</b></li>
                <li><b>Link: </b><a href="${element.url}" target="_blank">${element.url}</a></li>
                <li style="list-style: none;"><img src="${element.url}" alt="image"></li>
                <br/>
            </ul>
            `
            });
            document.querySelector(".output").innerHTML = OutputPhotos;
        })
        .catch((err) => console.log(err));
})


document.querySelector("#add-post").addEventListener("submit", (e) => {
    e.preventDefault();
    // alert("Bingo")
    let title = document.querySelector('#title').value;
    let body = document.querySelector("#body").value;


    fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers: {
            'Accept':"application/json plain/text */*",
            'content-type': 'application/json'
        },
        body: JSON.stringify({title: title,body: body})
    })
    .then((response) => {
        return response.json();
    })
    .then((getresponse) => {
        console.log(getresponse)
    })
    .catch((error) => console.log("Opps! something went wrong.",error));


})