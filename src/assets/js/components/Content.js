function setContentContainerHeight() {
    var contentTop = document.getElementById('ccc-outer').offsetTop,
        contentContainer = document.getElementById('ccc-outer');

    contentContainer.style.height = window.innerHeight - contentTop - '50' + 'px';

}

export {setContentContainerHeight};