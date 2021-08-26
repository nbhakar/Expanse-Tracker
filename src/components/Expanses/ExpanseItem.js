import ExpanseDate from './ExpanseDate';
import Card from '../UI/Card';
import './ExpanseItem.css';

function ExpanseItem(prop) {

  return (
    <Card className = "expanse-item">
      <div className = "expanse-item-info">
        <ExpanseDate date = {prop.date}/>
        <h2 className = "expanse-item-title">{prop.title}</h2>
      </div>
      <div className = "expanse-item-expanse">${prop.amount}</div>
    </Card>
  );
}
export default ExpanseItem;
