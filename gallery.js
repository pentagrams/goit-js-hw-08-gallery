class gallerySlider {


      constructor(selector, items = []) {
            this.element = document.querySelector(selector)
            this.items = items;
      }

      createMarkup({ preview, original, description }) {
            return `<li>
                        <img src="${preview}" data-original="${original}" alt="${description}" />
                  </li>`;
      }

      createlist() {
            const sliderList = this.items.map(this.createMarkup).join('');
            return `<div class="slider__inner">${sliderList}</div>`;
      }

      render() {
            const temlate = this.createlist();
            this.element.insertAdjacentHTML('beforeend', temlate);

      }
}

export default gallerySlider;