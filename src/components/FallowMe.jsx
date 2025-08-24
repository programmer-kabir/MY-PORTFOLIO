import { FaFacebookF, FaInstagram, FaLinkedinIn,FaWhatsapp  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const FallowMe = () => {
  return (
    <div className=" hidden md:flex flex-col items-center gap-5 bg-transparent">
      <h2 className="rotate-90 text-white">Follow Me</h2>
      <div className="w-[2px] h-16 bg-white mt-7"></div>
      <div className="text-white flex flex-col gap-4">
        <Link target="_blank" to="https://www.facebook.com/programmerkabirr">
          <FaFacebookF size={19} className="hover:text-[#009E66]" />
        </Link>
        <Link target="_blank" to="https://twitter.com/KabirHossenn">
          <FaXTwitter size={19} className="hover:text-[#009E66]" />
        </Link>
        <Link target="_blank" to="https://www.instagram.com/kabirr_hossen/">
          <FaInstagram size={19} className="hover:text-[#009E66]" />
        </Link>
        <Link target="_blank" to="https://www.linkedin.com/in/kabirhossen">
          <FaLinkedinIn size={19} className="hover:text-[#009E66]" />
        </Link>
        <Link target="_blank" to="https://wa.me/8801763685616">
          <FaWhatsapp size={20} className="hover:text-[#009E66]" />
        </Link>
      </div>
    </div>
  );
};

export default FallowMe;
