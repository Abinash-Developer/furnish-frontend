import product1 from '../../assets/images/product-img-1.jpg'
import product2 from '../../assets/images/product-img-2.jpg'
import product3 from '../../assets/images/product-img-3.jpg'
import product4 from '../../assets/images/product-img-4.jpg'
import product5 from '../../assets/images/product-img-5.jpg'
import product6 from '../../assets/images/product-img-6.jpg'
const Productlist = ()=>{
    return (<><section className="py-lg-8 py-5">
  <div className="container ">
    <div className="row">
      {/* Sidebar Filters */}
      <aside className="col-lg-3 mb-4">
        <h3 className="fw-semibold mb-3 h5 ">Filters</h3>
        <div className="mb-4 bg-light border bg-opacity-50 p-4">
          <h6 className="fw-semibold mb-3 text-xs text-uppercase">Category</h6>
          <ul className="list-unstyled lh-lg small mb-0">
            <li>
              <a href="#" className="text-dark">
                Living Room
              </a>
            </li>
            <li>
              <a href="#" className="text-dark">
                Bedroom
              </a>
            </li>
            <li>
              <a href="#" className="text-dark">
                Office
              </a>
            </li>
            <li>
              <a href="#" className="text-dark">
                Decor
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4 bg-light border bg-opacity-50 p-4">
          <h6 className="fw-semibold mb-3 text-xs text-uppercase">Price</h6>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="price1" />
            <label className="form-check-label " htmlFor="price1">
              Under $100
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="price2" />
            <label className="form-check-label" htmlFor="price2">
              $100-$300
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="price3" />
            <label className="form-check-label" htmlFor="price3">
              Above $300
            </label>
          </div>
        </div>
        <div className="mb-4 bg-light border bg-opacity-50 p-4">
          <h6 className="fw-semibold mb-3 text-xs text-uppercase">Colour</h6>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="col1" />
            <label className="form-check-label" htmlFor="col1">
              Gray
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="col2" />
            <label className="form-check-label" htmlFor="col2">
              Black
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="col3" />
            <label className="form-check-label" htmlFor="col3">
              Wood
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button className="btn btn-primary">Apply Filters</button>
        </div>
      </aside>
      {/* Product Grid */}
      <div className="col-lg-9">
        <div className="row g-4">
          <div className="col-12">
            <div className=" d-flex flex-column flex-lg-row flex-row justify-content-between gap-4">
              <div className="col-sm-4 col-lg-3 offset-lg-9">
                <select className="form-select">
                  <option value="" selected="">
                    Sort by: Featured
                  </option>
                  <option value="Best selling">Best selling</option>
                  <option value="Alphabetically, A-Z">
                    Alphabetically, A-Z
                  </option>
                  <option value="Alphabetically, Z-A">
                    Alphabetically, Z-A
                  </option>
                  <option value="Price, low to high">Price, low to high</option>
                  <option value="Price, high to low">Price, high to low</option>
                  <option value="Date, old to new">Date, old to new</option>
                  <option value="Date, new to old">Date, new to old</option>
                </select>
              </div>
            </div>
          </div>
          {/* Repeat Product Card */}
          <div className="col-sm-6 col-md-4">
            <div className="card product-card">
              <a href="#">
                <img
                  src={`${product1}`}
                  className="card-img-top"
                  alt="Product Name"
                />
              </a>
              <div className="card-body">
                <p className="text-muted mb-2 text-uppercase text-xs mb-3">
                  Brand
                </p>
                <div className="mb-3">
                  <h3 className="h5 mb-1">
                    {" "}
                    <a href="#">Modern Sofa</a>
                  </h3>
                  <div className="">
                    <span className="fw-semibold text-decoration-line-through">
                      $59.00
                    </span>
                    <span className="">$29.00</span>
                  </div>
                </div>
                <a href="#" className="btn btn-primary btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col-sm-6 col-md-4">
            <div className="card product-card">
              <a href="#">
                <img
                  src={`${product2}`}
                  className="card-img-top"
                  alt="Product Name"
                />
              </a>
              <div className="card-body">
                <p className="text-muted mb-2 text-uppercase text-xs mb-3">
                  Brand
                </p>
                <div className="mb-3">
                  <h3 className="h5 mb-1">
                    {" "}
                    <a href="#">Floor Lamp</a>
                  </h3>
                  <div className="">
                    <span className="fw-semibold text-decoration-line-through">
                      $95.00
                    </span>
                    <span className="">$89.00</span>
                  </div>
                </div>
                <a href="#" className="btn btn-primary btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          {/* /Repeat */}
          <div className="col-sm-6 col-md-4">
            <div className="card product-card">
              <a href="#">
                <img
                  src={`${product3}`}
                  className="card-img-top"
                  alt="Product Name"
                />
              </a>
              <div className="card-body">
                <p className="text-muted mb-2 text-uppercase text-xs mb-3">
                  Brand
                </p>
                <div className="mb-3">
                  <h3 className="h5 mb-1">
                    {" "}
                    <a href="#">High Back Boss Chair</a>
                  </h3>
                  <div className="">
                    <span className="fw-semibold text-decoration-line-through">
                      $78.00
                    </span>
                    <span className="">$68.00</span>
                  </div>
                </div>
                <a href="#" className="btn btn-primary btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card product-card">
              <a href="#">
                <img
                  src={`${product4}`}
                  className="card-img-top"
                  alt="Product Name"
                />
              </a>
              <div className="card-body">
                <p className="text-muted mb-2 text-uppercase text-xs mb-3">
                  Brand
                </p>
                <div className="mb-3">
                  <h3 className="h5 mb-1">
                    {" "}
                    <a href="#">Fancy Metal Clock</a>
                  </h3>
                  <div className="">
                    <span className="fw-semibold text-decoration-line-through">
                      $78.00
                    </span>
                    <span className="">$68.00</span>
                  </div>
                </div>
                <a href="#" className="btn btn-primary btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col-sm-6 col-md-4">
            <div className="card product-card">
              <a href="#">
                <img
                  src={`${product5}`}
                  className="card-img-top"
                  alt="Product Name"
                />
              </a>
              <div className="card-body">
                <p className="text-muted mb-2 text-uppercase text-xs mb-3">
                  Brand
                </p>
                <div className="mb-3">
                  <h3 className="h5 mb-1">
                    {" "}
                    <a href="#">Comfort Chair</a>
                  </h3>
                  <div className="">
                    <span className="fw-semibold text-decoration-line-through">
                      $38.00
                    </span>
                    <span className="">$28.00</span>
                  </div>
                </div>
                <a href="#" className="btn btn-primary btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          {/* /Repeat */}
          <div className="col-sm-6 col-md-4">
            <div className="card product-card">
              <a href="#">
                <img
                  src={`${product6}`}
                  className="card-img-top"
                  alt="Product Name"
                />
              </a>
              <div className="card-body">
                <p className="text-muted mb-2 text-uppercase text-xs mb-3">
                  Brand
                </p>
                <div className="mb-3">
                  <h3 className="h5 mb-1">
                    {" "}
                    <a href="#">Morden Metal Frame Stool</a>
                  </h3>
                  <div className="">
                    <span className="fw-semibold">$28.00</span>
                    <span className="">$18.00</span>
                  </div>
                </div>
                <a href="#" className="btn btn-primary btn-sm">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          {/* Add more cards as needed */}
        </div>
        {/* Pagination */}
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#">
                «
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                »
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</section>
</>);
}
export default Productlist;