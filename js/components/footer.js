class MyFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    updateFooterYear() {
        const currentYear = new Date().getFullYear();
        this.shadowRoot.getElementById("copyright__year").textContent = `${currentYear}`;
    }

    connectedCallback() {
        this.render();
        this.updateFooterYear();
    }

    render() {
        this.shadowRoot.innerHTML = `

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Outfit', sans-serif;
} 

h2 {
    font-size: 40px;
    line-height: 45px;
}

h3 {
    font-size: 22px;
    line-height: 27px;
}

p{
    font-size: 16px;
}

a{
    text-decoration: none;
}

.section-container {
    display: flex;
    width: var(--width-main);
}


.btn-link-container {
    overflow: hidden;
    border: 1px solid red;
}

.btn-link {
    position: relative;
    padding: 20px 45px;
    font-size: 18px;
    color: var(--color-text-white);
    text-decoration: none;
    background-color: var(--color-primary);
    border-radius: var(--radius-main);
    overflow: hidden;
}

.btn-link span {
    position: relative;
    z-index: 2;
}

.btn-link::before,
.btn-link::after {
    position: absolute;
    top: calc(50% - 15px);
    width: 30px;
    height: 30px;
    background-color: var(--color-secondary);
    content: '';
    transition: var(--transition-long);
    opacity: 0;
    z-index: 1;
}

.btn-link::before {
    left: -35px;
}

.btn-link:hover::before {
    animation: btn-link-before .8s ease 1 forwards;
}

.btn-link::after {
    top: calc(50% - 20px);
    left: 100%;
    width: 30px;
    height: 30px;
}

.btn-link:hover::after {
    animation: btn-link-after .8s ease 1 forwards;
}

button {
    position: relative;
    padding: 20px 45px;
    font-size: 18px;
    color: var(--color-text-white);
    background-color: var(--color-primary);
    border: none;
    border-radius: var(--radius-main);
    overflow: hidden;
}

@keyframes btn-link-after {
    30% {
        top: calc(50% - 20px);
        left: 40%;
        width: 40px;
        height: 40px;
    }

    70% {
        top: calc(50% - 25px);
        left: 0px;
        width: 50px;
        height: 50px;

    }

    100% {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: var(--radius-main);
        opacity: 1;
    }

}

@keyframes btn-link-before {
    100% {
        top: calc(50% - 20px);
        left: 50px;
        width: 40px;
        height: 40px;
        opacity: 1;
    }
}


@media screen and (max-width: 1024px) {
    h2 {
        font-size: 35px;
        line-height: 40px;
    }

    h3 {
        font-size: 20px;
        line-height: 25px;
    }
}

/* Footer main styles */
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    background-color: var(--color-primary);
}

.footer__container {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    color: var(--color-text-white);
}

/* Footer brand container styles */
.footer__brand {
    flex: 1;
    min-width: 250px;
    color: var(--color-text-white);
}

.branding {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
}

.branding .logo-container {
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.branding .logo-container img {
    width: 100%;
    filter: brightness(0) invert(1);
}

.logo-text-container p,
.logo-text-container h3 {
    color: var(--color-text-white);
}

.logo-text-container p{
    font-size: 16px;
}

.footer__brand-text {
    text-align: center;
    color: var(--color-text-white);
}

/* Social links container styles */
.social-links {
    display: flex;
    justify-content: center;
    gap: 12px;
    padding-top: 12px;
}

.social-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-main);
    transition: var(--transition-medium);
}

.social-link:hover {
    border: 1px solid var(--color-secondary);
    background-color: var(--color-secondary);
}

.social-link img {
    width: 60%;
}

/* Footer about container styles */
.footer__about {
    width: 100%
}

.footer__about h2,
.footer__about p {
    text-align: center;
    color: var(--color-text-white);
}

.footer__about h2 {
    padding-bottom: 12px;
}

.footer-about-link-container {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 20px;
}

.footer__about-link {
    border: 1px solid white;
}

/* Footer contact container styles */
.footer__contact {
    display: flex;
    align-content: flex-start;
    align-items: center;
    gap: 12px;
    flex: 1;
    min-width: 320px;
    padding: 15px 0;
    color: var(--color-text-white);
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
}

.contact-item__type-description {
    color: var(--color-text-white);
    font-size: 16px;
}

.contact-item__img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    min-width: 70px;
    height: 70px;
    border-radius: var(--radius-main);
    border: 1px solid rgba(255, 255, 255, 0.4);
    transition: var(--transition-medium);
}

.contact-item__img-container img {
    width: 50px;
    transition: var(--transition-medium);
}

.contact-item:hover .contact-item__img-container {
    transform: rotateZ(-90deg);
    background-color: var(--color-secondary);
    border: 1px solid var(--color-secondary);
}

.contact-item:hover .contact-item__img-container img {
    transform: rotateZ(90deg);
}

.contact-item__type {
    width: 100%;
    color: var(--color-text-white);
}

/* Footer copyright container styles */
.footer__copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.copyright__text {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 16px;
    text-align: center;
}

.copyright__text::before,
.copyright__text::after {
    content: '';
    position: absolute;
    width: calc(50% - 152px);
    height: 1px;
    background-color: var(--color-text-white);
}

.copyright__text::before {
    left: 0;
}

.copyright__text::after {
    right: 0;
}

@media screen and (max-width: 1200px) {

    .footer__brand,
    .footer__about,
    .footer__contact {
        width: 100%;
        flex: none;
    }

    .footer__contact {
        flex-wrap: wrap;
        justify-content: center;
    }

    .contact-item {

        max-width: 300px;
    }
}
</style>

<footer class="footer">
    <div class="footer__container section-container">

        <div class="footer__brand">
            <div class="branding">
               <div class="logo-container">
                  <img class="footer__logo" src="/assets/logo/android-chrome-512x512.png" alt="Logo de AprendeCode - AprendeCode esquina" loading="lazy">
                </div>
                <div class="logo-text-container">
                    <h3 class="brand-name">AprendeCode</h3>
                    <p class="brand-focus">Arduino & Frontend</p>
                </div>
            </div>
            
            <p class="footer__brand-text">Encendiendo el fuego de la curiosidad, avivando la llama de la pasión por la tecnología.</p>
            <div class="social-links">
                <a href="https://www.youtube.com/channel/UC1330s8WAxasTltrD-vKg8Q" target="_blank" rel="noopener">
                   <div class="social-link">
                       <img class="social-link__img" src="/assets/global/youtube-icono.png" alt="Logo de YouTube de AprendeCode" loading="lazy">
                   </div>
                </a>
                <a href="/blog/">
                   <div class="social-link">
                       <img class="social-link__img" src="/assets/global/blog-icono.png" alt="Enlace al blog de AprendeCode" loading="lazy">
                   </div>
                </a>
            </div>
        </div>

        <div class="footer__about">
            <h2 class="footer__about-title">Transformando Pensamientos, Vidas y el Mundo a través de la Tecnología</h2>
            <p class="footer__about-text">
                Creemos en el inmenso poder de la tecnología como fuerza transformadora. Un cambio en la percepción sobre la programación puede abrirnos a nuevos modos de enfrentar retos, generando una evolución en nuestras vidas y entornos. Tanto en el desarrollo frontend como en la exploración con Arduino, cada línea de código es un paso valioso en este camino de cambio. Si también sientes esta pasión por el mundo tecnológico, bienvenido a este espacio. Aquí celebramos la curiosidad y la pasión por la creación. Y si alguna vez necesitas un empujón para descubrir por dónde empezar, estamos aquí, listos para apoyarte en cada etapa de tu aventura tecnológica.
            </p>
            <div class="footer-about-link-container">
                <a href="/contacto/" class="btn-link footer__about-link"><span>Contáctanos</span></a>
            </div>
        </div>

        <div class="footer__contact">
            <div class="contact-item">
                <div class="contact-item__img-container">
                    <img class="contact-item__img" src="/assets/global/email-icono.png" alt="Icono de correo electrónico" loading="lazy">
                </div>
                <div class="contact-item__details">
                    <p class="contact-item__type">Correo electrónico</p>
                    <span class="contact-item__value">info@aprendecode.com</span>
                </div>
            </div>
        
            <div class="contact-item">
                <div class="contact-item__img-container">
                    <img class="contact-item__img" src="/assets/global/atencion-icono.png" alt="Icono de horario" loading="lazy">
                </div>
                <div class="contact-item__details">
                    <p class="contact-item__type">Horario de atención</p>
                    <span class="contact-item__value">Siéntete libre de escribirnos en cualquier momento.</span>
                </div>
            </div>
        
            <a href="/contacto/" class="contact-item contact-item__link">
                <div class="contact-item__img-container">
                    <img class="contact-item__img" src="/assets/global/contacto-icono.png" alt="Icono del formulario de contacto" loading="lazy">
                </div>
                <div class="contact-item__details">
                    <p class="contact-item__type">Formulario de contacto</p>
                    <p class="contact-item__type-description">¿Tienes una pregunta? Nuestro formulario de contacto está aquí para ayudarte.</p>
                </div>
            </a>
        </div>
        

        <div class="footer__copyright">
            <small class="copyright__text">
                <span id="copyright__year"></span>&nbsp; AprendeCode - All Rights Reserved
            </small>
        </div>
    </div>
</footer>

        `;
    }
}

customElements.define('my-footer', MyFooter);



