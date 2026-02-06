import './hero.css'
import  Img1 from '../assets/images/img1.png'
import  Img2 from '../assets/images/hero_img.png'
function Hero() {
    return (
        <>
        <section className="hero container-fluid py-2">
        <div className="row align-items-center">
        <div className="col-12 col-md-6 text_hero text-sm-start text-md-start  mb-5">
          <h1 className="heading_hero d-none d-md-block">
            Stay Connected <br />
            Stay Social <br />
            Stay You!
          </h1>
          <h1 className="heading_hero2 d-block d-md-none">
            Stay Connected <br />
            Stay Secure
          </h1>
          <p className="parah d-none d-md-block">
            A place where friendships grow, communities thrive, and moments turn into unforgettable experiences. Whether you're looking to reconnect with old friends, build new relationships, or share what matters most to you – MyBindle is your home on the internet.
          </p>
          <p className="parah2 d-block d-md-none">
            Stay Hello to the future <br /> of Secure communication
          </p>
        <button className="btn btn-light text-danger d-none d-md-block mb-5">
          Get Started
        </button>
      </div>
    <div className="col-12 col-md-6 text-center mt-4">
      <img src={Img1} className="img-fluid Img_hero d-none d-md-block" alt="hero" />
      <img src={Img2} className="img-fluid Img_hero2 d-block d-md-none" alt="hero" />
    </div>
  </div>
</section>
        </>       
    )
}

export default Hero