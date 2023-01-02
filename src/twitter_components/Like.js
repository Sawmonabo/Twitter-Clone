import React, { useState } from 'react';
import './Like.css';
import PropTypes from 'prop-types';

Like.propTypes = {
  Icon: PropTypes.object,
  tweetID: PropTypes.string
};

function Like ({ Icon }) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <button onClick={handleClick} className={`likeOption ${active && 'likeOption--active'}`}>
      <Icon fontSize='small'/>
    </button>
  );
}

export default Like;
