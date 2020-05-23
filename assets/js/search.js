let searchTerm = '';
let pagesContent =[];

function doSearch() {
    const searchBar = document.querySelector('#searchBar');
    searchTerm = searchBar.value;
    console.log(searchTerm);
}


pages.map((page,i) => {
    
    fetch(`${viewUrl}${page.name}.html`)
    .then((response) => {
        return response.text();
    })
    .then((html) => {

        pagesContent[i] = { page: page.name, content: html};

        if(pagesContent.length == pages.length){
            
           // console.log(pagesContent);
        }
        

    });
});




