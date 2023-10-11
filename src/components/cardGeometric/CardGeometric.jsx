import PropTypes from 'prop-types';
import './cardGeometric.css';

function CardGeometric({ title, srcImg, altImg, description, path }) {
  return (
    <div className='card-geometric'>
        <img src={ srcImg } alt={ altImg } />
        <h3>{ title }</h3>
        <p>{ description }</p>
        <button>
            <a href={`/${path}`}>
                More
            </a>
        </button>
    </div>
  )
}

CardGeometric.propTypes = {
    title: PropTypes.string.isRequired,
    srcImg: PropTypes.string.isRequired,
    altImg: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default CardGeometric;