document.querySelector(".js").innerHTML = ` теги программно в js <img src="./f+.png" alt="" />
    <img src="./f-.png" alt="" />
    <img src="./cocktail.svg" alt="" />`;
const icon = document.querySelector('.icon');
    document.querySelector(".js").insertAdjacentHTML("beforeend", icon.outerHTML);