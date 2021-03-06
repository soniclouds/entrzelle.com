function toggleConnectModal(e) {

    let outerConnectContainer = document.getElementById('connect-component-container'),
        innerConnectContainer = document.getElementById('connect--outer'),
        connectToggle = document.getElementsByClassName('connect-toggle')[0];

    // when 'connect' nav link is clicked, toggle normally
    if (e.target.className === 'connect-toggle') {
        if (innerConnectContainer.style.height !== '0%') {
            innerConnectContainer.style.height = '0%';
            innerConnectContainer.style.visibility = 'hidden';
            // outerConnectContainer.style.opacity = '0';
            setTimeout(function () { outerConnectContainer.style.opacity = '0'; }, 250);
            setTimeout(function () { outerConnectContainer.style.zIndex = '-1'; }, 500);
            connectToggle.style.color = '#B8B8B8';
        } else {
            innerConnectContainer.style.height = '100%';
            innerConnectContainer.style.visibility = 'visible';
            outerConnectContainer.style.opacity = '0.93';
            // setTimeout(function () { outerConnectContainer.style.opacity = '0.93'; }, 500);
            outerConnectContainer.style.zIndex = '1';
            connectToggle.style.color = 'white';
        }
    } else {
        // for all other links, toggle modal off
        if (innerConnectContainer.style.height !== '0%') {
            innerConnectContainer.style.height = '0%';
            innerConnectContainer.style.visibility = 'hidden';
            // outerConnectContainer.style.opacity = '0';
            setTimeout(function () { outerConnectContainer.style.opacity = '0'; }, 250);
            setTimeout(function () { outerConnectContainer.style.zIndex = '-1'; }, 750);
            connectToggle.style.color = '#B8B8B8';
        }
    }

}

export {toggleConnectModal};