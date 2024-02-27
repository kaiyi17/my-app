import React, { useState } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import SkillItem from "./SkillItem";
import SkillsData from "./SkillsData";

const Skills = () => {
  const [key, setKey] = useState("allSkills");

  const renderSkillItems = (skills) => (
    <Row>
      {skills.map((skill) => (
        <Col key={skill.name} xs={12} sm={6} md={4} lg={3} className="mb-3">
          <SkillItem skill={skill} />
        </Col>
      ))}
    </Row>
  );

  const getAllSkills = () => {
    return Object.values(SkillsData).flat();
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Wielding a diverse arsenal of tech skills, I blend logic with
                creativity to breathe life into innovative projects. From the
                structured realms of Java to the dynamic landscapes of React and
                the cloud horizons of AWS, each skill is a polished tool in my
                belt, ready to tackle the next coding challenge.
              </p>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 custom-tabs"
              >
                <Tab
                  eventKey="allSkills"
                  title="All Skills"
                  className="tab-pane"
                >
                  {renderSkillItems(getAllSkills())}
                </Tab>
                {Object.keys(SkillsData).map((category) => (
                  <Tab
                    eventKey={category}
                    title={category.replace(/([A-Z])/g, " $1").trim()}
                    key={category}
                  >
                    {renderSkillItems(SkillsData[category])}
                  </Tab>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
