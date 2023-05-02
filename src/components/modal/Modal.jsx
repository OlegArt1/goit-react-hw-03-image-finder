import PropTypes from 'prop-types';
import Css from './Modal.module.css';

export const Modal = ({ src, title, alt }) =>
{
    return (
        <article class={Css.modal__block}>     
            <img class={Css.modal__image} src={src} title={title} alt={alt}/>
        </article>
    );
}
Modal.propTypes =
{
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};