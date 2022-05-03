import './About.css';
import ME from '../../assets/about__me.jpg';
import { MdOutlineBusiness, MdOutlineSchool } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <img src={ME} alt='about image' />
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <MdOutlineBusiness className='about__card--icon' />
              <h5>Experience</h5>
              <small>~5 Years Managing a Business</small>
            </article>

            <article className='about__card'>
              <MdOutlineSchool className='about__card--icon' />
              <h5>Education</h5>
              <small>BSc from U of C and Lighthouse Labs Diploma</small>
            </article>

            <article className='about__card'>
              <FaReact className='about__card--icon' />
              <h5>Projects</h5>
              <small>Built Many Web Projects, With A React Focus</small>
            </article>
          </div>

          <p>
            I am a Junior Software Developer based out of New Westminster, BC. I have a serious passion
            for learning and improving my skills in all aspects of Web Development including Front-End, Back-End, and Security.
          </p>
          <p>
            I'm a well organized person, a problem solver, and an independent employee with a high attention to
            detail. I'm also into Film, MMA, Weightlifting, Investing, History, and Gaming.
          </p>
          <p>
            My career so far has
            taught me a great deal about how to manage people, deal with customers (retail and businesses),
            set and achieve goals, and how to have the confidence to deal with new and unexpected challenges.
            I am excited to apply this knowledge and experience in a new and exciting domain.
          </p>
          <p>
            I am interested in the full spectrum of Web Development, Front-End and Back-End, and am
            currently looking for opportunities to work on ambitious projects with positive people.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About;