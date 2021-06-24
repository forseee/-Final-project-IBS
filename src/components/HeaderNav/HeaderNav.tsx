import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './headerNav.scss';

type Ilink = {
  path: string;
  text: string;
  icon: string;
};
type PropsType = {
  navLinks: Array<Ilink>;
  background: string;
  hoverBackground: string;
  linkColor: string;
  logo: string;
  children?: any;
};

export const HeaderNav: React.FC<PropsType> = ({
  navLinks,
  background,
  hoverBackground,
  linkColor,
  logo,
  children,
}) => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="responsive-toolbar" style={{ background }}>
      <ul style={{ background }} className={navOpen ? 'active' : ''}>
        <figure onClick={() => setNavOpen(!navOpen)}>
          <img src={logo} height="40px" width="40px" alt="logo-nav-toggler" />
        </figure>
        {navLinks.map((link, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
            style={{ background: hoverIndex === index ? hoverBackground || '#999' : '' }}>
            <Link to={link.path} style={{ color: linkColor }}>
              {link.text}
              <i className={link.icon} />
            </Link>
          </li>
        ))}
        {children}
      </ul>
    </nav>
  );
};
