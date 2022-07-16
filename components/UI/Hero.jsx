import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import logo from '../../public/images/mapfp.png'
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <p>Name:</p>
              <h1 className="mt-3 mb-3">Kamal Raj VN</h1>
              <p>
                I am Front End Developer, Hacker, Programmer, Artist and Gamer
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="https://instagram.com/kamal_raj_vn">Instagram</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
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

export default Hero;
