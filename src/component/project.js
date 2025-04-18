import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import creativecodingimg1 from "../assets/CCimg1.png";
import creativecodingimg2 from "../assets/CCimg2.png";
import webdevelopmentimg1 from "../assets/wdimg1.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const webDevelopmentProjects = [
    {
      title: "Personal Portfolio",
      description: "Web Development",
      imgUrl: webdevelopmentimg1,
      url: "https://example.com/web-project-1",
    },
    // {
    //   title: "Web Project 2",
    //   description: "Web Development",
    //   imgUrl: "webImg2.png",
    //   url: "https://example.com/web-project-2",
    // },
  ];

  const creativeCodingProjects = [
    {
      title: "Friends and Foes",
      description: "Creative Coding",
      imgUrl: creativecodingimg1,
      url: "https://editor.p5js.org/Haya-Faisal/full/T0ItP8Bzq",
    },
    {
      title: "Dissolving Ink",
      description: "Creative Coding",
      imgUrl: creativecodingimg2,
      url: "https://editor.p5js.org/Haya-Faisal/full/n-Rnf-HDS",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="Web Development">
                    {/* Navigation Tabs */}
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="Web Development">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Creative Coding">Creative Coding</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    {/* Tab Content */}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {/* Web Development Tab */}
                      <Tab.Pane eventKey="Web Development">
                        <Row>
                          {webDevelopmentProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Creative Coding Tab */}
                      <Tab.Pane eventKey="Creative Coding">
                        <Row>
                          {creativeCodingProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
