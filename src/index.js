// import './js/r - get';
// import './js/c - post';
// import './js/u - patch';
// import './js/d - delete';

import axios from 'axios';

const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';

// const templateInstance = basicLightbox.create(
//   'test',
//   document.querySelector('#template')
// );

// document.querySelector('button.template').onclick = templateInstance.show;
const btn = document.querySelector('.template');

btn.addEventListener('click', openOriginalImgAtClickPrev);

function openOriginalImgAtClickPrev(evt) {
  evt.preventDefault();

  const instance = basicLightbox.create(
    `
      <div class="movie__item" data-id="">
  <a class="movie__link" data-id="" href="">
  <img src="" class="movie__image" data-id="" alt="Poster movie"  width="" height="" />
    <div class="movie__description" data-id="">
      <p class="movie__title" data-id=""></p>
      <p class="movie__info" data-id="">  
      <span class="movie__breacker" data-id=""> | </span>
    <span class="movie__year" data-id=""></span></p>
    </div>
  </a>
</div>`,
    {
      onShow: instance => {
        document.addEventListener('keydown', e =>
          closeKeyDownKeyEsc(e, instance)
        );
      },
      onClose: instance => {
        document.removeEventListener('keydown', e =>
          closeKeyDownKeyEsc(e, instance)
        );
      },
    }
  );

  instance.show();
}

function closeKeyDownKeyEsc(evt, instance) {
  if (evt.code === 'Escape') {
    instance.close();
  }
}
// const visible = basicLightbox.visible();

const BASE_URL = 'https://api.themoviedb.org/3/movie/';

axios.defaults.baseURL = BASE_URL;

class GetPrimoryInfoMovie {
  #api = 'bc9d08ee6fd18cf8f4f4696f2ff2acd2';
  #moveId = '5';

  async fetchMovie() {
    const urlAxios = `${this.#moveId}?api_key=${this.#api}`;
    const { data } = await axios.get(urlAxios);
    console.log(data);
    // const {
    //   original_title,
    //   vote_average,
    //   vote_count,
    //   popularity,
    //   genres,
    //   poster_path,
    //   tagline,
    //   title,
    // } = await data;
    // console.log(original_title);
    // console.log(vote_average);
    // console.log(vote_count);
    // console.log(popularity);
    // console.log(genres.map(elem => console.log(elem.name)).join());
    // console.log(poster_path);
    // console.log(tagline);
    // console.log(title);
  }
}

const getMovieInfo = new GetPrimoryInfoMovie();

getMovieInfo.fetchMovie();

// const refs = {
//   link: document.querySelector('.movie__link'),
// };

// refs.link.addEventListener('click', openModal);

// openModal();

// async function openModal() {
//   getMovieInfo.fetchMovie();
//   console.log('test');
// }
