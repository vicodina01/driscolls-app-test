import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function NewsList() {
  const [news, setNews] = useState([]);
  const { t } = useTranslation();

  async function fetchNews() {
    try {
      const response = await fetch('http://localhost:3002/news');
      const data = await response.json();
      console.log('Download complete', data);
      setNews(data);
    } catch (error) {
      console.error(`Download error: ${error.message}`);
    }
  }

  useEffect(() => fetchNews, []);

  return (
    <div className='container'>
      <h3>{t("news_section_title")}</h3>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">{t("thumbnail")}</th>
            <th scope="col">{t("title")}</th>
            <th scope="col">{t("date")}</th>
            <th scope="col">{t("source")}</th>
            <th scope="col">{t("actions")}</th>
          </tr>
        </thead>
        <tbody>
          {news.map((n, index) => {
            return (
              <tr key={index}>
                <th scope="row"><img class="img-thumbnail" src={n.urlToImage} width='100' alt={n.title} /></th>
                <td>{n.title}</td>
                <td>{n.publishedAt}</td>
                <td>{n.sourceName}</td>
                <td style={{ width: '10px', whiteSpace: 'nowrap' }}>
                  <Link to={`/news/${n.id}`} 
                    className="btn btn-success btn-sm me-sm-2">
                    {t("view")}
                  </Link>

                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

