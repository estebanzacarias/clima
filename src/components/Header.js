import React from "react";

const Header = ({ titulo }) => {
  return (
    <header>
      <nav className="nav-wrapper black">
        <a href="#!" className="brand-logo center">{titulo}</a>
      </nav>
    </header>
  );
};

export default Header;