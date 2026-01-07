function createCardElement(parentName, data) {
    // I assume you will have only one element with this class name
    // better aproach is to use id
    parent = document.getElementsByClassName(parentName)[0];

    parent.innerHTML += `<div class="tovar" id="${data.id}">
    <a href="#"></a>
    <img src=${data.imageSrc} alt="">
    <p class="tovarlogo">${data.productName}</p>
    <div class="tovar_info flex_between">
    <h3>${data.productPrice}грн</h3>
    ${data.avalible ? "<p>у наявності</p>" : "<p class='nope'>нєма</p>"}
    </div>
    </div>`
}
