import React from 'react';
import { Link } from 'react-router-dom';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img src="driscolls-logo.png" alt="Driscoll's" width="150" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {t("home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">
                {t("users")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news">
                {t("news")}
              </Link>
            </li>
            <LanguageSelector />     
          </ul>
        </div>
      </div>
    </nav>
    
  );
};
