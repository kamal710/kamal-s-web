import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";

import logo from '../../public/images/mapfp.png'
import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <p>Somethings</p>
            <h1 className="mt-4">About Me</h1>
            <p>
              I am a Hacker, programmer, artist and gamer and I code in my free time. I learnt ethical hacking in the lockdown while i was bored...
              My programming skills are average
            </p>

            {/* <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Search A Lot
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative Idea
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  High Quality
                </h6>
              </div>
            </div> */}

            <div className="mt-5">
              <button className="primary__btn">
                <Link href="#portfolio">Portfolio</Link>
              </button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={logo} width="400" height="400" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
