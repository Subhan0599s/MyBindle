function TestimonialCard({ text, name, country, Img}) {
  return (
      <div className="col-4">
        <div className="card card-div-testimonial p-4 m-3">
            <span className="mb-4">
                <i className="fa-solid fa-star" style={{color:"gold"}}></i>
                <i className="fa-solid fa-star" style={{color:"gold"}}></i>
                <i className="fa-solid fa-star" style={{color:"gold"}}></i>
                <i className="fa-solid fa-star" style={{color:"gold"}}></i>
                <i className="fa-solid fa-star" style={{color:"gold"}}></i>
            </span>
          <p className="mb-0 text-muted text-wrap">
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
