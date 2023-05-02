import PropTypes from 'prop-types';
import Css from "./Searchbar.module.css";

export const Searchbar = ({ on_submit, on_click }) =>
{
    return (
        <header className={Css.searchbar}>
            <form className={Css.searchbar__form}>
                <button className={Css.searchbar__button} type="button" onClick={on_click}>
                    <span className={Css.searchbar__label}>Search</span>
                </button>
                <input className={Css.searchbar__input} type="text" name="text" autocomplete="off" autofocus placeholder="Search images and photos" onChange={on_submit}/>
            </form>
        </header>
    );
}
Searchbar.propTypes =
{
    on_submit: PropTypes.func.isRequired,
    on_click: PropTypes.func.isRequired,
};