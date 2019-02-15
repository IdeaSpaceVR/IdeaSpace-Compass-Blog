var about_texture = document.querySelector('#about-text-texture');
var about_wrapper = document.querySelector('#about-wrapper');
about_wrapper.setAttribute('height', (about_texture.offsetHeight * about_wrapper.getAttribute('width')) / about_texture.offsetWidth);

