let mySwiperHeader;

const toggleActiveHeader = () => {
    const sliderHeaderOFF = document.querySelector('.header-slider');
    const sliderHeaderOFF1 = document.querySelector('.header__contacts');
    
    //перевіряємо чи містить елемент клас,якщо ні то додаємо
    if (document.body.clientWidth < 680) {
        if (!sliderHeaderOFF.classList.contains('swiper')) { 
            sliderHeaderOFF.classList.add('swiper');
        }
    
        if (!sliderHeaderOFF1.classList.contains('swiper-wrapper')) {
            sliderHeaderOFF1.classList.add('swiper-wrapper');
        }
    
    // перевіряємо чи екземпляр слайдера не присвоєний змінній
    if (!mySwiperHeader) {
        mySwiperHeader = new Swiper('.header-slider', {
            loop: true,
            speed: 500,
            breakpoints: {
                100: {
                    spaceBetween: 100,
                },
            },
        navigation: {
          nextEl: '.swiper-button-prev',
          prevEl: '.swiper-button-next',
          
          }
          
      });
    }
    } else{
        if (sliderHeaderOFF.classList.contains('swiper')) {
            sliderHeaderOFF.classList.remove('swiper');
        }
        if (sliderHeaderOFF1.classList.contains('swiper-wrapper')) {
            sliderHeaderOFF1.classList.remove('swiper-wrapper');
        }
        
    //якщо екземпляр створений видаляємо його
        if (mySwiperHeader) {
            mySwiperHeader.destroy();
            mySwiperHeader = null;
        }
    }
};

toggleActiveHeader()
window.addEventListener('resize', toggleActiveHeader)




//Функція з параметрами слайдеру для блоку WHY BUILD


let mySwiper; //змінна в якій будуть зберігатися параметри слайдера

const toggleActive = () => {
    const sliderOFF = document.querySelector('.build__card');
    const sliderOFF1 = document.querySelector('.build__card--body');
    
    //перевіряємо чи містить елемент клас,якщо ні то додаємо
    if (document.body.clientWidth < 1390) {
        if (!sliderOFF.classList.contains('swiper')) { 
            sliderOFF.classList.add('swiper');
        }
    
        if (!sliderOFF1.classList.contains('swiper-wrapper')) {
            sliderOFF1.classList.add('swiper-wrapper');
        }
    
    // перевіряємо чи екземпляр слайдера не присвоєний змінній
    if (!mySwiper) {
        mySwiper = new Swiper('.build__card', {
            loop: true,
            speed: 500,
            breakpoints: {
                460: {
                    slidesPerView: 1,
                    spaceBetween:40,
                },
                800: {
                    slidesPerView: 2,
                    spaceBetween:20,
                },
                1100: {
                    slidesPerView: 3,
                    spaceBetween:10,
                }
            },
        navigation: {
          nextEl: '.swiper-button-prev',
          prevEl: '.swiper-button-next',
          
          }
          
      });
    }
    } else {
        if (sliderOFF.classList.contains('swiper')) {
            sliderOFF.classList.remove('swiper');
        }
        if (sliderOFF1.classList.contains('swiper-wrapper')) {
            sliderOFF1.classList.remove('swiper-wrapper');
        }
        
    //якщо екземпляр створений видаляємо його
        if (mySwiper) {
            mySwiper.destroy();
            mySwiper = null;
        }
    }
};

toggleActive()
window.addEventListener('resize', toggleActive)



//Функція з параметрами слайдеру для блоку BRAND

let mySwiperBrand; //змінна в якій будуть зберігатися параметри слайдера

const toggleActiveBrand = () => {
    const sliderOffBrand = document.querySelector('.brand__items');
    const sliderOffBrand1 = document.querySelector('.brand__item');
    
    //перевіряємо чи містить елемент клас,якщо ні то додаємо
    if (document.body.clientWidth < 1390) {
        if (!sliderOffBrand.classList.contains('swiper')) { 
            sliderOffBrand.classList.add('swiper');
        }
    
        if (!sliderOffBrand1.classList.contains('swiper-wrapper')) {
            sliderOffBrand1.classList.add('swiper-wrapper');
        }
    
    // перевіряємо чи параметри слайдера не присвоєні змінній
    if (!mySwiperBrand) {
        mySwiperBrand = new Swiper('.brand__items', {
            loop: true,
            speed: 500,
           breakpoints: {
                460: {
                    slidesPerView: 1,
                    spaceBetween:40,
                },
                800: {
                    slidesPerView: 2,
                    spaceBetween:20,
                },
                1100: {
                    slidesPerView: 3,
                    spaceBetween:10,
                }
            },
        navigation: {
          nextEl: '.swiper-button-prev',
          prevEl: '.swiper-button-next',
          }
          
      });
    }
    } else {
        if (sliderOffBrand.classList.contains('swiper')) {
            sliderOffBrand.classList.remove('swiper');
        }
        if (sliderOffBrand1.classList.contains('swiper-wrapper')) {
            sliderOffBrand1.classList.remove('swiper-wrapper');
        }
        
    //якщо екземпляр створений видаляємо його
        if (mySwiperBrand) {
            mySwiperBrand.destroy();
            mySwiperBrand = null;
        }
    }
};

toggleActiveBrand()
window.addEventListener('resize', toggleActiveBrand)


//Функція з параметрами слайдеру для блоку HOW WE BUILD

let mySwiperBuild; //змінна в якій будуть зберігатися параметри слайдера

const toggleActiveBuild = () => {
    const sliderOffBuild = document.querySelector('.how-we-build__items');
    const sliderOffBuild1 = document.querySelector('.how-we-build__item');
    
    //перевіряємо чи містить елемент клас,якщо ні то додаємо
    if (document.body.clientWidth < 1390) {
        if (!sliderOffBuild.classList.contains('swiper')) { 
            sliderOffBuild.classList.add('swiper');
        }
    
        if (!sliderOffBuild1.classList.contains('swiper-wrapper')) {
            sliderOffBuild1.classList.add('swiper-wrapper');
        }
    
    // перевіряємо чи параметри слайдера не присвоєні змінній
    if (!mySwiperBuild) {
        mySwiperBuild = new Swiper('.how-we-build__items', {
            loop: true,
            speed: 500,
           breakpoints: {
                460: {
                    slidesPerView: 1,
                    spaceBetween:40,
                },
                800: {
                    slidesPerView: 2,
                    spaceBetween:20,
                },
                1100: {
                    slidesPerView: 3,
                    spaceBetween:10,
                }
            },
        navigation: {
          nextEl: '.swiper-button-prev',
          prevEl: '.swiper-button-next',
          }
          
      });
    }
    } else {
        if (sliderOffBuild.classList.contains('swiper')) {
            sliderOffBuild.classList.remove('swiper');
        }
        if (sliderOffBuild1.classList.contains('swiper-wrapper')) {
            sliderOffBuild1.classList.remove('swiper-wrapper');
        }
        
    //якщо екземпляр створений видаляємо його
        if (mySwiperBuild) {
            mySwiperBuild.destroy();
            mySwiperBuild = null;
        }
    }
};

toggleActiveBuild()
window.addEventListener('resize', toggleActiveBuild)
