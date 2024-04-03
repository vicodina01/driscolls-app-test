import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">© 2024 Company, Inc</p>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-body-secondary">
              {t("home")}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-link px-2 text-body-secondary">
              {t("users")}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/news" className="nav-link px-2 text-body-secondary">
              {t("news")}
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};
