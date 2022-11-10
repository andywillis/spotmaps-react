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

  const { type, value } = useParams();

  const { id, title, director, writer, year, genre } = data;

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
      {/* <div className="download">
        <div className={styles.label}>&nbsp;</div>
        <div className={styles.detail}>
          <button
            className={styles.downloadSwatch}
            type="button"
            onClick={() => handleAseDownload(title)}
          >Download swatch (.ase format)
          </button>
        </div>
      </div> */}
    </div>
  );

}

export default Details;
