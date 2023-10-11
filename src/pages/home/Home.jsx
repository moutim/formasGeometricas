import CardGeometric from '../../components/cardGeometric/CardGeometric';
import './home.css';
import circleImage from '../../images/circle.svg';
import triangleImage from '../../images/triangle.svg';
import rectangleImage from '../../images/rectangle.svg';
import circleAnnulusImage from '../../images/circle-annulus.svg';


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
            altImg="Photo of a circle"
            description="Discover the magic of circular symmetry"
            path="circle"
          />

          <CardGeometric 
            title="Circle"
            srcImg={ rectangleImage }
            altImg="Photo of a circle"
            description="Discover the magic of circular symmetry"
            path="circle"
          />

          <CardGeometric 
            title="Circle"
            srcImg={ circleAnnulusImage }
            altImg="Photo of a circle"
            description="Discover the magic of circular symmetry"
            path="circle"
          />
        </div>
      </section>
    </div>
  )
}

export default Home;