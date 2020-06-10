function renderShopItem(itemName) {
    const shopContainer = document.getElementById('shopContainer');
    let kacsa = '';
    fetch(`assets/js/items.json`)
        .then(response => response.json())
        .then((inventory) => {
            let currentItem = inventory.find(item => item.itemName === itemName);

            if (currentItem.salePrice == '') {
                kacsa = ' just';
            } else {
                kecsa = '';
            }


            let pageTemplate = `<div class="product-img">
        <img src="/assets/img/big/books-and-sales/products/${currentItem.imgUrl}.jpg" alt="Cover image of the ${currentItem.itemTitle}item">
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

function renderBreadcrumbs(pageName) {
    const breadCrumbs = document.getElementsByClassName('breadcrumbs');
    let newItem = document.createElement("li");
    newItem.innerText = pageName;
    breadCrumbs.appendChild(newItem);
}

function renderShopCategory(CurrentCategoryName) {
    const itemContainer = document.getElementById('shopContainer').innerHTML = '';
    const shopContainer = document.getElementById('shopCategoryBox');
    const breadCrumbs = document.getElementsByClassName('breadcrumbs');
    shopContainer.innerHTML = '';
    let kacsa = '';


    fetch(`assets/js/items.json`)
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
}



function sorryMsg(hide) {

    document.getElementsByClassName('contact-popup')[0].classList.add('show');

    if (hide) document.getElementsByClassName('contact-popup')[0].classList.remove('show');

}


window.addEventListener('hashchange', () => {
    const shopCategoryTitle = document.getElementById('categoryTitle');

    async function FunctionAll() {

    if (window.location.hash == '#shop-books') {

            await renderActivePage('shop');
            await renderShopCategory('book');
        }
     //   shopCategoryTitle.innerText = 'Books';

    } 
    
    // else if (window.location.hash == '#shop-training-articles') {

    //     if (!window.location.hash.includes("shop")) {
    //         renderActivePage('shop');
    //     }
    //     window.onload = renderShopCategory('training-articles')
    //     shopCategoryTitle.innerText = 'Training Articles';

    // } else if (window.location.hash == '#shop-activity-toys') {

    //     if (!window.location.hash.includes("shop")) {
    //         renderActivePage('shop');
    //     }
    //     window.onload = renderShopCategory('toys')
    //     shopCategoryTitle.innerText = 'Activity Toys';

    // } else if (window.location.hash == '#shop-courses') {

    //     if (!window.location.hash.includes("shop")) {
    //         renderActivePage('shop');
    //     }
    //     window.onload = renderShopCategory('courses')
    //     shopCategoryTitle.innerText = 'Courses';

    // } else if (window.location.hash == '#shop-anatomy-models-and-posters') {

    //     if (!window.location.hash.includes("shop")) {
    //         renderActivePage('shop');
    //     }
    //     window.onload = renderShopCategory('models-and-posters')
    //     shopCategoryTitle.innerText = 'Anatomy Models & Posters';

    // } else {

    // }

});