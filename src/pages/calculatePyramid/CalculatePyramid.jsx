import { useState } from "react";
import DescriptionImage from "../../components/descriptionImage/DescriptionImage";
import circleImage from '../../images/triangle.svg';

function CalculateCircle() {
    const [infos, setInfos] = useState({ 
        smallerRadius: 0,
        biggestRadius: 0,
        height: 0
    });
    const [calculatedArea, setCalculatedArea] = useState(false);

    const handleChange = (event) => {
        setInfos({ ...infos, [event.target.name]: event.target.value });
    }

    const calculateArea = () => {
        const calcArea = Math.PI * (parseFloat(infos.biggestRadius) + parseFloat(infos.smallerRadius)) * (parseFloat(infos.biggestRadius) - parseFloat(infos.smallerRadius) + Math.sqrt(Math.pow(parseFloat(infos.height), 2) + Math.pow(parseFloat(infos.biggestRadius) + parseFloat(infos.smallerRadius), 2)));

        setCalculatedArea(calcArea);
    };

    return (
        <div className="calcForms">
            <DescriptionImage srcImg={circleImage} altImg="Image of a circle form" />

            <div>
                <div>
                    <label>
                        Enter the smaller radius
                        <input type="number" name="smallerRadius" value={infos.smallerRadius} onChange={handleChange} />
                    </label>

                    <label>
                        Enter the largest radius
                        <input type="number" name="biggestRadius" value={infos.biggestRadius} onChange={handleChange} />
                    </label>

                    <label>
                        Enter the height
                        <input type="number" name="height" value={infos.height} onChange={handleChange} />
                    </label>
                </div>

                <button onClick={ calculateArea }>Calculate area</button>

                <div>
                    {
                        calculatedArea && <p>The area of the trunk pyramid is: <span>{calculatedArea.toFixed(2)}</span></p>
                    }
                </div>
            </div>
        </div>
    )
}

export default CalculateCircle;