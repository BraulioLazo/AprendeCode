

function registerServiceWorkers() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/serviceWorkers.js', { scope: '/' }).then(function () {
            console.log("Registro Exitoso");
        }).catch(error => {
            console.error(`Hemos tenido un inconveniente al registrar el service Worker: `, error);
        });
    } else {
        console.error("Su navegador no es compatible con Service Workers");
    }

    navigator.serviceWorker.addEventListener('message', event => {
        if (event.data.action === 'swActivated') {
            animateLoading();
        }
    });
}
window.addEventListener('load', registerServiceWorkers);



const updateBody = (body) => {
    if (!document.querySelector('.animation-main-container')) {
        body.insertAdjacentHTML('beforeend', `
        <div class="animation-main-container">
             <div class="logo-container">
                 <img src="/assets/logo/android-chrome-512x512.webp" alt="AprendeCode Logo">
             </div>

             <h3>Almacenando recursos en caché...</h3>

             <div class="loading-animation-container">
                 <div class="progress-bar-container">
                     <div class="progress-bar"></div>
                 </div>
             </div>
         </div>
        `);
    }
};


function animateLoading() {

    const body = document.querySelector('body');
    updateBody(body);
    body.classList.add('no-scroll');
    const progressBar = document.querySelector('.progress-bar');
    const logoContainer = document.querySelector('.logo-container');
    const animationMainContainer = document.querySelector('.animation-main-container');

    let currentProgress = 0;
    const maxProgress = 100;
    let currentDelay = 0;

    let speedIncreaseCounter = 0;


    function updateProgress() {

        progressBar.style.width = `${currentProgress}%`;

        if (currentProgress < maxProgress) {
            currentProgress++;
            speedIncreaseCounter++;


            if (speedIncreaseCounter === 3) {
                speedIncreaseCounter = 0;
                currentDelay += 1;
            }

            setTimeout(updateProgress, currentDelay);
        } else {
            logoContainer.classList.add('logo-container-shadow');
            setTimeout(() => {
                logoContainer.classList.remove('logo-container-shadow');
                animationMainContainer.style.opacity = '0';

                setTimeout(() => {
                    animationMainContainer.style.display = 'none';
                    body.classList.remove('no-scroll');
                }, 300);
            }, 300);

        }
    }

    updateProgress();
}

