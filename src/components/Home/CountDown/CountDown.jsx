import { useEffect, useRef, useState } from "react";
import Content from "../../Content";
import CountUp from 'react-countup';
const CountDown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the first intersection
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <Content>

      <div className="bg-[#1E1E1E] border-b-2 border-[#009E66] md:border-hidden md:px-16 py-10 text-white lg:flex items-center justify-between space-y-10 md:space-y-0">
        <div className="md:flex text-center items-center gap-5">
          <p   ref={elementRef} className="text-[#009E66] text-6xl font-bold">
          {isVisible && (
              <CountUp start={0} end={3} duration={1} suffix=" +" />
            )}
          </p>
          <p className="text-2xl md:text-xl font-medium">
            Years of <br className="hidden md:flex"/> Experience
          </p>
        </div>
        <div className="md:flex text-center items-center gap-5">
          <p  ref={elementRef} className="text-[#009E66] text-6xl font-bold">
          {isVisible && (
              <CountUp start={0} end={20} duration={1} suffix=" +" />
            )}

          </p>
          <p className="text-2xl md:text-xl font-medium">
            Projects <br className="hidden md:flex"/> Completed
          </p>
        </div>
        <div className="md:flex text-center items-center gap-5">
          <p  ref={elementRef} className="text-[#009E66] text-6xl font-bold">
          {isVisible && (
              <CountUp start={0} end={11} duration={1} suffix=" +" />
            )}
          </p>
          <p className="text-2xl md:text-xl font-medium">
            Clients World <br className="hidden md:flex"/> Wide
          </p>
        </div>
      </div>
    </Content>
  );
};

export default CountDown;
