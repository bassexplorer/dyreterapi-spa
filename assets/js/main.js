// This file is the main engine of the SPA site that handels the page changes.
// The SPA Engine made by Mark Bence Kiss 2020.
const viewUrl = 'views/'; // source where the html files are located
const rootDiv = document.getElementById('appRoot'); // Main div that containts the site
let firstLoad = true;

// Array of pages that the SPA could use with meta informations.
const pages = [{
        name: 'home',
        title: 'Home page | Center for Dyreterapi',
        description: 'This is the home page.',
        keywords: 'home page,landing page,first look',
        image: 'assets/img/medium/home/horses-and-dogs.jpg',
        author: 'Ben',
        rootPage: true
    },
    {
        name: 'about',
        title: 'About us | Center for Dyreterapi',
        description: 'This is where you find information about us.',
        keywords: 'story,hi,nice,to,meet,you.',
        image: 'assets/img/small/about/team.png',
        author: 'Zsofia',
        rootPage: false
    },
    {
        name: 'practical-info',
        title: 'Practical Info | Center for Dyreterapi',
        description: 'Find practical guidance',
        keywords: 'payment,cancellation,accommodation,travel',
        image: 'assets/img/small/practical_info/practical_hero(s).png',
        author: 'Zsofia',
        rootPage: false
    },
    {
        name: 'contact',
        title: 'Contact Us | Center for Dyreterapi',
        description: 'This is where you can contact us in case you have any question',
        keywords: 'contact page,form,question,',
        image: 'assets/img/small/contact/contact-us-header.jpg',
        author: 'Ben',
        rootPage: false
    },

    {
        name: 'horse-behavior-and-learning-psychology',
        title: 'Horse Behavior and Learning Psychology',
        description: 'This is where you find out about our horse behavior courses',
        keywords: 'horses, behavior, teaching',
        image: 'assets/img/small/education-and-courses/horse-behavior-and-beaching-pshycology.jpg',
        author: 'Subeh',
        rootPage: false
    },
    {
        name: 'education-and-courses',
        title: 'Education & Courses',
        description: 'This is where you find out about our courses and education',
        keywords: 'courses, education, dogs, cats, horses',
        image: 'assets/img/medium/education-and-courses/info-day-and-workshop-horse.jpg',
        author: 'Ben',
        rootPage: false
    },
    {
        name: 'feed-consulting',
        title: 'Feed Consulting | Center for Dyreterapi',
        description: 'Here you can find information about animal feeding and our consultation',
        keywords: 'training, feeding, animal, consultation, dog, healthy, nutrition, food',
        image: 'assets/img/medium/feed-consulting/dog-eating.jpg',
        author: 'Ben',
        rootPage: false
    },
    {
        name: 'nutrition-therapy',
        title: 'Nutrition Therapy | Center for Dyreterapi',
        description: 'Here you can find information about proper nutrition and our therapy offer',
        keywords: 'training, feeding, animal, consultation, dog, healthy, nutrition, food',
        image: 'assets/img/medium/nutrition-therapy/potato.jpg',
        author: 'Ben',
        rootPage: false
    },
    {
        name: 'training-vra',
        title: 'Training in Vrå | Center for Dyreterapi',
        description: 'Training in Vrå for you and your beloved dog.',
        keywords: 'training,activities,information,dog,puppy',
        image: 'assets/img/medium/training/cat_train-vra.jpg',
        author: 'Ben',
        rootPage: false
    },
    {
        name: 'training-hirtshals',
        title: 'Training in Hirtshals | Center for Dyreterapi',
        description: 'Training in Hirtshals for you and your beloved dog.',
        keywords: 'training, dog, puppy, healhty, fitness, hirtshals',
        image: 'assets/img/some.jpg',
        author: 'Ben',
        rootPage: false
    },
    {
        name: 'training',
        title: 'Training | Center for Dyreterapi',
        description: 'Here you can find a lot of information about our training activities and other services',
        keywords: 'training,activities,services,categories,information,dog,horses,nutrition',
        image: 'assets/img/medium/training/cat_indi-dog-train.jpg',
        author: 'Ben',
        rootPage: false
    },
    {
        name: 'shop',
        title: 'Shop | Center for Dyreterapi',
        description: 'Here you can order from our webshop.',
        keywords: 'training, courses, books,articles, posters',
        image: 'assets/img/medium/privacy_policy/privacy_policy(m).jpg',
        author: 'Ben',
        rootPage: false
    },
    {
        name: 'treatment-and-therapy',
        title: 'Treatment & Therapy| Center for Dyreterapi',
        description: 'Here you can find information about our Treatments and Therapy possibilities',
        keywords: 'treatment,therapy,categories,information,dog,horses',
        image: 'assets/img/medium/treatment-and-therapy/cat_physiotherapeutic-training-horses.jpg',
        author: 'Ben',
        rootPage: false
    },
    {
        name: 'therapy-information',
        title: 'Physiurgical Therapy Information| Center for Dyreterapi',
        description: 'Here you can find information about Physiurgical Therapy',
        keywords: 'treatment,therapy,information,dog,horses,cranio sacral,massage,laser,thermography,joint mobilization',
        image: 'assets/img/medium/treatment-and-therapy/cat_physiurgical-therapy-dog-horse.jpg',
        author: 'Ben',
        rootPage: false
    },
    {
        name: 'therapy-for-dogs',
        title: 'Therapy for dogs | Center for Dyreterapi',
        description: 'Here you can find information about our therapies for dogs',
        keywords: 'treatment,therapy,information,dog,behavior problems,consultation',
        image: 'assets/img/medium/treatment-and-therapy/cat_therapy-for-dogs.jpg',
        author: 'Ben',
        rootPage: false
    },
    {
        name: 'therapy-for-horses',
        title: 'Therapy for horses | Center for Dyreterapi',
        description: 'Here you can find information about our therapies for horses',
        keywords: 'treatment,therapy,information,horse,behavior problems,consultation,domestic',
        image: 'assets/img/medium/treatment-and-therapy/cat_therapy-for-horses.jpg',
        author: 'Ben',
        rootPage: false
    },
    {
        name: 'water-treadmills-for-dogs',
        title: 'Water treadmills for dogs | Center for Dyreterapi',
        description: 'Here you can find information about our water treadmill method for dogs',
        keywords: 'treatment,therapy,information,dog,training,water,treadmill,rehabilitation,fitness,strength',
        image: 'assets/img/medium/treatment-and-therapy/cat_water-treadmills-for-dogs.jpg',
        author: 'Ben',
        rootPage: false
    },
    {
        name: 'physiotherapeutic-training-for-horses',
        title: 'Physiotherapeutic training for horses | Center for Dyreterapi',
        description: 'Here you can find information about our physiotherapeutic training for horses',
        keywords: 'treatment,therapy,information,horse,training,physiotherapy',
        image: 'assets/img/medium/treatment-and-therapy/cat_physiotherapeutic-training-horses.jpg',
        author: 'Ben',
        rootPage: false
    },
    {
        name: 'physiotherapeutic-training-for-dogs',
        title: 'Physiotherapeutic training for dogs | Center for Dyreterapi',
        description: 'Here you can find information about our physiotherapeutic training for dogs',
        keywords: 'treatment,therapy,information,dogs,training,physiotherapy',
        image: 'assets/img/medium/treatment-and-therapy/cat_physiotherapeutic-training-dogs.jpg',
        author: 'Ben',
        rootPage: false
    },
    {
        name: 'bachs-flower-remedies',
        title: "Bach's flower remedies | Center for Dyreterapi",
        description: "Here you can find information about Bach's flower remedies",
        keywords: 'treatment,therapy,information,dogs,flower,remedy',
        image: 'assets/img/medium/treatment-and-therapy/cat_bachs-flower-remedies.jpg',
        author: 'Ben',
        rootPage: false
    },
    {

        name: 'privacy-policy',
        title: 'Privacy policy | Center for Dyreterapi',
        description: 'We are an open book',
        keywords: 'cookies,personal information,complaints,',
        image: 'assets/img/small/privacy_policy/privacy_policy(s).png',
        author: 'Zsofia',
        rootPage: false
    },
    {
        name: '404',
        title: '404 ERROR',
        description: 'This page is not found,please try again later.',
        keywords: 'error,missing page,deleted page, 404,',
        image: 'assets/img/medium/practical_info/practical_hero(m).png',
        author: 'Ben',
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
    const partialNames = ['nav', 'main', 'footer'];
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
            // after we rendered everything we add the Script tags 
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

    // if no input then it will bring the SPA to the rootpage which is the landing page.
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
    if (pageHash !== 'shop-books' && pageHash !== 'shop-training-articles' && pageHash !== 'shop-activity-toys' && pageHash !== 'shop-anatomy-models-and-posters' && pageHash !== 'shop-courses') {
        renderActivePage(pageHash);
    } else {
        loadScript('shop');
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
    // if the partial name shop means the shop page is loaded in then prevent the SPA from load the shop js inside the head.
    if (partial == 'shop') {
        return
    }
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