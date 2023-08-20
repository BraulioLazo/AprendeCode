class myMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.adjustNavOnResize = this.adjustNavOnResize.bind(this);
    }

    generateMenu() {
        const currentPath = window.location.pathname;
        const directoryLavel = (currentPath.match(/\//g) || []).length;

        const menuLinks = [
            { name: "Inicio", href: 'index.html', linkClass: "nav-link-home" },
            { name: 'Frontend', href: 'frontend/', linkClass: "nav-link-frontend" },
            { name: 'Arduino', href: 'arduino/', linkClass: "nav-link-arduino" },
            { name: 'Nosotros', href: 'nosotros/', linkClass: "nav-link-about" },
            { name: 'Contacto', href: 'contacto/', linkClass: "nav-link-contact" }
        ];

        let menuHTML = '';

        for (let link of menuLinks) {
            let relativePath = '';
            if (directoryLavel > 1) {
                for (let i = 1; i < directoryLavel; i++) {
                    relativePath += "../";
                }
            }
            menuHTML += `<li class="nav-item"><a href="${relativePath}${link.href}" class="nav-link ${link.linkClass}">${link.name}</a></li>`;
        }

        return menuHTML;
    }

    toggleNavigationMenu() {
        const menuIcon = this.shadowRoot.querySelector(".menu-icon");
        const menuLines = this.shadowRoot.querySelectorAll(".menu-icon__line");
        const navigationLinks = this.shadowRoot.querySelector(".nav-links");

        menuIcon.addEventListener("click", () => {
            menuLines.forEach((line, index) => {
                const animationClasses = [
                    "menu-icon__line--rotate-one",
                    "menu-icon__line--disappear",
                    "menu-icon__line--rotate-three",
                ];

                line.classList.toggle(animationClasses[index]);
            });

            navigationLinks.classList.toggle("menu-open");
            navigationLinks.style.transform = navigationLinks.classList.contains("menu-open") ? "translateX(0)" : "translateX(-101%)";
        });
    }

    closeMenuOnClickOutside() {
        const menuContainer = this.shadowRoot.querySelector(".nav-links");
        menuContainer.addEventListener("click", (event) => {
            if (event.target === menuContainer && menuContainer.classList.contains("menu-open")) {
                this.toggleNavigationMenu();
            }
        });
    }

    adjustNavOnResize() {
        const menuLines = this.shadowRoot.querySelectorAll(".menu-icon__line");
        const navLinksElement = this.shadowRoot.querySelector(".nav-links");
        const windowWidth = window.innerWidth;

        if (windowWidth > 1024) {
            navLinksElement.style.transform = "translateX(0)";
            menuLines.forEach((line, index) => {
                const animationClasses = [
                    "menu-icon__line--rotate-one",
                    "menu-icon__line--disappear",
                    "menu-icon__line--rotate-three",
                ];
                line.classList.remove(animationClasses[index]);
                this.shadowRoot.querySelector(".nav-links").classList.remove('menu-open');
            });

        } else {
            navLinksElement.style.transform = "translateX(-101%)";
        }


    };

    connectedCallback() {
        this.render();
        this.toggleNavigationMenu();
        this.closeMenuOnClickOutside();
        window.addEventListener("resize", this.adjustNavOnResize);
    }

    render() {
        const menuItems = this.generateMenu();

        this.shadowRoot.innerHTML = `
        
        <style>
        /* Estilos comunes */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Outfit', sans-serif;
        } 

        a{
            text-decoration: none;
        }

        .btn-link-container {
            overflow: hidden;
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
            outline: none;
            border-radius: var(--radius-main);
            overflow: hidden;
        }

        .main-header {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            display: flex;
            justify-content: center;
            padding: 10px 20px;
            background-color: var(--color-background-white);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            z-index: 999;
        }

        .menu-icon {
            display: none;
        }

        .menu-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1400px;
        }

        .logo-container{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 60px;
            overflow: hidden;
        }

        .logo-image{
            width: 100%;
        }

        .nav-links {
            transform: translateX(0%);
        }

        .nav-links ul {
            display: flex;
            gap: 20px;
            list-style: none;
        }

        .nav-links ul li .nav-link {
            position: relative;
            color: var(--color-text-dark);
            font-size: 18px;
            font-weight: 600;
            transition: var(--transition-short);
        }

        .nav-links ul li .nav-link::before {
            position: absolute;
            bottom: -10px;
            width: 0;
            height: 4px;
            background-color: var(--color-text-dark);
            content: '';
            transition: var(--transition-short);
        }

        .nav-links ul li .nav-link:hover::before {
            width: 100%;
            background-color: var(--color-primary);
        }

        .nav-links ul li .nav-link:hover {
            color: var(--color-primary);
        }

        .btn-link-container {
            display: flex;
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

        /* Estilos para móvil */

        @media screen and (max-width: 1024px) {
            .menu-btn-link {
                display: none;
            }

            .nav-links {
                position: fixed;
                top: 80px;
                bottom: 0;
                left: 0;
                display: flex;
                align-content: center;
                align-items: center;
                width: 250px;
                height: 100%;
                background-color: var(--color-background-white);
                z-index: 1000;
                transform: translateX(-101%);
                transition: var(--transition-medium);
            }

            .nav-links ul {
                flex-wrap: wrap;
                justify-content: center;
            }

            .nav-links ul li {
                width: 100%;
                padding-left: 50px;
            }

            .logo-menu-container {
                display: flex;
                align-items: center;
                gap: 20px
            }

            .menu-icon {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                width: 32px;
                height: 29px;
                padding: 0;
                background-color: transparent;
                overflow: visible;
            }

            .menu-icon__line {
                width: 32px;
                height: 4px;
                background-color: var(--color-text-dark);
                opacity: 1;
                transition: var(--transition-medium);
            }

            .menu-icon__line--rotate-one {
                transform: rotateZ(225deg) translateY(-6px) translateX(-8px);
            }

            .menu-icon__line--disappear {
                opacity: 0;
            }

            .menu-icon__line--rotate-three {
                transform: rotateZ(-225deg) translateY(6px) translateX(-8px);
            }

        }

    </style>
        

    <header class="main-header">
        <div class="menu-container">

            <div class="logo-container">
                <img src="/assets/logo/android-chrome-512x512.png" alt="Logo" class="logo-image">
            </div>

            <nav class="nav-links">
              <ul class="nav-list">
                 ${menuItems}
              </ul>
            </nav>

            <div class="logo-menu-container">
                <button class="menu-icon" aria-label="Menu">
                    <div class="menu-icon__line menu-icon__line--one"></div>
                    <div class="menu-icon__line menu-icon__line--two"></div>
                    <div class="menu-icon__line menu-icon__line--three"></div>
                </button>

                <div class="btn-link-container">
                    <a href="https://www.youtube.com/channel/UC1330s8WAxasTltrD-vKg8Q" target="_blank" class="btn-link menu-btn-link"><span>YouTube</span></a>
                </div>
            </div>
        </div>
    </header>
        `;
    }
}

customElements.define('my-menu', myMenu);

