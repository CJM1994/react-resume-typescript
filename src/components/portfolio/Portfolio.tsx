import './Portfolio.css';

// Images
import ITEM1IMG from '../../assets/code-typr.png';
import ITEM2IMG from '../../assets/code-typr.png';
import ITEM3IMG from '../../assets/code-typr.png';
import ITEM4IMG from '../../assets/code-typr.png';
import ITEM5IMG from '../../assets/code-typr.png';
import ITEM6IMG from '../../assets/code-typr.png';
// GitHub Links
const ITEM1GITHUB = 'https://github.com/CJM1994/Typr'
const ITEM2GITHUB = 'https://github.com/CJM1994/Typr'
const ITEM3GITHUB = 'https://github.com/CJM1994/Typr'
const ITEM4GITHUB = 'https://github.com/CJM1994/Typr'
const ITEM5GITHUB = 'https://github.com/CJM1994/Typr'
const ITEM6GITHUB = 'https://github.com/CJM1994/Typr'
// Live Links
const ITEM1LIVE = 'https://code-typr.netlify.app/'
const ITEM2LIVE = 'https://code-typr.netlify.app/'
const ITEM3LIVE = 'https://code-typr.netlify.app/'
const ITEM4LIVE = 'https://code-typr.netlify.app/'
const ITEM5LIVE = 'https://code-typr.netlify.app/'
const ITEM6LIVE = 'https://code-typr.netlify.app/'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      {/* {Section Header} */}
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      {/* {Section Container} */}
      <div className='container portfolio-container'>
        <article className='portfolio__item'>
          <div className='portfolio__item--image'><img src={ITEM1IMG} alt="code-typr" /></div>
          <h3>Code-Typr</h3>
          <div className="portfolio__item--cta">
            <a href={ITEM1GITHUB} target='_blank' className='btn'>GitHub</a>
            <a href={ITEM1LIVE} target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item--image'><img src={ITEM2IMG} alt="code-typr" /></div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio__item--cta">
            <a href={ITEM2GITHUB} target='_blank' className='btn'>GitHub</a>
            <a href={ITEM2LIVE} target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item--image'><img src={ITEM3IMG} alt="code-typr" /></div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio__item--cta">
            <a href={ITEM3GITHUB} target='_blank' className='btn'>GitHub</a>
            <a href={ITEM3LIVE} target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item--image'><img src={ITEM4IMG} alt="code-typr" /></div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio__item--cta">
            <a href={ITEM4GITHUB} target='_blank' className='btn'>GitHub</a>
            <a href={ITEM4LIVE} target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item--image'><img src={ITEM5IMG} alt="code-typr" /></div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio__item--cta">
            <a href={ITEM5GITHUB} target='_blank' className='btn'>GitHub</a>
            <a href={ITEM5LIVE} target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item--image'><img src={ITEM6IMG} alt="code-typr" /></div>
          <h3>This is a portfolio item</h3>
          <div className="portfolio__item--cta">
            <a href={ITEM6GITHUB} target='_blank' className='btn'>GitHub</a>
            <a href={ITEM6LIVE} target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;