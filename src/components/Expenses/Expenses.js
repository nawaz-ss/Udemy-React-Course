import ExpenseItem from "./ExpenseItem"
import './Expenses.css'

function Expenses(props) {
    const { expenses } = props
    return (
        <div className="expenses">
            {expenses.map(el => <ExpenseItem data={el} />)}
        </div>
    )
}

export default Expenses