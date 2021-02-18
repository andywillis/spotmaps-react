import classnames from 'classnames';
import styles from './index.module.css';

export default function PageNumber({ page, number }) {

  const classes = classnames([
    styles.pageNumber,
    page === number && styles.selected
  ]);

  return (
    <div className={classes} data-id="number" data-number={number}>
      {number}
    </div>
  );

}
