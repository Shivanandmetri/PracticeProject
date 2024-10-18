import PropTypes from "prop-types";
const WithAuthorization = (WrappedComponent, allowedRole) => {
  const ComponentWithAuthorization = (props) => {
    const {
      userRole: { role },
    } = props; // Assume userRole is passed as a prop
    // Check if user role is allowed to view this component
    if (role !== allowedRole) {
      return <h2>Access Denied</h2>; // Show an error message
    }

    // Render the wrapped component if the user has the required role
    return <WrappedComponent {...props} />;
  };

  ComponentWithAuthorization.displayName = `WithAuthorization(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  ComponentWithAuthorization.propTypes = {
    userRole: PropTypes.shape({
      role: PropTypes.string.isRequired, // userRole should be an object with a "role" key
    }).isRequired,
  };

  return ComponentWithAuthorization;
};

export default WithAuthorization;
