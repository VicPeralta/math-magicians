import PropTypes from 'prop-types';
import Key from './key';

const KeyRow = ({ keys }) => {
  const eleArray = [];
  for (let i = 0; i < keys.length; i += 1) {
    let key = {};
    if ('÷X-+='.includes(keys[i])) {
      key = <Key name={keys[i]} key={keys[i]} className="orange" />;
    } else key = <Key name={keys[i]} key={keys[i]} />;
    eleArray.push(key);
  }
  const ele = (
    <div className="keyRow">
      {eleArray}
    </div>
  );
  return ele;
};

KeyRow.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default KeyRow;
