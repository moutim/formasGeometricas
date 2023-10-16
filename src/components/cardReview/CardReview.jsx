import PropTypes from 'prop-types';
import stars from '../../images/stars.svg';
import './cardReview.css';

function CardReview({ srcImg, altImg, description, name, urlName }) {
  return (
    <div className='cardReview'>
        <img src={ srcImg } alt={ altImg } />
        <img src={ stars } alt="Five green stars" />
        <p className='reviewDescription'>{ description }</p>
        <a href={ urlName }>{ name }</a>
    </div>
  )
}

CardReview.propTypes = {
    srcImg: PropTypes.string.isRequired,
    altImg: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    urlName: PropTypes.string.isRequired,
};

export default CardReview;