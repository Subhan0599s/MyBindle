import "./services.css";
import ServicesCard from "./services_card";
function Services() {
  return (
    <>
      <section className="services container-fluid mb-5">
        <div className="container text-center py-5 d-text">
          <h1 className="mt-5 fw-bold">Features That Keep You Hooked!</h1>
          <p className="mt-3 fs-5 text-black fw-bold">
            Meet, Chat, Share – Anytime, Anywhere!{" "}
          </p>
        </div>
        <div className="container my-4">
          <div className="row justify-content-center card-container">
            <ServicesCard 
            head={"🔥 Seamless Connections"}
            text={"Stay in touch with friends, family, and like-minded people with just a tap."}
            />
            <ServicesCard 
            head={"📸 Share Your Story"}
            text={"Upload photos, videos, and updates to let the world know what’s happening in your life."}
            />
            <ServicesCard 
            head={"💬 Real-Time Chat<"}
            text={"Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging."}
            />
            <ServicesCard 
            head={"🔒 Privacy First"}
            text={"Your data, your control. We prioritize your privacy with world-class security."}
            />
            <ServicesCard 
            head={"🌎 Discover & Explore"}
            text={"Find trending content, join communities, and follow pages that match your interests."}
            />
            <ServicesCard 
            head={"💼 Grow Your Business"}
            text={"Use our platform to market your brand, connect with customers,and build meaningful relationships."}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
