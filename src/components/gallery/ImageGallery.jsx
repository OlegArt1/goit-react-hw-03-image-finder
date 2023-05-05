import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import Css from "./ImageGallery.module.css";

export const ImageGallery = ({ data, onClick }) =>
{
    return (
        <ul className={Css.gallery__list}>
            <ImageGalleryItem data={data} onClick={onClick}/>
        </ul>        
    );
}
ImageGallery.propTypes =
{
    data: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};