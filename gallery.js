class gallerySlider {


      constructor(selector, items = []) {
            this.items = items;
            this.element = document.querySelector(selector);
            // this.containerWidth = this.element.clientWidth;
            // this.currentIndex = 0;
            
      }

      createMarkup({ preview, original, description }) {
            return `<li class="gallery__item">
                        <a
                              class="gallery__link"
                              href="${original}">
                              <img
                                    class="gallery__image"
                                    src="${preview}"
                                    data-source="${original}"
                                    alt="${description}"
                                    />
                        </a>         
                  </li>`;
      }


      createlist() {
            return this.items.map(this.createMarkup).join('');
      }


      // moveNext() {
      //       if (this.currentIndex === this.items.length - 1) {
      //             return
      //       }
      //       this.currentIndex += 1;
      // }


      // movePrev() {
      //      if (this.currentIndex === 0) {
      //             return
      //       }
      //       this.currentIndex -= 1; 
      // }


      // moveTo() {
            
      // }

      

      render() {
            const temlate = this.createlist();
            this.element.insertAdjacentHTML('beforeend', temlate);

      }
}

export default gallerySlider;