function getStrapiEndpoint() {
    // note: this should be refactored to pull a global environment value (not yet implemented)
    // return 'http://64.225.40.59:1337';

    // UPDATE: using url of newly registered domain (with ssl proxy) for remote strapi app
    return 'https://cms.entrzelle.com';

}

function setPageTitle (pageName) {
    // console.log(pageName.toLowerCase);
    // note: this could be refactored
    if (pageName.toLowerCase() !== 'home') {
        document.title = "ENTRZELLE | " + pageName;
    } else {
        document.title = "ENTRZELLE | Official Website";
    }
}

function setContentContainerHeight() {
    var contentTop = document.getElementById('ccc-outer').offsetTop,
        contentContainer = document.getElementById('ccc-outer');

    contentContainer.style.height = window.innerHeight - contentTop - '50' + 'px';

}

export { setContentContainerHeight, setPageTitle, getStrapiEndpoint };