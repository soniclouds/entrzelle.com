function toggleConnectModal(e) {

    let outerConnectContainer = document.getElementById('connect-component-container'),
        innerConnectContainer = document.getElementById('connect--outer');

    // when 'connect' nav link is clicked, toggle normally
    if (e.target.className === 'connect-toggle') {
        if (innerConnectContainer.style.height !== '0%') {
            innerConnectContainer.style.height = '0%';
            innerConnectContainer.style.visibility = 'hidden';
            setTimeout(function () { outerConnectContainer.style.zIndex = '-1'; }, 500);
        } else {
            innerConnectContainer.style.height = '100%';
            innerConnectContainer.style.visibility = 'visible';
            outerConnectContainer.style.zIndex = '1';
        }
    } else {
        // for all other links, toggle modal off
        if (innerConnectContainer.style.height !== '0%') {
            innerConnectContainer.style.height = '0%';
            innerConnectContainer.style.visibility = 'hidden';
            setTimeout(function () { outerConnectContainer.style.zIndex = '-1'; }, 500);
        }
    }

}

export {toggleConnectModal};