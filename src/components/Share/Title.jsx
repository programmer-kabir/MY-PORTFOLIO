const Title = ({ title, subTitle }) => {
  return (
    <div className="relative flex items-center justify-start  text-4xl font-bold pb-5">
      <span
        className={`absolute text-transparent select-none uppercase font-extrabold ${
          title === "Testimonials"
            ? "text-[45px] md:text-[110px]"
            : "text-[60px] md:text-[110px]"
        }`}
        style={{
          WebkitTextStroke: "2px #414141",
        }}
      >
        {title}
      </span>
      <span className="relative px-2 text-white">{subTitle}</span>
    </div>
  );
};

export default Title;
