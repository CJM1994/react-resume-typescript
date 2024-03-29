import './Experience.css';

import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3Full, DiSass, DiJavascript1, DiBootstrap } from 'react-icons/di';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiSocketdotio, SiRuby, SiRubyonrails, SiMongodb, SiPostgresql } from 'react-icons/si';

const Experience = () => {
  return (
    <section id='experience'>

      {/* {Section Header} */}
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      {/* {Frontend Skills} */}
      <div className="container experience-container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__content--item">
              <AiOutlineHtml5 className="experience__content--icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__content--item">
              <DiCss3Full className="experience__content--icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__content--item">
              <DiSass className="experience__content--icon" />
              <div>
                <h4>SASS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__content--item">
              <DiJavascript1 className="experience__content--icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__content--item">
              <FaReact className="experience__content--icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__content--item">
              <DiBootstrap className="experience__content--icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* {Backend Skills} */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__content--item">
              <FaNodeJs className="experience__content--icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__content--item">
              <SiExpress className="experience__content--icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__content--item">
              <SiSocketdotio className="experience__content--icon" />
              <div>
                <h4>SocketIO</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__content--item">
              <SiRuby className="experience__content--icon" />
              <div>
                <h4>Ruby</h4>
                <small className="text-light">Familiar</small>
              </div>
            </article>
            <article className="experience__content--item">
              <SiRubyonrails className="experience__content--icon" />
              <div>
                <h4>Rails</h4>
                <small className="text-light">Familiar</small>
              </div>
            </article>
            <article className="experience__content--item">
              <SiMongodb className="experience__content--icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__content--item">
              <SiPostgresql className="experience__content--icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;