"use strict";

import { loadAnimation } from "lottie-web/build/player/lottie_light.min.js";

window.onbeforeunload = () => window.scrollTo(0, 0);

const headerAnim = loadAnimation({
    container: document.querySelector("#intro-anim"),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    progressiveLoad: true,
    path: '/assets/json/blog-header.json'
});

// document.querySelector("#newest-post").addEventListener("mouseenter", () => {
//     document.querySelector("#newest-post img").classList.add("blur-animation");
// });

// document.querySelector("#newest-post").addEventListener("mouseleave", () => {
//     document.querySelector("#newest-post img").classList.remove("blur-animation");
// });