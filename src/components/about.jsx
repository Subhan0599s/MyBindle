import "./about.css";
import Img2 from "../assets/images/img2.png";
import Aboutcard from "./about_card.jsx";
function About() {
  return (
    <>
      <section className="container-fluid about">
        <div className="row">
          <div className="col-6 py-5 text-center">
            <img src={Img2} className="my-5 side_img" />
          </div>
          <div className="col-6">
            <div className="about_content text-black">
              <h1 className="about_heading my-4">
                Where Every Click <br /> Sparks a Connection!
              </h1>
              <p className="text-black about_parah py-4">
                A small act of kindness today can create a lifetime of impact
                for someone in <br /> need. Give from the heart and change a
                life!
              </p>
            </div>
            <div className="container-fluid d-flex">
              <div className="row">
                <Aboutcard 
                head={"🎥 Short Videos & Reels"}
                text={"Share engaging, bite-sized content that keeps everyone entertained."}
                />
                <Aboutcard 
                head={"🔔 Smart Notifications"}
                text={"Stay updated on what matters without the noise."}
                />
                <Aboutcard 
                head={"👥 Interest-Based Communities"}
                text={"Join groups and discussions that match your passion."}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
