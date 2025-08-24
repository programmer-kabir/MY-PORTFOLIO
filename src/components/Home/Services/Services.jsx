import Content from "../../Content";
import Title from "../../Share/Title";

const services = [
  { _id: 1, image: "https://iili.io/3Kw8Sql.png", title: "Custom Website Design", description: "Personalized website design tailored to your brand." },
  { _id: 2, image: "https://iili.io/3Kw8Mfp.png", title: "E-commerce Development", description: "Building online stores with platforms like Shopify, WooCommerce, or custom." },
  { _id: 3, image: "https://iili.io/3Kw8vs4.png", title: "Responsive Web Design", description: "Making websites mobile-friendly and responsive across all devices." },
  { _id: 4, image: "https://iili.io/3Kw8ezG.png", title: "Web Application Development", description: "Building dynamic web applications (SPAs, PWAs)." },
  { _id: 5, image: "https://iili.io/3Kw8Nbs.png", title: "SEO Optimization", description: "Optimizing websites to rank better on search engines." },
  { _id: 6, image: "https://iili.io/3Kw8hJt.png", title: "API Integration", description: "Integrating third-party APIs for payment gateways, social media, etc." },
  { _id: 7, image: "https://iili.io/3KN33Bf.png", title: "Full Stack Development", description: "Developing both frontend and backend of websites or web applications." },
  { _id: 8, image: "https://iili.io/3Kw8j5X.png", title: "Customer Support", description: "Assisting customers with inquiries, troubleshooting issues, and ensuring a smooth user experience via chat, email, or phone." },
  { _id: 9, image: "https://iili.io/3KNCxTB.png", title: "Website Maintenance", description: "Regular updates, fixing bugs, and ensuring website security." },
];

const Services = () => {
  return (
 <section id="/services">
     <Content>
      <Title title="Services" subTitle="My Services" />
      <div className="pt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-white">
        {services.map(({ _id, image, title, description }) => (
          <div
            key={_id}
            className="py-8 px-12 bg-[#1E1E1E] space-y-2 transition-all duration-300 border-b-2 border-transparent hover:border-[#009E66]"
          >
            <img className="h-16 w-16" src={image} alt={title} />
            <p className="text-xl font-medium">{title}</p>
            <p className="text-[#7D7D7D]">{description}</p>
          </div>
        ))}
      </div>
    </Content>
 </section>
  );
};

export default Services;
