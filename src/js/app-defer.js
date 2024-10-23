import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Alpine from 'alpinejs';
import focus from '@alpinejs/focus'

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--getting-started',
  children: 'a',
  pswpModule: () => import('photoswipe')
});

lightbox.init();
window.Alpine = Alpine
Alpine.plugin(focus)
Alpine.start()


document.addEventListener('DOMContentLoaded', () => {
  // Toggle TOC
  // const toggleButton = document.getElementById('toc-toggle');
  // const toc = document.getElementById('toc');

  // Initial state
  // toc.classList.add('toc-visible');
  
  // toggleButton.addEventListener('click', () => {
  //     if (toc.classList.contains('toc-visible')) {
  //         toc.classList.remove('toc-visible');
  //         toc.classList.add('hidden');
  //     } else {
  //         toc.classList.remove('hidden');
  //         toc.classList.add('toc-visible');
  //     }
  // });
//   const navbarSocial = document.getElementById('navbar-social');
// console.log(navbarSocial)
// window.onscroll = () => {
//   if (window.scrollY > 500) {
//     navbarSocial.style.display = 'none';

//   }else{
//     navbarSocial.style.display = 'block';
//   }
// };
});

