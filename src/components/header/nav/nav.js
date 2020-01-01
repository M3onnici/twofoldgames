import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Container, Burger } from './nav.css';

function Nav() {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);

  return (
    <>
      <Burger onClick={toggleTrueFalse}>
        <span className={isToggled.toString()}></span>
      </Burger>
      <Container className={isToggled.toString()}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/team">The Team</Link>
          </li>
          <li>
            <Link to="/about">Move Bak</Link>
          </li>
          <li>
            <Link to="/about">News</Link>
          </li>
          <li>
            <Link to="/about">Contact Us</Link>
          </li>
        </ul>
      </Container>
    </>
  );
}

export default Nav;
