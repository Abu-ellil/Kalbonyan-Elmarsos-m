import React from "react";

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        Our <span>Services</span>
      </h2>

      <div className="services-container">
        <div className="services-box">
          <i className="fa-solid fa-code"></i>
          <h3>Web Development</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
            distinctio illum mollitia at, enim excepturi assumenda voluptatem
            dolorum temporibus illo est?{" "}
          </p>
          <a href="#" className="btn">
            Read More
          </a>
        </div>

        <div className="services-box">
          <i className="fa-solid fa-paintbrush"></i>
          <h3>Graphic Design</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
            distinctio illum mollitia at, enim excepturi assumenda voluptatem
            dolorum temporibus illo est?{" "}
          </p>
          <a href="#" className="btn">
            Read More
          </a>
        </div>

        <div className="services-box">
          <i className="fa-solid fa-chart-simple"></i>
          <h3>Digital Marketing</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
            distinctio illum mollitia at, enim excepturi assumenda voluptatem
            dolorum temporibus illo est?{" "}
          </p>
          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
