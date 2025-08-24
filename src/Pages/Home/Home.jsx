// import AboutUs from "../../components/Home/AboutUs/AboutUs";
// import Banner from "../../components/Home/Banner/Banner";
// import CountDown from "../../components/Home/CountDown/CountDown";
// import Resume from "../../components/Home/Resume/Resume";
// import Services from "../../components/Home/Services/Services";
// import Skills from "../../components/Home/Skills/Skills";

// const Home = () => {
//     return (
//         <div>
//             <Banner />

//             <div className="relative">
//                 {/* Border Background */}
//                 <div className="absolute w-[75%] left-1/2 transform -translate-x-1/2 h-full flex justify-between pointer-events-none">
//                     <div className="border-l border-[#252525] h-full"></div>
//                     <div className="border-l border-[#252525] h-full"></div>
//                     <div className="border-l border-[#252525] h-full hidden md:flex"></div>
//                     <div className="border-l border-[#252525] h-full hidden xl:flex"></div>
//                     <div className="border-l border-[#252525] h-full hidden xl:flex"></div>
//                 </div>

//                 {/* Content */}
//                 <div className="relative   pt-20 space-y-20">
//                     <AboutUs />
//                     <div className="pt-10 md:pt-16">
//                         <Resume />

//                     </div>
//                     <div className="pt-10 md:pt-16">

//                         <Skills/>
//                     </div>
//                     <div className="pt-10 md:pt-16">

//                         <Services/>
//                     </div>
//                     <div className="pt-10 md:pt-16">

//                         {/* <Services/> */}
//                         <CountDown/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;
import AboutUs from "../../components/Home/AboutUs/AboutUs";
import Banner from "../../components/Home/Banner/Banner";
import Blogs from "../../components/Home/Blogs/Blogs";
import Contact from "../../components/Home/Contact/Contact";
import CountDown from "../../components/Home/CountDown/CountDown";
import Portfolio from "../../components/Home/Portfolio/Portfolio";
import Resume from "../../components/Home/Resume/Resume";
import Services from "../../components/Home/Services/Services";
import Skills from "../../components/Home/Skills/Skills";
import Testimonials from "../../components/Home/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="relative">
        {/* Border Background */}
        <div className="absolute w-[75%] left-1/2 transform -translate-x-1/2 h-full flex justify-between pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`border-l border-[#252525] h-full ${
                i > 1 ? "hidden md:flex" : ""
              } ${i > 2 ? "hidden xl:flex" : ""}`}
            ></div>
          ))}
        </div>

        {/* Content */}
        <div className="relative pt-20 space-y-16 md:space-y-28 ">
          <AboutUs />
          <Resume />
          <Skills />
          <Services />
          <CountDown />
          <Portfolio />
          <Testimonials />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
