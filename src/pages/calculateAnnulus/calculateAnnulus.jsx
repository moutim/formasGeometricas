import { useState } from "react";
import DescriptionImage from "../../components/descriptionImage/DescriptionImage";
import circleAnnulusImage from '../../images/circle-annulus.svg';

function CalculateCircle() {
    const [infos, setInfos] = useState({ 
        outerCircumference: 0,
        innerCircumference: 0,
        height: 0
    });
    const [calculatedArea, setCalculatedArea] = useState(false);

    const handleChange = (event) => {
        setInfos({ ...infos, [event.target.name]: event.target.value });
    }

    const calculateArea = () => {
        const calcArea = (Math.PI * (parseFloat(infos.outerCircumference) * parseFloat(infos.outerCircumference))) - (Math.PI * (parseFloat(infos.innerCircumference) * parseFloat(infos.innerCircumference)));

        setCalculatedArea(calcArea);
    };

    return (
        <div className="calcForms">
            <DescriptionImage srcImg={circleAnnulusImage} altImg="Image of a circle form" />

            <div>
                <div>
                    <label>
                        Enter the outer circumference
                        <input type="number" name="outerCircumference" value={infos.outerCircumference} onChange={handleChange} />
                    </label>

                    <label>
                        Enter the inner circumference
                        <input type="number" name="innerCircumference" value={infos.innerCircumference} onChange={handleChange} />
                    </label>
                </div>

                <button onClick={ calculateArea }>Calculate area</button>

                <div>
                    {
                        calculatedArea && <p>The area of the circle annulus is: <span>{calculatedArea.toFixed(2)}</span></p>
                    }
                </div>
            </div>
        </div>
    )
}

export default CalculateCircle;