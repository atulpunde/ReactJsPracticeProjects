import styles from "./Button.module.css";

const Button = ({ isOutline, icon, query, onClick }) => {
  return (
    <button
      className={`${styles.generic_button} ${
        isOutline ? styles.outline_btn : styles.primary_btn
      }`}
      onClick={onClick}
    >
      {icon}
      {query}
    </button>
  );
};

export default Button;
