import "./testimonial.css";
import TestimonialCard from "./testimonial_card.jsx";
import Imga from "../assets/images/avatar/man.png"
function Testimonial() {
  return (
    <>
      <section className="testimonial text-black py-5">
        <h1 className="fw-bold text-center py-5">What Our Users Say</h1>
        <div className="container">
            <div className="row justify-content-center card-container">
            <TestimonialCard 
            text={"This platform change the waay I stay in touch with my friends and family. The interface is smooth, and I lov how easy it is to share my moments!"}
            Img={Imga}
            name={"Emily R"}
            country={"USA"}
            />
            <TestimonialCard 
            text={"Finally, a social network that understands what I need! The privacy features are a game-changer, and feel safer sharing my life online"}
            Img={Imga}
            name={"Amit K"}
            country={"India"}
            />
            <TestimonialCard 
            text={"I joined just fo explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every inferaction speciall"}
            Img={Imga}
            name={"Sophia M"}
            country={"UK"}
            />
            <TestimonialCard 
            text={"Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand"}
            Img={Imga}
            name={"Javier L"}
            country={"Spain"}
            />
            <TestimonialCard 
            text={"The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!"}
            Img={Imga}
            name={"Lucas T"}
            country={"Brazil"}
            />
            <TestimonialCard 
            text={"I've tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense"}
            Img={Imga}
            name={"Nora S"}
            country={"Canada"}
            />
            <TestimonialCard 
            text={"This platform change the waay I stay in touch with my friends and family. The interface is smooth, and I lov how easy it is to share my moments!"}
            />
            <span className="col-4 text-center">
            <button className="btn btn-light btn-lg card-div-btn text-danger">See More</button>
            </span>
            <TestimonialCard 
            text={"This platform change the waay I stay in touch with my friends and family. The interface is smooth, and I lov how easy it is to share my moments!"}
            />
        </div>
        </div>

      </section>
    </>
  );
}

export default Testimonial;
