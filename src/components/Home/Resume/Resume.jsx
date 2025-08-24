import Content from "../../Content";
import ResumeCard from "../../ResumeCard";
import Title from "../../Share/Title";
const Experience = [
  {
    _id: 1,
    title: "Adobe Illustrator Training",
    institution: "The Knowledge Academy",
    time: 6,
    description:
      "Comprehensive training on vector graphics, logo design, typography, and advanced illustration techniques using Adobe Illustrator.",
  },
  {
    _id: 2,
    title: "Photoshop Course",
    institution: "The Knowledge Academy",
    time: 6,
    description:
      "In-depth course covering photo editing, retouching, digital painting, and UI/UX design using Adobe Photoshop.",
  },
  {
    _id: 3,
    title: "Front-End Developer",
    institution: "Programming Hero",
    time: 6,
    description:
      "Gained expertise in HTML, CSS, JavaScript, and modern frameworks like React.js, Next.js, and Tailwind CSS to build responsive and interactive web applications.",
  },
  {
    _id: 4,
    title: "Full Stack Developer",
    institution: "Programming Hero",
    time: 6,
    description:
      "Developed proficiency in both frontend and backend technologies, including React.js, Next.js, Node.js, Express.js, and MongoDB, to build scalable and high-performance web applications.",
  },
];
const Education = [
  {
    _id: 1,
    title: "Science Stream (Class 11-12)",
    institution: "Sunamganj Government College",
    date: "Completed",
    "description": "Completed Class 11-12 in the Science stream at Sunamganj Government College, gaining knowledge in subjects like Physics, Chemistry, Biology, and Mathematics."  },
  {
    _id: 2,
    "title": "Science Stream (Class 9-10)",
    institution: "Mangalkata High School",
    date: "Completed",
    description: "Completed Class 9-10 in the Science stream at Mangalkata High School, gaining foundational knowledge in subjects like Physics, Chemistry, Biology, and Mathematics."  },
];

const Resume = () => {
  return (
    <section id="/resume" className="mt-[420px] lg:mt-0">
      <Content>
      <Title title={"Resume"} subTitle={"My Resume"} />
      <div className="mt-10">
        <div className="lg:flex lg:gap-20">
          <div>
            <h2 className="text-2xl font-semibold text-white  pb-5">
              Experience
            </h2>
            <div className="text-white bg-[#1E1E1E] border-l-4 border-[#009E66]">
              {Experience.map((data, index) => (
                <ResumeCard
                  key={data._id}
                  index={index}
                  data={data}
                  Experience={Experience}
                />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white  pb-5 pt-14 lg:pt-0">
              Experience
            </h2>
            <div className="text-white bg-[#1E1E1E] border-l-4 border-[#009E66]">
              {Education.map((data, index) => (
                <ResumeCard
                  key={data._id}
                  index={index}
                  data={data}
                  Experience={Education}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Content>
    </section>
  );
};

export default Resume;
