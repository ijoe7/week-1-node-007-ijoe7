// function main(){
// }
// module.exports = {main}

function fetchData() {
    fetch("https://swapi.dev/api/people/")
    .then(response => {
        if (!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    }).then(data => {
        console.log(data.results);

        const images = ["images/1.jpeg", "images/2.jpeg", "images/3.jpeg", "images/4.jpeg", "images/5.jpeg", "images/6.jpeg", "images/7.jpeg", "images/8.jpeg", "images/9.jpeg", "images/10.jpeg"]
        const info = data.results
            .map((bio, index) => {
           
            //`<h2>Name: ${bio.name}</h2><br><br><h4>Height: ${bio.height}</h4><br><h4>Gender: ${bio.gender}</h4>`
            return `
                <div class="case">
                <div class="card">
                    <img id="img_box" src=${images[index]} alt="">
                    
                    <div class="content">
                        <h2>Name: ${bio.name}</h2>
                        <h4>Height: ${bio.height}</h4>
                        <h4>Gender: ${bio.gender}</h4>
                    </div>
                </div>
                <h2 class="name" tabindex="0">Name: ${bio.name}<br>
                <div class="appear">
                <h4>Height: ${bio.height}</h4>
                <h4>Gender: ${bio.gender}</h4>
                </div>
                </h2>
                </div>
            `
        }).join("");
        console.log(info);
        document.querySelector(".container").insertAdjacentHTML("afterbegin", info);

    })
    .catch(error => {
        console.log(error);
    });
}
fetchData();