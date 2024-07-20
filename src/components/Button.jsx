import styles from "./Button.module.css";
import PropTypes from "prop-types";

function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired, // 'children' can be any renderable content
  onClick: PropTypes.func, // 'onClick' is an optional function
  type: PropTypes.string, // 'type' is an optional string
};

Button.defaultProps = {
  onClick: () => {}, // Provide a default empty function for 'onClick'
  type: "default", // Provide a default value for 'type' if necessary
};

export default Button;
