// This file is the main engine of the SPA site that handels the page changes.

const viewUrl = 'views/'; // source where the html files are located
const rootDiv = document.getElementById('appRoot'); // Main div that containts the site
let firstLoad = true;

// Array of pages that the SPA could use with meta informations.
const pages = [{
        name: 'home',
        title: 'Home page',
        description: 'This is the home page.',
        keywords: 'home page,landing page,firts look',
        author: 'Ben - 0',
        rootPage: true
    },
    {
        name: 'about',
        title: 'About us',
        description: 'This is where you find information about us.',
        keywords: 'story,hi,nice,to,meet,you.',
        author: 'Ben - 1',
        rootPage: false
    },
    {
        name: 'contact',
        title: 'Contact Us',
        description: 'This is where you can contact us in case you have any question',
        keywords: 'Contact page,form,question,',
        author: 'Ben - 2',
        rootPage: false
    },
    {
        name: '404',
        title: '404 ERROR',
        description: 'This page is not found,please try again later.',
        keywords: 'error,missing page,deleted page, 404,',
        author: 'None',
        rootPage: false
    }
];

//Partials loading function that builds the site and run the main render function.
function partialRender() {

    if(firstLoad){
        rootDiv.innerHTML = '';
        firstLoad = false;
    }
    // Name all the partials we want to display from html files
    const partialNames = ['nav', 'header', 'main', 'footer'];
    const pageHash = window.location.hash.substr(1);
    // Collect all the partials in one promise to keep the fetching and the loading consistent.
    Promise.all(partialNames.map(partial => {

        if (partial !== 'main') {

            fetch(`${viewUrl}${partial}.html`)
                .then((response) => {
                    return response.text();
                })
                .then((html) => {
                    rootDiv.innerHTML = rootDiv.innerHTML + html;
                });
        } else {
            //start the render for the active page.
            renderActivePage(pageHash);
            
        }

    }));

};

partialRender();

// this function runs when a hash change detected in the URL and render the page according to the pages array.
function renderActivePage(partial) {

    // if no imput then it will bring the SPA to the rootpage which is the landing page.
    if (!partial) {
        partial = pages.find(page => page.rootPage).name;
    }
    // if something happens and unexpectid hash appears in the URL 
    //it give the 404 page because it is not in the array so it is not a valid page.
    if (!pages.find(page => page.name === partial)) {
        partial = '404';
    }
    // change the page title.
    document.title = pages.find(page => page.name === partial).title

    renderMetaData(partial);
    // with the valid partial name it fetches the correct site html.
    fetch(`${viewUrl}${partial}.html`)
    
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
    });

};

// A function that checks the URL change and lanch the render page function.
window.addEventListener('hashchange', function (event) {
    hasChanged();
});

function hasChanged() {
    const page = window.location.hash.substr(1);
    renderActivePage(page);
};

function renderMetaData(partial){

    const head = document.getElementsByTagName('head')[0];
    const currentMeta = pages.find(page => page.name === partial);

    const metaDesc = document.querySelector('[name="description"]');
    const metaKeywords = head.querySelector('[name="keywords"]');
    const metaAuthor = head.querySelector('[name="author"]');

    metaDesc.content = currentMeta.description;
    metaKeywords.content = currentMeta.keywords;    
    metaAuthor.content = currentMeta.author;    

};