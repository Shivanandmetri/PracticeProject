import PropTypes from "prop-types";
const MainContent = ({ content }) => {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Main Content</h2>
      <p>{content}</p>
    </div>
  );
};

export default MainContent;



MainContent.propTypes = {
  content: PropTypes.string.isRequired,
};
