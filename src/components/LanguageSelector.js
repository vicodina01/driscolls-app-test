import { useTranslation } from "react-i18next";

let countries = [
  {
    code: "es",
    name: "Spanish",
    country_code: "mx",
  },
  {
    code: "en",
    name: "English",
    country_code: "us",
  },
];

export function LanguageSelector () {
  const { t, i18n } = useTranslation();

  return (
    <>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {t("lang")}
        </a>
        <ul className="dropdown-menu">
        {countries.map((lng) => {
            return (
              <li key={lng.code}>
                <button
                  onClick={() => i18n.changeLanguage(lng.code)} // used to change language that needs to be rendered
                  disabled={i18n.language === lng.code}
                  className="dropdown-item"
                >
                  <span className={`fi fi-${lng.country_code}`}></span>
                  <span>{lng.name}</span>
                </button>
              </li>
            );
          })}
          
        </ul>
      </li>
    </>
  );
};
