import bgImage from '../../assets/images/couch-with-cushions-glass-table.jpg';
const Ceo = ()=>{
    console.log(bgImage);
    return(<section
  style={{
    background:
      `url(${bgImage}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
  className="py-lg-11 py-6"
>
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-8">
        <div className="card border-0 shadow-lg rounded-0">
          <div className="card-body p-6">
            <div className="text-center">
              <p className="fst-italic ">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div className="lh-1">
                <h4 className="fs-5 mb-1">John Deo</h4>
                <small className="text-sm">CEO, Company Name</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
}
export default Ceo;