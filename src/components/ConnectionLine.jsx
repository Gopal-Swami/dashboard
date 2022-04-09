import React from 'react';
import ping from '../assets/ping.png';
import ping0 from '../assets/ping-0.png';

const ConnectionLine = ({ value }) => {
  return (
    <div className="connection">
      <div className="connection-status">
        <img src={value === '0%' ? ping0 : ping} alt="" />
        <span>{value}</span>
      </div>
      <div className="connection-line"></div>
    </div>
  );
};

export default ConnectionLine;
