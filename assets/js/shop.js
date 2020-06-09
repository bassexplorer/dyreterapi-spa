function renderShopItem(itemName) {
    const shopContainer = document.getElementById('shopContainer');

    fetch(`assets/js/items.json`)
        .then(response => response.json())
        .then((inventory) => {
            let currentItem = inventory.find(item => item.itemName === itemName);



            let pageTemplate = `<div class="product-img">
        <img src="/assets/img/big/books-and-sales/products/${currentItem.imgUrl}.jpg" alt="Cover image of the ${currentItem.itemTitle}item">
        </div>
        <div class="product-desc">
        <h3>${currentItem.itemTitle}</h3>
        <p>
        <span class="original-price">${currentItem.price}</span>
        <span class="sale-price">${currentItem.salePrice}</span></p>
        <p class="author">${currentItem.author}</p>
                                <p class="description">${currentItem.description}</p>
                                <div class="quantity-container">
                                Quantity:
                                <input type="text" value="1" placeholder="1">
                                <button onclick="sorryMsg()"> ADD TO THE CART</button>
                                </div>
                                </div>`
            shopContainer.innerHTML = pageTemplate;
            document.title = currentItem.title;

            renderBreadcrumbs(currentItem.title);

        })
        .catch(err => {
            console.error('Something went wrong.');
        });
}

function renderBreadcrumbs(pageName) {
    const breadCrumbs = document.getElementsByClassName('breadcrumbs');
    let newItem = document.createElement("li");
    newItem.innerText = pageName;
    breadCrumbs.appendChild(newItem);
}

function renderShopCategory(itemName) {
    const shopContainer = document.getElementById('shopContainer');
    const breadCrumbs = document.getElementsByClassName('breadcrumbs');

    fetch(`assets/js/items.json`)
        .then(response => response.json())
        .then((inventory) => {
            let currentItem = inventory.find(item => item.itemName === itemName);



            let pageTemplate = `<div class="product-img">
        <img src="/assets/img/big/books-and-sales/products/${currentItem.imgUrl}.jpg" alt="Cover image of the ${currentItem.itemTitle}item">
        </div>
        <div class="product-desc">
        <h3>${currentItem.itemTitle}</h3>
        <p>
        <span class="original-price">${currentItem.price}</span>
        <span class="sale-price">${currentItem.salePrice}</span></p>
        <p class="author">${currentItem.author}</p>
        <p class="description">${currentItem.description}</p>
        <div class="quantity-container">
        Quantity:
        <input type="text" value="1" placeholder="1">
        <button onclick="sorryMsg()"> ADD TO THE CART</button>
        </div>
        </div>`
            shopContainer.innerHTML = pageTemplate;
            document.title = currentItem.title;
            

        })
        .catch(err => {
            console.error('Something went wrong.');
        });
}



function sorryMsg(hide) {

    document.getElementsByClassName('contact-popup')[0].classList.add('show');

    if (hide) document.getElementsByClassName('contact-popup')[0].classList.remove('show');

}

