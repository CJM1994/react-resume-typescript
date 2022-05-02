import './Portfolio.css';

// Portfolio Images
import IMG1 from '../../assets/code-typr.png';
import IMG2 from '../../assets/smart-to-do.gif';
import IMG3 from '../../assets/scheduler.png';
import IMG4 from '../../assets/tweeter.png';
import IMG5 from '../../assets/etch-a-sketch.png';
import IMG6 from '../../assets/portfolio-site.png';

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'Code-Typr',
    github: 'https://github.com/CJM1994/react-resume-typescript',
    live: 'https://code-typr.netlify.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Smart-ToDo',
    github: 'https://github.com/CJM1994/Smart_ToDo_App',
    live: null,
  },
  {
    id: 3,
    image: IMG3,
    title: 'Scheduler',
    github: 'https://github.com/CJM1994/scheduler',
    live: 'https://schedulerlhlapp.netlify.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Tweeter',
    github: 'https://github.com/CJM1994/tweeter/',
    live: 'https://tweeter-responsive-design.herokuapp.com/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Etch-A-Sketch',
    github: 'https://github.com/CJM1994/Project-Etch-a-Sketch/',
    live: 'https://cjm1994.github.io/Project-Etch-a-Sketch/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Portfolio Site',
    github: 'https://github.com/CJM1994/react-resume-typescript',
    live: null,
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      {/* {Section Header} */}
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      {/* {Section Container} */}
      <div className='container portfolio-container'>

        {
          portfolioData.map(({ id, image, title, github, live }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item--image'><img src={image} alt={title + ' Image'} /></div>
                <h3>{title}</h3>
                <div className='portfolio__item--cta'>
                  <a href={github} target='_blank' className='btn'>GitHub</a>
                  {live !== null && <a href={live} target='_blank' className='btn btn-primary'>Live Demo</a>}
                </div>
              </article>
            );
          })
        }

      </div>
    </section>
  )
}

export default Portfolio;