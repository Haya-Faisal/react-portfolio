
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHtml5 } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { SiP5Dotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";



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
                                <FaReact style={{ fontSize: "48px" }} />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                               <IoLogoJavascript style={{ fontSize: "48px" }} />
                                <h5>Java Script</h5>
                            </div>
                            <div className="item">
                                <FaCss3Alt style={{ fontSize: "48px" }} />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <FaHtml5 style={{ fontSize: "48px" }} />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <FaPython style={{fontSize:"48px"}} />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <SiP5Dotjs  style={{ fontSize: "48px" }}/>
                                <h5>P5.js</h5>
                            </div>
                            <div className="item">
                                <TbBrandReactNative style={{ fontSize: "48px" }} />
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