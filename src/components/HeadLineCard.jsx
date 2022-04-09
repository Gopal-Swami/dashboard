import React from 'react';

const HeadLineCard = ({ title, value, color, itemColor }) => {
  return (
    <div className="headline-card">
      <h2>{title}</h2>
      {typeof value === 'object' ? (
        <>
          <h1 style={{ color }}>
            <span style={{ color: itemColor }}>{value[0]}</span>
            <span style={{ fontSize: '1.5rem' }}>{value[1]}</span>
          </h1>
        </>
      ) : (
        <h1 style={{ color }}>{value}</h1>
      )}
    </div>
  );
};

export default HeadLineCard;
