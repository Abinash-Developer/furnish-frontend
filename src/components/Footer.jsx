const Footer = ()=>{
  return (<>
  <footer className="bg-dark  pt-8 footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12">
          <a className="navbar-brand" href="#">
            <span className="d-flex flex-column text-uppercase text-xs fw-bold lh-sm">
              <span className="" style={{ letterSpacing: ".12rem" }}>
                Furnish
              </span>
              <span>Template</span>
            </span>
          </a>
        </div>
        <div className="col-lg-8 col-md-6 mb-4 d-flex justify-content-start justify-content-md-end gy-4">
          <ul className="list-unstyled lh-lg d-flex flex-column flex-md-row gap-4">
            <li>
              <a href="#" className=" ft-links text-decoration-none">
                Home
              </a>
            </li>
            <li>
              <a href="#" className=" ft-links text-decoration-none">
                Services
              </a>
            </li>
            <li>
              <a href="#" className=" ft-links text-decoration-none">
                Products
              </a>
            </li>
            <li>
              <a href="#" className=" ft-links text-decoration-none">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className=" ft-links text-decoration-none">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="row justify-content-center align-items-center pt-lg-8 pb-4">
          <div className="col-lg-6 col-md-6 mb-4">
            <h2 className="display-3 text-white">
              We Design all over the world
            </h2>
          </div>
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="d-flex gap-3 justify-content-start justify-content-lg-end">
              <a href="#" className="btn btn-outline-light btn-icon">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="btn btn-outline-light btn-icon">
                <i className="bi bi-twitter" />
              </a>
              <a href="#" className="btn btn-outline-light btn-icon">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="btn btn-outline-light btn-icon">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center py-lg-8">
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="d-flex flex-column">
              <span>Email Id</span>
              <span className="h3 fw-light">Info@example.com</span>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="d-flex gap-3 justify-content-lg-end">
              <a href="#" className="btn btn-outline-light">
                Contact us
              </a>
            </div>
          </div>
        </div>
        <hr className="bg-secondary" />
        <div className="row pb-3">
          <div className="col-md-6 text-center text-md-start">
            <p className=" mb-0">
              © 2025 Furnish. Developed by{" "}
              <a
                href="https://codescandy.com"
                className="text-white"
                target="_blank"
              >
                CodesCandy
              </a>{" "}
              • Distributed by{" "}
              <a
                href="https://themewagon.com"
                className="text-white"
                target="_blank"
              >
                ThemeWagon
              </a>
              . All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className=" ft-links text-decoration-none me-3">
              Privacy Policy
            </a>
            <a href="#" className=" ft-links text-decoration-none">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div className="position-fixed end-0 bottom-0 m-4 z-1">
    <a
      href="https://themewagon.com/themes/furnish/"
      className="btn btn-primary"
      target="_blank"
    >
      {" "}
      Download Now
    </a>
  </div>
  <div
    className="offcanvas offcanvas-end"
    tabIndex={-1}
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div className="offcanvas-header px-4">
      <a className="navbar-brand" href="#">
        <span className="d-flex flex-column text-uppercase text-xs fw-bold lh-sm">
          <span className="" style={{ letterSpacing: ".12rem" }}>
            Furnish
          </span>
          <span>Template</span>
        </span>
      </a>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
      <div className="navbar-custom">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="index.html"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">
              About us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="products.html">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="testimonials.html">
              Testimonials
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="contact.html">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

</>);
}
export default Footer;