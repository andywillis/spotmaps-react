import classnames from 'classnames';
import styles from './index.module.css';

function isDisabled(type, page, numberOfPages) {
  return ((type === 'rwd' || type === 'previous') && page === 1)
  || ((type === 'ffd' || type === 'next') && page === numberOfPages);
}

export default function RWD(props) {

  const { type, page, numberOfPages } = props;

  const disabledStyle = (
    ((type === 'rwd' || type === 'previous') && page === 1)
    || ((type === 'ffd' || type === 'next') && page === numberOfPages)
  );

  const classes = classnames({
    [styles.directional]: true,
    [styles.previous]: type === 'previous',
    [styles.next]: type === 'next',
    [styles.disabled]: disabledStyle
  });

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
      data-disabled={isDisabled(type, page, numberOfPages)}
    >{getType(type)}
    </div>
  );
}
