function renderShopItem(itemName) {
    const shopContainer = document.getElementById('shopContainer');
    shopContainer.style.margin = '5rem 0';
    let kacsa = '';
    fetch(`assets/js/items.js`)
        .then(response => response.json())
        .then((inventory) => {
            let currentItem = inventory.find(item => item.itemName === itemName);

            if (currentItem.salePrice == '') {
                kacsa = ' just';
            } else {
                kecsa = '';
            }


            let pageTemplate = `<div class="product-img">
        <img src="assets/img/big/books-and-sales/products/${currentItem.imgUrl}.jpg" alt="Cover image of the ${currentItem.itemTitle}item">
        </div>
        <div class="product-desc">
        <h3>${currentItem.itemTitle}</h3>
        <p>
        <span class="original-price${kacsa}">${currentItem.price}</span>
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

        }).catch(err => {
            console.error('Something went wrong.');
        });
}

function renderShopCategory(CurrentCategoryName,event) {
    const itemContainer = document.getElementById('shopContainer').innerHTML = '';
    const shopContainer = document.getElementById('shopCategoryBox');
    const breadCrumbs = document.getElementsByClassName('breadcrumbs');
    shopContainer.innerHTML = '';
    let kacsa = '';

   

    fetch(`assets/js/items.js`)
        .then(response => response.json())
        .then((inventory) => {

            inventory.map(item => {


                if (item.category == CurrentCategoryName) {

                    if (item.salePrice == '') {
                        kacsa = ' just';
                    } else {
                        kecsa = '';
                    }
                    shopContainer.innerHTML += `
                            <div class="card">
                            <a onclick="renderShopItem('${item.itemName}')">
                                <img src="assets/img/medium/books-and-sales/products/${item.imgUrl}.jpg"
                                    alt="Cover image of the product">
                                <div class="content">
                                    <h4>${item.itemTitle}</h4>
                                    <p> <span class="original-price${kacsa}">${item.price}</span>
                                        <br>
                                        <span class="sale-price">${item.salePrice}</span>
                                    </p>
                                </div>
                            </a>
                        </div>`;
                    document.title = 'Shop Category | Center for Dyreterapi';
                }


            })


        })
        .catch(err => {
            console.error('Something went wrong.');
        });

        renderTitleOfCategory(event);
}



function sorryMsg(hide) {

    document.getElementsByClassName('contact-popup')[0].classList.add('show');

    if (hide) document.getElementsByClassName('contact-popup')[0].classList.remove('show');

}


function renderShopPage(categoryName,event){

    fetch(`views/shop.html`)

        .then((response) => {
            return response.text();
        })
        .then((html) => {
            // if it is the first time loading it creates a main tag with an ID, so it can be modified later.
            let mainTag = document.getElementById('mainTag');

            if (mainTag == null) {
                mainTag = document.createElement('main');
                mainTag.id = 'mainTag';
                rootDiv.appendChild(mainTag);
            }
            // if the main tag is existing render the page.
            mainTag.innerHTML = html;
        }).then(()=>{
            renderShopCategory(categoryName,event);
        })
};


function renderTitleOfCategory(event) {
    const shopCategoryTitle = document.getElementById('categoryTitle');
    shopCategoryTitle.innerText = event.target.innerText;

    
}


function renderBreadcrumbs(itemToAdd){

    const breadCrumbsContainer = document.getElementsByClassName('breadcrumbs')[0];

    breadCrumbsContainer.innerHTML
    console.log(breadCrumbsContainer);
}
