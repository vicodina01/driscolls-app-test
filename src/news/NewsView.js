import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function NewsView() {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: '',
    sourceName: '',
    author: '',
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: '',
    content: '',
  });
  const { t } = useTranslation();

  useEffect(
    () =>
      async function fetchNew() {
        try {
          const response = await fetch('http://localhost:3002/news/' + id);
          const data = await response.json();
          console.log('Download complete', data);
          setValues(data);
        } catch (error) {
          console.error(`Download error: ${error.message}`);
        }
      },
    [id]
  );

  return (
    <div className="container">
      <article>
        <header class="mb-4">
          <h1 class="fw-bolder mb-1">{values.title}</h1>
          <div class="text-muted fst-italic mb-2">
            Posted on {values.publishedAt} by {values.author}
          </div>

          <a
            class="badge bg-secondary text-decoration-none link-light"
            href="#!"
          >
            {values.sourceName}
          </a>
        </header>

        <figure class="mb-4">
          <img
            class="img-fluid rounded"
            src={values.urlToImage}
            alt={values.title}
          />
        </figure>

        <section class="mb-5">
          <p class="fs-5 mb-4">{values.content}</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link to={`/news`} className="btn btn-outline-success btn-md">
            {t("back_news")}
            </Link>
            <a class="btn btn-success btn-md" href={values.url}>
            {t("read_more")}
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
