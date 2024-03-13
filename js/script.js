const btnElem = document.getElementById("btn");
const outputElem = document.querySelector(".outputCats");

btnElem.addEventListener("click", () => {
    const url = "../json/cats.json";

    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            json.forEach(val => {
                // Opprett et div-element for kattens container
                const catContainer = document.createElement("div");
                catContainer.classList.add("cat-container");

                // Opprett et div-element for hver katt
                const catItem = document.createElement("div");
                catItem.classList.add("cat-item");

                // Opprett et img-element for kattens bilde
                const catImage = document.createElement("img");
                catImage.classList.add("cat-image");
                catImage.src = `../img/${val.img}`;
                catImage.alt = `${val.weight} ${val.breed}`;

                // Opprett en liste med informasjon om katten
                const catInfo = document.createElement("ul");
                catInfo.innerHTML = 
                    `<li>${val.name}</li>
                    <li>Vægt: ${val.weight}</li>
                    <li>Rase: ${val.breed}</li>`;

                catItem.appendChild(catImage);
                catItem.appendChild(catInfo);
                catContainer.appendChild(catItem);
                outputElem.appendChild(catContainer);
            });
        })
        .catch(error => {
            console.error('Feil ved lasting av JSON:', error);
        });
});
