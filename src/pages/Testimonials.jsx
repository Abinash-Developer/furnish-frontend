import Navbar from "../components/Navbar";
import Hero from "../components/testimonials/Hero";
import Footer from "../components/Footer";
const Testimonials = ()=>{
    return (<>
    <Navbar/>
    <Hero/>
    <section className="pb-8">
  <div className="container ">
    <div className="row g-4">
      <div className="col-lg-4 col-12">
        <div className="card  ">
          <div className="card-body p-6">
            <div className="text-center">
              <p className="fst-italic ">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </p>
              <div className="lh-1">
                <h4 className="fs-5 mb-1">John Deo</h4>
                <small>RMO, Company Name</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className="card  ">
          <div className="card-body p-6">
            <div className="text-center">
              <p className="fst-italic">
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum."
              </p>
              <div className="lh-1">
                <h4 className="fs-5 mb-1">Ria Dong</h4>
                <small>CEO, Company Name</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className="card  ">
          <div className="card-body p-6">
            <div className="text-center">
              <p className="fst-italic">
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum."
              </p>
              <div className="lh-1">
                <h4 className="fs-5 mb-1">Kenneth Gumbs</h4>
                <small>Salesperson, Company Name</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className="card  ">
          <div className="card-body p-6">
            <div className="text-center">
              <p className="fst-italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </p>
              <div className="lh-1">
                <h4 className="fs-5 mb-1">John Deo</h4>
                <small>RMO, Company Name</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className="card  ">
          <div className="card-body p-6">
            <div className="text-center">
              <p className="fst-italic">
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum."
              </p>
              <div className="lh-1">
                <h4 className="fs-5 mb-1">Joseph Perez</h4>
                <small>Quality inspector, Company Name</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className="card  ">
          <div className="card-body p-6">
            <div className="text-center">
              <p className="fst-italic">
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum."
              </p>
              <div className="lh-1">
                <h4 className="fs-5 mb-1">Christopher Caruso</h4>
                <small>Deputy, Company Name</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="text-center">
          <a href="#" className="btn btn-outline-dark">
            {" "}
            Load More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    <Footer/>
    </>);
}
export default Testimonials;