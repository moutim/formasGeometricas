import { useState } from "react";
import DescriptionImage from "../../components/descriptionImage/DescriptionImage";
import polygonImage from '../../images/polygon.svg';
import './calculatePolygon.css';

function CalculateCircle() {
    const [infos, setInfos] = useState({
        radioValue: '',
        sideLength: 0,
    });
    const [calculatedArea, setCalculatedArea] = useState(false);

    const handleChange = (event) => {
        setInfos({ ...infos, [event.target.name]: event.target.value });
    }

    const handleChangeRadio = (event) => {
        setInfos({ ...infos, radioValue: event.target.value });
    }

    const calculateArea = () => {
        let calcArea;

        if (infos.radioValue == 'pentagon') {
            calcArea = ((Math.pow(infos.sideLength, 2) * 5)/(4 * Math.tan(Math.PI / 5)));
        } else if (infos.radioValue == 'hexagon') {
            calcArea = ((Math.pow(infos.sideLength, 2) * 6)/(4 * Math.tan(Math.PI / 6)));
        } else if (infos.radioValue == 'heptagon') {
            calcArea = ((Math.pow(infos.sideLength, 2) * 7)/(4 * Math.tan(Math.PI / 7)));
        }

        setCalculatedArea(calcArea);
    };

    return (
        <div className="calcForms">
            <DescriptionImage srcImg={polygonImage} altImg="Image of a circle form" />

            <div>
                <div className="divPolygon">
                    <p>Choose a regular polygon with a variable number of sides</p>

                    <div>
                        <label htmlFor="pentagon">
                            Pentagon
                            <input type="radio" name="genero" id="pentagon" value="pentagon" onChange={handleChangeRadio} />
                        </label>

                        <label htmlFor="hexagon">
                            Hexagon
                            <input type="radio" name="genero" id="hexagon" value="hexagon" onChange={handleChangeRadio} />
                        </label>

                        <label htmlFor="heptagon">
                            Heptagon
                            <input type="radio" name="genero" id="heptagon" value="heptagon" onChange={handleChangeRadio} />
                        </label>
                    </div>

                    <div className="polygonInput">
                        <label>
                            Enter the side length
                            <input type="number" name="sideLength" value={infos.sideLength} onChange={handleChange} />
                        </label>
                    </div>
                </div>

                <button onClick={calculateArea}>Calculate area</button>

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