import Navbar from "../components/Navbar";
import Hero from "../components/contact/Hero";
import Footer from "../components/Footer";
const Contact = ()=>{
    return (<>
    <Navbar/>
    <Hero/>
    <section className="py-5">
  <div className="container">
    <div className="row g-5 align-items-start">
      {/* Contact Info */}
      <div className="col-md-4">
        <h4 className=" mb-4">Get in Touch</h4>
        <p className="text-muted mb-4">
          Whether you have a question about our products, need assistance, or
          just want to talk furniture — we’re here for you.
        </p>
        <div className=" d-flex align-items-start mb-3">
          <i className="bi bi-geo-alt-fill me-3 text-secondary" />
          <div>
            <h5 className="fw-semibold mb-1 text-uppercase text-xs">Address</h5>
            <p className="text-muted mb-0">
              123 Furniture Street, Mumbai, India
            </p>
          </div>
        </div>
        <div className=" d-flex align-items-start mb-3">
          <i className="bi bi-envelope-fill me-3 text-secondary" />
          <div>
            <h5 className="fw-semibold mb-1 text-uppercase text-xs">Email</h5>
            <p className="text-muted mb-0 ">support@furnish.com</p>
          </div>
        </div>
        <div className=" d-flex align-items-start mb-3">
          <i className="bi bi-telephone-fill me-3 text-secondary" />
          <div>
            <h5 className="fw-semibold mb-1 text-uppercase text-xs">Phone</h5>
            <p className="text-muted mb-0 ">+91 98765 43210</p>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div className="col-md-8">
        <div className="card ">
          <div className="card-body p-lg-5">
            <h4 className=" mb-4">Send a Message</h4>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    required=""
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                    required=""
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows={5}
                    placeholder="Write your message here..."
                    defaultValue={""}
                  />
                </div>
                <div className="col-12 text-end">
                  <button type="submit" className="btn btn-dark px-4">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* Map */}
    <div className="row mt-5">
      <div className="col-12">
        <div className="map-container shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.562818737127!2d72.87765531490345!3d19.119677355555584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f92a2b3a2d%3A0x1a7e7d9b8b94d17a!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1676474830123!5m2!1sen!2sin"
            width="100%"
            height={350}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</section>

    <Footer/>
    </>);
}
export default Contact;