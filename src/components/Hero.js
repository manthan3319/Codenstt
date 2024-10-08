import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import heroImg from "../images/web-dev.svg";
import { gif, transparent } from "./Images/Images";

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <div>
          <NavBar />
        </div>

        <div
          className="m-auto overflow-hidden mx-4  p-2 md:p-12 h-5/6 mt-[100px]"
          data-aos="zoom-in"
        >
          <div
            id="hero"
            className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left "
          >
            <div
              className="lg:w-1/2 flex flex-col justify-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                {/* We build digital solutions to help businesses scale */}
                CODENST Marketing & Web Solution Partner
              </h1>
              <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                Your search for the top-rated web 3.0 marketing & development
                company ends here with CODENST, a leading name in the digital
                marketing industry, headquartered in Dubai. Whether you're
                looking for cutting-edge web 3.0 solutions or innovative
                marketing strategies, CODENST is your trusted partner.
              </div>
             
            </div>
            <div
              className="flex lg:justify-end w-full lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <img
                alt="card img"
                className="rounded-t float-right duration-1000 w-[80%] "
                src={transparent}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
