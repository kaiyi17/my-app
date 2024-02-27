import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/TravelAdvisorApp.png";
import projImg2 from "../assets/img/DinSumResturant.png";
import projImg3 from "../assets/img/HotelUrbanNest.png";

const Projects = () => {
  const projects = [
    {
      title: "Travel Advisor App",
      description: "React, TypeScript, ChakraUI and Google Maps API",
      imgUrl: projImg1,
    },
    {
      title: "Dim Sum Resturant",
      description: "HTML5, CSS, JavaScript, Weather API",
      imgUrl: projImg2,
    },
    {
      title: "Hotel Reservation",
      description: "PHP, Twig, Weather API",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2 className="mb-5">Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                {/* <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav> */}

                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                {/* <Tab.Pane eventKey="second">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                {/* </Tab.Content> */}
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
