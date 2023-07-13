import React from "react";
const Contact = () => {
  return (
    <div className="container contact">
      <div className="row">
        <div className="col-md-8 col-12 mx-auto">
          <div className="card shadow-lg border-0 p-4">
            <h1 className="text-center bg-dark text-white display-4 d-inline-block">
              Contact Us
            </h1>
            <form action="https://formspree.io/f/mnqyaoro" method="POST">
              <div className="form-group my-5">
                <div className="row">
                  <div className="col-md-6 col-12 mx-auto my-2">
                    <input
                      type="text"
                      className="form-control-lg"
                      placeholder="First Name"
                      name="fname"
                      required
                    />
                  </div>
                  <div className="col-md-6 col-12 mx-auto my-2">
                    <input
                      type="text"
                      className="form-control-lg"
                      placeholder="last Name"
                      name="lname"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mb-5">
                <div className="row">
                  <div className="col-md-6 col-12 mx-auto my-2">
                    <input
                      type="email"
                      className="form-control-lg"
                      placeholder="Email Address"
                      name="email"
                      required
                    />
                  </div>
                  <div className="col-md-6 col-12 mx-auto my-2">
                    <input
                      type="tel"
                      className="form-control-lg"
                      placeholder="Phone no."
                      name="pno"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-11">
                  <textarea
                    className="form-control"
                    row="20"
                    placeholder="Your message"
                    name="msg"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="mt-5 col-md-6 col-12 mx-auto">
                <button
                  type="submit"
                  className="btn btn-outline-dark btn-lg btn-block"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
