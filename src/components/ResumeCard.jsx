const ResumeCard = ({ index, data, Experience }) => {
  return (
    <div
      className={`relative py-8 px-12 flex justify-between items-center ${
        index !== Experience?.length - 1 ? "border-b border-[#2E2E2E]" : ""
      }`}
    >
      {/* Left Section with Arrows */}
      <div className="relative pl-10">
        <div className="arrow-border"></div>
        <div className="arrow-triangle"></div>
        <p className="font-medium text-[18px]">{data.title}</p>
        <div className="text-[#7D7D7D] space-y-1.5 pt-3">
          <p>
            <span className="font-semibold text-[#c5c5c5]">
              Institution Name :
            </span>{" "}
            {data?.institution}
          </p>
          <p>
            <span className="font-semibold text-[#c5c5c5]">
              Duration time :
            </span>{" "}
            {data?.time} Month
          </p>
          <p>{data?.description}</p>
        </div>
      </div>

      {/* Right Side Icon */}
      <div className="border-r-4 border-[#009E66] pr-4">
        <i className="fas fa-graduation-cap text-[#009E66] text-2xl"></i>
      </div>
    </div>
  );
};

export default ResumeCard;
