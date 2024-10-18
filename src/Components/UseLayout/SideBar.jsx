import { checkPropTypes } from "prop-types";

const Sidebar = ({ height }) => {
  return (
    <div style={{
      width: '200px',
      border: '1px solid #000',
      padding: '10px',
      height: `${height}px`,
      backgroundColor: '#f4f4f4',
      position: 'absolute',
      top: 0,
      right: 0,
    }}>
      <h2>Sidebar</h2>
      <p>This sidebar adjusts its height.</p>
    </div>
  );
};

export default Sidebar;

Sidebar.propTypes = {
    height: checkPropTypes.string.isRequired,
  };