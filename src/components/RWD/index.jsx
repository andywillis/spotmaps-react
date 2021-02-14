import classnames from 'classnames';
import styles from './index.module.css';

export default function RWD({ page }) {

  const classes = classnames([
    styles.RWD,
    page === 1 && styles.disabled
  ]);

  return <div className={classes} data-id="RWD">&lt;&lt;</div>;

}
