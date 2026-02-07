import "./testimonial.css";
import TestimonialCard from "./testimonial_card.jsx";
import Imga from "../assets/images/avatar/man.png"
function Testimonial() {
  return (
    <>
      <section className="testimonial text-black py-5">
        <h1 className="fw-bold text-center py-5">What Our Users Say</h1>
        <div className="container">
            <div className="row">
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
        </div>
        </div>

      </section>
    </>
  );
}

export default Testimonial;
