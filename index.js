function hideUnwanted(code1, code2) {
    $(code1).hide();
    $(code2).hide();
}

function renderAbout() {
    $('nav').on('click', '.eli-reiner', function () {
        hideUnwanted('#contact', '#portfolio');
        $('#about').show()
    })
}

function renderContact() {
    $('nav').on('click', '.contact', function () {
        hideUnwanted('#about', '#portfolio');
        $('#contact').show();
    })
}

function renderPortfolio() {
    $('nav').on('click', '.portfolio', function () {
        hideUnwanted('#contact', '#about');
        $('#portfolio').show();
    })
}

function launchPortfolio() {
    hideUnwanted('#contact', '#portfolio');
    renderAbout();
    renderContact();
    renderPortfolio();
}

$(launchPortfolio);