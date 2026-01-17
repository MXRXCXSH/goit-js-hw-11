import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
const gallery = document.querySelector('.gallery');
const loader = document.createElement('div');
loader.className = 'loader';

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="card">
        <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"/></a><div><p>Likes ${likes}</p><p>Vievs ${views}</p><p>Comments ${comments}</p><p>Downloads ${downloads}</p></div></li>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  gallery.parentElement.append(loader);
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}
