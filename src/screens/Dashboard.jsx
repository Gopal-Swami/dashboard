import React from 'react';
import ConnectionLine from '../components/ConnectionLine';
import HeadLineCard from '../components/HeadLineCard';
import ProcessCard from '../components/ProcessCard';
const Dashboard = () => {
  return (
    <>
      <div className="head-line-container">
        <div className="overview">
          <div className="overview-card">
            <h1>Overview</h1>
            <div className="overview-card-date">
              <span> 01, Feb 2022</span>
              <span>
                <i class="fa-solid fa-sort-down"></i>
              </span>
            </div>
            <div className="overview-card-time">
              <span>09:00 am</span>
              <span>
                <i class="fa-solid fa-sort-down"></i>
              </span>
              <span>To</span> <span>now</span>
              <span>
                <i class="fa-solid fa-sort-down"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="headline-cards">
          <HeadLineCard title="Sessions" value={510} />
          <HeadLineCard
            title="Strugle Score"
            value={[0.7, <i class="fa-solid fa-signal"></i>]}
            color="#FF4C29"
          />
          <HeadLineCard title="API issues" value={2} color="#FF4C29" />
          <HeadLineCard
            title="Kafka"
            value={['78.3K', 'bytes/sec']}
            itemColor="#000"
          />
        </div>
      </div>
      <div className="process-container">
        <div className="process-1">
          <ProcessCard
            title={['ETB', 'Thank You']}
            status="11.1%"
            numValue="60"
            counts={{
              firstValue: {
                count: '0',
                color: 'gray',
              },
              secondValue: {
                count: '5',
                color: 'gray',
              },
              thirdValue: {
                count: '4',
                color: 'gray',
              },
            }}
          />
        </div>
        <div className="process-2">
          <ProcessCard
            title="Authorization"
            status="100%"
            numValue="510"
            counts={{
              firstValue: {
                count: '0',
                color: 'gray',
              },
              secondValue: {
                count: '5',
                color: 'gray',
              },
              thirdValue: {
                count: '4',
                color: 'gray',
              },
            }}
          />
          <ConnectionLine value="12%" />
          <ProcessCard
            title="E-KYC"
            status="88.2%"
            numValue="450"
            counts={{
              firstValue: {
                count: '0',
                color: 'gray',
              },
              secondValue: {
                count: '5',
                color: 'gray',
              },
              thirdValue: {
                count: '4',
                color: 'gray',
              },
            }}
          />
          <ConnectionLine value="11%" />
          <ProcessCard
            title={['Account &', 'Branch Sele...']}
            status="76.4%"
            numValue="390"
            counts={{
              firstValue: {
                count: '0',
                color: 'gray',
              },
              secondValue: {
                count: '5',
                color: 'gray',
              },
              thirdValue: {
                count: '4',
                color: 'gray',
              },
            }}
          />
          <ConnectionLine value="12%" />
          <ProcessCard
            title={['Personal &', 'Occupation']}
            status="64.7%"
            numValue="330"
            counts={{
              firstValue: {
                count: '0',
                color: 'gray',
              },
              secondValue: {
                count: '5',
                color: 'gray',
              },
              thirdValue: {
                count: '4',
                color: 'gray',
              },
            }}
          />
          <ConnectionLine value="4%" />
          <ProcessCard
            title={['Address', 'Details']}
            status="60.7%"
            numValue="310"
            counts={{
              firstValue: {
                count: '0',
                color: 'gray',
              },
              secondValue: {
                count: '5',
                color: 'gray',
              },
              thirdValue: {
                count: '4',
                color: 'gray',
              },
            }}
          />
          <ConnectionLine value="0%" />
          <ProcessCard
            title={['Nominee', 'Details']}
            status="60.7%"
            numValue="310"
            counts={{
              firstValue: {
                count: '0',
                color: 'gray',
              },
              secondValue: {
                count: '5',
                color: 'gray',
              },
              thirdValue: {
                count: '4',
                color: 'gray',
              },
            }}
          />
          <ConnectionLine value="6%" />
          <ProcessCard
            title={['Extended', 'KYC']}
            status="54.9%"
            numValue="280"
            counts={{
              firstValue: {
                count: '0',
                color: 'gray',
              },
              secondValue: {
                count: '5',
                color: 'orange',
              },
              thirdValue: {
                count: '4',
                color: 'gray',
              },
            }}
          />
          <ConnectionLine value="0%" />
          <ProcessCard
            title="Thank You"
            status="54.9%"
            numValue="280"
            counts={{
              firstValue: {
                count: '0',
                color: 'gray',
              },
              secondValue: {
                count: '5',
                color: 'gray',
              },
              thirdValue: {
                count: '4',
                color: 'gray',
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
