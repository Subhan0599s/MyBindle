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
          <h1 className="d-none d-md-block" style={{ position: "relative", zIndex: 3, color: "white" }}>
            Be the Reason Someone <br /> Smiles Today!
          </h1>
          <h1 className="d-block d-md-none" style={{ position: "relative", zIndex: 3, color: "white" }}>
            Be The Smile Today
          </h1>
          <p className="d-none d-md-block">
            Your generosity can change lives every donation brings hope,<br />
            support, and a brighter future. Give today and make a
            difference!
          </p>
          <p className="d-block d-md-none">
            Give today and make a
            difference!
          </p>
          <div className="store-buttons d-none d-md-block py-4">
            <button className="store-btn apple mb-3">
              <i className="fa-brands fa-apple"></i>
              <div>
                <span>Download on the</span>
                <strong>App Store</strong>
              </div>
            </button>

            <button className="store-btn google mt-3">
              <i className="fa-brands fa-google-play"></i>
              <div>
                <span>Get it on</span>
                <strong>Google Play</strong>
              </div>
            </button>
          </div>
          <img className="img_footer"
            src={Img4}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              zIndex: 1,
              marginRight: "20px",
            }}
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;
