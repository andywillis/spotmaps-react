import classnames from 'classnames';
import styles from './index.module.css';

export default function RWD({ page, numberOfPages }) {

  const classes = classnames([
    styles.FFD,
    page === numberOfPages && styles.disabled
  ]);

  return <div className={classes} data-id="FFD">&gt;&gt;</div>;
}
