import './About.css';
import ME from '../../assets/about__me.jpg';
import { MdOutlineBusiness, MdOutlineSchool } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h1>About Me</h1>
      <div className='container about__container'>
        <div className='about__me'>
          <img src={ME} alt='about image' />
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <MdOutlineBusiness className='about__card--icon' />
              <h5>Experience</h5>
              <small>4+ Years Managing a Business</small>
            </article>

            <article className='about__card'>
              <MdOutlineSchool className='about__card--icon' />
              <h5>Education</h5>
              <small>BSc from U of C and Lighthouse Labs Diploma</small>
            </article>

            <article className='about__card'>
              <FaReact className='about__card--icon' />
              <h5>Projects</h5>
              <small>Built Many Projects, With A React Focus</small>
            </article>
          </div>
  
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            Lorem Ipsum is simply dummy text of the printing and
            logging industry. Lorem Ipsum is simply dummy text of the printing and
            logging industry. Lorem Ipsum is simply dummy text of the printing and
            logging industry.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About;