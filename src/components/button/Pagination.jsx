import PropTypes from 'prop-types';
import Css from "./Button.module.css";

export const Pagination = ({ imagesPerPage, totalImages })  =>
{
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i += 1)
    {
        pageNumbers.push(i);
    }
    return (
        <div className={Css.pagination}>
            <ul className={Css.pagination__list}>
                {pageNumbers.map(number =>
                {
                    <li key={number} className={Css.pagination__item}>
                        <a className={Css.pagination__link} href='#'>
                            {number}
                        </a>
                    </li>
                })}
            </ul>
        </div>
    );
}
Pagination.propTypes =
{
    imagesPerPage: PropTypes.number.isRequired,
    totalImages: PropTypes.number.isRequired,
};