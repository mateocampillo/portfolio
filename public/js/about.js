window.addEventListener('load', function() {

    let about = document.querySelector('#about-a');
    let aboutContainer = document.querySelector('#sectionAbout');

    about.addEventListener('pointerdown', function() {
        if(aboutContainer.classList.contains('claseAnimacionAbout')){
            aboutContainer.classList.remove('claseAnimacionAbout')
            aboutContainer.classList.add('claseAnimacionAboutOut')
        } else {
            aboutContainer.classList.remove('claseAnimacionAboutOut')
            aboutContainer.classList.add('claseAnimacionAbout')
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

    let englishButton = document.querySelector('#mainInfoIcons-button');

    englishButton.addEventListener('pointerdown', function() {
        alert('Coming soon');
    })
})