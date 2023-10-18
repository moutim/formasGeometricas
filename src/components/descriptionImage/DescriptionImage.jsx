import PropTypes from 'prop-types';
import './descriptionImage.css';

function DescriptionImage({ srcImg, altImg }) {
    return (
        <div className='descriptionImage'>
            <a href="/forms">{`< Back to forms`}</a>

            <img src={ srcImg } alt={ altImg } />
        </div>
    )
}

DescriptionImage.propTypes = {
    srcImg: PropTypes.string.isRequired,
    altImg: PropTypes.string.isRequired,
};

export default DescriptionImage;