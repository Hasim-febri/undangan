import {home} from "./src/js/home.js";
import {bride} from "./src/js/bride.js";
import {time} from "./src/js/time.js";
import {galeri} from "./src/js/galeri.js";
import {wishas} from "./src/js/wishas.js";
import {navbar} from "./src/js/navbar.js";
import {welcome} from "./src/js/welcome.js";

// load content
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    welcome();
    navbar();
    home();
    bride()
    time();
    galeri();
    wishas();
});