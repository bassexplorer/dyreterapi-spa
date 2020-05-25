let searchTerm = '';
let pagesContent = [];



function doSearch() {
    const searchBar = document.getElementById("searchBar");
    window.location.hash = 'searchResults'
    const mainTag = document.getElementById('mainTag');
    mainTag.innerHTML = '';

    searchTerm = searchBar.value;
    let searchOnce = true;

    pages.map((page, i) => {

        fetch(`${viewUrl}${page.name}.html`)
            .then((response) => {
                return response.text();
            })
            .then((html) => {

                pagesContent[i] = {
                    name: page.name,
                    content: html
                };

                if (pagesContent.length == pages.length && searchOnce) {
                    findSearchTerm(searchTerm, pagesContent);
                    searchOnce = false;
                }


            });
    });
}

function findSearchTerm(searchTerm, pagesContent) {
    let matcher = new RegExp(`${searchTerm}`, "i");
    let noMatch = 0;


    pagesContent.map((term) => {

        if (matcher.test(term.content)) {


            if (term.name == '404' || term.name == 'searchResults') {
                return
            };

            mainTag.innerHTML += ` <li> <a href="#${term.name}"> ${term.name}</a> </li> `

        } else {

            noMatch++;
            if (noMatch == pagesContent.length) {
                mainTag.innerHTML = `Sorry, there is no such a thing like ${searchTerm}`;
            }

        };


    });


};

function attachListener() {

    const input = document.getElementById("searchBar");
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
           doSearch();
        }
    });

};