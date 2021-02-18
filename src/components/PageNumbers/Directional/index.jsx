import classnames from 'classnames';
import styles from './index.module.css';

export default function RWD({ type, page, numberOfPages }) {

  const classes = classnames([
    styles.FFD,
    type === 'rwd' && page === 1 && styles.disabled,
    type === 'ffd' && page === numberOfPages && styles.disabled
  ]);

  const content = type === 'rwd' ? '<<' : '>>';

  return (
    <div
      className={classes}
      type="directional"
      data-id={type}
    >{content}
    </div>
  );
}
