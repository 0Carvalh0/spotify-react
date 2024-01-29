import React from "react";
import "./side-bar.css";
import LogoSpotify from "../assets/icons/logo-spotify.png";

const Sidebar = () => {
  return (
    <div class="sidebar">
      <nav class="sidebar__navigation">
        <div class="logo">
          <a href="#">
            <img src={LogoSpotify} alt="logo-do-spotify" />
          </a>
        </div>

        <ul>
          <li>
            <a href="#">
              <span>
                <span class="fa fa-home"></span>Início
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <span class="fa fa-search"></span>Buscar
              </span>
            </a>
          </li>
        </ul>
      </nav>

      <nav class="sidebar__library">
        <div class="library">
          <div class="library__content">
            <button class="library__button">
              <span>
                <span class="fa fa-book"></span>Sua biblioteca
              </span>
            </button>
            <span class="fa fa-plus"></span>
          </div>
          <section class="section__playlist">
            <div class="section__playlist__content">
              <h2 class="text title">Crie sua primeira playlist</h2>
              <h3 class="text subtitle">É fácil, vamos te ajudar.</h3>
              <button class="section__playlist__button">Criar Playlist</button>
            </div>
          </section>
          <div class="cookies">
            <a href="#">Cookies</a>
          </div>
          <div class="languages">
            <button class="languages__button">
              <span class="fa fa-globe"></span>
              <span>Português do Brasil</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
