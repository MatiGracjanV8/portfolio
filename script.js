document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section, .card');
    const header = document.querySelector("header");
    const menu = document.querySelector(".menu_navigation");
    const scrollPopup = document.querySelector(".mouse");

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                if (entry.target.classList.contains('opening_section')) {
                    header.style = "display: flex; opacity: 1;";
                    menu.style = "display: none; opacity: 0;";
                    setTimeout(() => {
                        scrollPopup.style = "opacity: 1; animation: lightning 2s infinite;";
                    }, 3000);
                }
            } else {
                entry.target.classList.remove('is-visible');
                if (entry.target.classList.contains('opening_section')) {
                    header.style = "display: none; opacity: 0;";
                    menu.style = "display: flex; opacity: 1;";
                    scrollPopup.style = "animation: none; opacity: 0;";
                }
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    document.getElementById("main").onmousemove = e => {
        for (const card of document.getElementsByClassName("card")) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    };
});
