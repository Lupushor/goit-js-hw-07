import { galleryItems } from './gallery-items.js';
// Change code below this line
const imagesContainer = document.querySelector('.gallery');

const imgElemtens = galleryItems.reduce((acum, item) => {
  return (acum += `<a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`);
}, '');

imagesContainer.insertAdjacentHTML('beforeend', imgElemtens);

imagesContainer.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
    }
  });
});

new SimpleLightbox('.gallery a', {
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
