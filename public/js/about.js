function setUtils() {

    let about = document.querySelector('#about-a');
    let aboutContainer = document.querySelector('#sectionAbout');
    let body = document.querySelector('body');

    about.addEventListener('pointerdown', function() {
        if(aboutContainer.classList.contains('claseAnimacionAbout')){
            aboutContainer.classList.remove('claseAnimacionAbout')
            aboutContainer.classList.add('claseAnimacionAboutOut')
            aboutContainer.classList.remove('allow-scroll')
            body.classList.remove('stop-scroll')
        } else {
            aboutContainer.classList.remove('claseAnimacionAboutOut')
            aboutContainer.classList.add('claseAnimacionAbout')
            body.classList.add('stop-scroll')
            aboutContainer.classList.add('allow-scroll')
            aboutContainer.scrollIntoView()
        }
    });

    let crossAbout = document.querySelector('#cerrarAbout');

    crossAbout.addEventListener('pointerdown', function() {
        aboutContainer.classList.remove('claseAnimacionAbout')
        aboutContainer.classList.add('claseAnimacionAboutOut')
        aboutContainer.classList.remove('allow-scroll')
        body.classList.remove('stop-scroll')
    });

    let infoAbout = document.querySelector('#mainInfo-button');

    infoAbout.addEventListener('pointerdown', function() {
        aboutContainer.classList.remove('claseAnimacionAboutOut')
        aboutContainer.classList.add('claseAnimacionAbout')
        aboutContainer.classList.add('allow-scroll')
        body.classList.add('stop-scroll')
        aboutContainer.scrollIntoView()
    });

    let infoAboutDesktop = document.querySelector('#MDD-button');

    infoAboutDesktop.addEventListener('pointerdown', function() {
        aboutContainer.classList.remove('claseAnimacionAboutOut')
        aboutContainer.classList.add('claseAnimacionAbout')
        aboutContainer.classList.add('allow-scroll')
        body.classList.add('stop-scroll')
        aboutContainer.scrollIntoView()
    });

};

window.addEventListener('load', () => setTimeout(setUtils, 500));