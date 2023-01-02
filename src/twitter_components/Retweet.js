import React, { useState } from 'react';
import './Retweet.css';
import PropTypes from 'prop-types';

Retweet.propTypes = {
  Icon: PropTypes.object
};

function Retweet ({ Icon }) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <button onClick={handleClick} className={`retweetOption  ${active && 'retweetOption--active'}`}>
      <Icon fontSize='small'/>
    </button>
  );
}

export default Retweet;
