import classnames from 'classnames';
import styles from './index.module.css';

export default function RWD({ type, page, numberOfPages }) {

  const classes = classnames([
    styles.FFD,
    (type === 'rwd' || type === 'previous') && page === 1 && styles.disabled,
    (type === 'ffd' || type === 'next') && page === numberOfPages && styles.disabled
  ]);

  function getType(directionType) {
    switch (directionType) {
      case 'rwd': return '<<';
      case 'ffd': return '>>';
      case 'previous': return '<';
      case 'next':
      default: return '>';
    }
  }

  return (
    <div
      className={classes}
      type="directional"
      data-id={type}
    >{getType(type)}
    </div>
  );
}
