import './Portfolio.css';

// Portfolio Images
import IMG1 from '../../assets/code-typr.png';
import IMG2 from '../../assets/code-typr.png';
import IMG3 from '../../assets/code-typr.png';
import IMG4 from '../../assets/code-typr.png';
import IMG5 from '../../assets/code-typr.png';
import IMG6 from '../../assets/code-typr.png';

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
    title: 'Code-Typr',
    github: 'https://github.com/CJM1994/react-resume-typescript',
    live: 'https://code-typr.netlify.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Code-Typr',
    github: 'https://github.com/CJM1994/react-resume-typescript',
    live: 'https://code-typr.netlify.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Code-Typr',
    github: 'https://github.com/CJM1994/react-resume-typescript',
    live: 'https://code-typr.netlify.app/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Code-Typr',
    github: 'https://github.com/CJM1994/react-resume-typescript',
    live: 'https://code-typr.netlify.app/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Code-Typr',
    github: 'https://github.com/CJM1994/react-resume-typescript',
    live: 'https://code-typr.netlify.app/',
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


      </div>
    </section>
  )
}

export default Portfolio;

{/* <article className='portfolio__item'>
<div className='portfolio__item--image'><img src={'placeholder'} alt="code-typr" /></div>
<h3>Code-Typr</h3>
<div className="portfolio__item--cta">
  <a href={'placeholder'} target='_blank' className='btn'>GitHub</a>
  <a href={'placeholder'} target='_blank' className='btn btn-primary'>Live Demo</a>
</div>
</article> */}