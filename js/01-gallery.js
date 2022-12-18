import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`,
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', markup);

const onContainerClick = evt => {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const source = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${source}"width="800" height="600">`,
  );

  instance.show();
};
gallery.addEventListener('click', onContainerClick);
