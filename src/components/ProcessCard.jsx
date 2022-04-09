import React from 'react';

const ProcessCard = ({ title, status, numValue, counts }) => {
  return (
    <div className="process-card">
      <div className="process-card-title">
        <div className="process-card-left-status"></div>
        <div className="process-card-detals">
          <h3>
            {typeof title === 'object' ? (
              <>
                <span> {title[0]}</span>
                <br />
                <span>{title[1]}</span>
              </>
            ) : (
              title
            )}
          </h3>
        </div>
      </div>
      <div className="process-card-status">
        <span>{status}</span>
        <span>{numValue}</span>
      </div>
      <div className="process-counts">
        <div
          style={{ backgroundColor: counts.firstValue.color }}
          className="process-count"
        >
          {counts.firstValue.count}
        </div>

        <div
          style={{ backgroundColor: counts.secondValue.color }}
          className="process-count"
        >
          {counts.secondValue.count}
        </div>

        <div
          style={{ backgroundColor: counts.thirdValue.color }}
          className="process-count"
        >
          {counts.thirdValue.count}
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
