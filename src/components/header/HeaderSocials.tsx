import {BsLinkedin, BsGithub, BsStackOverflow} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/connorjmullin/' target='_blank'><BsLinkedin /></a>
      <a href='https://github.com/CJM1994' target='_blank'><BsGithub /></a>
      <a href='https://stackoverflow.com/users/17381940/connor-mullin' target='_blank'><BsStackOverflow /></a>
    </div>
  )
}

export default HeaderSocials