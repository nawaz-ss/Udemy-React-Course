import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const {data} = props 
  return (
    <Card className='expense-item'>
      <ExpenseDate date={data.date} />
      <div className='expense-item__description'>
        <h2>{data.title}</h2>
        <div className='expense-item__price'>${data.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;