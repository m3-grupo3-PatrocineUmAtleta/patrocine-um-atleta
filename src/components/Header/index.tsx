import { StyledHeader } from "./style";
import logo from "../../assets/img/LogoParcial.png";
import lupa from "../../assets/img/lupa.png";
import hamburguer from "../../assets/img/menu-de-hamburguer.png";
import hamburguerClose from "../../assets/img/menu-de-hamburguer-close.png";
import lupaInput from "../../assets/img/lupaInput.png";

import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [openHamburguer, setOpenHamburguer] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  return !openSearch ? (
    <StyledHeader>
      <img src={logo} alt="" />
      <div>
        <button
          className="searchButton"
          onClick={() => setOpenSearch(!openSearch)}
        >
          <img src={lupa} alt="" />
        </button>
        <button
          className="hamburguerButton"
          onClick={() => setOpenHamburguer(!openHamburguer)}
        >
          <img src={!openHamburguer ? hamburguer : hamburguerClose} alt="" />
        </button>
      </div>
      {openHamburguer && (
        <div className="dropBox">
          <nav>
            <Link to={"/"}>Sobre nós</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Cadastre-se</Link>
          </nav>
        </div>
      )}
    </StyledHeader>
  ) : (
    <StyledHeader>
      <img src={logo} alt="" />
      <div className="searchInput">
        <button
          className="searchButton"
          onClick={() => setOpenSearch(!openSearch)}
        >
          <img src={lupaInput} alt="" />
        </button>
        <input type="text" />
      </div>
      <div>
        <button
          className="hamburguerButton"
          onClick={() => setOpenHamburguer(!openHamburguer)}
        >
          <img src={!openHamburguer ? hamburguer : hamburguerClose} alt="" />
        </button>
      </div>
      {openHamburguer && <div className="dropBox"></div>}
    </StyledHeader>
  );
};
