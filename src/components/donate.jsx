import Img3 from "../assets/images/Img3.png";
import "./donate.css";
function Donate() {
  return (
    <>
      <section className="Donate container-fluid d-flex">
        <div
          className="donate-heading"
          style={{ padding: "30px", position: "relative" }}
        >
          <h1
            style={{ position: "relative", zIndex: 3, color: "white" }}
            className="d-none d-md-block"
          >
            Be the Reason <br /> Someone Smiles Today!
          </h1>
          <h1
            style={{ position: "relative", zIndex: 3, color: "white" }}
            className="d-block d-md-none"
          >
            Spread Smiles Today
          </h1>
          <p className="d-none d-md-block">
            Your generosity can change lives every donation brings hope,
            <br />
            support, and a brighter future. Give today and make a difference!
          </p>
          <p className="d-block d-md-none">Every donation brings hope. Make a difference today.</p>
          <button className="btn btn-light text-danger">Donate Now</button>
          <img
            src={Img3}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              zIndex: 1,
              marginRight: "40px",
            }}
          />
        </div>
      </section>
    </>
  );
}

export default Donate;
