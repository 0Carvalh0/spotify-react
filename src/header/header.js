import React from "react";
import "./header.css";
import smallRight from "../assets/icons/small-right.png";
import smallLeft from "../assets/icons/small-left.png";
import search from "../assets/icons/search.png";

const Header = () => {
  return (
    <nav class="header__navigation">
      <div class="navigation">
        <button class="arrow-left">
          <img src={smallLeft} alt="Seta-esquerda" />
        </button>
        <button class="arrow-right">
          <img src={smallRight} alt="Seta-direita" />
        </button>
        <div class="header__search">
          <img src={search} />
          <input
            type="text"
            id="search-input"
            maxlength="800"
            placeholder="O que você quer ouvir?"
          />
        </div>
      </div>

      <div class="header__login">
        <button class="subscribe">Inscreva-se</button>
        <button class="login">Entrar</button>
      </div>
    </nav>
  );
};

export default Header;
