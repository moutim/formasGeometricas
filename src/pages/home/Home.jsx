import CardGeometric from '../../components/cardGeometric/CardGeometric';
import CardReview from '../../components/cardReview/CardReview';
import './home.css';
import circleImage from '../../images/circle.svg';
import triangleImage from '../../images/triangle.svg';
import rectangleImage from '../../images/rectangle.svg';
import circleAnnulusImage from '../../images/circle-annulus.svg';
import circularImage from '../../images/circular.svg';
import polygonImage from '../../images/polygon.svg';
import squareImage from '../../images/square.svg';
import trapezoidImage from '../../images/trapezoid.svg';



function Home() {
  return (
    <div className='container-home'>
      <div className='container-background'>
        <section className='first-section-home'>
          <h2>Geometry are our Passion</h2>
          <p>Accurate Area Measurement for All Geometric Shapes!</p>
        </section>
      </div>

      <section className='section-popular'>
        <h2><span>Our</span> Popular Forms</h2>
        <hr />

        <div>
          <CardGeometric 
            title="Circle"
            srcImg={ circleImage }
            altImg="Photo of a circle"
            description="Discover the magic of circular symmetry"
            path="circle"
          />

          <CardGeometric 
            title="Triangle"
            srcImg={ triangleImage }
            altImg="Photo of a triangle"
            description="Discover the magic of triangle symmetry"
            path="triangle"
          />

          <CardGeometric 
            title="Rectangle"
            srcImg={ rectangleImage }
            altImg="Photo of a rectangle"
            description="Discover the magic of reactangle symmetry"
            path="rectangle"
          />

          <CardGeometric 
            title="Circle annulus"
            srcImg={ circleAnnulusImage }
            altImg="Photo of a ircular annulus"
            description="Discover the magic of circular annulus symmetry"
            path="ircular-annulus"
          />
        </div>
      </section>

      <div className='section-popular-2'>
        <section className='section-popular section-popular-2'>
          <h2><span>Our</span> Hottest Forms</h2>
          <hr />

          <div>
            <CardGeometric 
              title="Irregular Trapezoid"
              srcImg={ trapezoidImage }
              altImg="Photo of a trapezoid"
              description="Discover the magic of trapezoid symmetry"
              path="trapezoid"
            />

            <CardGeometric 
              title="Regular Polygon"
              srcImg={ polygonImage }
              altImg="Photo of a polygon"
              description="Discover the magic of polygon symmetry"
              path="polygon"
            />

            <CardGeometric 
              title="Square"
              srcImg={ squareImage }
              altImg="Photo of a square"
              description="Discover the magic of square symmetry"
              path="square"
            />

            <CardGeometric 
              title="Circular Sector"
              srcImg={ circularImage }
              altImg="Photo of a circular"
              description="Discover the magic of circular symmetry"
              path="circular"
            />
          </div>
        </section>
      </div>

      <section className='section-review'>
        <h2>Reviews</h2>

        <div>
          <CardReview 
            srcImg="https://media.licdn.com/dms/image/D4D03AQE78ZAuB8rkUw/profile-displayphoto-shrink_800_800/0/1694717470867?e=1702512000&v=beta&t=AQ_TsOqNA_xUiByP2QaH4Dtf8ZFYqdsaEjBV67g1TqY"
            altImg="Photo of Camile Santana"
            description={`“This site is a lifesaver for everyday tasks”`}
            name="Camile Santana"
            urlName="https://www.linkedin.com/in/camile-santana-644366202/"
          />

          <CardReview 
            srcImg="https://media.licdn.com/dms/image/D4E03AQHEarcytVyGvQ/profile-displayphoto-shrink_800_800/0/1696596375301?e=1702512000&v=beta&t=XHBSb-foPLdTJSpYudJ6l6orr8wiZweuxjV5xlh_bbE"
            altImg="Photo of Lucas Bonfim"
            description={`“I wish I had known about this site sooner!”`}
            name="Lucas Bonfim"
            urlName="https://www.linkedin.com/in/lucas-bonfim-545845289/"
          />

          <CardReview 
            srcImg="https://media.licdn.com/dms/image/C4D03AQFmj98FQmRvrA/profile-displayphoto-shrink_800_800/0/1662045322237?e=1702512000&v=beta&t=HlsPx_deG_QLg0MTJJNiK8aaT4mJ7AVKrcCCabPb50I"
            altImg="Photo of Gabriel Augusto"
            description={`"It's my go-to for quick area calculations."`}
            name="Gabriel Augusto"
            urlName="https://www.linkedin.com/in/gabriel-augusto-edu/overlay/photo/"
          />
        </div>
      </section>

    </div>
  )
}

export default Home;