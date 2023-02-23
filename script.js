"use strict";

const geo = document.querySelector(".geo");
console.log(geo.getBoundingClientRect().top);
const navbar = document.querySelector(".navbar");

const navbarGeo = document.querySelector(".nav-geo");
navbarGeo.addEventListener("click", () => {
  let geoViewportY = geo.getBoundingClientRect().top;
  let currentScroll = window.pageYOffset;
  window.scroll(0, geoViewportY + currentScroll - navbar.offsetHeight);
});

const histoire = document.querySelector(".histoire");
console.log(histoire.getBoundingClientRect().top);

const navbarHistoire = document.querySelector(".nav-histoire");
navbarHistoire.addEventListener("click", () => {
  let histoireViewportY = histoire.getBoundingClientRect().top;
  let currentScroll = window.pageYOffset;
  window.scroll(0, histoireViewportY + currentScroll - navbar.offsetHeight);
});

const politique = document.querySelector(".politique");
console.log(politique.getBoundingClientRect().top);

const navbarPolitique = document.querySelector(".nav-politique");
navbarPolitique.addEventListener("click", () => {
  let politiqueViewportY = politique.getBoundingClientRect().top;
  let currentScroll = window.pageYOffset;
  window.scroll(0, politiqueViewportY + currentScroll - navbar.offsetHeight);
});

const presentation = document.querySelector(".presentation-text");
console.log(presentation.getBoundingClientRect().top);

const navbarPresentation = document.querySelector(".nav-about");
navbarPresentation.addEventListener("click", () => {
  let presentationViewportY = presentation.getBoundingClientRect().top;
  let currentScroll = window.pageYOffset;
  window.scroll(0, presentationViewportY + currentScroll - navbar.offsetHeight);
});

const drapeau = document.querySelector(".drapeau");
drapeau.addEventListener("click", () => {
  window.scroll(0, 0);
});
