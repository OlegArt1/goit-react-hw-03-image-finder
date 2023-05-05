import PropTypes from 'prop-types';
import Css from "./ImageGallery.module.css";

export const ImageGalleryItem = ({ data, onClick }) =>
{
    return (
        <li className={Css.gallery__item}>
            {data.map(data =>
            {
                return (
                    <article className={Css.gallery__block}>
                        <img id={data.id} className={Css.gallery__image} src={data.webformatURL} title={data.user} alt={data.user} onClick={onClick}/>
                        {/*
                            <p className={Css.gallery__image_block}>
                                <span className={Css.gallery__image_name}>{data.user}</span>
                            </p>
                            <p className={Css.gallery__text_block}>
                                <label className={Css.gallery__text_label}>
                                    &nbsp;&nbsp;Views:&nbsp;&nbsp;
                                    <span className={Css.gallery__text_data}>{data.views};</span>
                                </label>
                            </p>
                            <p className={Css.gallery__text_block}>
                                <label className={Css.gallery__text_label}>
                                    &nbsp;&nbsp;Likes:&nbsp;&nbsp;
                                    <span className={Css.gallery__text_data}><b>{data.likes};</b></span>
                                </label>
                            </p>
                            <p className={Css.gallery__text_block}>
                                <label className={Css.gallery__text_label}>
                                    &nbsp;&nbsp;Comments:&nbsp;&nbsp;
                                    <span className={Css.gallery__text_data}>{data.comments};</span>
                                </label>
                            </p>
                            <p className={Css.gallery__text_block}>
                                <label className={Css.gallery__text_label}>
                                    &nbsp;&nbsp;Downloads:&nbsp;&nbsp;
                                    <span className={Css.gallery__text_data}>{data.downloads};</span>
                                </label>
                            </p>
                        */}
                    </article>
                );
            })}
        </li>    
    );
}
ImageGalleryItem.propTypes =
{
    data: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};