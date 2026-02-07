function Aboutcard({head, text}) {
    return (
            <div className="col-12 col-md-12 col-sm-12 py-2 me-md-5">
                  <div className="about-card-div d-flex flex-column align-items-start h-100">
                    <h5 className="text-black">{head}</h5>

                    <p className=" text-muted text-wrap p-1 text-black">
                      {text}
                    </p>
                  </div>
                </div>
    )
}

export default Aboutcard;