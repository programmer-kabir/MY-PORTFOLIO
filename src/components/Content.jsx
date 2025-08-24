import PropTypes from "prop-types";

const Content = ({ children }) => {
  return <div className="w-[94%] mx-auto px-2 lg:px-12  2xl:px-16">{children}</div>;
};

// Add PropTypes validation
Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
