import { useState } from 'react';
import classnames from 'classnames';
import { useParams } from 'react-router-dom';

import styles from './index.module.css';

/**
 * Details
 *
 * @param {object} { data }
 * @return {object} JSX
 */
function Details({ data }) {

  const [ aseIsDownloading, setAseIsDownloading ] = useState();

  const { type, value } = useParams();

  const { id, title, director, writer, year, genre } = data;

  /**
   * handleAseDownload
   *
   * @param {string} filename
   */
  async function handleAseDownload(title) {
    setAseIsDownloading(true);
    try {
      const response = await fetch(`/ase/${title}`);
      if (!response.ok) throw Error('Bad API response');
      const blob = await response.blob();
      const anchor = document.createElement('a');
      anchor.href = URL.createObjectURL(blob);
      anchor.setAttribute('download', `${title}.ase`);
      anchor.click();
      anchor.remove();
      setAseIsDownloading(false);
    } catch (err) {
      console.log(err);
    }
  }

  const downloadSwatchStyle = classnames({
    [styles.downloadSwatch]: true,
    [styles.disabled]: aseIsDownloading && 'disabled'
  });

  return (
    <div className={styles.details}>
      <div>
        <div className={styles.label}>No.</div>
        <div className={styles.detail}>{id}</div>
      </div>
      <div>
        <div className={styles.label}>Title</div>
        <div className={styles.detail}>
          <span
            className={classnames({
              [styles.type]: true,
              [styles.highlight]: type === 'title' && value === title
            })}
          >{title}
          </span>
        </div>
      </div>
      <div>
        <div className={styles.label}>Director</div>
        <div className={styles.detail}>
          {director.map(el => {

            const spanStyle = classnames({
              [styles.type]: true,
              [styles.highlight]: type === 'director' && value === el
            });

            const [ last, first ] = el.split(',');

            return (
              <span key={el} className={spanStyle}>
                {first} {last}
              </span>
            );

          })}
        </div>
      </div>
      <div>
        <div className={styles.label}>Writer</div>
        <div className={styles.detail}>
          {writer.map(el => {

            const spanStyle = classnames({
              [styles.type]: true,
              [styles.highlight]: type === 'writer' && value === el
            });

            const [ last, first ] = el.split(',');

            return (
              <span key={el} className={spanStyle}>
                {first} {last}
              </span>
            );

          })}
        </div>
      </div>
      <div>
        <div className={styles.label}>Year</div>
        <div className={styles.detail}>
          <span
            className={classnames({
              [styles.type]: true,
              [styles.highlight]: type === 'year' && +value === year
            })}
          >{year}
          </span>
        </div>
      </div>
      <div>
        <div className={styles.label}>Genre</div>
        <div className={styles.detail}>
          {genre.map(el => {

            const spanStyle = classnames({
              [styles.type]: true,
              [styles.highlight]: type === 'genre' && value === el
            });

            return (
              <span key={el} className={spanStyle}>
                {el}
              </span>
            );

          })}
        </div>
      </div>
      <div>
        <div className={styles.label}>Swatch</div>
        <div className={styles.detail}>
          <div className={styles.download}>
            <button
              className={downloadSwatchStyle}
              type="button"
              onClick={() => handleAseDownload(title)}
            >Download ASE file
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Details;
