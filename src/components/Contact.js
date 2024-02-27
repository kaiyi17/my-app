import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const response = await fetch(process.env.REACT_APP_FORMSPREE_ID, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Accept: "application/json",
      },
      body: JSON.stringify(formDetails),
    });
    const result = await response.json();

    if (response.ok) {
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }

    setButtonText("Send");
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "./assets/KaiyiWu-CV.pdf";
    link.setAttribute("download", "KaiyiWu-CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCheckProjects = () => {
    window.open("https://github.com/kaiyi17", "_blank");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <h2>Get In Touch</h2>
        <Row className="contact-info-section">
          <Col size={12} sm={6} className="mt-3">
            <p>
              <i className="fa fa-phone icon-spacing"></i> (438)928-3600
            </p>
            <p>
              <i className="fa fa-envelope icon-spacing"></i>{" "}
              carinewukk@gmail.com
            </p>
            <p>
              <i className="fa fa-map-marker icon-spacing"></i> Laval Quebec,
              Canada
            </p>
            {/* <div className="social-icon git-icon mt-5"> */}
            {/* </div> */}
            <button
              className="download-resume-btn mt-5"
              onClick={handleCheckProjects}
            >
              <span> Check my projects in Github </span>
            </button>
          </Col>
          <Col size={12} sm={6} className="mt-3">
            <p>
              Welcome to the hub of my creative universe. Your presence here
              fuels the collaboration and innovation that I thrive on. Let's
              embark on a journey to craft the exceptional, harness the power of
              technology, and sculpt the digital landscape together!
            </p>
            <button
              className="download-resume-btn"
              onClick={handleDownloadResume}
            >
              <span> Download Resume</span>
            </button>
          </Col>
        </Row>

        <Row className="align-items-center mt-5">
          <Col size={12} md={12}>
            <div>
              <h3>Connect with me - I'm just a message away.</h3>
              <form onSubmit={handleSubmit} className="mt-3">
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                  {status.message && (
                    <Col>
                      <p
                        className={
                          status.success === false ? "danger" : "success"
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  )}
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    ></textarea>
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
