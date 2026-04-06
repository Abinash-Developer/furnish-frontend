import avtar1 from '../../assets/images/avatar/avatar-1.jpg';
import avtar2 from '../../assets/images/avatar/avatar-2.jpg';
import avtar3 from '../../assets/images/avatar/avatar-3.jpg';
import avtar4 from '../../assets/images/avatar/avatar-4.jpg';
const Team = ()=>{
    return(<><section className="py-lg-8 py-5">
  <div className="container text-center">
    <h2 className="mb-8">Meet Our Team</h2>
    <div className="row g-4">
      <div className="col-6 col-md-3">
        <div className="mx-md-8">
          <img
            src={`${avtar1}`}
            className="rounded-circle img-fluid mb-3"
            alt="Team member"
          />
        </div>
        <div className="lh-1">
          <h3 className=" mb-1 h5">Anna Smith</h3>
          <p className="text-muted small mb-0">Creative Director</p>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="mx-md-8">
          <img
            src={`${avtar2}`}
            className="rounded-circle img-fluid mb-3"
            alt="Team member"
          />
        </div>
        <div className="lh-1">
          <h3 className=" mb-1 h5">Michael Brown</h3>
          <p className="text-muted small mb-0">Product Designer</p>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="mx-md-8">
          <img
            src={`${avtar3}`}
            className="rounded-circle img-fluid mb-3"
            alt="Team member"
          />
        </div>
        <div className="lh-1">
          <h3 className=" mb-1 h5">Sarah Johnson</h3>
          <p className="text-muted small mb-0">Marketing Head</p>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="mx-md-8">
          <img
            src={`${avtar4}`}
            className="rounded-circle img-fluid mb-3"
            alt="Team member"
          />
        </div>
        <div className="lh-1">
          <h3 className=" mb-1 h5">David Lee</h3>
          <p className="text-muted small mb-0">Operations Lead</p>
        </div>
      </div>
    </div>
  </div>
</section>
</>);
}
export default Team;