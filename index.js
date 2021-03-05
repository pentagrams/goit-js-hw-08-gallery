import gallery from './gallery-items.js';
import gallerySlider from './gallery.js'


const listGalleryRef = document.querySelector('.js-gallery');
const buttonCloseRef = document.querySelector('button[data-action="close-lightbox"]');
const modalRef = document.querySelector(".js-lightbox");
const fullSizeImgRef = document.querySelector(".lightbox__image");




listGalleryRef.addEventListener("click", clickOnImages);
modalRef.addEventListener("click", clickOnModal);



const slider = new gallerySlider('.js-gallery', gallery)
slider.render();




function clickOnImages(event) {
      event.preventDefault()
      if (event.target === event.currentTarget) {
            return
      }
      modalRef.classList.add("is-open");
      fullSizeImgRef.setAttribute("src", event.target.dataset.source);
}


function clickOnModal(event) {
  if (event.target.nodeName === buttonCloseRef.nodeName) {
    modalRef.classList.remove("is-open");
    listGalleryRef.removeEventListener("click", clickOnModal);
  }
}




