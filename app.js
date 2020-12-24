import data from "./data.js";
data.forEach(dataChildern => {
    // console.log(dataChildern);
    const id = dataChildern.id;
    const name = dataChildern.name;
    const userName = dataChildern.username;
    const email = dataChildern.email;
    const phone = dataChildern.phone;

    const container = document.querySelector(".container");
    const card = document.createElement("div");
    const detailPage = `./detail.html?id=${name}`;
    card.innerHTML = `
        <p>${id}</p>
        <p>${name}</p>
        <p>${userName}</p>
        <p>${email}</p>
        <p>${phone}</p>
        <a class="btn-detail" href=${detailPage}>detail</a>
    `;
    container.appendChild(card)
})