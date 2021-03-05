import gallery from './gallery-items.js';
import gallerySlider from './gallery.js'

const listGalleryRef = document.querySelector('.js-gallery');
const backdropRef = document.querySelector('.js-lightbox');

const slider = new gallerySlider('.js-gallery', gallery)
slider.render();

