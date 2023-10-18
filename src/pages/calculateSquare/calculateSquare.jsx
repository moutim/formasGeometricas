import { useState } from "react";
import DescriptionImage from "../../components/descriptionImage/DescriptionImage";
import squareImage from '../../images/square.svg';

function CalculateCircle() {
    const [infos, setInfos] = useState({ 
        sideLenght: 0,
    });
    const [calculatedArea, setCalculatedArea] = useState(false);

    const handleChange = (event) => {
        setInfos({ ...infos, [event.target.name]: event.target.value });
    }

    const calculateArea = () => {
        const calcArea = parseFloat(infos.sideLenght) * parseFloat(infos.sideLenght);

        setCalculatedArea(calcArea);
    };

    return (
        <div className="calcForms">
            <DescriptionImage srcImg={squareImage} altImg="Image of a circle form" />

            <div>
                <div>
                    <label>
                        Enter the side length
                        <input type="number" name="sideLenght" value={infos.sideLenght} onChange={handleChange} />
                    </label>
                </div>

                <button onClick={ calculateArea }>Calculate area</button>

                <div>
                    {
                        calculatedArea && <p>The area of the square is: <span>{calculatedArea.toFixed(2)}</span></p>
                    }
                </div>
            </div>
        </div>
    )
}

export default CalculateCircle;