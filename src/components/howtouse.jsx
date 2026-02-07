import './howtouse.css';

function Howtouse() {
    return(
        <>
        <section className="howtouse container-fluid">
            <div className='container head_howtoues text-black text-center py-5 fw-bolder'>
                <h1>How to Install Our App</h1>
                <p className='text-black mt-4 fw-bold'>Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.</p>
            </div>
            <div className="container count d-none d-md-flex ">
                <h1 className='text-danger me-3'>01</h1>
                <hr className='hr_count' />
                <h1 className='text-black me-3 ms-3'>02</h1>
                <hr className='hr_count' />
                <h1 className='text-black ms-3'>03</h1>
            </div>
            {/* for tablet view */}
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{display:"flex"}}>
              <div className="count d-block d-md-none">
                <h1 className='text-danger mb-5'>01</h1>
                <hr className='vr_count' />
                <h1 className='text-black mb-5 mt-5'>02</h1>
                <hr className='vr_count' />
                <h1 className='text-black mt-5'>03</h1>
            </div>
          <div className="container">
          <div className="row justify-content-center card-container">
            <div className="col-12 col-sm-10 col-md- col-lg-4">
              <div className="card card-div-howtouse text-center p-4 m-3">
                <h5 className="mb-2 fw-bold">Download</h5>

                <p className="mb-0 text-muted text-wrap">
                  Open Play Store or App Store
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-4">
              <div className="card card-div-howtouse text-center p-4 m-3">
                <h5 className="mb-2 fw-bold">Install App</h5>

                <p className="mb-0 text-muted">
                  The app will install automatically.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-4">
              <div className="card card-div-howtouse text-center p-4 m-3">
                <h5 className="mb-2 fw-bold">Ready to Use</h5>

                <p className="mb-0 text-muted">
                  Sign up or log in to start exploring!
                </p>
              </div>
            </div>
          </div>
        </div>
            </div>
        </section>
        </>
    )
}

export default Howtouse;