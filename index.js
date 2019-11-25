function hideUnwanted(code1, code2) {
    $(code1).hide();
    $(code2).hide();
}

function renderAbout() {
    $('nav').on('click', '.eli-reiner', function () {
        hideUnwanted('#js-main-contact', '#portfolio');
        $('#about').show()
    })
}

function renderContact() {
    $('nav').on('click', '.contact', function () {
        hideUnwanted('#about', '#portfolio');
        $('#js-main-contact').show();
    })
}

function renderPortfolio() {
    $('nav').on('click', '.portfolio', function () {
        hideUnwanted('#js-main-contact', '#about');
        $('#portfolio').show();
    })
}

function launchPortfolio() {
    hideUnwanted('#js-main-contact', '#portfolio');
    renderAbout();
    renderContact();
    renderPortfolio();
}

$(launchPortfolio);