import { StyledHeader } from "./style";
import logo from "../../assets/img/LogoParcial.png";

import hamburguer from "../../assets/img/menu-de-hamburguer.png";
import hamburguerClose from "../../assets/img/menu-de-hamburguer-close.png";
import lupaInput from "../../assets/img/lupaInput.png";
import profileImage from "../../assets/img/ProfileUserImg.png";
import logoutButton from "../../assets/img/LogoutButton.png";

import { BiArrowBack } from "react-icons/bi";

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledContainer } from "../../styles/Container";
import { UserContext } from "../../providers/User";
import { iUser } from "../../providers/User/interfaces";

interface iHeaderProps {
  isHome: boolean;
}

export const Header = ({ isHome }: iHeaderProps) => {
  const {
    user,
    setUser,
    setButtonValue,
    athletes,
    filterAthletes,
    setFilterAthletes,
  } = useContext(UserContext);
  const navigate = useNavigate();

  const [openHamburguer, setOpenHamburguer] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);
  const [valueSearch, setValueSearch] = useState("");

  const logoutHandle = () => {
    window.localStorage.removeItem("@UserId");
    window.localStorage.removeItem("@Token");
    setUser(undefined);
  };
  const searchInputAthletes = (value: string) => {
    setButtonValue("Todos atletas");
    setValueSearch(value);
    const filter = athletes.filter((athlete) => {
      const valueDefault = value.toLowerCase();
      return (
        athlete.name.toLowerCase().includes(valueDefault) ||
        athlete.bio.toLowerCase().includes(valueDefault) ||
        athlete.city.toLowerCase().includes(valueDefault)
      );
    });
    setFilterAthletes(filter);
    console.log(filterAthletes);
    value === "" && setFilterAthletes([]);
    value === "" && setButtonValue("Perfil");
  };

  return !openSearch ? (
    <StyledHeader>
      <StyledContainer flex>
        <img src={logo} alt="" />
        {isHome ? (
          <>
            <div className="showMobile">
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
                <a href={"#topHome"}>Home</a>
                <Link to={"/"}>Sobre</Link>
                <Link to={"/"}>Instituição</Link>
              </nav>
            </div>
            <div className="showDesktop">
              <nav>
                <Link to={"/login"}>Login</Link>
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
              <input
                type="text"
                onChange={(e) => searchInputAthletes(e.target.value)}
              />
            </div>
            <button
              className="hamburguerButton"
              onClick={() => setOpenLogout(!openLogout)}
            >
              <img src={profileImage} alt="" />
            </button>
            <div className="dropBoxUserDesktop">
              <h2 className="title-2 gray-0">{user?.name}</h2>

              <BiArrowBack className="backPage" onClick={() => navigate(-1)} />

              <button onClick={() => logoutHandle()}>
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
            <div>
              <BiArrowBack className="backPage" onClick={() => navigate(-1)} />
              <p>Voltar</p>
            </div>
            <div>
              <h2 className="title-2 gray-0">{user?.name}</h2>

              <button onClick={() => logoutHandle()}>
                <img src={logoutButton}></img>
              </button>
            </div>
          </div>
        )}
      </StyledContainer>
    </StyledHeader>
  ) : (
    <StyledHeader>
      <StyledContainer flex>
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
