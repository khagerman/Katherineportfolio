import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/tada';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import TypeIt from 'typeit-react';
const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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

  return (
    <section id="hero" className="jumbotron">
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

          <Container>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <h1 className="hero-title">
                {'Hi, my name is'}{' '}
                <Tada>
                  <span className="text-color-main">{'Katherine Hagerman'}</span>
                </Tada>
                <br />
                {subtitle || '(the Software Engineer formally known as Miss Hagerman)'}
              </h1>
              {/* </TypeIt> */}
            </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <p className="hero-cta">
                <span className="cta-btn cta-btn--hero">
                  <Link to="about" smooth duration={1000}>
                    {cta || 'Wow she sounds interesting...'}
                  </Link>
                </span>
              </p>
            </Fade>
          </Container>
        </ul>
      </div>
    </section>
  );
};

export default Header;
