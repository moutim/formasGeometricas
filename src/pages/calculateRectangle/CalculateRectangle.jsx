import { useState } from "react";
import DescriptionImage from "../../components/descriptionImage/DescriptionImage";
import rectangleImage from '../../images/rectangle.svg';

function CalculateCircle() {
    const [infos, setInfos] = useState({ 
        smallerSide: 0,
        biggestSide: 0,
        height: 0
    });
    const [calculatedArea, setCalculatedArea] = useState(false);

    const handleChange = (event) => {
        setInfos({ ...infos, [event.target.name]: event.target.value });
    }

    const calculateArea = () => {
        const calcArea = parseFloat(infos.biggestSide) * parseFloat(infos.smallerSide);

        setCalculatedArea(calcArea);
    };

    return (
        <div className="calcForms">
            <DescriptionImage srcImg={rectangleImage} altImg="Image of a circle form" />

            <div>
                <div>
                    <label>
                        Enter the smaller side
                        <input type="number" name="smallerSide" value={infos.smallerSide} onChange={handleChange} />
                    </label>

                    <label>
                        Enter the largest side
                        <input type="number" name="biggestSide" value={infos.biggestSide} onChange={handleChange} />
                    </label>
                </div>

                <button onClick={ calculateArea }>Calculate area</button>

                <div>
                    {
                        calculatedArea && <p>The area of the rectangle is: <span>{calculatedArea.toFixed(2)}</span></p>
                    }
                </div>
            </div>
        </div>
    )
}

export default CalculateCircle;