import { useState } from "react";
import DescriptionImage from "../../components/descriptionImage/DescriptionImage";
import trapezoidImage from '../../images/trapezoid.svg';

function CalculateCircle() {
    const [infos, setInfos] = useState({ 
        largerBase: 0,
        smallerBase: 0,
        height: 0
    });
    const [calculatedArea, setCalculatedArea] = useState(false);

    const handleChange = (event) => {
        setInfos({ ...infos, [event.target.name]: event.target.value });
    }

    const calculateArea = () => {
        const calcArea = ((parseFloat(infos.largerBase) + parseFloat(infos.smallerBase)) / 2) * parseFloat(infos.height);

        setCalculatedArea(calcArea);
    };

    return (
        <div className="calcForms">
            <DescriptionImage srcImg={trapezoidImage} altImg="Image of a circle form" />

            <div>
                <div>
                    <label>
                        Enter the smaller side
                        <input type="number" name="largerBase" value={infos.largerBase} onChange={handleChange} />
                    </label>

                    <label>
                        Enter the largest side
                        <input type="number" name="smallerBase" value={infos.smallerBase} onChange={handleChange} />
                    </label>

                    <label>
                        Enter the height
                        <input type="number" name="height" value={infos.height} onChange={handleChange} />
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