import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  let tools = (
    <p>
      <LightSpeed left>
        <h3 align="left">Languages and Tools:</h3>
        <p align="left">
          {' '}
          <a href="https://getbootstrap.com" target="_blank">
            {' '}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="bootstrap"
              width="40"
              height="40"
              className="m-2"
            />{' '}
          </a>{' '}
          <a href="https://www.w3schools.com/css/" target="_blank">
            {' '}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              width="40"
              height="40"
              className="m-2"
            />{' '}
          </a>{' '}
          <a href="https://expressjs.com" target="_blank">
            {' '}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express"
              width="40"
              height="40"
              className="m-2"
            />{' '}
          </a>{' '}
          <a href="https://flask.palletsprojects.com/" target="_blank">
            {' '}
            <img
              src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg"
              alt="flask"
              width="40"
              height="40"
              className="m-2"
            />{' '}
          </a>{' '}
          <a href="https://git-scm.com/" target="_blank">
            {' '}
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_38917.png&f=1&nofb=1"
              alt="git"
              width="40"
              height="40"
              className="m-2"
            />{' '}
          </a>{' '}
          <a href="https://heroku.com" target="_blank">
            {' '}
            <img
              src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
              alt="heroku"
              width="40"
              height="40"
              className="m-2"
            />{' '}
          </a>{' '}
          <a href="https://www.w3.org/html/" target="_blank">
            {' '}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              width="40"
              height="40"
              className="m-2"
            />{' '}
          </a>{' '}
          <a href="https://jasmine.github.io/" target="_blank">
            {' '}
            <img
              src="https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg"
              alt="jasmine"
              width="40"
              height="40"
              className="m-2"
            />{' '}
          </a>{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            {' '}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="40"
              height="40"
              className="m-2"
            />{' '}
          </a>{' '}
          <a href="https://jestjs.io" target="_blank">
            {' '}
            <img
              src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
              alt="jest"
              width="40"
              height="40"
              className="m-2"
            />{' '}
          </a>{' '}
          <a href="https://jquery.com/" target="_blank">
            {' '}
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fjquery-icon%2Fjquery-icon-16.jpg&f=1&nofb=1"
              alt="jQuery"
              width="40"
              height="40"
              className="m-2"
            />{' '}
          </a>
          <a href="https://v4.mui.com/" target="_blank">
            {' '}
            <img
              src=" https://v4.mui.com/static/logo_raw.svg"
              alt="materialui"
              width="40"
              height="40"
              className="m-2"
            />{' '}
          </a>{' '}
          <a href="https://www.postgresql.org" target="_blank"></a>
          <a href="https://nodejs.org" target="_blank">
            {' '}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="40"
              height="40"
              className="m-2"
            />{' '}
          </a>{' '}
          <a href="https://www.postgresql.org" target="_blank">
            {' '}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
              alt="postgresql"
              width="40"
              height="40"
              className="m-2"
            />{' '}
          </a>{' '}
          <a href="https://www.python.org" target="_blank">
            {' '}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="python"
              width="40"
              height="40"
              className="m-2"
            />{' '}
          </a>{' '}
          <a href="https://reactjs.org/" target="_blank">
            {' '}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="40"
              height="40"
              className="m-2"
            />{' '}
          </a>{' '}
          <a href="https://www.w3schools.com/sql/" target="_blank">
            {' '}
            <img
              src="https://cdn.onlinewebfonts.com/svg/img_5361.png"
              alt="sql"
              width="40"
              height="40"
              className="m-2"
            />{' '}
          </a>{' '}
          <a href="https://code.visualstudio.com/" target="_blank">
            {' '}
            <img
              src="http://dl2.macupdate.com/images/icons256/54025.png?d=1488487262"
              alt="vscode"
              width="40"
              height="40"
              className="m-2"
            />{' '}
          </a>{' '}
        </p>
      </LightSpeed>
    </p>
  );
  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne}</p>
                <p className="about-wrapper__info-text">{paragraphTwo}</p>
                <p className="about-wrapper__info-text">{paragraphThree || tools}</p>

                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
