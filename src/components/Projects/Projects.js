import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import snipify from "../../Assets/Projects/snipify.png";
import tshirt from "../../Assets/Projects/tshirt.png";
import py from "../../Assets/Projects/py.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snipify}
              isBlog={false}
              title="Snipify"
              description="It's a cutting-edge blog management platform built with React and Vite. "
              ghLink="https://github.com/jsdarshan/snipify"
              demoLink="https://snipify-virid.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tshirt}
              isBlog={false}
              title="3-D T-shirt design generator"
              description="Architected an interactive front-end application leveraging advanced concepts ,integrating the
OpenAI API to dynamically generate personalised 3D T-shirt designs."
              ghLink="https://github.com/jsdarshan/3d-tshirt"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={py}
              isBlog={false}
              title="YADFS"
              description="is a high-performance, distributed file system engineered to handle massive datasets across
clusters. Built with Python, it offers fault tolerance, scalability, and seamless integration into Big Data
environments."
              ghLink="https://github.com/Cloud-Computing-Big-Data/EC-Team-38-Yet-Another-Distributed-File-System-YADFS-"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="plant-disease-prediction"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/jsdarshan/plant-disease-prediction-cnn-deep-leanring-project-"
          
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
