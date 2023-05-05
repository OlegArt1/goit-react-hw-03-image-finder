import PropTypes from 'prop-types';
import Css from './Modal.module.css';

export const Modal = ({ src, alt, onClick }) =>
{
    return (
        <div className={Css.overlay}>
            <article className={Css.modal}>     
                <img className={Css.modal__image} src={src} title={alt} alt={alt} onClick={onClick}/>
            </article>
        </div>
    );
}
Modal.propTypes =
{
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    // onLoad: PropTypes.func.isRequired, \\
};