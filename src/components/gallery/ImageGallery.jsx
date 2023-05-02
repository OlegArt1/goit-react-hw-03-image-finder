import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import Css from "./ImageGallery.module.css";

export const ImageGallery = ({ data, on_click }) =>
{
    return (
        <ul className={Css.gallery__list}>
            <ImageGalleryItem data={data} on_click={on_click}/>
        </ul>        
    );
}
ImageGallery.propTypes =
{
    data: PropTypes.array.isRequired,
    on_click: PropTypes.func.isRequired,
};