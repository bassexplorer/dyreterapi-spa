// creating the main Search function that handels the search term
function doSearch() {
    //declare the variable for the search term and the variable where we store the pages string values.
    let searchTerm = '';
    let pagesContent = [];
    // fing the search bar and the mainTag on the site 
    const searchBar = document.getElementById("searchBar");
    const mainTag = document.getElementById('mainTag');
    // change the hash to searchResults to be able to differentiate 
    //between the other pages when the usert start a seach from a page.
    window.location.hash = 'searchResults'

    //empty the main tag before add the search results.
    mainTag.innerHTML = '';

    // pass the search term into the variable.
    searchTerm = searchBar.value;
    // create a variable to be able to control the prells
    let searchOnce = true;

    // go through the pages that is declared in the main.js file.
    pages.map((page, i) => {

        //collect al the pages content.
        fetch(`${viewUrl}${page.name}.html`)
            .then((response) => {
                return response.text();
            })
            .then((html) => {

                // past the content into an Array of object that we will itarate through 
                pagesContent[i] = {
                    name: page.name,
                    content: html
                };
                    // if the pages content lenght is equal to the pages lenght that means 
                    // it went through all the pages and if the searchOnce is true it runs the actual search function
                if (pagesContent.length == pages.length && searchOnce) {
                    // we pass the search term that the user wrote in the text area and the object array that contains the pages string content.
                    findSearchTerm(searchTerm, pagesContent);
                    // set the it false to prevent the function to run it again.
                    searchOnce = false;
                }


            })
            .catch(err => {
                console.error('The page is not found, sorry.')
              });
    });
}

// the function that goes through the pages.
function findSearchTerm(searchTerm, pagesContent) {

    // create a regular expresion that makes the search case insensitive so you You yOu yoU etc are give the same results.
    let matcher = new RegExp(`${searchTerm}`, "i");
    // them no match counter that will be compared with the actual pages number
    // and if are the same means there is no search result.
    let noMatch = 0;

    // go through the pages
    pagesContent.map((term) => {

        //test page content to the Regular expresion.
        if (matcher.test(term.content)) {

            // Skip the error page and the not really existing searcResult page.
            if (term.name == '404' || term.name == 'searchResults') {
                return
            };

            // create an LI for every search result.
            mainTag.innerHTML += ` <li> <a href="#${term.name}"> ${term.name}</a> </li> `

        } else {

            // if there is nothing on the specific site add +1 to the no match counter
            noMatch++;
            // if the page leng and the no match counter are the same means no search result on the website.
            if (noMatch == pagesContent.length) {
                mainTag.innerHTML = `Sorry, there is no such a thing like ${searchTerm}`;
            }

        };


    });


};


// this function add a listener to the text area after the user click inside it
// so in this way the ENTER hit will be handled and start the search function.
function attachListener() {

    // find the search bar.
    const input = document.getElementById("searchBar");
    // attach the event listener that listens for the enter hit.
    input.addEventListener("keyup", function (event) {
        // the enter keykode is 13 so if the event is equal to it we start the search.
        if (event.keyCode === 13) {
           doSearch();
        }
    });

};