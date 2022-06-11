import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
  width: 100vw;
  height: 6rem;
  background-color: white;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0 4rem;
    font-size: 4rem;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4rem;
  list-style: none;
`;

const MenuItem = styled.li`
  padding: 0 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const Navbar = () => {
  return (
    <Section>
      <h1>Beach</h1>
      <Menu>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/explore">Explore</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/accomodations">Accomodations</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/events">Events</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/establishments">Establishements</Link>
        </MenuItem>
        <MenuItem>MyEvents</MenuItem>
      </Menu>
    </Section>
  );
};

export default Navbar;
