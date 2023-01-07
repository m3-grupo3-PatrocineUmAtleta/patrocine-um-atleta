import { StyledHeader } from "./style";
import logo from "../../assets/img/LogoParcial.png";
import lupa from "../../assets/img/lupa.png";
import hamburguer from "../../assets/img/menu-de-hamburguer.png";
import hamburguerClose from "../../assets/img/menu-de-hamburguer-close.png";
import lupaInput from "../../assets/img/lupaInput.png";
import profileImage from "../../assets/img/ProfileUserImg.png";
import logoutButton from "../../assets/img/LogoutButton.png";

import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledContainer } from "../../styles/Container";

interface iHeaderProps {
  isHome: boolean;
}

export const Header = ({ isHome }: iHeaderProps) => {
  const [openHamburguer, setOpenHamburguer] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);

  return !openSearch ? (
    <StyledHeader>
      <StyledContainer>
        <img src={logo} alt="" />
        {isHome ? (
          <>
            <div className="showMobile">
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
                <img
                  src={!openHamburguer ? hamburguer : hamburguerClose}
                  alt=""
                />
              </button>
            </div>
            <div className="showDesktop">
              <nav>
                <Link to={"/home"}>Home</Link>
                <Link to={"/"}>Sobre</Link>
                <Link to={"/register"}>Instituição</Link>
              </nav>
            </div>
            <div className="showDesktop">
              <nav>
                <Link to={"/"}>Login</Link>
                <Link to={"/register"}>Cadastre-se</Link>
              </nav>
            </div>
          </>
        ) : (
          <div className="divAdminOptions">
            <div className="searchInput">
              <button
                className="searchButton"
                onClick={() => setOpenSearch(false)}
              >
                <img src={lupaInput} alt="" />
              </button>
              <input type="text" />
            </div>
            <button
              className="hamburguerButton"
              onClick={() => setOpenLogout(!openLogout)}
            >
              <img src={profileImage} alt="" />
            </button>
            <div className="dropBoxUserDesktop">
              <h2 className="title-2 gray-0">Admin</h2>
              <button>
                <img src={logoutButton}></img>
              </button>
            </div>
          </div>
        )}
        {openHamburguer && (
          <div className="dropBox">
            <nav>
              <Link to={"/"}>Sobre nós</Link>
              <Link to={"/login"}>Login</Link>
              <Link to={"/register"}>Cadastre-se</Link>
            </nav>
          </div>
        )}
        {openLogout && (
          <div className="dropBoxUser">
            <h2 className="title-2 gray-0">Admin</h2>
            <button>
              <img src={logoutButton}></img>
            </button>
          </div>
        )}
      </StyledContainer>
    </StyledHeader>
  ) : (
    <StyledHeader>
      <StyledContainer>
        {" "}
        <img src={logo} alt="" />
        {isHome ? (
          <div className="showMobile">
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
                <img
                  src={!openHamburguer ? hamburguer : hamburguerClose}
                  alt=""
                />
              </button>
            </div>
          </div>
        ) : (
          <div className="showMobile">
            <div className="searchInput">
              <button
                className="searchButton"
                onClick={() => setOpenSearch(!openSearch)}
              >
                <img src={lupaInput} alt="" />
              </button>
              <input type="text" />
            </div>
            <button
              className="hamburguerButton"
              onClick={() => setOpenLogout(!openLogout)}
            >
              <img src={profileImage} alt="" />
            </button>
          </div>
        )}
        {openHamburguer && <div className="dropBox"></div>}
      </StyledContainer>
    </StyledHeader>
  );
};
