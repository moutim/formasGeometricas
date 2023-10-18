import CardGeometric from "../../components/cardGeometric/CardGeometric";
import circleImage from '../../images/circle.svg';
import triangleImage from '../../images/triangle.svg';
import rectangleImage from '../../images/rectangle.svg';
import circleAnnulusImage from '../../images/circle-annulus.svg';
import circularImage from '../../images/circular.svg';
import polygonImage from '../../images/polygon.svg';
import squareImage from '../../images/square.svg';
import trapezoidImage from '../../images/trapezoid.svg';
import './forms.css';

function Forms() {
    return (
        <article className="articleForms">
            <h2>Select some shape to calculate the area</h2>

            <div>
                <CardGeometric
                    title="Circle"
                    srcImg={circleImage}
                    altImg="Photo of a circle"
                    description="Discover the magic of circular symmetry"
                    path="circle"
                />

                <CardGeometric
                    title="Triangle"
                    srcImg={triangleImage}
                    altImg="Photo of a circle"
                    description="Discover the magic of triangle symmetry"
                    path="triangle"
                />

                <CardGeometric
                    title="Rectangle"
                    srcImg={rectangleImage}
                    altImg="Photo of a circle"
                    description="Discover the magic of reactangle symmetry"
                    path="rectangle"
                />

                <CardGeometric
                    title="Circle annulus"
                    srcImg={circleAnnulusImage}
                    altImg="Photo of a circle"
                    description="Discover the magic of circular annulus symmetry"
                    path="circle-annulus"
                />

                <CardGeometric
                    title="Irregular Trapezoid"
                    srcImg={trapezoidImage}
                    altImg="Photo of a circle"
                    description="Discover the magic of circular symmetry"
                    path="trapezoid"
                />

                <CardGeometric
                    title="Regular Polygon"
                    srcImg={polygonImage}
                    altImg="Photo of a circle"
                    description="Discover the magic of circular symmetry"
                    path="polygon"
                />

                <CardGeometric
                    title="Square"
                    srcImg={squareImage}
                    altImg="Photo of a circle"
                    description="Discover the magic of circular symmetry"
                    path="square"
                />

                <CardGeometric
                    title="Circular Sector"
                    srcImg={circularImage}
                    altImg="Photo of a circle"
                    description="Discover the magic of circular symmetry"
                    path="circular"
                />
            </div>
        </article>
    )
}

export default Forms