import PropTypes from 'prop-types';
import Css from "./Button.module.css";

export const ButtonElement = ({ on_click }) =>
{
    return (
            <div className={Css.button__block}>
                <button className={Css.button} type="button" onClick={on_click}>
                    <span className={Css.button__label}>Load more</span>
                </button>
            </div>
    );
}
ButtonElement.propTypes =
{
    on_click: PropTypes.func.isRequired,
};