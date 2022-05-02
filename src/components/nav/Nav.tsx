import { useState } from 'react';

import './Nav.css';
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { MdMenuBook } from 'react-icons/md';
import { BsCodeSlash } from 'react-icons/bs';

const Nav = () => {
  const [active, setActive] = useState('#');

  return (
    <nav>
      {/* {Home} */}
      <a
        className={active === '#' ? 'active' : ''}
        onClick={() => setActive('#')}
        href='#'
      >
        <AiOutlineHome />
      </a>
      {/* {About} */}
      <a
        className={active === '#about' ? 'active' : ''}
        onClick={() => setActive('#about')}
        href='#about'
      >
        <AiOutlineUser />
      </a>
      {/* {Experience} */}
      <a
        className={active === '#experience' ? 'active' : ''}
        onClick={() => setActive('#experience')}
        href='#experience'
      >
        <MdMenuBook />
      </a>
      {/* {Portfolio} */}
      <a
        className={active === '#portfolio' ? 'active' : ''}
        onClick={() => setActive('#portfolio')}
        href='#portfolio'
      >
        {' '}
        <BsCodeSlash />
      </a>
      {/* {Contact} */}
      <a
        className={active === '#contact' ? 'active' : ''}
        onClick={() => setActive('#contact')}
        href='#contact'
      >
        <AiOutlineMail />
      </a>
    </nav>
  );
};

export default Nav;
