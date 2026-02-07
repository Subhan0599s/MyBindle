function TestimonialCard({ text, name, country, Img}) {
  return (
      <div className="col-12 col-sm-10 col-md-6 col-lg-6">
        <div className="card-div-testimonial m-5 pt-4">
            <span className="m-4">
                <i className="fa-solid fa-star" style={{color:"gold"}}></i>
                <i className="fa-solid fa-star" style={{color:"gold"}}></i>
                <i className="fa-solid fa-star" style={{color:"gold"}}></i>
                <i className="fa-solid fa-star" style={{color:"gold"}}></i>
                <i className="fa-solid fa-star" style={{color:"gold"}}></i>
            </span>
          <p className="mt-3 mb-3 p-2 text-muted text-wrap">
            {text}
          </p>
          <div className="d-flex">
            <img src={Img} style={{width:60}} className="img2"/>
          <div className="info">
          <h3>{name}</h3>
          <span>{country}</span>
          </div>
          </div>
        </div>
      </div>
  );
}

export default TestimonialCard;
