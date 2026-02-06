function Aboutcard({head, text}) {
    return (
            <div className="col-12 py-3">
                  <div className="card about-card-div">
                    <h5 >{head}</h5>

                    <p className=" text-muted text-wrap p-1">
                      {text}
                    </p>
                  </div>
                </div>
    )
}

export default Aboutcard;