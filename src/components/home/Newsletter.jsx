const Newsletter = ()=>{
    return(<><section className="py-lg-10 py-5">
  <div className="container ">
    <div className="row justify-content-center mx-lg-10">
      <div className="col-lg-8 text-center">
        <h2 className=" mb-5">Subscribe to our Newsletter</h2>
        <form className="d-flex justify-content-center gap-2 flex-column flex-sm-row">
          <input
            type="email"
            className="form-control w-lg-50 w-100"
            placeholder="Enter your email"
            required=""
          />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
</>);
}
export default Newsletter;