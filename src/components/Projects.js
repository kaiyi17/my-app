import { Container, Row, Col, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projectsData from "../components/ProjectsData";

const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2 className="mb-5">Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projectsData.map((project) => {
                      return <ProjectCard key={project.id} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
