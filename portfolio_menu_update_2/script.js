document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('section');
  const sections2 = document.querySelectorAll('.card');
  let header = document.querySelector("header");
  let menu = document.querySelector(".menu_navigation");
  let scroll_popup = document.querySelector(".mouse");

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        if(entry.target.classList.contains('opening_section')){
          header.style.display = "flex";
          setTimeout(() => {
            header.style.opacity = "1";
          }, 100); 
          menu.style.opacity = "0";
          setTimeout(() => {
            menu.style.display = "none";
          }, 200);
          setTimeout(() => {
            scroll_popup.style.opacity = "1"
            scroll_popup.style.animation = "animation: lightning 2s infinite;";
          }, 3000);  
        }
      } else {
        entry.target.classList.remove('is-visible');
        if(entry.target.classList.contains('opening_section')){
          header.style.opacity = "0";
          setTimeout(() => {
            header.style.display = "none";
          }, 200);  
          menu.style.display = "flex";
          setTimeout(() => {
            menu.style.opacity = "1";
          }, 100); 
          scroll_popup.style.animation = "animation: none;";
          scroll_popup.style.opacity = "0"
        }
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  sections.forEach(section => {
    observer.observe(section);
  });
  sections2.forEach(section => {
    observer.observe(section);
  });
});


document.getElementById("main").onmousemove = e => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
}
window.addEventListener('load', function (){
  setTimeout(() => {
    console.log("Delayed for 1 second.");
  }, 2000);  
})

