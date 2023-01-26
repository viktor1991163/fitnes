const button = document.querySelector('.promo__btn');
const videoHolder = document.querySelector('.promo__video-wrapper');
const imgPrev = document.querySelector('.promo__video-img');
const overlay = document.querySelector('.promo__video-overlay');

const initPlay = () => {
  button.addEventListener('click', () => {
    const video = document.createElement('iframe');
    video.setAttribute('frameborder', '0');
    video.setAttribute('allow', 'autoplay');
    video.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
    video.classList.add('promo__play');
    videoHolder.append(video);
    button.remove();
    imgPrev.remove();
    overlay.remove();
  });

};

export {initPlay};
