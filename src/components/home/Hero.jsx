import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// ✅ Import images properly — not src="./assets/..."
import sliderImg1 from '../../assets/images/slider/slider-img-1.png';
import sliderImg2 from '../../assets/images/slider/slider-img-2.png';
import sliderImg3 from '../../assets/images/slider/slider-img-3.png';

const slides = [
  {
    id: 1,
    image: sliderImg2,
    badge: '%20 Sell',
    title: 'Comfy Sofa Home-Office',
    desc: 'Comfortable and stylish sofa for your home office.',
    price: '$50',
  },
  {
    id: 2,
    image: sliderImg1,
    badge: '%10 Sell',
    title: 'Exchange your old furniture',
    desc: 'Save up to $50 for your home office.',
    price: '$45',
  },
  {
    id: 3,
    image: sliderImg3,
    badge: '%25 Sell',
    title: 'Crafted royal comfort sofa',
    desc: 'Experience the elegance of timeless craftsmanship with our Sofa.',
    price: '$89',
  },
];

const Hero = () => {

  // ✅ Swiper must be initialized here — data attributes don't work in React
  useEffect(() => {
    const swiper = new Swiper('#swiper-6', {
      speed: 800,
      spaceBetween: 100,
      effect: 'slide',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        480: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
      },
    });

    // ✅ Cleanup on unmount — prevents memory leaks
    return () => {
      if (swiper && !swiper.destroyed) {
        swiper.destroy();
      }
    };
  }, []);

  return (
    <div className="py-lg-8 pt-6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-12">

            {/* ✅ No more data-* attributes — Swiper is configured in useEffect above */}
            <div className="swiper-container swiper swiper-pagination-light" id="swiper-6">
              <div className="swiper-wrapper">

                {/* ✅ Render slides from array — cleaner and easier to update */}
                {slides.map((slide) => (
                  <div className="swiper-slide px-md-8" key={slide.id}>
                    <div className="position-relative text-center">

                      {/* ✅ Use imported image variable, not string path */}
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="img-fluid my-5 my-lg-0"
                      />

                      <div className="text-center position-absolute top-0 start-0 px-lg-11">
                        <h1 className="fs-1 fst-italic text-secondary">
                          {slide.badge}
                        </h1>
                        <h2 className="display-4 lh-1">{slide.title}</h2>
                      </div>

                      <div className="position-absolute top-md-65 top-75 start-50 translate-middle-x mt-lg-9">
                        <p className="d-none d-lg-block">{slide.desc}</p>
                        <div className="fw-bold mb-4 d-none d-lg-block">
                          {slide.price}
                        </div>
                        <a href="#" className="btn btn-primary">
                          View Details
                        </a>
                      </div>

                    </div>
                  </div>
                ))}

              </div>

              {/* Navigation */}
              <div className="swiper-navigation mb-4">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;