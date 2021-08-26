import Chart from "../Chart/Chart";

function ExpansesChart(props){
    let chartDataPoints = [{label: 'jan', value: 0},
    {label: 'Jan', value: 0},
    {label: 'Feb', value: 0},
    {label: 'Mar', value: 0},
    {label: 'Apr', value: 0},
    {label: 'May', value: 0},
    {label: 'Jun', value: 0},
    {label: 'Jul', value: 0},
    {label: 'Aug', value: 0},
    {label: 'Sep', value: 0},
    {label: 'Oct', value: 0},
    {label: 'Nov', value: 0},
    {label: 'Dec', value: 0}]

    for(const expanse of props.expanses){
        let expanseMonth = expanse.date.getMonth();
        chartDataPoints[expanseMonth+1].value += expanse.amount;
    }
    return <Chart dataPoints={chartDataPoints} />
};

export default ExpansesChart