const SkillBar = ({skill}) => {
    const percentage = parseInt(skill.percentage);
    return (
        <div className="w-full py-4">
      <div className="flex justify-between mb-2 text-[#7D7D7D]">
        <span >{skill.title}</span>
        <span>{skill.percentage}</span>
      </div>
      <div
        className="w-full h-1"
        style={{
          border: "4px solid transparent",
          borderImage: `linear-gradient(to right, #009E66 ${percentage}%, #313131 ${100 - percentage}%) 1`,
        }}
      ></div>
    </div>
    );
};

export default SkillBar;