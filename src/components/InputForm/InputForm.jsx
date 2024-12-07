import styles from "./InputForm.module.css";
import PropTypes from 'prop-types';

function InputForm({ id, name, type, placeholder })  {
  return (
    <div className={styles.inputForm}>
      <input
      id={id}
      name={name}
      type={type}
      required
      placeholder={placeholder}
      />
    </div>
  )
}
InputForm.propTypes = {
    id: PropTypes.string.isRequired,        
    name: PropTypes.string.isRequired,
    type: PropTypes.string,                
    placeholder: PropTypes.string,
};
export default InputForm;