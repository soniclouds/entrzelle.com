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

export { setContentContainerHeight, setPageTitle};