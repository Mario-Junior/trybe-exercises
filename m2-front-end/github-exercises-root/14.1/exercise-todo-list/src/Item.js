import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  const { content, selectCallBack } = props;
  return (
    <div className="Item" onClick={() => selectCallBack(content)}>
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
  selectCallBack: PropTypes.func.isRequired,
};
