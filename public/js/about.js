window.addEventListener('load', function() {

    let about = document.querySelector('#about-a');
    let aboutContainer = document.querySelector('#sectionAbout');

    about.addEventListener('click', function(e) {
        e.preventDefault();
        if(aboutContainer.classList.contains('claseAnimacionAbout')){
            aboutContainer.classList.remove('claseAnimacionAbout')
            aboutContainer.classList.add('claseAnimacionAboutOut')
        } else {
            aboutContainer.classList.remove('claseAnimacionAboutOut')
            aboutContainer.classList.add('claseAnimacionAbout')
        }
    });

    let crossAbout = document.querySelector('#cerrarAbout');

    crossAbout.addEventListener('click', function() {
        aboutContainer.classList.remove('claseAnimacionAbout')
        aboutContainer.classList.add('claseAnimacionAboutOut')
    });

    let infoAbout = document.querySelector('#mainInfo-button');

    infoAbout.addEventListener('click', function() {
        aboutContainer.classList.remove('claseAnimacionAboutOut')
        aboutContainer.classList.add('claseAnimacionAbout')
    });

    let englishButton = document.querySelector('#mainInfoIcons-button');

    englishButton.addEventListener('click', function() {
        alert('Coming soon');
    })
})