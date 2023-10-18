import { useState } from "react";
import DescriptionImage from "../../components/descriptionImage/DescriptionImage";
import circularImage from '../../images/circular.svg';

function CalculateCircle() {
    const [infos, setInfos] = useState({ 
        largestRadius: 0,
        angle: 0,
    });
    const [calculatedArea, setCalculatedArea] = useState(false);

    const handleChange = (event) => {
        setInfos({ ...infos, [event.target.name]: event.target.value });
    }

    const calculateArea = () => {
        const calcArea = Math.PI * (Math.pow(parseFloat(infos.largestRadius), 2) - Math.pow(parseFloat(infos.angle), 2));

        setCalculatedArea(calcArea);
    };

    return (
        <div className="calcForms">
            <DescriptionImage srcImg={circularImage} altImg="Image of a circle form" />

            <div>
                <div>
                    <label>
                        Largest radius
                        <input type="number" name="largestRadius" value={infos.largestRadius} onChange={handleChange} />
                    </label>

                    <label>
                        Enter the angle
                        <input type="number" name="angle" value={infos.angle} onChange={handleChange} />
                    </label>
                </div>

                <button onClick={ calculateArea }>Calculate area</button>

                <div>
                    {
                        calculatedArea && <p>The area of the circular section is: <span>{calculatedArea.toFixed(2)}</span></p>
                    }
                </div>
            </div>
        </div>
    )
}

export default CalculateCircle;