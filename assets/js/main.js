/*=============== SHOW MENU ===============*/

/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/

/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper('.categories__container', {
  spaceBetween: 24,
  loop: true,
  
  navigation: {
    nextEl: '.swiper-button-next',
    nextEl: '.swiper-button-prev',
  },

  breakpoints:
   {
     640: 
     {
        slidesPreview: 2,
        spaceBetween: 20,
      },
     768: 
     {
        slidesPreview: 4,
        spaceBetween: 40,
      },
     1400:
      {
        slidesPreview: 6,
        spaceBetween: 24,
      },
    },
});
/*=============== SWIPER PRODUCTS ===============*/

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querrySelectAll('[data-target]'),
  tabContents = document.querrySelectorAll('[content]');

  tabs.forEach((tab)=> {
    tab.addEvenListener('click', () => {
        const target = document.querrySelector(tab.dataset.target);
         tabContents.forEach((tabContent) => {
            tabContents.classList.remove('active-tab');
        });
        
         target.classList.add('active-tab');   

         tabs.forEach((tabContent) => {
            tab.classList.remove('active-tab');
        });
         
         tab.classList.add('active-tab');
    });
});