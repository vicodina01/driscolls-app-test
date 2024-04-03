import React from 'react';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img
        className="d-block mx-auto mb-4"
        src="bg-faq.png"
        alt="Driscoll's"
        width="400"
      />
      <h3>{t("what_makes_title")}</h3>
      <p>
        <strong>
        {t("what_makes_bold")}
        </strong>
      </p>
      <p>
      {t("what_makes_description")}
      </p>
    </div>
  );
};
