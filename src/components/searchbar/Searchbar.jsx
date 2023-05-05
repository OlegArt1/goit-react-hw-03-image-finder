import PropTypes from 'prop-types';
import Css from "./Searchbar.module.css";

export const Searchbar = ({ onSubmit, onChange }) =>
{
    return (
        <header className={Css.searchbar}>
            <form className={Css.searchbar__form} onSubmit={onSubmit}>
                <button className={Css.searchbar__button} type="submit">
                    <span className={Css.searchbar__label}>Search</span>
                </button>
                <input className={Css.searchbar__input} type="text" name="text" autocomplete="off" autofocus placeholder="Search images and photos" onChange={onChange}/>
            </form>
        </header>
    );
}
Searchbar.propTypes =
{
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};