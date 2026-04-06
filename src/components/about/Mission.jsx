import aboutImage from '../../assets/images/about.jpg';
const Mission = ()=>{
    return(<><section className="py-lg-8 py-5">
  <div className="container">
    <div className="row align-items-center g-5 mx-lg-8">
      <div className="col-md-6">
        <img
          src={`${aboutImage}`}
          alt="Living room"
          className="img-fluid "
        />
      </div>
      <div className="col-md-6">
        <div className="ms-lg-8">
          <h2 className=" mb-3">Our Mission</h2>
          <p className="text-muted">
            At Furnish, our mission is to bring timeless style and comfort to
            every home. We combine craftsmanship, innovation, and sustainability
            to create furniture that lasts for generations.
          </p>
          <p className="text-muted">
            From sourcing eco-friendly materials to perfecting every curve and
            detail, we are dedicated to creating pieces that bring harmony and
            functionality to your living space.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</>);
}
export default Mission;