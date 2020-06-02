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
        image: 'assets/img/some.jpg',
        author: 'Ben - 0',
        rootPage: true
    },
    {
        name: 'about',
        title: 'About us',
        description: 'This is where you find information about us.',
        keywords: 'story,hi,nice,to,meet,you.',
        image: 'assets/img/about/team.jpg',
        author: 'Zsofia',
        rootPage: false
    },
    {
        name: 'contact',
        title: 'Contact Us',
        description: 'This is where you can contact us in case you have any question',
        keywords: 'Contact page,form,question,',
        image: 'assets/img/some.jpg',
        author: 'Ben - 2',
        rootPage: false
    },
    {
        name: '404',
        title: '404 ERROR',
        description: 'This page is not found,please try again later.',
        keywords: 'error,missing page,deleted page, 404,',
        image: 'assets/img/some.jpg',
        author: 'None',
        rootPage: false
    }
];

//Partials loading function that builds the site and run the main render function.
function partialRender() {

    if (firstLoad) {
        rootDiv.innerHTML = '';
        firstLoad = false;
    }
    // Name all the partials we want to display from html files
    const partialNames = ['nav', 'header', 'main', 'footer'];
    // Collect all the partials in one promise to keep the fetching and the loading consistent.
    Promise.all(partialNames.map(partial => {

            if (partial !== 'main') {

                fetch(`${viewUrl}${partial}.html`)
                    .then((response) => {
                        return response.text();
                    })
                    .then((html) => {
                        rootDiv.innerHTML = rootDiv.innerHTML + html;
                    })
                    .catch(err => {
                        console.error('The partial is not found.');
                    });
            } else {
                //start the render for the active page.
                const pageHash = window.location.hash.substr(1)
                renderActivePage(pageHash);
            }

        }))
        .then(
            // after we renderd everything we add the Script tags 
            // in this way the scripts run after the html elements are in place.
            // so it can modify the DOM

            //loop through the partials end leave out the main because we are already in the main JS 
            //and the footer because usually there is no scripts in the footer.
            partialNames.map(partial => {

                if (partial !== 'main' && partial !== 'footer') {
                    loadScript(partial);
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
        })
        .then(() => {
            // start the function that handels the javascript files and render the tags inside the head.
            // for the current page loaded in
            loadScript(partial);
        })
        // if something happen and something can be loaded inside.
        .catch(err => {
            console.error('The page is not found.')
        });

};

// A function that checks the URL change and lanch the render page function.
window.addEventListener('hashchange', function (event) {
    const pageHash = window.location.hash.substr(1);

    // With this we ignore the not existing SearchResults has so the page will not be redirected to it.
    if (pageHash !== 'searchResults') {
        renderActivePage(pageHash);
    }
});


// this function fills the head with metadata 
// this function just stimulate how the website code would look like if it would be server side rendered.
function renderMetaData(partial) {

    // find the head where it renders all the meta data.
    const head = document.getElementsByTagName('head')[0];
    // fint the current page metadata belonging to it. 
    const currentMeta = pages.find(page => page.name === partial);

    // find the tags in the head
    const metaDesc = head.querySelector('[name="description"]');
    const metaKeywords = head.querySelector('[name="keywords"]');
    const metaAuthor = head.querySelector('[name="author"]');
    // write the data insite the tags and render in the HTML
    metaDesc.content = currentMeta.description;
    metaKeywords.content = currentMeta.keywords;
    metaAuthor.content = currentMeta.author;

    // open graph meta.
    const metaOgTitle = head.querySelector('[property="og:title"]');
    const metaOgDesc = head.querySelector('[property="og:description"]');
    const metaOgUrl = head.querySelector('[property="og:url"]');
    const metaOgImage = head.querySelector('[property="og:image"]');

    metaOgTitle.content = document.title;
    metaOgDesc.content = currentMeta.description;
    metaOgUrl.content = window.location.href;
    metaOgImage.content = currentMeta.image;

    // twitter card meta
    const metaTwitterTitle = head.querySelector('[name="twitter:title"]');
    const metaTwitterDesc = head.querySelector('[name="twitter:description"]');
    const metaTwitterImage = head.querySelector('[name="twitter:image"]');

    metaTwitterTitle.content = document.title;
    metaTwitterDesc.content = currentMeta.description;
    metaTwitterImage.content = currentMeta.image;

};

function loadScript(partial) {
    const head = document.getElementsByTagName('head')[0];
    const fileSrc = `assets/js/${partial}.js`;

    // find the tag that contains tha previous javascript file url.
    const scriptSrc = head.querySelector('[data-type="script"]');
    // if it is exist then remove it from the head
    if (scriptSrc !== null) {
        scriptSrc.remove();
    };
    // then create it again. in this way the browser will dinamically compile the JS file.
    let scriptTag = document.createElement('script');
    scriptTag.dataset.type = 'script';
    scriptTag.type = 'text/javascript';
    scriptTag.src = fileSrc;
    head.appendChild(scriptTag);
};