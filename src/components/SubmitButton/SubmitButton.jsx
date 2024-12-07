
import styles from './SubmitButton.module.css'
import PropTypes from 'prop-types';


function SubmitButton({children}) {
    return (
        <div>
            <button
            type="submit"
            className={styles.SubmitButton}
            >
                {children}
            </button>
        </div>
    )
}
SubmitButton.propTypes = {
    children: PropTypes.string.isRequired
};
export default SubmitButton;