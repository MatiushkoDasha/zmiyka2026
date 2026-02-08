function createCardElement(parent, data) {
    // Create product card item for future manipulations
    card = document.createElement("div")
    card.classList.add("tovar")
    card.id = data.id


    // Fill the card with data
    card.innerHTML = `
    <img 
    class="lazy"
    src="${data.blurimg}"
    data-src="${data.imageSrc}"
    data-hover="${data.imageHoverSrc}"
    alt="}"
    >
    <p class="tovarlogo">${data.productName}</p>
     ${data.predinfo ? `<p class="predinfor">${data.predinfo}</p>` : ""}
    <div class="tovar_info flex_between">
    <h3>${data.productPrice}грн</h3>
    ${data.avalible ? "<p>у наявності</p>" : "<p class='nope'>нєма</p>"}
    </div>`

    const lazyObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target
            img.src = img.dataset.src
            img.dataset.loaded = "true"   
            observer.unobserve(img)
        }
    })
}, { rootMargin: "100px" })


    // Add image hover event listener
  let image = card.querySelector("img")

    image.addEventListener("mouseover", () => {
        if (image.dataset.loaded === "true" && image.dataset.hover) {
            image.src = image.dataset.hover
        }
    })

    image.addEventListener("mouseout", () => {
        if (image.dataset.loaded === "true") {
            image.src = image.dataset.src
        }
    })



    // Add click action to create detailed view
    card.onclick = () => createDetails(data)

    // Add product card to document
    parent.appendChild(card)
    lazyObserver.observe(image)

}

function createDetails(data) {
    const svg = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#1f1f1f'><path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z'/></svg>"
    const tgk = "https://t.me/Zmiyka44"

    // Get main component to add detailed card
    var main = document.querySelector("main")

    // Create clickable elements
    var cancelBtn = document.createElement("div")
    var orderBtn = document.createElement("a")
    var background = document.createElement("div")

    // Set clickable elements properties
    cancelBtn.classList.add("canel")
    cancelBtn.innerHTML = svg

    orderBtn.href = tgk
    orderBtn.innerHTML = "Замовити"

    background.classList.add("black")
    background.setAttribute("style", "display: block;")

    // Static elements

    const card = document.createElement("div");
    card.classList.add("bc", "flex");
    card.style.display = "flex";

    const img = document.createElement("img");
    img.src = data.imageSrc;
    img.alt = data.productName;

    const info = document.createElement("div");
    info.classList.add("kartca_info");

    const name = document.createElement("p");
    name.classList.add("nazva");
    name.textContent = data.productName;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `${data.productPrice}грн`;

    const hr = document.createElement("hr");

    const description = document.createElement("p");
    description.classList.add("info");
    description.textContent = data.productDescription;


    // Add everything to kartka div
    kartka = document.createElement("div")
    kartka.classList.add("kartka")
    info.append(
        name,
        price,
        hr,
        description,
        orderBtn,
        cancelBtn
    );
    card.append(img, info)

    kartka.append(background, card)

    // Add click actions
    background.onclick = () => kartka.remove();
    cancelBtn.onclick = () => kartka.remove();

    main.appendChild(kartka)
}

async function readData(dataPath) {
    const url = dataPath
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("There is no such file")
        }
        const result = await response.json();
        return result

    } catch (error) {
        console.error(error.mesage)
    }
}

function filterData(data, category) {
    // can be just a categor or "all" if you
    // need to display all the cards
    const validCategories = [
        "all",
        "keychain",
        "mousepad",
        "sticker",
        "badge",
        "pin",
        "pred"
    ]

    if (!validCategories.includes(category)) {
        throw new Error("Invalid category") // throw error if invalid category is passed
    }
    if (category === "all") {
        return data
    } else {
        return data.filter((item) => { return item.category === category })
    }

}

async function displayCards(category) {
    // Name of class of the card wrapper container
    const parentName = "tovar_main";
    const dataLocation = "https://raw.githubusercontent.com/MatiushkoDasha/zmiyka2026/refs/heads/master/data.json"

    // Load data from JSON file
    let data = await readData(dataLocation)

    // Get parent
    let parent = document.getElementById(parentName);

    // Clear parent content
    parent.innerHTML = ""

    // Get products by category
    let filtered = filterData(data, category)

    // If no items found diplay not found message
    if (filtered.length === 0) {
        parent.innerHTML = `<div class="none">
            <img src="img/z.png" alt="">
            <p>На жаль немає поки</p>
        </div>`
        return
    }
    filtered.forEach(element => {
        createCardElement(parent, element)
    });
}

document.addEventListener('DOMContentLoaded', async function() {
    displayCards("all")
    const idCategoryBinding = {
        link_main: "all",
        link_keychain: "keychain",
        link_badge: "badge",
        link_pin: "pin",
        link_mousepad: "mousepad",
        link_sticker: "sticker",
        link_pred:"pred",
    }
    Object.keys(idCategoryBinding).forEach(id => {
        document.getElementById(id).onclick = () => displayCards(idCategoryBinding[id])
    })
});

const dark = document.querySelector(".dark"),
    burger = document.querySelector(".burger"),
    listheader = document.querySelector(".listheader"),
    cancelheader = document.querySelector(".cancelheader")

burger.addEventListener("click", function() {
    listheader.style.display = "block";
    dark.style.display = "block"
})

function cancelBurger() {
    listheader.style.display = "none";
    dark.style.display = "none"
}

cancelheader.addEventListener("click", cancelBurger) 
dark.addEventListener("click", cancelBurger)

const akril1 = document.querySelector(".side");
const  akril2 = document.querySelector(".head");
const  akril3 = document.querySelector(".footer");
const  sidehide = document.querySelector(".sidehide");
const  headhide = document.querySelector(".headhide");
const  footerhide = document.querySelector(".footerhide");
const  dark_kastom = document.querySelector(".dark_kastom");

akril1.addEventListener("click", () => {
    sidehide.style.display = "block";
    dark_kastom.style.display = "block";
});

akril2.addEventListener("click", () => {
    headhide.style.display = "block";
    dark_kastom.style.display = "block";
});

akril3.addEventListener("click", () => {
    footerhide.style.display = "block";
    dark_kastom.style.display = "block";
});

dark_kastom.addEventListener("click", () => {
    sidehide.style.display = "none";
    headhide.style.display = "none";
    footerhide.style.display = "none";
    dark_kastom.style.display = "none";
});


const blurdivs = document.querySelectorAll(".blur_img");
blurdivs.forEach(div => {
    const img = div.querySelector("img")

    function loaded() {
      div.classList.add('loaded')
    }

    if (img.complete) {
        loaded()
    } else{
        img.addEventListener("load", loaded)
    }
})