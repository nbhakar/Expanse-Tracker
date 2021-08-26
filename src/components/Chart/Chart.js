import './Chart.css'

import ChartBar from "./ChartBar";

function Chart(prop) {
  let dataPointValues = prop.dataPoints.map(dataPoint => dataPoint.value);
  let maxHeight = Math.max(...dataPointValues);
  return (
    <div className='chart'>
      {prop.dataPoints.map((dataPoint) => (
        <ChartBar
          id={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxHeight}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}



export default Chart;
