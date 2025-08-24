import React, { useRef, useState } from "react";
import Content from "../../Content";
import Title from "../../Share/Title";
import { FaUser, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');

  const form = useRef();
  const isFormFilled = email !== '' && message !== '' && name !== '';

  const sendEmail = (e) => {
    e.preventDefault();
      console.log(e.target);
    emailjs
      .sendForm('service_4l50bvi', 'template_tlq2fit', form.current, {
        publicKey: 'jN1OoaI7XqGtsW1L1',
      })
      .then(
        () => {
          toast.success("Your message Submit")
          // console.log('SUCCESS!');
        },
        (error) => {
          toast.success(error.text)
          // console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="/contact">
      <Content>
      <Title title="Contact" subTitle={"Get in Touch"} />
      <div className="mt-10 w-full lg:flex  gap-10 space-y-10 md:space-y-0 pb-10">
        <form ref={form} onSubmit={sendEmail} className="w-full space-y-10">
          <div className="flex gap-4 ">
            {/* Name */}
            <input
              className="outline-none bg-[#1C1C1C] w-full text-base px-[14px] py-[9px] border-b border-[#545454] text-[#F2F2F2] font-light focus:border-[#009E66]"
              placeholder="Name"
              type="text"
              name="user_name"
              onChange={e => setName(e.target.value)}
              id=""
            />
            {/* Email */}
            <input
              className="outline-none bg-[#1C1C1C] w-full text-base px-[14px] py-[9px] border-b border-[#545454] text-[#F2F2F2] font-light focus:border-[#009E66]"
              placeholder="Email"
              type="email"
              name="user_email"
              onChange={e => setEmail(e.target.value)}
              id=""
            />
          </div>
          {/* Subject */}
          <input
            className="outline-none bg-[#1C1C1C] w-full text-base px-[14px] py-[9px] border-b border-[#545454] text-[#F2F2F2] font-light focus:border-[#009E66]"
            placeholder="Subject"
            type="text"
            name="user_subject"
            onChange={e => setSubject(e.target.value)}
            id=""
          />

          {/* Message */}
          <textarea
            className="outline-none bg-[#1C1C1C] w-full text-base px-[14px] py-[9px] border-b border-[#545454] text-[#F2F2F2] font-light focus:border-[#009E66]"
            placeholder="Message"
            type="text"
            rows={4}
            name="message"
            onChange={e => setMessage(e.target.value)}
            id=""
          />
<button
  disabled={!isFormFilled}
  type="submit"
  value="Send"
  className={`px-7 py-3 font-medium text-white transition bg-[#00AE70] hover:bg-[#00AE79]  
    ${isFormFilled ? 'cursor-pointer' : 'cursor-not-allowed'}`}
>
  Send Message
</button>
        </form>

        <div className="text-white">
          <h2 className="text-2xl font-semibold pb-2.5">Contact Info </h2>
          <p className="text-[#9F9F9F]">
            Always available for freelance work if the right project comes
            along, Feel free to contact me!
          </p>
          {/* Info */}
         
          
              <div className="flex flex-col space-y-4 pt-4">
                {/* Name */}
                <div className="flex items-center">
                  <div className="pr-5 border-r-2 border-[#9F9F9F5C]">
                    <FaUser size={35} className="text-[#009E66] " />
                  </div>
                  <div className="pl-5 ">
                    <p className="text-[14px] font-medium">Name</p>
                    <p className="text-[14px] text-[#9f9f9f]">Kabir Ahmed</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center">
                  <div className="pr-5 border-r-2 border-[#9F9F9F5C]">
                    <FaMapLocationDot size={35} className="text-[#009E66] " />
                  </div>
                  <div className="pl-5">
                    <p className="text-[14px] font-medium  ">Location</p>
                    <p className="text-[14px] text-[#9f9f9f]">
                      Sunamganj, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center">
                  <div className="pr-5 border-r-2 border-[#9F9F9F5C]">
                    <FaPhoneAlt size={35} className="text-[#009E66] " />
                  </div>
                  <div className="pl-5">
                    <p className="text-[14px] font-medium">Phone</p>
                    <p className="text-[14px] text-[#9f9f9f]">
                      +880 1763-685616
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center">
                  <div className="pr-5 border-r-2 border-[#9F9F9F5C]">
                    <FaTelegramPlane  size={35} className="text-[#009E66] " />
                  </div>
                  <div className="pl-5">
                    <p className="text-[14px] font-medium">Email</p>
                    <p className="text-[14px] text-[#9f9f9f]">
                    programmerkabirr@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            
          
        </div>
      </div>

    </Content>
    </section>
  );
};

export default Contact;
