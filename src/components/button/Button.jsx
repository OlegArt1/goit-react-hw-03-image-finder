import PropTypes from 'prop-types';
import Css from "./Button.module.css";

export const ButtonElement = ({ onClick }) =>
{
    return (
        <div className={Css.button__block}>
            <button className={Css.button} type="submit" onClick={onClick}>
                <span className={Css.button__label}>Load more</span>
            </button>
        </div>
    );
}
ButtonElement.propTypes =
{
    onClick: PropTypes.func.isRequired,
};