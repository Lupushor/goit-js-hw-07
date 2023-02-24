import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesContainer = document.querySelector('.gallery');

const imgElemtens = galleryItems.reduce((acum, item) => {
  return (acum += `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`);
}, '');

imagesContainer.insertAdjacentHTML('beforeend', imgElemtens);

imagesContainer.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;

  const selectImg = event.target.getAttribute('data-source');
  const showImg = basicLightbox.create(
    `
  <img src="${selectImg}" width="800" height="600">
`
  );
  showImg.show();

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      showImg.close();
    }
  });
});
