
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import FontAwesome from '@expo/vector-icons/FontAwesome';

export const Skill = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <h5>Java Script</h5>
                            </div>
                            <div className="item">
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                {/* <FontAwesome name="html5" size={24} color="black" /> */}
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <h5>P5.js</h5>
                            </div>
                            <div className="item">
                                <h5>React Native</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill