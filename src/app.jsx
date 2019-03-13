import React, { useState } from 'react';
import SVGInline from 'react-svg-inline';
import logo from './resources/qlik-core-logo-color.svg';
import Chart from './chart';

export default function App() {
  const [showChart, setShowChart] = useState(false);

  const onClick = () => {
    if (!showChart) setShowChart(true);
  };

  const load = 'Click to load data';
  const chart = showChart ? <Chart /> : <div className="text-div">{load}</div>;

  return (
    <div>
      <div className="header">
        <SVGInline className="logo" svg={logo} />
      </div>
      <div className="content">
        <div className="container">
          <div className="chart" onClick={onClick} role="tablist" tabIndex={-1}>
            {chart}
          </div>
        </div>
      </div>
    </div>
  );
}
