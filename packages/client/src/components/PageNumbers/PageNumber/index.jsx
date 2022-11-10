import classnames from 'classnames';
import styles from './index.module.css';

export default function PageNumber({ page, number, disabled }) {

  const classes = classnames([
    styles.pageNumber,
    page === number && styles.selected,
    disabled && styles.disabled
  ]);

  return (
    <div className={classes} data-id="number" data-number={number}>
      {number}
    </div>
  );

}
