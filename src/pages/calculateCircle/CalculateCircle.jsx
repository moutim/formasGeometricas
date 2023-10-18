import { useState } from "react";
import DescriptionImage from "../../components/descriptionImage/DescriptionImage";
import circleImage from '../../images/circle.svg';
import './calculateCircle.css'

function CalculateCircle() {
    const [area, setArea] = useState(0);
    const [calculatedArea, setCalculatedArea] = useState(false);

    const handleChange = (event) => {
        setArea(event.target.value);
    }

    const calculateArea = () => {
        const calcArea = Math.PI * (area * area);
        console.log(calcArea);
        console.log(area);

        setCalculatedArea(calcArea);
    };

    return (
        <div className="calcForms">
            <DescriptionImage srcImg={circleImage} altImg="Image of a circle form" />

            <div>
                <div>
                    <label>
                        Enter the radius of the circle
                        <input type="number" value={area} onChange={handleChange} />
                    </label>
                </div>

                <button onClick={ calculateArea }>Calculate area</button>

                <div>
                    {
                        calculatedArea && <p>The area of the circle is: <span>{calculatedArea.toFixed(2)}</span></p>
                    }
                </div>
            </div>
        </div>
    )
}

export default CalculateCircle;