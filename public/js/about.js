function setUtils() {

    let about = document.querySelector('#about-a');
    let aboutContainer = document.querySelector('#sectionAbout');
    let body = document.querySelector('body');

    about.addEventListener('pointerdown', function() {
        if(aboutContainer.classList.contains('claseAnimacionAbout')){
            aboutContainer.classList.remove('claseAnimacionAbout')
            aboutContainer.classList.add('claseAnimacionAboutOut')
            body.classList.remove('stop-scroll')
        } else {
            aboutContainer.classList.remove('claseAnimacionAboutOut')
            aboutContainer.classList.add('claseAnimacionAbout')
            body.classList.add('stop-scroll')
        }
    });

    let crossAbout = document.querySelector('#cerrarAbout');

    crossAbout.addEventListener('pointerdown', function() {
        aboutContainer.classList.remove('claseAnimacionAbout')
        aboutContainer.classList.add('claseAnimacionAboutOut')
    });

    let infoAbout = document.querySelector('#mainInfo-button');

    infoAbout.addEventListener('pointerdown', function() {
        aboutContainer.classList.remove('claseAnimacionAboutOut')
        aboutContainer.classList.add('claseAnimacionAbout')
    });

    let infoAboutDesktop = document.querySelector('#MDD-button');

    infoAboutDesktop.addEventListener('pointerdown', function() {
        aboutContainer.classList.remove('claseAnimacionAboutOut')
        aboutContainer.classList.add('claseAnimacionAbout')
    });

};

document.addEventListener('load', setTimeout(setUtils, 1000));