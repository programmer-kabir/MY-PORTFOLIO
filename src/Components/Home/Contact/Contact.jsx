import React, { useRef, useState } from "react";
import "./Contact.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Content from "../../Content/Content";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  // Check if both fields have text
  const isFormFilled = email !== '' && message !== '' && name !== '';
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4i6e9en",
        "template_wqq3l3o",
        form.current,
        "jN1OoaI7XqGtsW1L1"
      )
      .then(
        (result) => {
          if(result){
            Swal.fire({
              title: 'Yah!! Your message Submit',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })
            form.current.reset();
          }
        },
        (error) => {}
      );
  };
  return (
    <Content>
      <section id="contact" className="pt-16 pb-10">
        <div data-aos="fade-up"
     data-aos-duration="3000">
          <div className="text-center ">
            <h2 className="text-4xl font-bold text-[#A362FF] text-center ">
              Contact <span className="text-white">ME!!</span>{" "}
            </h2>

            <div
              className="mt-5 flex md:flex-row flex-col-reverse
           gap-6  md:px-5 px-2 py-3 md:py-5 bg-gray-800 rounded-lg mx-auto"
            >
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex  font-medium flex-col flex-1 gap-5"
              >
                <input
                  type="text"
                  onChange={e => setName(e.target.value)}
                  className="py-2 bg-[#081021]  rounded-md px-2 text-white"
                  name="from_name"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  onChange={e => setEmail(e.target.value)}
                  name="from_email"
                  placeholder="Your Email Address"
                  className="py-2  bg-[#081021] rounded-md px-2 text-white"
                />
                <textarea
                  className="py-2 bg-[#081021]  rounded-md px-2 text-white"
                  name="message"
                  placeholder="Your Message"
                  rows={10}
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  disabled={!isFormFilled}
                  value="Send"
                  className={`fromButton  ${isFormFilled ? 'bg-blue-500 border-2 border-blue-700' : 'bg-gray-500 pointer-events-none'}`}
                >
                  Send Message
                </button>
              </form>
              <div className="flex flex-col  gap-7">
                <div>
                  <h2 className="text-2xl font-semibold  text-white ">
                    Find Me on
                  </h2>
                  <div className="flex flex-row gap-5 mt-7 justify-center">
                    <Link to='https://www.facebook.com/profile.php?id=100088846041154' ><FaFacebookF className="w-7 h-7 text-white" /></Link>
                    <Link to='https://www.linkedin.com/in/kabirhossen'><FaLinkedinIn className="w-7 h-7 text-white" /></Link>
                    <Link to='https://twitter.com/KabirHossenn'><FaTwitter className="w-7 h-7 text-white" /></Link>
                  </div>
                </div>
                <div className="flex flex-col gap-7">
                  <div className="flex items-center md:text-lg text-white gap-3 text-sm  break-words">
                    <span className="md:min-w-[3.5rem] min-w-[2.5rem] md:text-3xl text-xl  min-h-[2.5rem] md:min-h-[3.5rem] flex items-center justify-center text-white bg-blue-500 rounded-full">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="envelope"
                        className="svg-inline--fa fa-envelope text-white md:w-7 md:h-7 w-5 h-5 font-semibold"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                        ></path>
                      </svg>
                    </span>
                    programmerkabirr@gmail.com
                  </div>
                  <div className="flex items-center md:text-lg text-white gap-3 text-sm  break-words">
                    <span className="md:min-w-[3.5rem] min-w-[2.5rem] md:text-3xl text-xl  min-h-[2.5rem] flex items-center justify-center text-white bg-blue-500 rounded-full ">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="phone"
                        className="svg-inline--fa fa-phone text-white md:w-7 md:h-7 w-5 h-5"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                        ></path>
                      </svg>
                    </span>
                    +8801763685616
                  </div>

                  <div className="flex items-center md:text-lg text-white gap-3 text-sm  break-words">
                    <span className="md:min-w-[3.5rem] min-w-[2.5rem] md:text-3xl text-xl  min-h-[2.5rem] flex items-center justify-center text-white bg-blue-500 rounded-full">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="location-dot"
                        className="svg-inline--fa md:w-7 md:h-7 w-5 h-5 fa-location-dot text-white"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="currentColor"
                          d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                        ></path>
                      </svg>
                    </span>
                    Sunamgonj,Sylhet, Bangladesh
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Content>
  );
};

export default Contact;
