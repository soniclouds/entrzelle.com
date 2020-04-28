function indicateSelectedLink(e) {

    let navLinks = Array.from(document.getElementsByClassName('nav-link'));

    navLinks.map(a => a.style.textDecoration = 'none');

    if (e.target.className === 'nav-link') e.target.style.textDecoration = 'underline';
}

export {indicateSelectedLink};