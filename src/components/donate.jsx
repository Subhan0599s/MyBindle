import Img3 from "../assets/images/Img3.png";
import "./donate.css";
function Donate() {
  return (
    <>
      <section className="Donate container-fluid d-flex">
        <div className="donate-heading" style={{ padding : "70px",position: "relative" }}>
          <h1 style={{ position: "relative", zIndex: 3, color: "white" }}>
            Be the Reason <br /> Someone Smiles Today!
          </h1>
          <p>
            Your generosity can change lives every donation brings hope,
            support, and a brighter <br /> future. Give today and make a difference!
          </p>
          <button className="btn btn-light text-danger">Donate Now</button>
          <img src={Img3} style={{position: "absolute",right: 0,top: 0,zIndex: 1,marginRight: "130px"}} />
        </div>
      </section>
    </>
  );
}

export default Donate;
