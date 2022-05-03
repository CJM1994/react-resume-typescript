import {BsLinkedin, BsGithub, BsStackOverflow} from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">CONNOR MULLIN</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/connorjmullin/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/CJM1994" target="_blank"><BsGithub /></a>
        <a href='https://stackoverflow.com/users/17381940/connor-mullin' target='_blank'><BsStackOverflow /></a>
      </div>
    </footer>
  )
}

export default Footer;