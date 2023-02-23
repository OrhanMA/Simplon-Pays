function defineScroll(elementClass, contentClass) {
  const section = document.querySelector(`.${elementClass}`);
  const content = document.querySelector(`.${contentClass}`);
  const navbar = document.querySelector(".navbar");
  console.log(navbar);
  console.log(navbar.offsetWidth);
  console.log(navbar.offsetHeight);

  console.log(section);
  console.log(content);

  section.addEventListener("click", function () {
    console.log(content.getBoundingClientRect().y);
    scrollTo(
      content.getBoundingClientRect().x,
      content.getBoundingClientRect().y - navbar.offsetHeight - 50
    );
  });
}

defineScroll("nav-about", "presentation");
defineScroll("nav-geo", "geo");
defineScroll("nav-politique", "politique");
defineScroll("nav-histoire", "histoire");

/*
 Element.getBoundingClientRect().top retourne la distance entre l'element
 et le haut du viewport
 Window.pageYOffset retourne la distance en pixels qui a été scrollé
 entre le haut du document et le début du viewport 

 La distance a scroller verticalement sur le click = 
 Element.getBoundingClientRect().top +  Window.pageYOffset

*/
