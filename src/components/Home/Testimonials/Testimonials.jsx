import Content from "../../Content";
import Title from "../../Share/Title";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { RiDoubleQuotesR } from "react-icons/ri";
import { Pagination } from "swiper/modules";
import './Testimonials.css'
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/testimonials.json");
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <Content>
      <Title title="Testimonials" subTitle="What People Say" />
      <div className="pt-10 text-white">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1599: { slidesPerView: 3 },
          }}
          className="mySwiper "
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide 
              key={testimonial._id} 
              className="bg-[#1E1E1E] py-12 px-10 rounded-lg shadow-lg flex flex-col mb-12 min-h-[250px]"
            >
              {/* Header: Image, Name, Role, and Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-14 w-14 object-cover rounded-full border-2 border-gray-700"
                  />
                  <div>
                    <p className="text-lg font-semibold">{testimonial.name}</p>
                    <p className="text-gray-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                {/* Quote Icon */}
                <RiDoubleQuotesR size={50} color="#009E66" />
              </div>

              {/* Review Text (flex-grow ensures equal height distribution) */}
              <p className="mt-4 text-base leading-relaxed text-gray-300 flex-grow">
                {testimonial.review}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Content>
  );
};

export default Testimonials;
