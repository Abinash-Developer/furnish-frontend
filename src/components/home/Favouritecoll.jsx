import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// ✅ Import all product images
import productImg1 from '../../assets/images/product-img-1.jpg';
import productImg2 from '../../assets/images/product-img-2.jpg';
import productImg3 from '../../assets/images/product-img-3.jpg';
import productImg5 from '../../assets/images/product-img-5.jpg';
import productImg6 from '../../assets/images/product-img-6.jpg';

// ✅ Product data array — easy to update
const products = [
  {
    id: 1,
    image: productImg1,
    name: 'Modern Chair',
    oldPrice: '$59.00',
    newPrice: '$29.00',
  },
  {
    id: 2,
    image: productImg2,
    name: 'Floor Lamp',
    oldPrice: '$95.00',
    newPrice: '$89.00',
  },
  {
    id: 3,
    image: productImg5,
    name: 'High Back Boss Chair',
    oldPrice: '$78.00',
    newPrice: '$68.00',
  },
  {
    id: 4,
    image: productImg6,
    name: 'Fancy Metal Clock',
    oldPrice: '$58.00',
    newPrice: '$38.00',
  },
  {
    id: 5,
    image: productImg3,
    name: 'Comfort Chair',
    oldPrice: '$38.00',
    newPrice: '$28.00',
  },
];

const Favouritecoll = () => {

  // ✅ Swiper initialized here — data-* attributes don't work in React
  useEffect(() => {
    const swiper = new Swiper('#swiper-3', {
      speed: 400,
      spaceBetween: 30,
      autoplay: false,
      pagination: {
        el: '#swiper-3 .swiper-pagination',
        clickable: true,
        type: 'bullets',
      },
      navigation: {
        nextEl: '#slide2',
        prevEl: '#slide1',
      },
      breakpoints: {
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 3 },
      },
    });

    // ✅ Cleanup on unmount
    return () => {
      if (swiper && !swiper.destroyed) {
        swiper.destroy();
      }
    };
  }, []);

  return (
    <section className="py-lg-10 mx-3 mx-lg-0 bg-white">
      <div className="container">
        <div className="row mb-md-8 mb-4">

          {/* Heading */}
          <div className="col-lg-12 mb-8">
            <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-md-between gap-4">
              <div className="col-sm-5">
                <h2 className="display-4">Our Favourite Collection</h2>
                <p className="mb-0 lead">
                  We are inspired by the realities of life today, in which
                  traditional divides between personal and professional space
                  are more fluid.
                </p>
              </div>
            </div>
          </div>

          {/* Swiper */}
          <div className="col-lg-12">
            <div className="swiper-container swiper position-relative" id="swiper-3">
              <div className="swiper-wrapper pb-10">

                {/* ✅ Render slides from array */}
                {products.map((product) => (
                  <div className="swiper-slide" key={product.id}>
                    <div>
                      <a href="#">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="img-fluid"
                        />
                      </a>
                      <div className="text-center">
                        <h3 className="mt-3 h5">
                          <a href="#">{product.name}</a>
                        </h3>
                        <div>
                          <span className="fw-semibold text-decoration-line-through">
                            {product.oldPrice}
                          </span>
                          <span className="ms-2">{product.newPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>

              {/* Pagination dots */}
              <div className="swiper-pagination mb-3" />

              {/* Navigation arrows — desktop only */}
              {/* <div className="swiper-navigation position-absolute start-50 translate-middle-x bottom-0 mb-4 d-none d-lg-block">
                <div className="swiper-button-prev" id="slide1" />
                <div className="swiper-button-next" id="slide2" />
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favouritecoll;