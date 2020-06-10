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

function renderShopCategory(CurrentCategoryName,event) {
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

        renderTitleOfCategory(event);
}



function sorryMsg(hide) {

    document.getElementsByClassName('contact-popup')[0].classList.add('show');

    if (hide) document.getElementsByClassName('contact-popup')[0].classList.remove('show');

}


// function renderShopPage(categoryName,categoryTitle) {

//     if (!window.location.hash.includes('#shop')) {
//         async function Function1() {
//             await renderActivePage('shop');
//             await renderShopCategory(categoryName);
//             await renderTitleOfCategory(categoryTitle)
//         }
//         Function1();
//     }else{
//         async function Function2() {
//             await renderShopCategory(categoryName);
//             await renderTitleOfCategory(categoryTitle)
//         }
//         Function2();
//     }

// }


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
}



//     if (!window.location.hash.includes('shop-')) {
//         async function FunctionAll() {
//             await renderActivePage('shop');
//             await renderShopCategory('book');
//             await renderTitleOfCategory('Books')
//         }
//         FunctionAll();
//     }

//     else if (window.location.hash == '#shop-books') {

//         async function FunctionAll() {
//             await renderShopCategory('book');
//             await renderTitleOfCategory('Books')
//         }
//         FunctionAll();


//     } else if (window.location.hash == '#shop-training-articles') {

//         async function FunctionAll() {
         
//             await renderShopCategory('training-articles');
//             await renderTitleOfCategory('Training Articles')
//         }
//         FunctionAll();


//     } else if (window.location.hash == '#shop-activity-toys') {

//         async function FunctionAll() {
           
//             await renderShopCategory('toys');
//             await renderTitleOfCategory('Activity Toys')
//         }
//         FunctionAll();

//     } else if (window.location.hash == '#shop-courses') {

//         async function FunctionAll() {
          
//             await renderShopCategory('courses');
//             await renderTitleOfCategory('Courses')
//         }
//         FunctionAll();


//     } else if (window.location.hash == '#shop-anatomy-models-and-posters') {

//         async function FunctionAll() {
            
//             await renderShopCategory('models-and-posters');
//             await renderTitleOfCategory('Anatomy Models & Posters')
//         }
//         FunctionAll();

//     } else {
//         console.log('some eror accured, sorry. :( ')
//     }




// });

function renderTitleOfCategory(event) {
    const shopCategoryTitle = document.getElementById('categoryTitle');
    shopCategoryTitle.innerText = event.target.innerText;
}
