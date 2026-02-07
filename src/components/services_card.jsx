function ServicesCard({ head, text}) {
  return (
            <div className="col-12 col-sm-10 col-md-6 col-lg-4">
              <div className="card card-div text-center p-4 m-3">
                <h5 className="mb-2">{head}</h5>

                <p className="mb-0 text-muted text-wrap">
                  {text}
                </p>
              </div>
            </div>
  );
}

export default ServicesCard;
