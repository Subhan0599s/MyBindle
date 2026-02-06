import "./footer.css";
import Img4 from "../assets/images/img4.png";

function Footer() {
  return (
    <>
      <footer className="container-fluid d-flex">
        <div
          className="footer-heading"
          style={{ padding: "40px", position: "relative" }}
        >
          <h1 style={{ position: "relative", zIndex: 3, color: "white" }}>
            Be the Reason <br /> Someone Smiles Today!
          </h1>
          <p>
            Your generosity can change lives every donation brings hope,
            support, and a brighter <br /> future. Give today and make a
            difference!
          </p>
          <div className="store-buttons py-4">
            <button className="store-btn apple">
              <i className="fa-brands fa-apple"></i>
              <div>
                <span>Download on the</span>
                <strong>App Store</strong>
              </div>
            </button>

            <button className="store-btn google">
              <i className="fa-brands fa-google-play"></i>
              <div>
                <span>Get it on</span>
                <strong>Google Play</strong>
              </div>
            </button>
          </div>
          <img
            src={Img4}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              zIndex: 1,
              marginRight: "130px",
            }}
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;
