import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./About.css";
function About() {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 my-auto row">
              <img
                src={require("../images/about.svg")}
                alt="about us"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 col-12 my-auto">
              <br />
              <br />
              <h1 className="display-4 text-center my-5">About Us </h1>
              <p className="lead text-justify text-center">
                Life Luxury is a hotel search with an extensive price
                comparison. The prices shown come from numerous hotels and
                booking websites. This means that while users decide on trivago
                which hotel best suits their needs, the booking process itself
                is completed through the booking sites (which are linked to our
                website). By clicking on the “view deal” button, you will be
                forwarded onto a booking site where you can complete the
                reservation for the hotel deal found on trivago. Let trivago
                help you to find the right price from over 300 booking sites!
              </p>
              <div className="text-center col-md-6 col-12 mx-auto">
                <Link
                  to="/contact"
                  className="btn btn-outline-dark btn-block btn-lg my-5"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          <div className="about_company">
            <h1 className="display-4">About Company</h1>
            <div className="pt-4">
              <p className="about_info">
                Life Luxuryhotel search allows users to compare hotel prices in
                just a few clicks from more than 300 booking sites for more than
                5.0 million hotels and other types of accommodation in over 190
                countries. We help millions of travelers each year compare deals
                for hotels and accommodations. Get information for weekend trips
                to cities l ike Mumbai or Bengaluru and you can find the right
                hotel on trivago quickly and easily. Delhi and its surrounding
                area are great for trips that are a week or longer with the
                numerous hotels available.{" "}
              </p>
            </div>
          </div>
          <div className="testimony">
            <h1 className="display-4 mb-4">What Our Clients says</h1>
            <div className="row mb-5">
              <div className="col-md-10 col-12 mx-auto ">
                <div
                  id="carouselExampleFade"
                  class="carousel slide carousel-fade"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div className="row">
                        <div className="col-md-8 col-12 my-auto">
                          <img
                            src={require("../images/customers/customer.svg")}
                            className="text-center img-fluid"
                            width="450"
                            height="400"
                            alt="customer1"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 col-12 my-auto">
                        <div className="text-dark">
                          <h3 className="font-weight-bolder ">Customer RTY</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. <br />
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="row">
                        <div className="col-md-8 col-12 my-auto">
                          <img
                            src={require("../images/customers/customer1.svg")}
                            className="text-center img-fluid"
                            width="450"
                            height="400"
                            alt="customer2"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="row">
                        <div className="col-md-8 col-12 my-auto">
                          <img
                            src={require("../images/customers/customer4.svg")}
                            className="text-center img-fluid"
                            width="450"
                            height="400"
                            alt="customer4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="team">
            <h1 className="display-4">Our Team</h1>
          </div>
          <div className="row mb-5">
            <div className="col-md-4 col-12 mx-auto my-2">
              <div className="card border-0 shadow-lg p-4">
                <img
                  src="https://source.unsplash.com/TMgQMXoglsM/500x350"
                  className="card-img-top"
                  alt="director"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">Director</h5>
                  <div className="card-text text-black-50">
                    CEO <p className="float-right">5 years</p>
                  </div>
                  <h6 className="mt-5">CONNECT</h6>
                  <div className="d-flex justify-content-around">
                    <FaFacebookSquare className="connect" />
                    <AiFillInstagram className="connect" />
                    <FaLinkedin className="connect" />
                    <IoLogoYoutube className="connect" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mx-auto my-2">
              <div className="card border-0 shadow-lg p-4">
                <img
                  src="https://source.unsplash.com/sNut2MqSmds/500x350"
                  className="card-img-top"
                  alt="director"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">Team Member</h5>
                  <div className="card-text text-black-50">
                    Manager <p className="float-right">5 years</p>
                  </div>
                  <h6 className="mt-5">CONNECT</h6>
                  <div className="d-flex justify-content-around">
                    <FaFacebookSquare className="connect" />
                    <AiFillInstagram className="connect" />
                    <FaLinkedin className="connect" />
                    <IoLogoYoutube className="connect" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mx-auto my-2">
              <div className="card border-0 shadow-lg p-4">
                <img
                  src="https://source.unsplash.com/9UVmlIb0wJU/500x350"
                  className="card-img-top"
                  alt="director"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">Team Member</h5>
                  <div className="card-text text-black-50">
                    Manager <p className="float-right">8 years</p>
                  </div>
                  <h6 className="mt-5">CONNECT</h6>
                  <div className="d-flex justify-content-around">
                    <FaFacebookSquare className="connect" />
                    <AiFillInstagram className="connect" />
                    <FaLinkedin className="connect" />
                    <IoLogoYoutube className="connect" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
